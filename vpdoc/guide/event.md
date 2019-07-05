# 事件
提供一套事件处理程序，包括事件的注册，移除，触发，取消等。

## 注入事件提供程序
`继承`的方式常应用于一个具有生命周期的实例类的场景，`引入`的方式常用于需要内部仅实现发布订阅的事件逻辑的场景。

```ts

// 继承
class AppExtend extends EventProvider
{
    /**
     * 为指定的事件类型注册一个侦听器，以使侦听器能够接收事件通知。
     * @summary 如果不再需要某个事件侦听器，可调用 removeListener() 删除它，否则会产生内存问题。
     * 由于垃圾回收器不会删除仍包含引用的对象，因此不会从内存中自动删除使用已注册事件侦听器的对象。
     * @param type 事件类型。
     * @param listener 处理事件的侦听器函数。
     * @param scope 侦听函数绑定的 this 对象。
     * @param once 是否添加仅回调一次的事件侦听器，如果此参数设为 true 则在第一次回调时就自动移除监听。
     * @returns void
     */
    public static addListener(type: string, listener: Function, scope?: any, once?: boolean): void
    {
        this.addListener(type, listener, scope, once);
    }
    
    /**
     * 移除侦听器。如果没有注册任何匹配的侦听器，则对此方法的调用没有任何效果。
     * @param type 事件类型。
     * @param listener 处理事件的侦听器函数。
     * @param scope 侦听函数绑定的 this 对象。
     * @returns void
     */
    public static removeListener(type: string, listener: Function, scope?: any): void
    {
        this.removeListener(type, listener, scope);
    }
    
    /**
     * 派发一个指定参数的事件。
     * @param eventArgs 事件参数实例。
     * @returns void
     */
    public static dispatchEvent(args: EventArgs): void
    {
        this.dispatchEvent(args);
    }
}

// 引用
class App
{
    /**
     * 获取一个事件提供程序实例。
     * @private
     * @property
     * @returns IEventProvider
     */
    private static get eventProvider(): IEventProvider
    {
        if(!this._eventProvider)
        {
            this._eventProvider = new EventProvider(this);
        }

        return this._eventProvider;
    }

    /**
     * 为指定的事件类型注册一个侦听器，以使侦听器能够接收事件通知。
     * @summary 如果不再需要某个事件侦听器，可调用 removeListener() 删除它，否则会产生内存问题。
     * 由于垃圾回收器不会删除仍包含引用的对象，因此不会从内存中自动删除使用已注册事件侦听器的对象。
     * @param type 事件类型。
     * @param listener 处理事件的侦听器函数。
     * @param scope 侦听函数绑定的 this 对象。
     * @param once 是否添加仅回调一次的事件侦听器，如果此参数设为 true 则在第一次回调时就自动移除监听。
     * @returns void
     */
    public static addListener(type: string, listener: Function, scope?: any, once?: boolean): void
    {
        this.eventProvider.addListener(type, listener, scope, once);
    }
    
    /**
     * 移除侦听器。如果没有注册任何匹配的侦听器，则对此方法的调用没有任何效果。
     * @param type 事件类型。
     * @param listener 处理事件的侦听器函数。
     * @param scope 侦听函数绑定的 this 对象。
     * @returns void
     */
    public static removeListener(type: string, listener: Function, scope?: any): void
    {
        this.eventProvider.removeListener(type, listener, scope);
    }
    
    /**
     * 派发一个指定参数的事件。
     * @param eventArgs 事件参数实例。
     * @returns void
     */
    public static dispatchEvent(args: EventArgs): void
    {
        this.eventProvider.dispatchEvent(args);
    }
}
```

## 事件监听
```ts
import AppExtend from "./app-extend";

// 常规监听
AppExtend.addListener("hello", (e) => { console.log("world") });

// 监听一次性事件
AppExtend.addListener("hello", (e) => { console.log("world") }, this, true);

```

## 触发事件
创建的事件分两种，一种是常规事件，还提供了一种`可取消`事件；

```ts
import { ApplicationEventArgs, CancelEventArgs } from "uxmid-core";

// ---------------- 常规事件 ----------------
// 激发 "started" 事件
this.dispatchEvent(new ApplicationEventArgs("start", context));

// ---------------- 可取消事件 ----------------
// 创建取消事件参数
let args = new CancelEventArgs(EventName, context);

// 激发 "可取消" 事件
this.dispatchEvent(args);
```
