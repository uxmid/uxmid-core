import { Type } from "../runtime";

export default class CharUtils
{
    /**
     * 是否是一个单字符串。
     * @public
     * @param  {string} chr
     * @returns boolean
     */
    public static isChar(char: string): boolean
    {
        return Type.isString(char) && char.length === 1;
    }
    
    /**
     * 判断一个单字符串是否是一个拉丁字符，常规字符串集合。
     * @public
     * @param  {string} chr
     * @returns boolean
     */
    public static isLatin(char: string): boolean
    {
        return char.charCodeAt(0) <= 255;
    }

    /**
     * 判断一个单字符串是否是一个ASCII字符。
     * @public
     * @param  {string} chr
     * @returns boolean
     */
    public static isAscii(char: string): boolean
    {
        return char.charCodeAt(0) <= 127;
    }
    
    /**
     * 判断一个单字符串是否是一个数字，大写或者小写字母。
     * @public
     * @param  {string} chr
     * @returns boolean
     */
    public static isLetterOrDigit(char: string): boolean
    {
        if(!this.isChar(char))
        {
            return false;
        }
        
        let regex = /^[0-9a-zA-Z]*$/g;

        return regex.test(char);
    }

    /**
     * 判断一个单字符串是否是一个空格。
     * @public
     * @param  {string} chr
     * @returns boolean
     */
    public static isWhiteSpace(char: string): boolean
    {
        if(!this.isChar(char))
        {
            return false;
        }
        
        let code = char.charCodeAt(0);

        return code === 32 || code >= 9 && code <= 13 || code === 160 || code === 133;
    }
}
