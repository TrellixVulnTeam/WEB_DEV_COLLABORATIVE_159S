window.wp = window.wp || {}, window.wp.richText = function ( e ) {
  var t = {};

  function r( n ) {
    if ( t[ n ] ) return t[ n ].exports;
    var a = t[ n ] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[ n ].call( a.exports, a, a.exports, r ), a.l = !0, a.exports
  }
  return r.m = e, r.c = t, r.d = function ( e, t, n ) {
    r.o( e, t ) || Object.defineProperty( e, t, {
      enumerable: !0,
      get: n
    } )
  }, r.r = function ( e ) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty( e, Symbol.toStringTag, {
      value: "Module"
    } ), Object.defineProperty( e, "__esModule", {
      value: !0
    } )
  }, r.t = function ( e, t ) {
    if ( 1 & t && ( e = r( e ) ), 8 & t ) return e;
    if ( 4 & t && "object" == typeof e && e && e.__esModule ) return e;
    var n = Object.create( null );
    if ( r.r( n ), Object.defineProperty( n, "default", {
        enumerable: !0,
        value: e
      } ), 2 & t && "string" != typeof e )
      for ( var a in e ) r.d( n, a, function ( t ) {
        return e[ t ]
      }.bind( null, a ) );
    return n
  }, r.n = function ( e ) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return r.d( t, "a", t ), t
  }, r.o = function ( e, t ) {
    return Object.prototype.hasOwnProperty.call( e, t )
  }, r.p = "", r( r.s = 546 )
}( {
  0: function ( e, t ) {
    e.exports = window.wp.element
  },
  10: function ( e, t, r ) {
    "use strict";
    r.d( t, "a", ( function () {
      return i
    } ) );
    var n = r( 40 ),
      a = r( 30 ),
      o = r( 41 );

    function i( e, t ) {
      return Object( n.a )( e ) || function ( e, t ) {
        if ( "undefined" != typeof Symbol && Symbol.iterator in Object( e ) ) {
          var r = [],
            _n = !0,
            n = !1,
            a = void 0;
          try {
            for ( var o, i = e[ Symbol.iterator ](); !( _n = ( o = i.next() ).done ) && ( r.push( o.value ), !t || r.length !== t ); _n = !0 );
          } catch ( e ) {
            n = !0, a = e
          } finally {
            try {
              _n || null == i.return || i.return()
            } finally {
              if ( n ) throw a
            }
          }
          return r
        }
      }( e, t ) || Object( a.a )( e, t ) || Object( o.a )()
    }
  },
  129: function ( e, t ) {
    e.exports = window.wp.escapeHtml
  },
  14: function ( e, t ) {
    e.exports = window.wp.compose
  },
  15: function ( e, t, r ) {
    "use strict";
    r.d( t, "a", ( function () {
      return i
    } ) );
    var n = r( 24 ),
      a = r( 44 ),
      o = r( 30 );

    function i( e ) {
      return function ( e ) {
        if ( Array.isArray( e ) ) return Object( n.a )( e )
      }( e ) || Object( a.a )( e ) || Object( o.a )( e ) || function () {
        throw new TypeError( "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
      }()
    }
  },
  17: function ( e, t ) {
    e.exports = window.wp.keycodes
  },
  2: function ( e, t ) {
    e.exports = window.lodash
  },
  24: function ( e, t, r ) {
    "use strict";

    function n( e, t ) {
      ( null == t || t > e.length ) && ( t = e.length );
      for ( var r = 0, n = new Array( t ); r < t; r++ ) n[ r ] = e[ r ];
      return n
    }
    r.d( t, "a", ( function () {
      return n
    } ) )
  },
  30: function ( e, t, r ) {
    "use strict";
    r.d( t, "a", ( function () {
      return a
    } ) );
    var n = r( 24 );

    function a( e, t ) {
      if ( e ) {
        if ( "string" == typeof e ) return Object( n.a )( e, t );
        var r = Object.prototype.toString.call( e ).slice( 8, -1 );
        return "Object" === r && e.constructor && ( r = e.constructor.name ), "Map" === r || "Set" === r ? Array.from( e ) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( r ) ? Object( n.a )( e, t ) : void 0
      }
    }
  },
  35: function ( e, t ) {
    e.exports = window.wp.dom
  },
  4: function ( e, t ) {
    e.exports = window.wp.data
  },
  40: function ( e, t, r ) {
    "use strict";

    function n( e ) {
      if ( Array.isArray( e ) ) return e
    }
    r.d( t, "a", ( function () {
      return n
    } ) )
  },
  41: function ( e, t, r ) {
    "use strict";

    function n() {
      throw new TypeError( "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
    }
    r.d( t, "a", ( function () {
      return n
    } ) )
  },
  44: function ( e, t, r ) {
    "use strict";

    function n( e ) {
      if ( "undefined" != typeof Symbol && Symbol.iterator in Object( e ) ) return Array.from( e )
    }
    r.d( t, "a", ( function () {
      return n
    } ) )
  },
  49: function ( e, t, r ) {
    "use strict";
    var n, a;

    function o( e ) {
      return [ e ]
    }

    function i() {
      var e = {
        clear: function () {
          e.head = null
        }
      };
      return e
    }

    function c( e, t, r ) {
      var n;
      if ( e.length !== t.length ) return !1;
      for ( n = r; n < e.length; n++ )
        if ( e[ n ] !== t[ n ] ) return !1;
      return !0
    }
    n = {}, a = "undefined" != typeof WeakMap, t.a = function ( e, t ) {
      var r, u;

      function s() {
        r = a ? new WeakMap : i()
      }

      function l() {
        var r, n, a, o, i, s = arguments.length;
        for ( o = new Array( s ), a = 0; a < s; a++ ) o[ a ] = arguments[ a ];
        for ( i = t.apply( null, o ), ( r = u( i ) ).isUniqueByDependants || ( r.lastDependants && !c( i, r.lastDependants, 0 ) && r.clear(), r.lastDependants = i ), n = r.head; n; ) {
          if ( c( n.args, o, 1 ) ) return n !== r.head && ( n.prev.next = n.next, n.next && ( n.next.prev = n.prev ), n.next = r.head, n.prev = null, r.head.prev = n, r.head = n ), n.val;
          n = n.next
        }
        return n = {
          val: e.apply( null, o )
        }, o[ 0 ] = null, n.args = o, r.head && ( r.head.prev = n, n.next = r.head ), r.head = n, n.val
      }
      return t || ( t = o ), u = a ? function ( e ) {
        var t, a, o, c, u, s = r,
          l = !0;
        for ( t = 0; t < e.length; t++ ) {
          if ( !( u = a = e[ t ] ) || "object" != typeof u ) {
            l = !1;
            break
          }
          s.has( a ) ? s = s.get( a ) : ( o = new WeakMap, s.set( a, o ), s = o )
        }
        return s.has( n ) || ( ( c = i() ).isUniqueByDependants = l, s.set( n, c ) ), s.get( n )
      } : function () {
        return r
      }, l.getDependants = t, l.clear = s, s(), l
    }
  },
  5: function ( e, t, r ) {
    "use strict";

    function n( e, t, r ) {
      return t in e ? Object.defineProperty( e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      } ) : e[ t ] = r, e
    }
    r.d( t, "a", ( function () {
      return n
    } ) )
  },
  546: function ( e, t, r ) {
    "use strict";
    r.r( t ), r.d( t, "store", ( function () {
      return O
    } ) ), r.d( t, "applyFormat", ( function () {
      return D
    } ) ), r.d( t, "concat", ( function () {
      return K
    } ) ), r.d( t, "create", ( function () {
      return R
    } ) ), r.d( t, "getActiveFormat", ( function () {
      return U
    } ) ), r.d( t, "getActiveObject", ( function () {
      return z
    } ) ), r.d( t, "getTextContent", ( function () {
      return G
    } ) ), r.d( t, "__unstableIsListRootSelected", ( function () {
      return X
    } ) ), r.d( t, "__unstableIsActiveListType", ( function () {
      return Y
    } ) ), r.d( t, "isCollapsed", ( function () {
      return $
    } ) ), r.d( t, "isEmpty", ( function () {
      return Z
    } ) ), r.d( t, "__unstableIsEmptyLine", ( function () {
      return J
    } ) ), r.d( t, "join", ( function () {
      return Q
    } ) ), r.d( t, "registerFormatType", ( function () {
      return te
    } ) ), r.d( t, "removeFormat", ( function () {
      return ae
    } ) ), r.d( t, "remove", ( function () {
      return ce
    } ) ), r.d( t, "replace", ( function () {
      return ue
    } ) ), r.d( t, "insert", ( function () {
      return ie
    } ) ), r.d( t, "__unstableInsertLineSeparator", ( function () {
      return se
    } ) ), r.d( t, "__unstableRemoveLineSeparator", ( function () {
      return pe
    } ) ), r.d( t, "insertObject", ( function () {
      return de
    } ) ), r.d( t, "slice", ( function () {
      return ve
    } ) ), r.d( t, "split", ( function () {
      return ge
    } ) ), r.d( t, "__unstableToDom", ( function () {
      return Re
    } ) ), r.d( t, "toHTMLString", ( function () {
      return ke
    } ) ), r.d( t, "toggleFormat", ( function () {
      return Xe
    } ) ), r.d( t, "__UNSTABLE_LINE_SEPARATOR", ( function () {
      return F
    } ) ), r.d( t, "unregisterFormatType", ( function () {
      return Ye
    } ) ), r.d( t, "__unstableCanIndentListItems", ( function () {
      return $e
    } ) ), r.d( t, "__unstableCanOutdentListItems", ( function () {
      return Ze
    } ) ), r.d( t, "__unstableIndentListItems", ( function () {
      return et
    } ) ), r.d( t, "__unstableOutdentListItems", ( function () {
      return at
    } ) ), r.d( t, "__unstableChangeListType", ( function () {
      return ct
    } ) ), r.d( t, "__unstableCreateElement", ( function () {
      return S
    } ) ), r.d( t, "useAnchorRef", ( function () {
      return st
    } ) ), r.d( t, "__experimentalRichText", ( function () {
      return Pt
    } ) ), r.d( t, "__unstableFormatEdit", ( function () {
      return bt
    } ) );
    var n = {};
    r.r( n ), r.d( n, "getFormatTypes", ( function () {
      return p
    } ) ), r.d( n, "getFormatType", ( function () {
      return d
    } ) ), r.d( n, "getFormatTypeForBareElement", ( function () {
      return b
    } ) ), r.d( n, "getFormatTypeForClassName", ( function () {
      return m
    } ) );
    var a = {};
    r.r( a ), r.d( a, "addFormatTypes", ( function () {
      return v
    } ) ), r.d( a, "removeFormatTypes", ( function () {
      return g
    } ) );
    var o = r( 4 ),
      i = r( 5 ),
      c = r( 2 );

    function u( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function s( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? u( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : u( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }
    var l = Object( o.combineReducers )( {
        formatTypes: function () {
          var e = arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : {},
            t = arguments.length > 1 ? arguments[ 1 ] : void 0;
          switch ( t.type ) {
            case "ADD_FORMAT_TYPES":
              return s( s( {}, e ), Object( c.keyBy )( t.formatTypes, "name" ) );
            case "REMOVE_FORMAT_TYPES":
              return Object( c.omit )( e, t.names )
          }
          return e
        }
      } ),
      f = r( 49 ),
      p = Object( f.a )( ( function ( e ) {
        return Object.values( e.formatTypes )
      } ), ( function ( e ) {
        return [ e.formatTypes ]
      } ) );

    function d( e, t ) {
      return e.formatTypes[ t ]
    }

    function b( e, t ) {
      return Object( c.find )( p( e ), ( function ( e ) {
        var r = e.className,
          n = e.tagName;
        return null === r && t === n
      } ) )
    }

    function m( e, t ) {
      return Object( c.find )( p( e ), ( function ( e ) {
        var r = e.className;
        return null !== r && " ".concat( t, " " ).indexOf( " ".concat( r, " " ) ) >= 0
      } ) )
    }

    function v( e ) {
      return {
        type: "ADD_FORMAT_TYPES",
        formatTypes: Object( c.castArray )( e )
      }
    }

    function g( e ) {
      return {
        type: "REMOVE_FORMAT_TYPES",
        names: Object( c.castArray )( e )
      }
    }
    var O = Object( o.createReduxStore )( "core/rich-text", {
      reducer: l,
      selectors: n,
      actions: a
    } );
    Object( o.register )( O );
    var y = r( 15 );

    function h( e, t ) {
      if ( e === t ) return !0;
      if ( !e || !t ) return !1;
      if ( e.type !== t.type ) return !1;
      var r = e.attributes,
        n = t.attributes;
      if ( r === n ) return !0;
      if ( !r || !n ) return !1;
      var a = Object.keys( r ),
        o = Object.keys( n );
      if ( a.length !== o.length ) return !1;
      for ( var i = a.length, c = 0; c < i; c++ ) {
        var u = a[ c ];
        if ( r[ u ] !== n[ u ] ) return !1
      }
      return !0
    }

    function j( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function w( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? j( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : j( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }

    function T( e ) {
      var t = e.formats.slice();
      return t.forEach( ( function ( e, r ) {
        var n = t[ r - 1 ];
        if ( n ) {
          var a = e.slice();
          a.forEach( ( function ( e, t ) {
            var r = n[ t ];
            h( e, r ) && ( a[ t ] = r )
          } ) ), t[ r ] = a
        }
      } ) ), w( w( {}, e ), {}, {
        formats: t
      } )
    }

    function x( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function E( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? x( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : x( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }

    function P( e, t, r ) {
      return ( e = e.slice() )[ t ] = r, e
    }

    function D( e, t ) {
      var r = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : e.start,
        n = arguments.length > 3 && void 0 !== arguments[ 3 ] ? arguments[ 3 ] : e.end,
        a = e.formats,
        o = e.activeFormats,
        i = a.slice();
      if ( r === n ) {
        var u = Object( c.find )( i[ r ], {
          type: t.type
        } );
        if ( u ) {
          for ( var s = i[ r ].indexOf( u ); i[ r ] && i[ r ][ s ] === u; ) i[ r ] = P( i[ r ], s, t ), r--;
          for ( n++; i[ n ] && i[ n ][ s ] === u; ) i[ n ] = P( i[ n ], s, t ), n++
        }
      } else {
        for ( var l = 1 / 0, f = r; f < n; f++ )
          if ( i[ f ] ) {
            i[ f ] = i[ f ].filter( ( function ( e ) {
              return e.type !== t.type
            } ) );
            var p = i[ f ].length;
            p < l && ( l = p )
          } else i[ f ] = [], l = 0;
        for ( var d = r; d < n; d++ ) i[ d ].splice( l, 0, t )
      }
      return T( E( E( {}, e ), {}, {
        formats: i,
        activeFormats: [].concat( Object( y.a )( Object( c.reject )( o, {
          type: t.type
        } ) ), [ t ] )
      } ) )
    }
    var _ = r( 62 );

    function S( e, t ) {
      var r = e.implementation;
      return S.body || ( S.body = r.createHTMLDocument( "" ).body ), S.body.innerHTML = t, S.body
    }
    var F = "\u2028";

    function C( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function A( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? C( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : C( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }

    function N( e, t ) {
      for ( var r in e )
        if ( e[ r ] === t ) return r
    }

    function R() {
      var e = arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : {},
        t = e.element,
        r = e.text,
        n = e.html,
        a = e.range,
        o = e.multilineTag,
        i = e.multilineWrapperTags,
        c = e.__unstableIsEditableTree,
        u = e.preserveWhiteSpace;
      return "string" == typeof r && r.length > 0 ? {
        formats: Array( r.length ),
        replacements: Array( r.length ),
        text: r
      } : ( "string" == typeof n && n.length > 0 && ( t = S( document, n ) ), "object" !== Object( _.a )( t ) ? {
        formats: [],
        replacements: [],
        text: ""
      } : o ? M( {
        element: t,
        range: a,
        multilineTag: o,
        multilineWrapperTags: i,
        isEditableTree: c,
        preserveWhiteSpace: u
      } ) : W( {
        element: t,
        range: a,
        isEditableTree: c,
        preserveWhiteSpace: u
      } ) )
    }

    function I( e, t, r, n ) {
      if ( r ) {
        var a = t.parentNode,
          o = r.startContainer,
          i = r.startOffset,
          c = r.endContainer,
          u = r.endOffset,
          s = e.text.length;
        void 0 !== n.start ? e.start = s + n.start : t === o && t.nodeType === t.TEXT_NODE ? e.start = s + i : a === o && t === o.childNodes[ i ] ? e.start = s : a === o && t === o.childNodes[ i - 1 ] ? e.start = s + n.text.length : t === o && ( e.start = s ), void 0 !== n.end ? e.end = s + n.end : t === c && t.nodeType === t.TEXT_NODE ? e.end = s + u : a === c && t === c.childNodes[ u - 1 ] ? e.end = s + n.text.length : a === c && t === c.childNodes[ u ] ? e.end = s : t === c && ( e.end = s + u )
      }
    }
    var L = new RegExp( "\ufeff", "g" );

    function k( e ) {
      return e.replace( L, "" )
    }

    function W( e ) {
      var t = e.element,
        r = e.range,
        n = e.multilineTag,
        a = e.multilineWrapperTags,
        i = e.currentWrapperTags,
        c = void 0 === i ? [] : i,
        u = e.isEditableTree,
        s = e.preserveWhiteSpace,
        l = {
          formats: [],
          replacements: [],
          text: ""
        };
      if ( !t ) return l;
      if ( !t.hasChildNodes() ) return I( l, t, r, {
        formats: [],
        replacements: [],
        text: ""
      } ), l;
      for ( var f = t.childNodes.length, p = function ( e ) {
          var i = t.childNodes[ e ],
            f = i.nodeName.toLowerCase();
          if ( i.nodeType === i.TEXT_NODE ) {
            var p = k;
            s || ( p = function ( e ) {
              return k( function ( e ) {
                return e.replace( /[\n\r\t]+/g, " " )
              }( e ) )
            } );
            var d = p( i.nodeValue );
            return r = function ( e, t, r ) {
              if ( t ) {
                var n = t.startContainer,
                  a = t.endContainer,
                  o = t.startOffset,
                  i = t.endOffset;
                return e === n && ( o = r( e.nodeValue.slice( 0, o ) ).length ), e === a && ( i = r( e.nodeValue.slice( 0, i ) ).length ), {
                  startContainer: n,
                  startOffset: o,
                  endContainer: a,
                  endOffset: i
                }
              }
            }( i, r, p ), I( l, i, r, {
              text: d
            } ), l.formats.length += d.length, l.replacements.length += d.length, l.text += d, "continue"
          }
          if ( i.nodeType !== i.ELEMENT_NODE ) return "continue";
          if ( u && ( i.getAttribute( "data-rich-text-placeholder" ) || "br" === f && !i.getAttribute( "data-rich-text-line-break" ) ) ) return I( l, i, r, {
            formats: [],
            replacements: [],
            text: ""
          } ), "continue";
          if ( "br" === f ) return I( l, i, r, {
            formats: [],
            replacements: [],
            text: ""
          } ), V( l, R( {
            text: "\n"
          } ) ), "continue";
          var b = l.formats[ l.formats.length - 1 ],
            m = b && b[ b.length - 1 ],
            v = function ( e ) {
              var t, r = e.type,
                n = e.attributes;
              if ( n && n.class && ( t = Object( o.select )( "core/rich-text" ).getFormatTypeForClassName( n.class ) ) && ( n.class = " ".concat( n.class, " " ).replace( " ".concat( t.className, " " ), " " ).trim(), n.class || delete n.class ), t || ( t = Object( o.select )( "core/rich-text" ).getFormatTypeForBareElement( r ) ), !t ) return n ? {
                type: r,
                attributes: n
              } : {
                type: r
              };
              if ( t.__experimentalCreatePrepareEditableTree && !t.__experimentalCreateOnChangeEditableValue ) return null;
              if ( !n ) return {
                type: t.name
              };
              var a = {},
                i = {};
              for ( var c in n ) {
                var u = N( t.attributes, c );
                u ? a[ u ] = n[ c ] : i[ c ] = n[ c ]
              }
              return {
                type: t.name,
                attributes: a,
                unregisteredAttributes: i
              }
            }( {
              type: f,
              attributes: H( {
                element: i
              } )
            } ),
            g = h( v, m ) ? m : v;
          if ( a && -1 !== a.indexOf( f ) ) {
            var O = M( {
              element: i,
              range: r,
              multilineTag: n,
              multilineWrapperTags: a,
              currentWrapperTags: [].concat( Object( y.a )( c ), [ g ] ),
              isEditableTree: u,
              preserveWhiteSpace: s
            } );
            return I( l, i, r, O ), V( l, O ), "continue"
          }
          var j = W( {
            element: i,
            range: r,
            multilineTag: n,
            multilineWrapperTags: a,
            isEditableTree: u,
            preserveWhiteSpace: s
          } );
          if ( I( l, i, r, j ), g )
            if ( 0 === j.text.length ) g.attributes && V( l, {
              formats: [ , ],
              replacements: [ g ],
              text: "￼"
            } );
            else {
              function w( e ) {
                if ( w.formats === e ) return w.newFormats;
                var t = e ? [ g ].concat( Object( y.a )( e ) ) : [ g ];
                return w.formats = e, w.newFormats = t, t
              }
              w.newFormats = [ g ], V( l, A( A( {}, j ), {}, {
                formats: Array.from( j.formats, w )
              } ) )
            }
          else V( l, j )
        }, d = 0; d < f; d++ ) p( d );
      return l
    }

    function M( e ) {
      var t = e.element,
        r = e.range,
        n = e.multilineTag,
        a = e.multilineWrapperTags,
        o = e.currentWrapperTags,
        i = void 0 === o ? [] : o,
        c = e.isEditableTree,
        u = e.preserveWhiteSpace,
        s = {
          formats: [],
          replacements: [],
          text: ""
        };
      if ( !t || !t.hasChildNodes() ) return s;
      for ( var l = t.children.length, f = 0; f < l; f++ ) {
        var p = t.children[ f ];
        if ( p.nodeName.toLowerCase() === n ) {
          var d = W( {
            element: p,
            range: r,
            multilineTag: n,
            multilineWrapperTags: a,
            currentWrapperTags: i,
            isEditableTree: c,
            preserveWhiteSpace: u
          } );
          ( 0 !== f || i.length > 0 ) && V( s, {
            formats: [ , ],
            replacements: i.length > 0 ? [ i ] : [ , ],
            text: F
          } ), I( s, p, r, d ), V( s, d )
        }
      }
      return s
    }

    function H( e ) {
      var t = e.element;
      if ( t.hasAttributes() ) {
        for ( var r, n = t.attributes.length, a = 0; a < n; a++ ) {
          var o = t.attributes[ a ],
            i = o.name,
            c = o.value;
          0 !== i.indexOf( "data-rich-text-" ) && ( ( r = r || {} )[ i ] = c )
        }
        return r
      }
    }

    function V( e, t ) {
      return e.formats = e.formats.concat( t.formats ), e.replacements = e.replacements.concat( t.replacements ), e.text += t.text, e
    }

    function K() {
      for ( var e = arguments.length, t = new Array( e ), r = 0; r < e; r++ ) t[ r ] = arguments[ r ];
      return T( t.reduce( V, R() ) )
    }

    function B( e ) {
      var t = e.formats,
        r = e.start,
        n = e.end,
        a = e.activeFormats,
        o = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : [];
      if ( void 0 === r ) return o;
      if ( r === n ) {
        if ( a ) return a;
        var i = t[ r - 1 ] || o,
          c = t[ r ] || o;
        return i.length < c.length ? i : c
      }
      return t[ r ] || o
    }

    function U( e, t ) {
      return Object( c.find )( B( e ), {
        type: t
      } )
    }

    function z( e ) {
      var t = e.start,
        r = e.end,
        n = e.replacements,
        a = e.text;
      if ( t + 1 === r && "￼" === a[ t ] ) return n[ t ]
    }

    function G( e ) {
      return e.text.replace( new RegExp( "￼", "g" ), "" ).replace( new RegExp( F, "g" ), "\n" )
    }

    function q( e ) {
      for ( var t = e.start, r = e.text, n = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : t, a = n; a--; )
        if ( r[ a ] === F ) return a
    }

    function X( e ) {
      var t = e.replacements[ q( e, e.start ) ];
      return !t || t.length < 1
    }

    function Y( e, t, r ) {
      var n = e.replacements[ q( e, e.start ) ];
      return n && 0 !== n.length ? n[ n.length - 1 ].type === t : t === r
    }

    function $( e ) {
      var t = e.start,
        r = e.end;
      if ( void 0 !== t && void 0 !== r ) return t === r
    }

    function Z( e ) {
      return 0 === e.text.length
    }

    function J( e ) {
      var t = e.text,
        r = e.start,
        n = e.end;
      return r === n && ( 0 === t.length || 0 === r && t.slice( 0, 1 ) === F || r === t.length && t.slice( -1 ) === F || t.slice( r - 1, n + 1 ) === "".concat( F ).concat( F ) )
    }

    function Q( e ) {
      var t = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : "";
      return "string" == typeof t && ( t = R( {
        text: t
      } ) ), T( e.reduce( ( function ( e, r ) {
        var n = r.formats,
          a = r.replacements,
          o = r.text;
        return {
          formats: e.formats.concat( t.formats, n ),
          replacements: e.replacements.concat( t.replacements, a ),
          text: e.text + t.text + o
        }
      } ) ) )
    }

    function ee( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function te( e, t ) {
      if ( "string" == typeof ( t = function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var r = null != arguments[ t ] ? arguments[ t ] : {};
            t % 2 ? ee( Object( r ), !0 ).forEach( ( function ( t ) {
              Object( i.a )( e, t, r[ t ] )
            } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : ee( Object( r ) ).forEach( ( function ( t ) {
              Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
            } ) )
          }
          return e
        }( {
          name: e
        }, t ) ).name )
        if ( /^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/.test( t.name ) )
          if ( Object( o.select )( O ).getFormatType( t.name ) ) window.console.error( 'Format "' + t.name + '" is already registered.' );
          else if ( "string" == typeof t.tagName && "" !== t.tagName )
        if ( "string" == typeof t.className && "" !== t.className || null === t.className )
          if ( /^[_a-zA-Z]+[a-zA-Z0-9-]*$/.test( t.className ) ) {
            if ( null === t.className ) {
              var r = Object( o.select )( O ).getFormatTypeForBareElement( t.tagName );
              if ( r ) return void window.console.error( 'Format "'.concat( r.name, '" is already registered to handle bare tag name "' ).concat( t.tagName, '".' ) )
            } else {
              var n = Object( o.select )( O ).getFormatTypeForClassName( t.className );
              if ( n ) return void window.console.error( 'Format "'.concat( n.name, '" is already registered to handle class name "' ).concat( t.className, '".' ) )
            }
            if ( "title" in t && "" !== t.title )
              if ( "keywords" in t && t.keywords.length > 3 ) window.console.error( 'The format "' + t.name + '" can have a maximum of 3 keywords.' );
              else {
                if ( "string" == typeof t.title ) return Object( o.dispatch )( O ).addFormatTypes( t ), t;
                window.console.error( "Format titles must be strings." )
              }
            else window.console.error( 'The format "' + t.name + '" must have a title.' )
          } else window.console.error( "A class name must begin with a letter, followed by any number of hyphens, letters, or numbers." );
      else window.console.error( "Format class names must be a string, or null to handle bare elements." );
      else window.console.error( "Format tag names must be a string." );
      else window.console.error( "Format names must contain a namespace prefix, include only lowercase alphanumeric characters or dashes, and start with a letter. Example: my-plugin/my-custom-format" );
      else window.console.error( "Format names must be strings." )
    }

    function re( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function ne( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? re( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : re( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }

    function ae( e, t ) {
      var r = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : e.start,
        n = arguments.length > 3 && void 0 !== arguments[ 3 ] ? arguments[ 3 ] : e.end,
        a = e.formats,
        o = e.activeFormats,
        i = a.slice();
      if ( r === n ) {
        var u = Object( c.find )( i[ r ], {
          type: t
        } );
        if ( u ) {
          for ( ; Object( c.find )( i[ r ], u ); ) oe( i, r, t ), r--;
          for ( n++; Object( c.find )( i[ n ], u ); ) oe( i, n, t ), n++
        }
      } else
        for ( var s = r; s < n; s++ ) i[ s ] && oe( i, s, t );
      return T( ne( ne( {}, e ), {}, {
        formats: i,
        activeFormats: Object( c.reject )( o, {
          type: t
        } )
      } ) )
    }

    function oe( e, t, r ) {
      var n = e[ t ].filter( ( function ( e ) {
        return e.type !== r
      } ) );
      n.length ? e[ t ] = n : delete e[ t ]
    }

    function ie( e, t ) {
      var r = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : e.start,
        n = arguments.length > 3 && void 0 !== arguments[ 3 ] ? arguments[ 3 ] : e.end,
        a = e.formats,
        o = e.replacements,
        i = e.text;
      "string" == typeof t && ( t = R( {
        text: t
      } ) );
      var c = r + t.text.length;
      return T( {
        formats: a.slice( 0, r ).concat( t.formats, a.slice( n ) ),
        replacements: o.slice( 0, r ).concat( t.replacements, o.slice( n ) ),
        text: i.slice( 0, r ) + t.text + i.slice( n ),
        start: c,
        end: c
      } )
    }

    function ce( e, t, r ) {
      return ie( e, R(), t, r )
    }

    function ue( e, t, r ) {
      var n = e.formats,
        a = e.replacements,
        o = e.text,
        i = e.start,
        c = e.end;
      return o = o.replace( t, ( function ( e ) {
        for ( var t = arguments.length, o = new Array( t > 1 ? t - 1 : 0 ), u = 1; u < t; u++ ) o[ u - 1 ] = arguments[ u ];
        var s, l, f = o[ o.length - 2 ],
          p = r;
        return "function" == typeof p && ( p = r.apply( void 0, [ e ].concat( o ) ) ), "object" === Object( _.a )( p ) ? ( s = p.formats, l = p.replacements, p = p.text ) : ( s = Array( p.length ), l = Array( p.length ), n[ f ] && ( s = s.fill( n[ f ] ) ) ), n = n.slice( 0, f ).concat( s, n.slice( f + e.length ) ), a = a.slice( 0, f ).concat( l, a.slice( f + e.length ) ), i && ( i = c = f + p.length ), p
      } ) ), T( {
        formats: n,
        replacements: a,
        text: o,
        start: i,
        end: c
      } )
    }

    function se( e ) {
      var t = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : e.start,
        r = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : e.end,
        n = e.text.slice( 0, t ),
        a = n.lastIndexOf( F ),
        o = e.replacements[ a ],
        i = [ , ];
      o && ( i = [ o ] );
      var c = {
        formats: [ , ],
        replacements: i,
        text: F
      };
      return ie( e, c, t, r )
    }

    function le( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function fe( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? le( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : le( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }

    function pe( e ) {
      var t = !( arguments.length > 1 && void 0 !== arguments[ 1 ] ) || arguments[ 1 ],
        r = e.replacements,
        n = e.text,
        a = e.start,
        o = e.end,
        i = $( e ),
        c = a - 1,
        u = i ? a - 1 : a,
        s = o;
      if ( t || ( c = o, u = a, s = i ? o + 1 : o ), n[ c ] === F ) {
        var l;
        if ( i && r[ c ] && r[ c ].length ) {
          var f = r.slice();
          f[ c ] = r[ c ].slice( 0, -1 ), l = fe( fe( {}, e ), {}, {
            replacements: f
          } )
        } else l = ce( e, u, s );
        return l
      }
    }

    function de( e, t, r, n ) {
      return ie( e, {
        formats: [ , ],
        replacements: [ t ],
        text: "￼"
      }, r, n )
    }

    function be( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function me( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? be( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : be( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }

    function ve( e ) {
      var t = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : e.start,
        r = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : e.end,
        n = e.formats,
        a = e.replacements,
        o = e.text;
      return void 0 === t || void 0 === r ? me( {}, e ) : {
        formats: n.slice( t, r ),
        replacements: a.slice( t, r ),
        text: o.slice( t, r )
      }
    }

    function ge( e, t ) {
      var r = e.formats,
        n = e.replacements,
        a = e.text,
        o = e.start,
        i = e.end;
      if ( "string" != typeof t ) return Oe.apply( void 0, arguments );
      var c = 0;
      return a.split( t ).map( ( function ( e ) {
        var a = c,
          u = {
            formats: r.slice( a, a + e.length ),
            replacements: n.slice( a, a + e.length ),
            text: e
          };
        return c += t.length + e.length, void 0 !== o && void 0 !== i && ( o >= a && o < c ? u.start = o - a : o < a && i > a && ( u.start = 0 ), i >= a && i < c ? u.end = i - a : o < c && i > c && ( u.end = e.length ) ), u
      } ) )
    }

    function Oe( e ) {
      var t = e.formats,
        r = e.replacements,
        n = e.text,
        a = e.start,
        o = e.end,
        i = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : a,
        c = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : o,
        u = {
          formats: t.slice( 0, i ),
          replacements: r.slice( 0, i ),
          text: n.slice( 0, i )
        },
        s = {
          formats: t.slice( c ),
          replacements: r.slice( c ),
          text: n.slice( c ),
          start: 0,
          end: 0
        };
      return [ ue( u, /\u2028+$/, "" ), ue( s, /^\u2028+/, "" ) ]
    }

    function ye( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function he( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? ye( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : ye( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }

    function je( e ) {
      var t = e.type,
        r = e.attributes,
        n = e.unregisteredAttributes,
        a = e.object,
        i = e.boundaryClass,
        c = function ( e ) {
          return Object( o.select )( O ).getFormatType( e )
        }( t ),
        u = {};
      if ( i && ( u[ "data-rich-text-format-boundary" ] = "true" ), !c ) return r && ( u = he( he( {}, r ), u ) ), {
        type: t,
        attributes: u,
        object: a
      };
      for ( var s in u = he( he( {}, n ), u ), r ) {
        var l = !!c.attributes && c.attributes[ s ];
        l ? u[ l ] = r[ s ] : u[ s ] = r[ s ]
      }
      return c.className && ( u.class ? u.class = "".concat( c.className, " " ).concat( u.class ) : u.class = c.className ), {
        type: c.tagName,
        object: c.object,
        attributes: u
      }
    }

    function we( e ) {
      var t, r, n, a = e.value,
        o = e.multilineTag,
        i = e.preserveWhiteSpace,
        c = e.createEmpty,
        u = e.append,
        s = e.getLastChild,
        l = e.getParent,
        f = e.isText,
        p = e.getText,
        d = e.remove,
        b = e.appendText,
        m = e.onStartIndex,
        v = e.onEndIndex,
        g = e.isEditableTree,
        O = e.placeholder,
        h = a.formats,
        j = a.replacements,
        w = a.text,
        T = a.start,
        x = a.end,
        E = h.length + 1,
        P = c(),
        D = {
          type: o
        },
        _ = B( a ),
        S = _[ _.length - 1 ];
      o ? ( u( u( P, {
        type: o
      } ), "" ), r = t = [ D ] ) : u( P, "" );
      for ( var C = function ( e ) {
          var a = w.charAt( e ),
            c = g && ( !n || n === F || "\n" === n ),
            E = h[ e ];
          o && ( E = a === F ? t = ( j[ e ] || [] ).reduce( ( function ( e, t ) {
            return e.push( t, D ), e
          } ), [ D ] ) : [].concat( Object( y.a )( t ), Object( y.a )( E || [] ) ) );
          var _ = s( P );
          if ( c && a === F ) {
            for ( var C = _; !f( C ); ) C = s( C );
            u( l( C ), "\ufeff" )
          }
          if ( n === F ) {
            for ( var A = _; !f( A ); ) A = s( A );
            m && T === e && m( P, A ), v && x === e && v( P, A )
          }
          if ( E && E.forEach( ( function ( e, t ) {
              if ( _ && r && function ( e, t, r ) {
                  do {
                    if ( e[ r ] !== t[ r ] ) return !1
                  } while ( r-- );
                  return !0
                }( E, r, t ) && ( a !== F || E.length - 1 !== t ) ) _ = s( _ );
              else {
                var n = e.type,
                  o = e.attributes,
                  i = e.unregisteredAttributes,
                  c = g && a !== F && e === S,
                  b = l( _ ),
                  m = u( b, je( {
                    type: n,
                    attributes: o,
                    unregisteredAttributes: i,
                    boundaryClass: c
                  } ) );
                f( _ ) && 0 === p( _ ).length && d( _ ), _ = u( m, "" )
              }
            } ) ), a === F ) return r = E, n = a, "continue";
          0 === e && ( m && 0 === T && m( P, _ ), v && 0 === x && v( P, _ ) ), "￼" === a ? ( _ = u( l( _ ), je( he( he( {}, j[ e ] ), {}, {
            object: !0
          } ) ) ), _ = u( l( _ ), "" ) ) : i || "\n" !== a ? f( _ ) ? b( _, a ) : _ = u( l( _ ), a ) : ( _ = u( l( _ ), {
            type: "br",
            attributes: g ? {
              "data-rich-text-line-break": "true"
            } : void 0,
            object: !0
          } ), _ = u( l( _ ), "" ) ), m && T === e + 1 && m( P, _ ), v && x === e + 1 && v( P, _ ), c && e === w.length && ( u( l( _ ), "\ufeff" ), O && 0 === w.length && u( l( _ ), {
            type: "span",
            attributes: {
              "data-rich-text-placeholder": O,
              contenteditable: "false"
            }
          } ) ), r = E, n = a
        }, A = 0; A < E; A++ ) C( A );
      return P
    }

    function Te( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function xe( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? Te( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : Te( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }

    function Ee( e, t, r ) {
      for ( var n = e.parentNode, a = 0; e = e.previousSibling; ) a++;
      return r = [ a ].concat( Object( y.a )( r ) ), n !== t && ( r = Ee( n, t, r ) ), r
    }

    function Pe( e, t ) {
      for ( t = Object( y.a )( t ); e && t.length > 1; ) e = e.childNodes[ t.shift() ];
      return {
        node: e,
        offset: t[ 0 ]
      }
    }

    function De( e, t ) {
      "string" == typeof t && ( t = e.ownerDocument.createTextNode( t ) );
      var r = t,
        n = r.type,
        a = r.attributes;
      if ( n )
        for ( var o in t = e.ownerDocument.createElement( n ), a ) t.setAttribute( o, a[ o ] );
      return e.appendChild( t )
    }

    function _e( e, t ) {
      e.appendData( t )
    }

    function Se( e ) {
      return e.lastChild
    }

    function Fe( e ) {
      return e.parentNode
    }

    function Ce( e ) {
      return e.nodeType === e.TEXT_NODE
    }

    function Ae( e ) {
      return e.nodeValue
    }

    function Ne( e ) {
      return e.parentNode.removeChild( e )
    }

    function Re( e ) {
      var t = e.value,
        r = e.multilineTag,
        n = e.prepareEditableTree,
        a = e.isEditableTree,
        o = void 0 === a || a,
        i = e.placeholder,
        c = e.doc,
        u = void 0 === c ? document : c,
        s = [],
        l = [];
      return n && ( t = xe( xe( {}, t ), {}, {
        formats: n( t )
      } ) ), {
        body: we( {
          value: t,
          multilineTag: r,
          createEmpty: function () {
            return S( u, "" )
          },
          append: De,
          getLastChild: Se,
          getParent: Fe,
          isText: Ce,
          getText: Ae,
          remove: Ne,
          appendText: _e,
          onStartIndex: function ( e, t ) {
            s = Ee( t, e, [ t.nodeValue.length ] )
          },
          onEndIndex: function ( e, t ) {
            l = Ee( t, e, [ t.nodeValue.length ] )
          },
          isEditableTree: o,
          placeholder: i
        } ),
        selection: {
          startPath: s,
          endPath: l
        }
      }
    }

    function Ie( e ) {
      var t = e.value,
        r = e.current,
        n = e.multilineTag,
        a = e.prepareEditableTree,
        o = e.__unstableDomOnly,
        i = Re( {
          value: t,
          multilineTag: n,
          prepareEditableTree: a,
          placeholder: e.placeholder,
          doc: r.ownerDocument
        } ),
        c = i.body,
        u = i.selection;
      ! function e( t, r ) {
        for ( var n, a = 0; n = t.firstChild; ) {
          var o = r.childNodes[ a ];
          if ( o )
            if ( o.isEqualNode( n ) ) t.removeChild( n );
            else if ( o.nodeName !== n.nodeName || o.nodeType === o.TEXT_NODE && o.data !== n.data ) r.replaceChild( n, o );
          else {
            var i = o.attributes,
              c = n.attributes;
            if ( i )
              for ( var u = i.length; u--; ) {
                var s = i[ u ].name;
                n.getAttribute( s ) || o.removeAttribute( s )
              }
            if ( c )
              for ( var l = 0; l < c.length; l++ ) {
                var f = c[ l ],
                  p = f.name,
                  d = f.value;
                o.getAttribute( p ) !== d && o.setAttribute( p, d )
              }
            e( n, o ), t.removeChild( n )
          } else r.appendChild( n );
          a++
        }
        for ( ; r.childNodes[ a ]; ) r.removeChild( r.childNodes[ a ] )
      }( c, r ), void 0 === t.start || o || function ( e, t ) {
        var r = e.startPath,
          n = e.endPath,
          a = Pe( t, r ),
          o = a.node,
          i = a.offset,
          c = Pe( t, n ),
          u = c.node,
          s = c.offset,
          l = t.ownerDocument,
          f = l.defaultView,
          p = f.getSelection(),
          d = l.createRange();
        d.setStart( o, i ), d.setEnd( u, s );
        var b, m, v = l.activeElement;
        if ( p.rangeCount > 0 ) {
          if ( b = d, m = p.getRangeAt( 0 ), b.startContainer === m.startContainer && b.startOffset === m.startOffset && b.endContainer === m.endContainer && b.endOffset === m.endOffset ) return;
          p.removeAllRanges()
        }
        p.addRange( d ), v !== l.activeElement && v instanceof f.HTMLElement && v.focus()
      }( u, r )
    }
    var Le = r( 129 );

    function ke( e ) {
      return qe( we( {
        value: e.value,
        multilineTag: e.multilineTag,
        preserveWhiteSpace: e.preserveWhiteSpace,
        createEmpty: We,
        append: He,
        getLastChild: Me,
        getParent: Ke,
        isText: Be,
        getText: Ue,
        remove: ze,
        appendText: Ve
      } ).children )
    }

    function We() {
      return {}
    }

    function Me( e ) {
      var t = e.children;
      return t && t[ t.length - 1 ]
    }

    function He( e, t ) {
      return "string" == typeof t && ( t = {
        text: t
      } ), t.parent = e, e.children = e.children || [], e.children.push( t ), t
    }

    function Ve( e, t ) {
      e.text += t
    }

    function Ke( e ) {
      return e.parent
    }

    function Be( e ) {
      return "string" == typeof e.text
    }

    function Ue( e ) {
      return e.text
    }

    function ze( e ) {
      var t = e.parent.children.indexOf( e );
      return -1 !== t && e.parent.children.splice( t, 1 ), e
    }

    function Ge( e ) {
      var t = e.type,
        r = e.attributes,
        n = e.object,
        a = e.children,
        o = "";
      for ( var i in r ) Object( Le.isValidAttributeName )( i ) && ( o += " ".concat( i, '="' ).concat( Object( Le.escapeAttribute )( r[ i ] ), '"' ) );
      return n ? "<".concat( t ).concat( o, ">" ) : "<".concat( t ).concat( o, ">" ).concat( qe( a ), "</" ).concat( t, ">" )
    }

    function qe() {
      var e = arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : [];
      return e.map( ( function ( e ) {
        return void 0 === e.text ? Ge( e ) : Object( Le.escapeEditableHTML )( e.text )
      } ) ).join( "" )
    }

    function Xe( e, t ) {
      return U( e, t.type ) ? ae( e, t.type ) : D( e, t )
    }

    function Ye( e ) {
      var t = Object( o.select )( O ).getFormatType( e );
      if ( t ) return Object( o.dispatch )( O ).removeFormatTypes( e ), t;
      window.console.error( "Format ".concat( e, " is not registered." ) )
    }

    function $e( e ) {
      var t = q( e );
      if ( void 0 === t ) return !1;
      var r = e.replacements,
        n = q( e, t ),
        a = r[ t ] || [],
        o = r[ n ] || [];
      return a.length <= o.length
    }

    function Ze( e ) {
      return void 0 !== e.replacements[ q( e, e.start ) ]
    }

    function Je( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function Qe( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? Je( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : Je( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }

    function et( e, t ) {
      if ( !$e( e ) ) return e;
      for ( var r = q( e ), n = q( e, r ), a = e.text, o = e.replacements, i = e.end, c = o.slice(), u = function ( e, t ) {
          for ( var r = e.text, n = e.replacements, a = n[ t ] || [], o = t; o-- >= 0; )
            if ( r[ o ] === F ) {
              var i = n[ o ] || [];
              if ( i.length === a.length + 1 ) return o;
              if ( i.length <= a.length ) return
            }
        }( e, r ), s = r; s < i; s++ )
        if ( a[ s ] === F )
          if ( u ) {
            var l = o[ u ] || [];
            c[ s ] = l.concat( ( c[ s ] || [] ).slice( l.length - 1 ) )
          } else {
            var f = o[ n ] || [],
              p = f[ f.length - 1 ] || t;
            c[ s ] = f.concat( [ p ], ( c[ s ] || [] ).slice( f.length ) )
          } return Qe( Qe( {}, e ), {}, {
        replacements: c
      } )
    }

    function tt( e, t ) {
      for ( var r = e.text, n = e.replacements, a = n[ t ] || [], o = t; o-- >= 0; )
        if ( r[ o ] === F && ( n[ o ] || [] ).length === a.length - 1 ) return o
    }

    function rt( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function nt( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? rt( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : rt( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }

    function at( e ) {
      if ( !Ze( e ) ) return e;
      for ( var t = e.text, r = e.replacements, n = e.start, a = e.end, o = q( e, n ), i = r.slice( 0 ), c = r[ tt( e, o ) ] || [], u = function ( e, t ) {
          for ( var r = e.text, n = e.replacements, a = n[ t ] || [], o = t, i = t || 0; i < r.length; i++ )
            if ( r[ i ] === F ) {
              if ( !( ( n[ i ] || [] ).length >= a.length ) ) return o;
              o = i
            } return o
        }( e, q( e, a ) ), s = o; s <= u; s++ )
        if ( t[ s ] === F ) {
          var l = i[ s ] || [];
          i[ s ] = c.concat( l.slice( c.length + 1 ) ), 0 === i[ s ].length && delete i[ s ]
        } return nt( nt( {}, e ), {}, {
        replacements: i
      } )
    }

    function ot( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function it( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? ot( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : ot( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }

    function ct( e, t ) {
      for ( var r, n = e.text, a = e.replacements, o = e.start, i = e.end, c = q( e, o ), u = a[ c ] || [], s = a[ q( e, i ) ] || [], l = tt( e, c ), f = a.slice(), p = u.length - 1, d = s.length - 1, b = l + 1 || 0; b < n.length; b++ )
        if ( n[ b ] === F ) {
          if ( ( f[ b ] || [] ).length <= p ) break;
          f[ b ] && ( r = !0, f[ b ] = f[ b ].map( ( function ( e, r ) {
            return r < p || r > d ? e : t
          } ) ) )
        } return r ? it( it( {}, e ), {}, {
        replacements: f
      } ) : e
    }
    var ut = r( 0 );

    function st( e ) {
      var t = e.ref,
        r = e.value,
        n = e.settings,
        a = void 0 === n ? {} : n,
        o = a.tagName,
        i = a.className,
        c = a.name,
        u = c ? U( r, c ) : void 0;
      return Object( ut.useMemo )( ( function () {
        if ( t.current ) {
          var e = t.current.ownerDocument.defaultView.getSelection();
          if ( e.rangeCount ) {
            var r = e.getRangeAt( 0 );
            if ( !u ) return r;
            var n = r.startContainer;
            for ( n = n.nextElementSibling || n; n.nodeType !== n.ELEMENT_NODE; ) n = n.parentNode;
            return n.closest( o + ( i ? "." + i : "" ) )
          }
        }
      } ), [ u, r.start, r.end, o, i ] )
    }
    var lt = r( 10 ),
      ft = r( 17 ),
      pt = r( 35 ),
      dt = r( 14 );

    function bt( e ) {
      var t = e.formatTypes,
        r = e.onChange,
        n = e.onFocus,
        a = e.value,
        o = e.forwardedRef;
      return t.map( ( function ( e ) {
        var t = e.name,
          i = e.edit;
        if ( !i ) return null;
        var c = U( a, t ),
          u = void 0 !== c,
          s = z( a ),
          l = void 0 !== s && s.type === t;
        return Object( ut.createElement )( i, {
          key: t,
          isActive: u,
          activeAttributes: u && c.attributes || {},
          isObjectActive: l,
          activeObjectAttributes: l && s.attributes || {},
          value: a,
          onChange: r,
          onFocus: n,
          contentRef: o
        } )
      } ) )
    }

    function mt( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function vt( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? mt( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : mt( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }

    function gt( e ) {
      return e( O ).getFormatTypes()
    }
    var Ot = new Set( [ "a", "audio", "button", "details", "embed", "iframe", "input", "label", "select", "textarea", "video" ] );

    function yt( e ) {
      var t = e.record,
        r = e.multilineTag,
        n = e.preserveWhiteSpace;
      return Object( dt.useRefEffect )( ( function ( e ) {
        function a( a ) {
          if ( !$( t.current ) && e.contains( e.ownerDocument.activeElement ) ) {
            var o = ve( t.current ),
              i = G( o ),
              c = ke( {
                value: o,
                multilineTag: r,
                preserveWhiteSpace: n
              } );
            a.clipboardData.setData( "text/plain", i ), a.clipboardData.setData( "text/html", c ), a.clipboardData.setData( "rich-text", "true" ), a.preventDefault()
          }
        }
        return e.addEventListener( "copy", a ),
          function () {
            e.removeEventListener( "copy", a )
          }
      } ), [ t, r, n ] )
    }

    function ht( e, t ) {
      var r = Object.keys( e );
      if ( Object.getOwnPropertySymbols ) {
        var n = Object.getOwnPropertySymbols( e );
        t && ( n = n.filter( ( function ( t ) {
          return Object.getOwnPropertyDescriptor( e, t ).enumerable
        } ) ) ), r.push.apply( r, n )
      }
      return r
    }

    function jt( e ) {
      for ( var t = 1; t < arguments.length; t++ ) {
        var r = null != arguments[ t ] ? arguments[ t ] : {};
        t % 2 ? ht( Object( r ), !0 ).forEach( ( function ( t ) {
          Object( i.a )( e, t, r[ t ] )
        } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( r ) ) : ht( Object( r ) ).forEach( ( function ( t ) {
          Object.defineProperty( e, t, Object.getOwnPropertyDescriptor( r, t ) )
        } ) )
      }
      return e
    }
    var wt = new Set( [ "insertParagraph", "insertOrderedList", "insertUnorderedList", "insertHorizontalRule", "insertLink" ] ),
      Tt = {
        whiteSpace: "pre-wrap"
      },
      xt = [];

    function Et( e ) {
      return function ( t ) {
        return e.reduce( ( function ( e, r ) {
          return r( e, t.text )
        } ), t.formats )
      }
    }
    var Pt = Object( ut.forwardRef )( ( function ( e, t ) {
      var r = e.tagName,
        n = void 0 === r ? "div" : r,
        a = e.value,
        i = void 0 === a ? "" : a,
        c = e.selectionStart,
        u = e.selectionEnd,
        s = e.children,
        l = e.allowedFormats,
        f = e.withoutInteractiveFormatting,
        p = e.placeholder,
        d = e.disabled,
        b = e.preserveWhiteSpace,
        m = e.onPaste,
        v = e.format,
        g = void 0 === v ? "string" : v,
        O = e.onDelete,
        j = e.onEnter,
        w = e.onSelectionChange,
        T = e.onChange,
        x = e.unstableOnFocus,
        E = e.clientId,
        P = e.identifier,
        D = e.__unstableMultilineTag,
        _ = e.__unstableMultilineRootTag,
        S = e.__unstableDisableFormats,
        C = e.__unstableDidAutomaticChange,
        A = e.__unstableInputRule,
        N = e.__unstableMarkAutomaticChange,
        I = e.__unstableAllowPrefixTransformations,
        L = e.__unstableUndo,
        k = e.__unstableIsCaretWithinFormattedText,
        W = e.__unstableOnEnterFormattedText,
        M = e.__unstableOnExitFormattedText,
        H = e.__unstableOnCreateUndoLevel,
        V = e.__unstableIsSelected,
        K = Object( ut.useRef )(),
        U = Object( ut.useState )(),
        z = Object( lt.a )( U, 2 ),
        G = z[ 0 ],
        q = void 0 === G ? [] : G,
        X = z[ 1 ],
        Y = function ( e ) {
          var t = e.clientId,
            r = e.identifier,
            n = e.withoutInteractiveFormatting,
            a = e.allowedFormats,
            i = Object( o.useSelect )( gt, [] ),
            c = Object( ut.useMemo )( ( function () {
              return i.filter( ( function ( e ) {
                var t = e.name,
                  r = e.tagName;
                return !( a && !a.includes( t ) || n && Ot.has( r ) )
              } ) )
            } ), [ i, a, Ot ] ),
            u = Object( o.useSelect )( ( function ( e ) {
              return c.reduce( ( function ( n, a ) {
                return a.__experimentalGetPropsForEditableTreePreparation && ( n[ a.name ] = a.__experimentalGetPropsForEditableTreePreparation( e, {
                  richTextIdentifier: r,
                  blockClientId: t
                } ) ), n
              } ), {} )
            } ), [ c, t, r ] ),
            s = Object( o.useDispatch )(),
            l = [],
            f = [],
            p = [],
            d = [];
          return c.forEach( ( function ( e ) {
            if ( e.__experimentalCreatePrepareEditableTree ) {
              var n = u[ e.name ],
                a = e.__experimentalCreatePrepareEditableTree( n, {
                  richTextIdentifier: r,
                  blockClientId: t
                } );
              for ( var o in e.__experimentalCreateOnChangeEditableValue ? f.push( a ) : l.push( a ), n ) d.push( n[ o ] )
            }
            if ( e.__experimentalCreateOnChangeEditableValue ) {
              var i = {};
              e.__experimentalGetPropsForEditableTreeChangeHandler && ( i = e.__experimentalGetPropsForEditableTreeChangeHandler( s, {
                richTextIdentifier: r,
                blockClientId: t
              } ) ), p.push( e.__experimentalCreateOnChangeEditableValue( vt( vt( {}, u[ e.name ] || {} ), i ), {
                richTextIdentifier: r,
                blockClientId: t
              } ) )
            }
          } ) ), {
            formatTypes: c,
            prepareHandlers: l,
            valueHandlers: f,
            changeHandlers: p,
            dependencies: d
          }
        }( {
          clientId: E,
          identifier: P,
          withoutInteractiveFormatting: f,
          allowedFormats: l
        } ),
        Z = Y.formatTypes,
        Q = Y.prepareHandlers,
        ee = Y.valueHandlers,
        te = Y.changeHandlers,
        re = Y.dependencies;

      function ne() {
        return K.current.ownerDocument
      }

      function oe() {
        return ne().defaultView
      }

      function ue( e ) {
        if ( S ) return {
          text: e,
          formats: Array( e.length ),
          replacements: Array( e.length )
        };
        if ( "string" !== g ) return e;
        var t = Et( ee ),
          r = R( {
            html: e,
            multilineTag: D,
            multilineWrapperTags: "li" === D ? [ "ul", "ol" ] : void 0,
            preserveWhiteSpace: b
          } );
        return r.formats = t( r ), r
      }

      function se( e ) {
        return Z.forEach( ( function ( t ) {
          t.__experimentalCreatePrepareEditableTree && ( e = ae( e, t.name, 0, e.text.length ) )
        } ) ), e
      }

      function le( e ) {
        return S ? e.text : ( e = se( e ), "string" === g ? ke( {
          value: e,
          multilineTag: D,
          preserveWhiteSpace: b
        } ) : void 0 )
      }
      _ || "string" != typeof n || ( _ = n );
      var fe = Object( ut.useRef )( i ),
        de = Object( ut.useRef )( Object( ut.useMemo )( ( function () {
          var e = ue( i );
          return e.start = c, e.end = u, e
        } ), [] ) );

      function be() {
        var e = oe().getSelection(),
          t = e.rangeCount > 0 ? e.getRangeAt( 0 ) : null;
        return R( {
          element: K.current,
          range: t,
          multilineTag: D,
          multilineWrapperTags: "li" === D ? [ "ul", "ol" ] : void 0,
          __unstableIsEditableTree: !0,
          preserveWhiteSpace: b
        } )
      }

      function me( e ) {
        var t = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : {},
          r = t.domOnly;
        Ie( {
          value: e,
          current: K.current,
          multilineTag: D,
          multilineWrapperTags: "li" === D ? [ "ul", "ol" ] : void 0,
          prepareEditableTree: Et( Q ),
          __unstableDomOnly: r,
          placeholder: p
        } )
      }
      var ve = Object( ut.useRef )( i );

      function ge() {
        ve.current !== fe.current && ( H(), ve.current = fe.current )
      }
      var Oe = Object( ut.useRef )( !1 ),
        ye = Object( ut.useRef )();

      function he( e ) {
        var t;
        if ( !Oe.current )
          if ( e && ( t = e.inputType ), !t && e && e.nativeEvent && ( t = e.nativeEvent.inputType ), !t || 0 !== t.indexOf( "format" ) && !wt.has( t ) ) {
            var r = be(),
              n = de.current,
              a = n.start,
              o = n.activeFormats,
              i = void 0 === o ? [] : o,
              c = function ( e ) {
                var t = e.value,
                  r = e.start,
                  n = e.end,
                  a = e.formats,
                  o = t.formats[ r - 1 ] || [],
                  i = t.formats[ n ] || [];
                for ( t.activeFormats = a.map( ( function ( e, t ) {
                    if ( o[ t ] ) {
                      if ( h( e, o[ t ] ) ) return o[ t ]
                    } else if ( i[ t ] && h( e, i[ t ] ) ) return i[ t ];
                    return e
                  } ) ); --n >= r; ) t.activeFormats.length > 0 ? t.formats[ n ] = t.activeFormats : delete t.formats[ n ];
                return t
              }( {
                value: r,
                start: a,
                end: r.start,
                formats: i
              } );
            if ( Te( c, {
                withoutHistory: !0
              } ), oe().clearTimeout( ye.current ), ye.current = oe().setTimeout( ge, 1e3 ), "insertText" === t ) {
              I && A && A( c, le );
              var u = Z.reduce( ( function ( e, t ) {
                var r = t.__unstableInputRule;
                return r && ( e = r( e ) ), e
              } ), c );
              u !== c && ( ge(), Te( jt( jt( {}, u ), {}, {
                activeFormats: i
              } ) ), N() )
            }
          } else me( de.current )
      }
      var je = Object( ut.useRef )( !1 );

      function we( e ) {
        if ( K.current && K.current.ownerDocument.activeElement === K.current && ( "selectionchange" === e.type || V ) && !d && !Oe.current ) {
          var t = be(),
            r = t.start,
            n = t.end,
            a = t.text,
            o = de.current;
          if ( a === o.text )
            if ( r !== o.start || n !== o.end ) {
              var i = jt( jt( {}, o ), {}, {
                  start: r,
                  end: n,
                  activeFormats: void 0
                } ),
                c = B( i, xt );
              i.activeFormats = c, !k && c.length ? W() : k && !c.length && M(), de.current = i, me( i, {
                domOnly: !0
              } ), w( r, n ), X( c )
            } else 0 === o.text.length && 0 === r && function ( e ) {
              var t = e.getSelection(),
                r = t.anchorNode,
                n = t.anchorOffset;
              if ( r.nodeType === r.ELEMENT_NODE ) {
                var a = r.childNodes[ n ];
                a && a.nodeType === a.ELEMENT_NODE && a.getAttribute( "data-rich-text-placeholder" ) && t.collapseToStart()
              }
            }( oe() );
          else he()
        }
      }

      function Te( e ) {
        var t = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : {},
          r = t.withoutHistory;
        S && ( e.formats = Array( e.text.length ), e.replacements = Array( e.text.length ) ), me( e );
        var n = e.start,
          a = e.end,
          o = e.activeFormats,
          i = void 0 === o ? [] : o;
        Object.values( te ).forEach( ( function ( t ) {
          t( e.formats, e.text )
        } ) ), fe.current = le( e ), de.current = e, w( n, a ), T( fe.current ), X( i ), r || ge()
      }

      function xe( e ) {
        var t = e.target;
        if ( t !== K.current && !t.textContent ) {
          var r = t.parentNode,
            n = Array.from( r.childNodes ).indexOf( t ),
            a = ne().createRange(),
            o = oe().getSelection();
          a.setStart( t.parentNode, n ), a.setEnd( t.parentNode, n + 1 ), o.removeAllRanges(), o.addRange( a )
        }
      }
      var Ee = Object( ut.useRef )();

      function Pe() {
        fe.current = i, de.current = ue( i ), de.current.start = c, de.current.end = u, me( de.current )
      }

      function De() {
        K.current.focus(), me( de.current )
      }
      Object( ut.useEffect )( ( function () {
        je.current && Pe()
      } ), [ n, p ] ), Object( ut.useEffect )( ( function () {
        je.current && i !== fe.current && Pe()
      } ), [ i ] ), Object( ut.useEffect )( ( function () {
        je.current && ( !V || c === de.current.start && u === de.current.end ? de.current = jt( jt( {}, de.current ), {}, {
          start: c,
          end: u
        } ) : Pe() )
      } ), [ c, u, V ] ), Object( ut.useEffect )( ( function () {
        je.current && Pe()
      } ), re ), Object( ut.useLayoutEffect )( ( function () {
        return me( de.current, {
            domOnly: !0
          } ), je.current = !0,
          function () {
            ne().removeEventListener( "selectionchange", we ), oe().cancelAnimationFrame( Ee.current ), oe().clearTimeout( ye.current )
          }
      } ), [] );
      var _e = {
        role: "textbox",
        "aria-multiline": !0,
        "aria-label": p,
        ref: Object( dt.useMergeRefs )( [ t, K, yt( {
          record: de,
          multilineTag: D,
          preserveWhiteSpace: b
        } ) ] ),
        style: Tt,
        className: "rich-text",
        onPaste: function ( e ) {
          if ( V ) {
            var t = e.clipboardData,
              r = "",
              n = "";
            try {
              r = t.getData( "text/plain" ), n = t.getData( "text/html" )
            } catch ( e ) {
              try {
                n = t.getData( "Text" )
              } catch ( e ) {
                return
              }
            }
            if ( e.preventDefault(), window.console.log( "Received HTML:\n\n", n ), window.console.log( "Received plain text:\n\n", r ), S ) Te( ie( de.current, r ) );
            else {
              var a = Z.reduce( ( function ( e, t ) {
                var a = t.__unstablePasteRule;
                return a && e === de.current && ( e = a( de.current, {
                  html: n,
                  plainText: r
                } ) ), e
              } ), de.current );
              if ( a === de.current ) {
                if ( m ) {
                  var o = Object( pt.getFilesFromDataTransfer )( t ),
                    i = "true" === t.getData( "rich-text" );
                  m( {
                    value: se( de.current ),
                    onChange: Te,
                    html: n,
                    plainText: r,
                    isInternal: i,
                    files: Object( y.a )( o ),
                    activeFormats: q
                  } )
                }
              } else Te( a )
            }
          } else e.preventDefault()
        },
        onInput: he,
        onCompositionStart: function () {
          Oe.current = !0, ne().removeEventListener( "selectionchange", we )
        },
        onCompositionEnd: function () {
          Oe.current = !1, he( {
            inputType: "insertText"
          } ), ne().addEventListener( "selectionchange", we )
        },
        onKeyDown: function ( e ) {
          e.defaultPrevented || ( function ( e ) {
            var t = e.keyCode;
            if ( t === ft.DELETE || t === ft.BACKSPACE || t === ft.ESCAPE ) {
              if ( C ) return e.preventDefault(), void L();
              if ( t !== ft.ESCAPE ) {
                var r, n = be(),
                  a = n.start,
                  o = n.end,
                  i = n.text,
                  c = t === ft.BACKSPACE;
                if ( 0 === a && 0 !== o && o === i.length ) return Te( ce( n ) ), void e.preventDefault();
                if ( D && ( r = c && 0 === n.start && 0 === n.end && J( n ) ? pe( n, !c ) : pe( n, c ) ) ) return Te( r ), void e.preventDefault();
                !O || !$( n ) || q.length || c && 0 !== a || !c && o !== i.length || ( O( {
                  isReverse: c,
                  value: n
                } ), e.preventDefault() )
              }
            }
          }( e ), function ( e ) {
            e.keyCode === ft.ENTER && ( e.preventDefault(), j && j( {
              value: se( be() ),
              onChange: Te,
              shiftKey: e.shiftKey
            } ) )
          }( e ), function ( e ) {
            var t = e.keyCode,
              r = e.shiftKey,
              n = e.altKey,
              a = e.metaKey,
              o = e.ctrlKey;
            if ( !( r || n || a || o || t !== ft.SPACE || "li" !== D ) ) {
              var i = be();
              if ( $( i ) ) {
                var c = i.text[ i.start - 1 ];
                c && c !== F || ( Te( et( i, {
                  type: _
                } ) ), e.preventDefault() )
              }
            }
          }( e ), function ( e ) {
            var t = e.keyCode,
              r = e.shiftKey,
              n = e.altKey,
              a = e.metaKey,
              o = e.ctrlKey;
            if ( !( r || n || a || o || t !== ft.LEFT && t !== ft.RIGHT ) ) {
              var i = de.current,
                c = i.text,
                u = i.formats,
                s = i.start,
                l = i.end,
                f = i.activeFormats,
                p = void 0 === f ? [] : f,
                d = $( de.current ),
                b = "rtl" === oe().getComputedStyle( K.current ).direction ? ft.RIGHT : ft.LEFT,
                m = e.keyCode === b;
              if ( d && 0 === p.length ) {
                if ( 0 === s && m ) return;
                if ( l === c.length && !m ) return
              }
              if ( d ) {
                e.preventDefault();
                var v = u[ s - 1 ] || xt,
                  g = u[ s ] || xt,
                  O = p.length,
                  y = g;
                if ( v.length > g.length && ( y = v ), v.length < g.length ? ( !m && p.length < g.length && O++, m && p.length > v.length && O-- ) : v.length > g.length && ( !m && p.length > g.length && O--, m && p.length < v.length && O++ ), O !== p.length ) {
                  var h = y.slice( 0, O ),
                    j = jt( jt( {}, de.current ), {}, {
                      activeFormats: h
                    } );
                  return de.current = j, me( j ), void X( h )
                }
                var T = s + ( m ? -1 : 1 ),
                  x = m ? v : g,
                  E = jt( jt( {}, de.current ), {}, {
                    start: T,
                    end: T,
                    activeFormats: x
                  } );
                de.current = E, me( E ), w( T, T ), X( x )
              }
            }
          }( e ) )
        },
        onFocus: function () {
          x && x(), V ? ( w( de.current.start, de.current.end ), X( B( jt( jt( {}, de.current ), {}, {
            activeFormats: void 0
          } ), xt ) ) ) : ( de.current = jt( jt( {}, de.current ), {}, {
            start: void 0,
            end: void 0,
            activeFormats: xt
          } ), w( void 0, void 0 ), X( xt ) ), Ee.current = oe().requestAnimationFrame( we ), ne().addEventListener( "selectionchange", we )
        },
        onBlur: function () {
          ne().removeEventListener( "selectionchange", we )
        },
        onMouseDown: xe,
        onTouchStart: xe,
        onKeyUp: we,
        onMouseUp: we,
        onTouchEnd: we,
        contentEditable: !d || void 0,
        suppressContentEditableWarning: !d
      };
      return function ( e ) {
        var t = e.activeFormats,
          r = e.ref;
        Object( ut.useEffect )( ( function () {
          if ( t && t.length ) {
            var e = r.current.querySelector( "*[data-rich-text-format-boundary]" );
            if ( e ) {
              var n = e.ownerDocument,
                a = n.defaultView.getComputedStyle( e ).color.replace( ")", ", 0.2)" ).replace( "rgb", "rgba" ),
                o = ".rich-text:focus ".concat( "*[data-rich-text-format-boundary]" ),
                i = "background-color: ".concat( a ),
                c = "".concat( o, " {" ).concat( i, "}" ),
                u = n.getElementById( "rich-text-boundary-style" );
              u || ( ( u = n.createElement( "style" ) ).id = "rich-text-boundary-style", n.head.appendChild( u ) ), u.innerHTML !== c && ( u.innerHTML = c )
            }
          }
        } ), [ t ] )
      }( {
        ref: K,
        activeFormats: q
      } ), Object( ut.useEffect )( ( function () {} ), [] ), Object( ut.createElement )( ut.Fragment, null, V && Object( ut.createElement )( bt, {
        value: de.current,
        onChange: Te,
        onFocus: De,
        formatTypes: Z,
        forwardedRef: K
      } ), s && s( {
        isSelected: V,
        value: de.current,
        onChange: Te,
        onFocus: De,
        editableProps: _e,
        editableTagName: n
      } ), !s && Object( ut.createElement )( n, _e ) )
    } ) )
  },
  62: function ( e, t, r ) {
    "use strict";

    function n( e ) {
      return ( n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( e ) {
        return typeof e
      } : function ( e ) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      } )( e )
    }
    r.d( t, "a", ( function () {
      return n
    } ) )
  }
} );
