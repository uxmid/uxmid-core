import { InvalidOperationException } from "../exceptions";
import { Activator } from "../reflection";
import { Map } from "../collections";
import IBroadcastReceiver from "./i-broadcast-receiver";
import BroadcastContract from "./broadcast-contract";
import BroadcastManager from "./broadcast-manager";

const receivers = new Map<Function, IBroadcastReceiver>();

/**
 * 标注当前类型是一个广播接收器。
 * @param uri 广播描述符。
 * @param priority 广播优先级。
 */
export default function receivable(uri: string, priority?: number)
{
    if(!uri)
    {
        throw new InvalidOperationException("The broadcast uri is empty.");
    }

    return function(receiverType: Function): void
    {
        let receiver = receivers.get(receiverType),
            contract = new BroadcastContract(uri);
        
        // 设置优先级
        if(priority)
        {
            contract.priority = priority;
        }

        // 生成接收器实例
        if(!receiver)
        {
            receiver = Activator.createInstance(receiverType) as IBroadcastReceiver;
            
            receivers.set(receiverType, receiver);
        }

        // 注册至管理器中
        BroadcastManager.instance.register(contract, receiver);
    };
}
