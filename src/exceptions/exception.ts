
/**
 * 表示在应用程序执行期间发生的错误。
 * @class
 * @version 1.0.0
 */

export default class Exception extends Error
{
    /**
     * 异常名称
     * @public
     * @member
     * @returns string
     */
    public name: string = "";

    /**
     * 异常消息内容
     * @public
     * @member
     * @returns string
     */
    public message: string = "";

    public constructor(name: string, message?: string)
    {
        super();

        this.name = name;
        this.message = message;
    }
}
