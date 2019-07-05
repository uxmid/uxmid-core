# 运行环境
runtime里面提供了一个`Type`方法，里面提供一些常用类型检测与反射相关的方法。

`isArray` 检测一个值是否为数组。

```ts
Type.isArray([]); // true
Type.isArray(123); // false
```

`isObject` 检测一个值是否为对象。

```ts
Type.isObject({}); // true
Type.isObject([]); // false
Type.isObject(123); // false
```

`isString` 检测一个值是否为字符串。

```ts
Type.isString("123"); // true
Type.isString(123); // false
```

`isDate` 检测一个值是否为日期。

```ts
Type.isDate(new Date()); // true
Type.isDate("2018-01-09"); // false
```

`isRegExp` 检测一个值是否为正则表达式。

```ts
Type.isRegExp(new RegExp("/\./", "g")); // true
Type.isRegExp(/\./g); // true
Type.isRegExp("2018-01-09"); // false
```

`isFunction` 检测一个值是否为函数。

```ts
Type.isFunction(Math.floor); // true
Type.isFunction(function(s){console.log(a)}); // true
```

`isBoolean` 检测一个值是否为布尔值。

```ts
Type.isBoolean(true); // true
Type.isBoolean(!!1); // true
Type.isBoolean(1); // false
```

`isNumber` 检测一个值是否为数值。

```ts
Type.isNumber(+true);  // true
Type.isNumber(1);      // true
Type.isNumber(true);   // false
Type.isNumber(+"1");   // false
```

`isNull` 检测一个值是否为 null。

```ts
Type.isNull(null);   // true
Type.isNull(true);   // false
Type.isNull(1);      // false
Type.isNull("1");    // false
```

`isUndefined` 检测一个值是否为 undefined。

```ts
Type.isUndefined(undefined);  // true
Type.isUndefined(true);       // false
Type.isUndefined(1);          // false
Type.isUndefined("1");        // false
```

`isEmptyObject` 检测一个值是否为 null 或 undefined。

```ts
Type.isEmptyObject(undefined);  // true
Type.isEmptyObject(null);       // true
Type.isEmptyObject("");         // false
```

`isEmptyString` 表示一个字符串值是否为 null 或 undefined 或 空值。

```ts
Type.isEmptyString(undefined);  // true
Type.isEmptyString(null);       // true
Type.isEmptyString("");         // true
```

`setMetadata` 设置指定类型的元数据, 在`Type`内部缓存一个元数据，枚举的拓展方法就是用这个实现的。

```ts
Type.setMetadata("hello", { world: "yes" });
```

`getMetadata` 获取指定类型的元数据(事先存储了同类型的数据下，才可取到值)。

```ts
Type.getMetadata("hello"); // => { world: "yes" }
```

`getClassType` 返回对象的类型(即构造函数), 字符串类型的会先eval一遍，如果是函数，可以得到真实类型。

```ts
Type.getClassType(1);                   // => Number
Type.getClassType("1");                 // => String
Type.getClassType("Math.floor");        // => floor
Type.getClassType(true);                // => Boolean
Type.getClassType(null);                // => null
Type.getClassType(undefined);           // => undefined
Type.getClassType(Math.floor);          // => Function
Type.getClassType([]);                  // => Array
Type.getClassType({});                  // => Object
```

<!-- `getClassName` 返回 value 参数指定的对象的类名。

```ts
class B
{
    hello(){
        console.log(2)
    }
}
```

`getQualifiedClassName` 返回 value 参数指定的对象的完全限定类名。

```ts
class B
{
    hello(){
        console.log(2)
    }
}
```

`getSuperclassName` 返回 value 参数指定的对象的基类的类名。

```ts
class B
{
    hello(){
        console.log(2)
    }
}

class A extends B
{
    world()
    {
        console.log(this.hello())
    }
}
``` -->

<!-- `getQualifiedSuperclassName` 返回 value 参数指定的对象的基类的完全限定类名。

```ts
class B
{
    hello(){
        console.log(2)
    }
}

class A extends B
{
    world()
    {
        console.log(this.hello())
    }
}
``` -->

`isAssignableFrom` 确定指定类型的实例是否可以分配给当前类型的实例。

```ts
Type.isAssignableFrom(Object, {});    // true
Type.isAssignableFrom(Array, []);     // true
```

`getTypeString` 获取指定值的类型字符串(小写)。

```ts
Type.getTypeString(1);                          // => number
Type.getTypeString("1");                        // => string
Type.getTypeString(true);                       // => boolean
Type.getTypeString(null);                       // => null
Type.getTypeString(undefined);                  // => undefined
Type.getTypeString(Math.floor);                 // => function
Type.getTypeString([]);                         // => array
Type.getTypeString({});                         // => object
Type.getTypeString(new Set());                  // => set
Type.getTypeString(new Map());                  // => map
Type.getTypeString(Symbol("id"));               // => symbol
Type.getTypeString(BigInt("0x1fffffffffffff")); // => bigint
```
