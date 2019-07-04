import Exception from "./exception";

/**
 * 当方法调用对于对象的当前状态无效时引发的异常。
 * @class
 * @version 1.0.0
 */
export default class InvalidOperationException extends Exception
{
    public constructor(message?: string)
    {
        super("InvalidOperationException", message);
    }
}
