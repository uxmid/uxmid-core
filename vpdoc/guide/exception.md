# 异常
在实际工作中为了减少参数为空带来的错误，我们通常会在函数内部会做参数的非空判断并抛出异常提示使用者。常规来讲，我们印象中对`Error`是恐惧的，会尽量减少`Error`，甚至从来不会想过`throw` 一个 `Error`，而适时的抛出异常，通常可以给我们带来更好的开发体验，想要了解更多相关[参考这里](https://segmentfault.com/n/1330000010739350)和[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/throw)。

我们基于Error提供了几个适用于大多场景的异常类型。

## 无效操作异常
常用于调用了不存在的方法，重复调用等场景。
```ts
import { InvalidOperationException } from "uxmid-core";
throw new InvalidOperationException("hello");

/**
 Uncaught InvalidOperationException: hello
    at InvalidOperationException.Exception [as constructor] (uxmid.js:52:29)
    at new InvalidOperationException (uxmid.js:123:24)
    at <anonymous>:1:7
*/

```

## 无效参数异常
常用于函数参数校验。
```ts
import { ArgumentException } from "uxmid-core";
throw new ArgumentException("hello");

/**
 Uncaught ArgumentException: hello
    at ArgumentException.Exception [as constructor] (uxmid.js:52:29)
    at new ArgumentException (uxmid.js:90:24)
    at <anonymous>:1:7
*/
```