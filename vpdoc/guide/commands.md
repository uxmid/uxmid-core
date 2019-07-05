# 命令
使用方式类似广播，但是不同于广播的用途，它的使用强调命令名和参数相关，就像我们使用`npm install uxmid-core --save`; 这里的`npm install`是命令，`uxmid-core`是包名，`--save`是附加参数；

# 例子
```js
// 发送短信注册的命令
"sms.send -template:'register' 18682189878"

// 发送推送
"push.send -name:wechat -type:message -mode:alias -destination:user.100 -title:'task:create"
```

# 使用

## 命令执行的对应的异步逻辑
在必须实现的继承的抽象方法`onExecute`里面去做异步处理的逻辑，`onExecute`返回一个`promise`；
值得一提的是`context.expression`, 获取表达式参数用`arguments`; 所有方法查看[这里](https://github.com/uxmid/uxmid-core/blob/master/src/commands/command-expression.ts)。

```ts
// send-command.ts
import { CommandBase, CommandContext } from "dist/uxmid";

export default class SendCommand extends CommandBase<CommandContext>
{
    /**
     * 验证码短信模板(如：注册或找回密码)。
     * @static
     * @member
     */
    public static readonly TEMPLATE_OPTION: string  = "template";
    
    /**
     * 初始化验证码发送命令。
     * @constructor
     */
    public constructor()
    {
        super("send");
    }
    
    /**
     * 当执行命令时调用。
     * @protected
     * @override
     * @async
     * @param  {CommandContext} context 执行命令的上下文对象。
     * @returns any 执行的返回结果。
     */
    protected async onExecute(context: CommandContext): Promise<any>
    {
        // 解析手机号、模板、模板参数
        let mobile = context.expression.arguments[0],
            template = context.expression.options.get(SendCommand.TEMPLATE_OPTION),
            parameter = context.parameter;
        
        // 调用接口生成本次发送标识符号
        const request = axios.post("http://xxxx.xx", {
            mobile,
            template,
            parameter
        })
        
        // 调用短信接口发送
        return request;
    }
}

```

## 命令的注册及处理
```ts
// ------------------ register command ------------------
import SendCommand from "send-command";

// 获取默认命令执行器实例
const executor = CommandExecutor.default;

// 手工注册一下测试命令
executor.register("sms/send", new SendCommand());

// ------------------ command result ------------------
// `command`执行后返回的是个`promise`。发出命令之后在下面处理异步结果即可。
let promise = executor.execute("sms.send -template:'register' 1380000000");

promise.then((identifier: string) =>
{
    console.log(identifier);
})
.catch((error: any) =>
{
    console.error(error);
});

```



