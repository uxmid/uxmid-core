# 广播
uxmid-core内部通过发布订阅实现了一套通信机制，类似Vue中的Vuex, React中的Redux。

## 为什么造轮子？
虽然Vue有vuex，React有Redux，但是作为一套抽象框架，必须实现自己的状态管理机制，以便有一致的开发体验。

## 使用

### 定义广播协议
类似`Vuex`里面的`mutation_types`;

```js
// broadcast-mutationTypes.ts
/**
 * 全局广播定义。
 * @config
 */
export default
{
    /**
     * 用户登录。
     * @member
     */
    USER_LOGIN: "user://login",

    /**
     * 用户会话丢失。
     * @member
     */
    USER_SESSION_LOST: "user://session.lost",
};

```

## 发送广播
类似`Vuex`里面的`actions`;

```ts
// broadcast-send.ts
import { Broadcast, BroadcastManager } from "uxmid-core;
import broadcastsMutations from "./broadcast-mutationTypes"

// 新建广播实例
let broadcast: Broadcast = new Broadcast(broadcastsMutations.USER_SESSION_LOST);

// 添加传播数据
broadcast.extras.set("kind", "user");
broadcast.extras.set("data", {hello: "world"});

// 发送广播
BroadcastManager.instance.send(broadcast);
```

## 接收广播
这里用到了`ts`里面的装饰器(`Decorators`)，js里面也有实现但是还在建议征集阶段，还未形成标准，但是ts已经支持了。

这个核心方法在于装饰器`receivable`，它会在`UserBroadcastReceiver`执行之前执行，并把类`UserBroadcastReceiver`放到`BroadcastManager`进行注册, `receivable`实现看[这里](https://github.com/uxmid/uxmid-core/blob/master/src/broadcast/receivable.ts)，想了解装饰器看[这里](https://www.tslang.cn/docs/handbook/decorators.html)。

`receivable`接收两个参数，第一个数广播协议名`uri`, 第二个参数是优先级[`priority`](https://github.com/uxmid/uxmid-core/blob/master/src/broadcast/broadcast-priority.ts)
```ts
import { Broadcast, receivable, IBroadcastReceiver } from "uxmid-core;
import broadcastsMutations from "./broadcast-mutations";

/**
 * 用户广播接收器。
 * @class
 * @version 1.0.0
 */
@receivable(broadcastsMutations.USER_SESSION_LOST)
export default class UserBroadcastReceiver implements IBroadcastReceiver
{
    /**
     * 当接收到广播时调用的方法。
     * @param  {BroadcastContext} context 广播上下文实例。
     * @returns Promise<void>
     */
    public async receive(context: BroadcastContext): Promise<void>
    {
        const kind: string = context.extras.get("kind"); // user
        const data = context.extras.get("data");         // {hello: "world"}

        switch(context.uri)
        {
            case broadcasts.USER_SESSION_LOST:
            {
                // 调用服务强制退出
                // await this.userService.exit();

                // 跳转至登陆视图
                this.router.push("/login");

                break;
            }
        }
    }
}
```

## 注册广播事件
在`workbench`里面注册广播事件；直接导入的话，会自动运行，查看这里[参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import#%E4%BB%85%E4%B8%BA%E5%89%AF%E4%BD%9C%E7%94%A8%E8%80%8C%E5%AF%BC%E5%85%A5%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97)。

```ts
// workbench.ts
// 导入应用广播
import "../broadcast-send";

// 或者

import { UserBroadcastReceiver } from "../broadcast-send";
new UserBroadcastReceiver();

```
