_Scenario 1_: If the given value is _not_ a `thenable` but a _valid_ Javascript `value`  
[![If the given value is _not_ a `thenable` but a _valid_ Javascript `value`](https://res.cloudinary.com/practicaldev/image/fetch/s--wKe3V1mU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72240446-2ebe0780-360a-11ea-8e8c-e6b0c9b9f20a.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--wKe3V1mU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72240446-2ebe0780-360a-11ea-8e8c-e6b0c9b9f20a.gif)

_Scenario 2_: If the given value is a `thenable` (i.e., Promise or object with `then()` method  
[![If the given value is a `thenable` (i.e., Promise or object with `then()` method](https://res.cloudinary.com/practicaldev/image/fetch/s--t9Zra50e--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72240447-2f569e00-360a-11ea-8a63-25a3920da75d.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--t9Zra50e--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72240447-2f569e00-360a-11ea-8a63-25a3920da75d.gif)

_Scenario 3_: _Nested_ Promise-like objects  
[![_Nested_ Promise-like objects](https://res.cloudinary.com/practicaldev/image/fetch/s--Wc3xDRN5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72240448-2f569e00-360a-11ea-806c-2b283119374a.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--Wc3xDRN5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72240448-2f569e00-360a-11ea-806c-2b283119374a.gif)

_Scenario_: Rejection with a `reason`  
[![Rejection with a `reason`](https://res.cloudinary.com/practicaldev/image/fetch/s--FID-RyO8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72240449-2f569e00-360a-11ea-82e5-ae18cd4155f0.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--FID-RyO8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72240449-2f569e00-360a-11ea-82e5-ae18cd4155f0.gif)

_Scenario 1_: All passed-in Promises get fulfilled  
[![Promise.all - All passed-in Promises get fulfilled](https://res.cloudinary.com/practicaldev/image/fetch/s--4ZL55hYu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72202910-f3e19580-348a-11ea-8a00-49c005f3cdd3.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--4ZL55hYu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72202910-f3e19580-348a-11ea-8a00-49c005f3cdd3.gif)

_Scenario 2_: ⚡️ One or more of the passed-in Promise(s) rejects  
[![⚡️Promise.all - One or more of the passed-in Promise(s) rejects](https://res.cloudinary.com/practicaldev/image/fetch/s--oM4KdCVE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72202911-f3e19580-348a-11ea-99ff-850ced214ddb.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--oM4KdCVE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72202911-f3e19580-348a-11ea-99ff-850ced214ddb.gif)

_Scenario 3_: ⚡️ All passed-in Promises get rejected  
[![⚡️Promise.all - All passed-in Promises get rejected](https://res.cloudinary.com/practicaldev/image/fetch/s--S01S1am6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72202912-f47a2c00-348a-11ea-9ff2-ad6d86514c8c.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--S01S1am6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72202912-f47a2c00-348a-11ea-9ff2-ad6d86514c8c.gif)

_Scenario 4_: Passing an Empty iterable  
[![Promise.all - Passing an Empty iterable](https://res.cloudinary.com/practicaldev/image/fetch/s--gSv6rJt0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72202913-f47a2c00-348a-11ea-9642-684ffb5b771e.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--gSv6rJt0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72202913-f47a2c00-348a-11ea-9642-684ffb5b771e.gif)

_Scenario 1_: All passed-in Promises get fulfilled  
[![Promise.allSettled - All passed-in Promises get fulfilled](https://res.cloudinary.com/practicaldev/image/fetch/s--JywRFstP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72213854-0c4dc080-351c-11ea-9646-c6917ae7df2d.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--JywRFstP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72213854-0c4dc080-351c-11ea-9646-c6917ae7df2d.gif)

_Scenario 2_: One or more of the passed-in Promise(s) rejects  
[![Promise.allSettled - One or more of the passed-in Promise(s) rejects](https://res.cloudinary.com/practicaldev/image/fetch/s--6RlrYb04--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72213855-0ce65700-351c-11ea-947d-b0be63329f3d.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--6RlrYb04--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72213855-0ce65700-351c-11ea-947d-b0be63329f3d.gif)

_Scenario 3_: All passed-in Promises get rejected  
[![Promise.allSettled - All passed-in Promises get rejected](https://res.cloudinary.com/practicaldev/image/fetch/s--xlEPDy20--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72213856-0d7eed80-351c-11ea-9961-06d869c9655e.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--xlEPDy20--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72213856-0d7eed80-351c-11ea-9961-06d869c9655e.gif)

_Scenario 4_: Passing an Empty iterable  
[![Promise.allSettled - Passing an Empty iterable](https://res.cloudinary.com/practicaldev/image/fetch/s--wm4RBJmY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72213857-0d7eed80-351c-11ea-8766-6425dfa4f3e4.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--wm4RBJmY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72213857-0d7eed80-351c-11ea-8766-6425dfa4f3e4.gif)

_Scenario 1_: ⚡️ All passed-in Promises get fulfilled  
[![⚡️Promise.race - All passed-in Promises get fulfilled](https://res.cloudinary.com/practicaldev/image/fetch/s--byxUjDIn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214065-79635500-3520-11ea-937e-5d89d2ce1aa5.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--byxUjDIn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214065-79635500-3520-11ea-937e-5d89d2ce1aa5.gif)

_Scenario 2_: ⚡️ One or more of the passed-in Promise(s) rejects  
[![⚡️Promise.race - One or more of the passed-in Promise(s) rejects](https://res.cloudinary.com/practicaldev/image/fetch/s--VT6cxLfu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214066-79635500-3520-11ea-9544-949800bb450f.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--VT6cxLfu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214066-79635500-3520-11ea-9544-949800bb450f.gif)

_Scenario 3_: ⚡️ All passed-in Promises get rejected  
[![⚡️Promise.race - All passed-in Promises get rejected](https://res.cloudinary.com/practicaldev/image/fetch/s--u_F1zJwA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214067-79635500-3520-11ea-8737-e6c3198dc2ad.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--u_F1zJwA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214067-79635500-3520-11ea-8737-e6c3198dc2ad.gif)

_Scenario 4_: Passing an Empty iterable  
[![Promise.race - Passing an Empty iterable](https://res.cloudinary.com/practicaldev/image/fetch/s--F0aYDjZq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214068-79635500-3520-11ea-999b-6cbfdc073014.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--F0aYDjZq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214068-79635500-3520-11ea-999b-6cbfdc073014.gif)

> `⚠️ Warning` - Promise.any() method is experimental and not fully supported by all browsers. It is currently in the TC39 Candidate stage (Stage 3).

_Scenario 1_: ⚡️ All passed-in Promises get fulfilled  
[![⚡️ Promise.any - All passed-in Promises get fulfilled](https://res.cloudinary.com/practicaldev/image/fetch/s--r269ZuWY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214139-6487c100-3522-11ea-9cc7-137b7f700c0f.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--r269ZuWY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214139-6487c100-3522-11ea-9cc7-137b7f700c0f.gif)

_Scenario 2_: ⚡️ One or more of the passed-in Promise(s) rejects  
[![⚡️ Promise.any - One or more of the passed-in Promise(s) rejects](https://res.cloudinary.com/practicaldev/image/fetch/s--l1MZbza7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214140-6487c100-3522-11ea-9527-609bcc583889.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--l1MZbza7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214140-6487c100-3522-11ea-9527-609bcc583889.gif)

_Scenario 3_: All passed-in Promises get rejected  
[![ Promise.any - All passed-in Promises get rejected](https://res.cloudinary.com/practicaldev/image/fetch/s--QeLNnTIY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214141-65205780-3522-11ea-96e1-9a8697316fb8.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--QeLNnTIY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214141-65205780-3522-11ea-96e1-9a8697316fb8.gif)

_Scenario 4_: Passing an Empty iterable  
[![Promise.any - Passing an Empty iterable](https://res.cloudinary.com/practicaldev/image/fetch/s--OPAMN2zm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214142-65205780-3522-11ea-83e7-fbd3bb4e1c18.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--OPAMN2zm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://user-images.githubusercontent.com/19341550/72214142-65205780-3522-11ea-83e7-fbd3bb4e1c18.gif)
