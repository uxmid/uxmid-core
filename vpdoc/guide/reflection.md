# 反射
我们内部实现了一个反射(`Activator`)，不同于js原生的`Reflection`，`Activator`内部传入构造函数和参数后，可以拿到一个实例化之后的函数实体。

## 使用
```ts
import { InvalidOperationException } from "../exceptions";
import { Type } from "../runtime";
import { Activator } from "../reflection";
import CommandBase from "./command-base";
import ICommand from "./i-command";
import CommandExecutor from "./command-executor";

/**
 * 标注当前类型是一个可通过命令执行器执行的命令。
 * @param  {string} path
 */
export default function command(path: string)
{
    if(!path)
    {
        throw new InvalidOperationException("The command path is empty.");
    }
    
    return function(commandType: Function)
    {
        if(!Type.isAssignableFrom(CommandBase, commandType))
        {
            throw new InvalidOperationException(`The class "${Type.getQualifiedClassName(commandType)}" is not a command type.`);
        }
        
        // 生成命令实例
        let command = <ICommand>Activator.createInstance(commandType);
        
        // 注册至默认的执行器中
        CommandExecutor.default.register(path, command);
    };
}
```