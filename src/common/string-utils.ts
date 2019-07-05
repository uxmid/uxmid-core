
const chars = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

export default class StringUtils
{
    /**
     * 去掉字符串中间特定字符并删除首尾空格，常用语路径。
     * @public
     * @param text 
     * @param chars 
     * @returns string
     */
    public static trim(text: string, ...chars: Array<string>): string
    {
        for(let char of chars)
        {
            text = text.replace(new RegExp("^" + char + "+|" + char + "+$", "g"), "");
        }

        return text.trim();
    }

    /**
     * 是否手机号码
     * @public
     * @param text 手机号码字符串
     * @returns string
     */
    public static isMobile(text: string)
    {
        return /^1[34578]\d{9}$/.test(text);
    }
    
    /**
     * 是否密码
     * @public
     * @param text 密码字符串
     * @returns string
     */
    public static isPassword(text: string)
    {
        return text.length >= 6 && text.length <= 16;
    }
    
    /**
     * 返回固定长度 随机大小写英文数字混合字符串
     * @public
     * @param count 随机数长度
     * @returns string
     */
    public static generateRandom(count: number): string
    {
        let result = "";
        
        for(let i = 0; i < count; i ++)
        {
            let id = Math.ceil(Math.random() * 35);
            
            result += chars[id];
        }

        return result;
    }
}
