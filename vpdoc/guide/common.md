# 通用拓展方法

## 枚举拓展方法(`EnumUtils`)
在定义枚举的时候`ts`提供的`enum`类型无法提供别名，在业务场景中又经常需要，于是我们实现了一个基于`enum`的拓展方法，初始化的时候使用`Type.setMetadata`将枚举及拓展数据序列化到内部存储起来。

### 定义枚举
```ts
import { Type } from "uxmid-core";

// 定义枚举
/**
 * 数据加载状态
 * @enum
 * @version 1.0.0
 */
enum LOADING_STATUS
{
    /**
     * 加载中
     * @member
     */
    loading,

    /**
     * 加载完成
     * @member
     */
    finish,
    

    /**
     * 无数据
     * @member
     */
    nodata

}

Type.setMetadata(LOADING_STATUS,
{
    loading:
    {
        alias: "加载中"
    },
    finish:
    {
        alias: "加载完成"
    },
    nodata:
    {
        alias: "无数据"
    }
});

```

### `EnumUtils`使用
```ts
// 获取单个枚举值的所有相关
EnumUtils.getEntry(LOADING_STATUS.loading, LOADING_STATUS);
// {name: "loading", value: 0, alias: "", description: "加载中"}

// 获取枚举的所有值的所有相关
EnumUtils.getEntries(LOADING_STATUS);
/*
    [
        {name: "loading", value: 0, alias: "", description: "加载中"}
        {name: "finish", value: 1, alias: "", description: "加载完成"}
        {name: "nodata", value: 2, alias: "", description: "无数据"}
    ]
*/

// 获取枚举的所有值的键和值
EnumUtils.getFields(LOADING_STATUS);
/*
    [
        ["loading", 0]
        ["finish", 1]
        ["nodata", 2]
    ]
*/
```


## 字符串拓展方法(`CharUtils`)
* `isChar` 是否是一个单字符串。
```ts
CharUtils.isChar("1");      // true
CharUtils.isChar("a");      // true
CharUtils.isChar("ni");     // false
CharUtils.isChar("你");     // true
```

* `isLatin` 判断一个单字符串是否是一个拉丁字符，Acsii码小于128的常规字符串集合。
```ts
CharUtils.isLatin("1");     // true
CharUtils.isLatin("a");     // true
CharUtils.isLatin("B");     // true
CharUtils.isLatin("¥");     // false
CharUtils.isLatin("©");     // false
CharUtils.isLatin("你");    // false
```

* `isAscii` 判断一个单字符串是否是一个ASCII字符，Acsii码小于256的字符串集合。
```ts
CharUtils.isAscii("1");     // true
CharUtils.isAscii("a");     // true
CharUtils.isAscii("B");     // true
CharUtils.isAscii("¥");     // true
CharUtils.isAscii("©");     // true
CharUtils.isAscii("你");    // false
```

* `isLetterOrDigit` 判断一个单字符串是否是一个数字，大写或者小写字母。
```ts
CharUtils.isLetterOrDigit("1");     // true
CharUtils.isLetterOrDigit("a");     // true
CharUtils.isLetterOrDigit("B");     // true
CharUtils.isLetterOrDigit(".");     // false
CharUtils.isLetterOrDigit("+");     // false
CharUtils.isLetterOrDigit("你");    // false
```

* `isWhiteSpace` 判断一个单字符串是否是一个空格。
```ts
CharUtils.isLetterOrDigit(" ");     // true
CharUtils.isLetterOrDigit("  ");    // false
CharUtils.isLetterOrDigit("1");     // false
CharUtils.isLetterOrDigit("a");     // false
CharUtils.isLetterOrDigit("B");     // false
CharUtils.isLetterOrDigit(".");     // false
CharUtils.isLetterOrDigit("+");     // false
```

## 文本拓展方法(`StringUtils`)
* trim，去掉字符串收尾相同的字符串。
```ts
StringUtils.trim(" s s " " ");  //  => 's s'
```

* isMobile，是否手机号码
```ts
StringUtils.isMobile(13800000000);      //  true
StringUtils.isMobile("13800000000");    //  true
StringUtils.isMobile(1380000000);       //  false
```

* isPassword，是否6-16位密码
```ts
StringUtils.isPassword("12345");            //  false
StringUtils.isPassword("12345++++");        //  true
StringUtils.isPassword("0123456789ABCDEFG");//  false
```

* generateRandom，获取固定长度随机数(不保证每次返回唯一)
```ts
StringUtils.generateRandom(12);                  //  "G9MVB1YMPBR1"
```

## 正则拓展方法(`RegexUtils`)
### `uri`的正则
```ts
RegexUtils.uri // => /^([a-zA-Z0-9\.]+:\/\/)(.+)$/
```
### `scheme`的正则
```ts
RegexUtils.scheme // => /^([a-zA-Z0-9\.]+:\/\/)$/
```
