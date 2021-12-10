const test = require('tape')
const wtf = require('../lib')

test('references', (t) => {
  const str = `John smith was a comedian<ref name="cool">{{cite web |url=http://supercool.com |title=John Smith sure was |last= |first= |date= |website= |publisher= |access-date= |quote=}}</ref>
and tap-dance pioneer. He was born in glasgow<ref>irelandtimes</ref>.

This is paragraph two.<ref>{{cite web |url=http://paragraphtwo.net}}</ref> It is the same deal.

==Section==
Here is the third paragraph. Nobody knows if this will work.<ref>[http://commonsense.com/everybody|says everybody]</ref>

`
  const doc = wtf(str)
  t.equal(doc.sections().length, 2, 'sections')
  t.equal(doc.paragraphs().length, 3, 'paragraphs')
  t.equal(doc.references().length, 4, 'all references')
  t.equal(doc.section().references().length, 3, 'first references')
  t.end()
})

test('sentence/paragraphs by newlines', (t) => {
  const doc = wtf(`Leading text

Closing remark`)
  t.equal(doc.paragraphs().length, 2, '2 paragraphs')
  t.equal(doc.sentences().length, 2, '2 sentences')
  t.end()
})

test('paragraph links', (t) => {
  const str = `hello [[world]] I'm happy to see you. [[world wrestling]].

new paragraph here  `
  const doc = wtf(str)
  t.equal(doc.paragraph().links().length, 2, 'plaintext has one newline')
  t.end()
})

test('bring newlines to plaintext', (t) => {
  const str = `hello



world`
  const doc = wtf(str)
  t.equal(doc.text(), 'hello\n\nworld', 'plaintext has one newline')
  t.end()
})

test('newlines in templates', (t) => {
  const str = `hello world{{cite web |url=http://coolc.om |title=whoa hello |last= |first=



|date= |website= |publisher= |access-date=


|quote=}}

Paragraph two!`
  const doc = wtf(str)
  t.equal(doc.paragraphs().length, 2, 'paragraphs')
  t.equal(doc.paragraph().text(), 'hello world', 'first paragraph')
  t.equal(doc.paragraph(1).text(), 'Paragraph two!', '2nd paragraph')
  t.end()
})

test('newlines in tables', (t) => {
  const str = `hello world. Up here.
{| class="wikitable"
|-

! Header 1
! Header 2
! Header 3
|-
| row 1, cell 1


| row 1, cell 2
| row 1, cell 3


|-
| row 2, cell 1
| row 2, cell 2
| row 2, cell 3
|}

Second paragraph here.`
  const doc = wtf(str)
  t.equal(doc.paragraphs().length, 2, 'paragraphs')
  t.equal(doc.paragraph().text(), 'hello world. Up here.', 'first paragraph')
  t.equal(doc.paragraph(1).text(), 'Second paragraph here.', '2nd paragraph')
  t.equal(doc.tables().length, 1, 'got broken table')
  t.end()
})

test('cyrillic symbols', (t) => {
  const str = `== Заголовок ==
Соединённые

По «окончании»

После — четырёх

Лишённые

Спустя

В напряжённом`
  const doc = wtf(str)
  t.equal(doc.paragraphs().length, 6, 'paragraphs')
  t.equal(doc.paragraph(0).text(), 'Соединённые', '1 paragraph')
  t.equal(doc.paragraph(1).text(), 'По «окончании»', '2 paragraph')
  t.equal(doc.paragraph(2).text(), 'После — четырёх', '3 paragraph')
  t.equal(doc.paragraph(3).text(), 'Лишённые', '4 paragraph')
  t.equal(doc.paragraph(4).text(), 'Спустя', '5 paragraph')
  t.equal(doc.paragraph(5).text(), 'В напряжённом', '6 paragraph')
  t.end()
})
