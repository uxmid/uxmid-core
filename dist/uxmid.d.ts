interface IEnumerator<T> {
    /**
     * 获取当前遍历的值。
     * @summary 如果已经遍历结束，则返回 undefined。
     * @property
     * @returns T
     */
    current: T;
    /**
     * 将枚举数推进到集合的下一个元素。
     * @returns boolean 如果枚举数已成功地推进到下一个元素，则为 true；如果枚举数传递到集合的末尾，则为 false。
     */
    next(): boolean;
}

/**
 * 表示一个默认的枚举器。
 * @class
 * @version 1.0.0
 */
declare class Enumerator<T> implements IEnumerator<T> {
    private _items;
    private _current;
    private _index;
    /**
     * 获取当前遍历的值。
     * @summary 如果已经遍历结束，则返回 undefined。
     * @property
     * @returns T
     */
    readonly current: T;
    /**
     * 初始化 Enumerator<T> 类的新实例。
     * @constructor
     * @param  {Array<T>} items 要枚举的元素。
     */
    constructor(items: Array<T>);
    /**
     * 将枚举数推进到集合的下一个元素。
     * @returns boolean 如果枚举数已成功地推进到下一个元素，则为 true；如果枚举数传递到集合的末尾，则为 false。
     */
    next(): boolean;
}

/**
 * 定义可设置或检索的键/值对。
 * @class
 * @version 1.0.0
 */
declare class KeyValuePair<K, V> {
    private _key;
    private _value;
    /**
     * 获取键/值对中的键。
     * @property
     * @returns K
     */
    readonly key: K;
    /**
     * 获取键/值对中的值。
     * @property
     * @returns V
     */
    readonly value: V;
    /**
     * 初始化 KeyValuePair<K, V> 类的新实例。
     * @param  {K} key 每个键/值对中定义的对象。
     * @param  {V} value 与 key 相关联的定义。
     */
    constructor(key: K, value: V);
    /**
     * 使用键和值的字符串表示形式返回 KeyValuePair<K, V> 的字符串表示形式。
     * @override
     * @returns string
     */
    toString(): string;
}

/**
 * 表示实现该接口的是一个可枚举的类型。
 * @interface
 * @version 1.0.0
 */
interface IEnumerable<T> {
    /**
     * 返回一个循环访问集合的枚举器。
     * @returns IEnumerator
     */
    getEnumerator(): IEnumerator<T>;
    /**
     * 对 IEnumerable<T> 进行迭代处理。
     * @param  {Function} callback 每次迭代中执行的回掉函数，当前迭代项将传入该函数。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns void
     */
    forEach(callback: (item: T, source: IEnumerable<T>) => void, scope?: any): void;
}

/**
 * 表示一个用于存储键值对的数据结构。
 * @interface
 * @description IMap 类似于对象，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
 * @version 1.0.0
 */
interface IMap<K, V> extends IEnumerable<KeyValuePair<K, V>> {
    /**
     * 获取 IMap<K, V> 中实际包含的成员总数。
     * @property
     * @returns number
     */
    size: number;
    /**
     * 设置键名 key 对应的键值为 value，然后返回整个 IMap<K, V> 结构。
     * 如果 key 已经有值，则键值会被更新，否则就新生成该键。
     * @param  {K} key 键。
     * @param  {V} value 值。
     * @returns void
     */
    set(key: K, value: V): IMap<K, V>;
    /**
     * 读取 key 对应的键值，如果找不到 key，返回 undefined。
     * @param  {K} key 键。
     * @returns V
     */
    get(key: K): V;
    /**
     * 确定 IMap<K, V> 是否包含指定的键。
     * @param  {K} key 键。
     * @returns boolean 如果 Map<K, V> 包含具有指定键的成员，则为 true；否则为 false。
     */
    has(key: K): boolean;
    /**
     * 从 IMap<K, V> 中删除指定的键对应的项。
     * @param  {K} key 键。
     * @returns boolean  如果成功找到并移除该项，则为 true；否则为 false。
     */
    delete(key: K): boolean;
    /**
     * 清除所有键和值。
     * @returns void
     */
    clear(): void;
    /**
     * 获取包含 IMap<K, V> 中的键列表。
     * @returns Array
     */
    keys(): Array<K>;
    /**
     * 获取包含 IMap<K, V> 中的值列表。
     * @returns Array
     */
    values(): Array<V>;
    /**
     * 获取包含 IMap<K, V> 中的成员列表。
     * @returns Array
     */
    entries(): Array<KeyValuePair<K, V>>;
    /**
     * 返回一个循环访问集合的枚举器。
     * @returns IEnumerator
     */
    getEnumerator(): IEnumerator<KeyValuePair<K, V>>;
    /**
     * 对 IEnumerable<T> 进行迭代处理。
     * @param  {Function} callback 每次迭代中执行的回掉函数，当前迭代项将传入该函数。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns void
     */
    forEach(callback: (item: KeyValuePair<K, V>, source: IEnumerable<KeyValuePair<K, V>>) => void, scope?: any): void;
}

/**
 * 表示一个用于存储键值对的数据结构。
 * @class
 * @description Map 类似于对象，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
 * @version 1.0.0
 */
declare class Map<K, V> implements IMap<K, V> {
    private _keys;
    private _values;
    /**
     * 获取 Map<K, V> 中实际包含的成员总数。
     * @property
     * @returns number
     */
    readonly size: number;
    /**
     * 设置键名 key 对应的键值为 value，然后返回整个 Map<K, V> 结构。
     * 如果 key 已经有值，则键值会被更新，否则就新生成该键。
     * @param  {K} key 键。
     * @param  {V} value 值。
     * @returns void
     */
    set(key: K, value: V): Map<K, V>;
    /**
     * 读取 key 对应的键值，如果找不到 key，返回 undefined。
     * @param  {K} key 键。
     * @returns V
     */
    get(key: K): V;
    /**
     * 确定 Map<K, V> 是否包含指定的键。
     * @param  {K} key 键。
     * @returns boolean 如果 Map<K, V> 包含具有指定键的成员，则为 true；否则为 false。
     */
    has(key: K): boolean;
    /**
     * 从 Map<K, V> 中删除指定的键对应的项。
     * @param  {K} key 键。
     * @returns boolean  如果成功找到并移除该项，则为 true；否则为 false。
     */
    delete(key: K): boolean;
    /**
     * 清除所有键和值。
     * @returns void
     */
    clear(): void;
    /**
     * 返回一个循环访问集合的枚举器。
     * @returns IEnumerator
     */
    getEnumerator(): IEnumerator<KeyValuePair<K, V>>;
    /**
     * 对 IEnumerable<T> 进行迭代处理。
     * @param  {Function} callback 每次迭代中执行的回掉函数，当前迭代项将传入该函数。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns void
     */
    forEach(callback: (item: KeyValuePair<K, V>, source: IEnumerable<KeyValuePair<K, V>>) => void, scope?: any): void;
    /**
     * 获取包含 Map<K, V> 中的键列表。
     * @returns Array
     */
    keys(): Array<K>;
    /**
     * 获取包含 Map<K, V> 中的值列表。
     * @returns Array
     */
    values(): Array<V>;
    /**
     * 获取包含 Map<K, V> 中的成员列表。
     * @returns Array
     */
    entries(): Array<KeyValuePair<K, V>>;
    /**
     * 返回 Map<K, V> 的字符串表示形式。
     * @override
     * @returns string
     */
    toString(): string;
}

/**
 * 表示一个强类型列表。提供用于对列表进行搜索、排序和操作的方法。
 * @interface
 * @description ISet<T> 接受 null 作为引用类型的有效值，但是不允许有重复的元素。
 * @version 1.0.0
 */
interface ISet<T> extends IEnumerable<T> {
    /**
     * 获取 ISet<T> 中实际包含的元素总数。
     * @property
     * @returns number
     */
    size: number;
    /**
     * 将元素添加到 ISet<T> 的结尾处。
     * @param  {Array<T>} ...values 要添加到 ISet<T> 末尾处的元素。
     * @returns Set
     */
    add(...values: Array<T>): ISet<T>;
    /**
     * 获取指定索引处的元素。
     * @param  {number} index 要获得或设置的元素从零开始的索引。
     * @returns T 指定索引处的元素。
     */
    get(index: number): T;
    /**
     * 设置指定索引处的元素。
     * @param  {number} index 设置的元素从零开始的索引。
     * @param  {T} value 元素值。
     * @returns void
     */
    set(index: number, value: T): void;
    /**
     * 从 ISet<T> 中移除特定元素的匹配项。
     * @param  {T} value 要从 ISet<T> 中移除的元素。
     * @returns boolean 如果成功移除 value，则为 true；否则为 false。如果在 ISet<T> 中没有找到 value，该方法也会返回 false。
     */
    delete(value: T): boolean;
    /**
     * 移除 ISet<T> 的指定索引处的元素。
     * @param  {number} index 要移除的元素的从零开始的索引。
     * @returns void
     */
    deleteAt(index: number): void;
    /**
     * 从 ISet<T> 中移除所有元素。
     * @returns void
     */
    clear(): void;
    /**
     * 搜索指定的元素，并返回整个 ISet<T> 中第一个匹配项的从零开始的索引。
     * @param  {T} value 要在 ISet<T> 中定位的元素。对于引用类型，该值可以为 null。
     * @param  {number} index? 从零开始的搜索的起始索引。
     * @returns number 如果在整个 ISet<T> 中找到 value 的第一个匹配项，则为该项的从零开始的索引；否则为 -1。
     */
    indexOf(value: T, index?: number): number;
    /**
     * 确定某元素是否在 ISet<T> 中。
     * @param  {T} value 要在 ISet<T> 中定位的元素。对于引用类型，该值可以为 null。
     * @returns boolean 如果在 ISet<T> 中找到 value，则为 true，否则为 false。
     */
    has(value: T): boolean;
    /**
     * 返回一个循环访问集合的枚举器。
     * @returns IEnumerator
     */
    getEnumerator(): IEnumerator<T>;
    /**
     * 对 IEnumerable<T> 进行迭代处理。
     * @param  {(item:T,source:IEnumerable<T>)=>void} callback 每次迭代中执行的回掉函数，当前迭代项将传入该函数。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns void
     */
    forEach(callback: (item: T, source: IEnumerable<T>) => void, scope?: any): void;
    /**
     * 对 ISet<T> 进行迭代处理。
     * @param  {(value:T,index:number,set:ISet<T>)=>void} callback 每次迭代中执行的回掉函数，当前迭代项及它的索引号将被作为参数传入该函数。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns void
     */
    forEach(callback: (value: T, index: number, set: ISet<T>) => void, scope?: any): void;
    /**
     * 搜索与指定谓词所定义的条件相匹配的元素，并返回 ISet<T> 中第一个匹配元素。
     * @param  {(value:T,index:number,set:ISet<T>)=>boolean} callback 定义要搜索的元素的条件。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns T
     */
    find(callback: (value: T, index: number, set: ISet<T>) => boolean, scope?: any): T;
    /**
     * 使用指定的比较器对整个 ISet<T> 中的元素进行排序。
     * @param  {(a:T,b:T)=>number} comparer? 比较元素时要使用的比较器函数。
     * @returns void
     */
    sort(comparer?: (a: T, b: T) => number): void;
    /**
     * 将指定的 ISet<T> 合并到当前 ISet<T> 中。
     * @param  {ISet<T>} second 需要合并的数据源。
     * @returns ISet
     */
    union(source: ISet<T>): ISet<T>;
    /**
     * 获取包含 ISet<T> 中的值列表。
     * @returns Array
     */
    values(): Array<T>;
}

/**
 * 表示一个强类型列表。提供用于对列表进行搜索、排序和操作的方法。
 * @class
 * @description Set<T> 接受 null 作为引用类型的有效值，但是不允许有重复的元素。
 * @version 1.0.0
 */
declare class Set<T> implements ISet<T> {
    private _values;
    /**
     * 获取 Set<T> 中实际包含的元素总数。
     * @property
     * @returns number
     */
    readonly size: number;
    /**
     * 初始化 Set<T> 的新实例。
     * @param  {Array<T>} ...values
     */
    constructor(...values: Array<T>);
    /**
     * 将元素添加到 Set<T> 的结尾处。
     * @param  {T[]} ...values 要添加到 Set<T> 末尾处的元素。
     * @returns Set
     */
    add(...values: Array<T>): Set<T>;
    /**
     * 获取指定索引处的元素。
     * @param  {number} index 要获得或设置的元素从零开始的索引。
     * @returns T 指定索引处的元素。
     */
    get(index: number): T;
    /**
     * 设置指定索引处的元素。
     * @param  {number} index 设置的元素从零开始的索引。
     * @param  {T} value 元素值。
     * @returns void
     */
    set(index: number, value: T): void;
    /**
     * 从 Set<T> 中移除特定元素的匹配项。
     * @param  {T} value 要从 Set<T> 中移除的元素。
     * @returns boolean 如果成功移除 value，则为 true；否则为 false。如果在 Set<T> 中没有找到 value，该方法也会返回 false。
     */
    delete(value: T): boolean;
    /**
     * 移除 Set<T> 的指定索引处的元素。
     * @param  {number} index 要移除的元素的从零开始的索引。
     * @returns void
     */
    deleteAt(index: number): void;
    /**
     * 从 Set<T> 中移除所有元素。
     * @returns void
     */
    clear(): void;
    /**
     * 搜索指定的元素，并返回整个 Set<T> 中第一个匹配项的从零开始的索引。
     * @param  {T} value 要在 Set<T> 中定位的元素。对于引用类型，该值可以为 null。
     * @param  {number} index? 从零开始的搜索的起始索引。
     * @returns number 如果在整个 Set<T> 中找到 value 的第一个匹配项，则为该项的从零开始的索引；否则为 -1。
     */
    indexOf(value: T, index?: number): number;
    /**
     * 确定某元素是否在 Set<T> 中。
     * @param  {T} value 要在 Set<T> 中定位的元素。对于引用类型，该值可以为 null。
     * @returns boolean 如果在 Set<T> 中找到 value，则为 true，否则为 false。
     */
    has(value: T): boolean;
    /**
     * 返回一个循环访问集合的枚举器。
     * @returns IEnumerator
     */
    getEnumerator(): IEnumerator<T>;
    /**
     * 对 Set<T> 进行迭代处理。
     * @param  {(item:T,index:number,set:Set<T>)=>void} callback 每次迭代中执行的回掉函数，当前迭代项及它的索引号将被作为参数传入该函数。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns void
     */
    forEach(callback: (item: T, index: number, set: Set<T>) => void, scope?: any): void;
    /**
     * 对 IEnumerable<T> 进行迭代处理。
     * @param  {(value:T,source:IEnumerable<T>)=>void} callback 每次迭代中执行的回掉函数，当前迭代项将传入该函数。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns void
     */
    forEach(callback: (value: T, source: IEnumerable<T>) => void, scope?: any): void;
    /**
     * 搜索与指定谓词所定义的条件相匹配的元素，并返回 Set<T> 中第一个匹配元素。
     * @param  {Function} callback 定义要搜索的元素的条件。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns T
     */
    find(callback: (value: T, index: number, set: Set<T>) => boolean, scope?: any): T;
    /**
     * 使用指定的比较器对整个 Set<T> 中的元素进行排序。
     * @param  {Function} comparer? 比较元素时要使用的比较器函数。
     * @returns void
     */
    sort(comparer?: (a: T, b: T) => number): void;
    /**
     * 将指定的 ISet<T> 合并到当前 ISet<T> 中。
     * @param  {ISet<T>} second 需要合并的数据源。
     * @returns ISet
     */
    union(source: ISet<T>): ISet<T>;
    /**
     * 获取包含 Set<T> 中的值列表。
     * @returns Array
     */
    values(): Array<T>;
    /**
     * 返回 Set<T> 的字符串表示形式。
     * @override
     * @returns string
     */
    toString(): string;
}

/**
 * 表示用户的安全凭证。
 * @interface
 * @version 1.0.0
 */
interface ICredential {
    /**
     * 获取安全凭证编号。
     * @member
     * @returns string
     */
    credentialId: string;
    /**
     * 获取安全凭证对应的用户编号。
     * @member
     * @returns string
     */
    userId: string;
    /**
     * 获取安全凭证的过期时间。
     * @member
     * @returns Date
     */
    expires?: Date;
}

/**
 * 标注当前类型是一个可注入的服务。
 * @summary 如果未指定 providerName 参数则默认注入至默认服务容器中。
 * @param  {string} providerName? 服务容器名称。
 */
declare function injectable(providerName?: string): (serviceType: Function) => void;

/**
 * 定义用于生成服务实例的机制。
 * @interface
 * @version 1.0.0
 */
interface IServiceBuilder {
    /**
     * 根据服务项生成服务实例。
     * @param  {ServiceEntry} entry 服务项。
     * @returns any
     */
    build(entry: ServiceEntry): any;
}

/**
 * 表示一个用于存取服务使用的服务项。
 * @class
 * @version 1.0.0
 */
declare class ServiceEntry {
    private _name;
    private _service;
    private _serviceType;
    private _contractTypes;
    private _serviceBuilder;
    /**
     * 获取服务的名称。
     * @property
     * @returns string
     */
    readonly name: string;
    /**
     * 获取服务的类型。
     * @property
     * @returns Function
     */
    readonly serviceType: Function;
    /**
     * 获取服务实例。
     * @property
     * @returns any
     */
    readonly service: any;
    /**
     * 获取一个布尔值，表示当前服务项是否包含服务实例。
     * @property
     * @returns boolean
     */
    readonly hasService: boolean;
    /**
     * 获取一个布尔值，表示当前服务项是否包含契约类型。
     * @property
     * @returns boolean
     */
    readonly hasContracts: boolean;
    /**
     * 获取当前服务项包含的所有契约类型。
     * @property
     * @returns Function
     */
    readonly contractTypes: Array<Function>;
    /**
     * 获取或设置服务生成器。
     * @property
     * @param  {IServiceBuilder} value
     */
    serviceBuilder: IServiceBuilder;
    /**
     * 初始化一个服务项的新实例。
     * @param  {Function} serviceType 服务类型。
     * @param  {Array<Function>} contractTypes? 契约类型。
     */
    constructor(serviceType: Function, contractTypes?: Array<Function>);
    /**
     * 初始化一个服务项的新实例。
     * @param  {any} service 服务实例。
     * @param  {Array<Function>} contractTypes? 契约类型。
     */
    constructor(service: any, contractTypes?: Array<Function>);
    /**
     * 初始化一个服务项的新实例。
     * @param  {string} name 服务名称。
     * @param  {Function} serviceType 服务类型。
     * @param  {Array<Function>} contractTypes? 契约类型。
     */
    constructor(name: string, serviceType: Function, contractTypes?: Array<Function>);
    /**
     * 初始化一个服务项的新实例。
     * @param  {string} name 服务名称。
     * @param  {any} service 服务实例。
     * @param  {Array<Function>} contractTypes? 契约类型。
     */
    constructor(name: string, service: any, contractTypes?: Array<Function>);
    /**
     * 返回服务项的字符串表现形式。
     * @override
     * @returns string
     */
    toString(): string;
    /**
     * 创建服务实例。
     * @protected
     * @virtual
     * @returns any
     */
    protected createService(): any;
}

/**
 * 表示实现该接口的是一个服务项仓储。
 * @interface
 * @version 1.0.0
 */
interface IServiceStorage extends IEnumerable<ServiceEntry> {
    /**
     * 添加一个服务项至仓储中。
     * @param  {ServiceEntry} entry 服务项实例。
     * @returns void
     */
    add(entry: ServiceEntry): void;
    /**
     * 清空当前仓储下的所有服务项。
     * @returns void
     */
    clear(): void;
    /**
     * 移除指定的服务名对应的服务项。
     * @param  {string} name 服务名称。
     * @returns ServiceEntry 服务项实例
     */
    remove(name: string): ServiceEntry;
    /**
     * 获取指定名称的服务项实例。
     * @param  {string} name
     * @returns ServiceEntry 服务项实例。
     */
    get(name: string): ServiceEntry;
    /**
     * 获取指定服务类型对应的服务项实例。
     * @param  {Function|string} serviceType 服务类型。
     * @returns ServiceEntry 服务项实例。
     */
    get(serviceType: Function | string): ServiceEntry;
    /**
     * 获取指定服务类型的所有服务项实例。
     * @param  {Function} serviceType 服务类型。
     * @returns IEnumerable<ServiceEntry> 服务项列表。
     */
    getAll(serviceType: Function): IEnumerable<ServiceEntry>;
}

/**
 * 定义用于检索服务对象的机制。
 * @interface
 * @version 1.0.0
 */
interface IServiceProvider {
    /**
     * 获取服务仓储实例。
     * @property
     */
    storage: IServiceStorage;
    /**
     * 注册一个服务至服务容器中。
     * @param  {string} name 服务名称。
     * @param  {Function} serviceType 服务类型。
     * @returns void
     */
    register(name: string, serviceType: Function): void;
    /**
     * 注册一个服务至服务容器中。
     * @param  {string} name 服务名称。
     * @param  {Function} serviceType 服务类型。
     * @param  {Array<Function>} contractTypes? 契约类型。
     * @returns void
     */
    register(name: string, serviceType: Function, contractTypes?: Array<Function>): void;
    /**
     * 注册一个服务至服务容器中。
     * @param  {string} name 服务名称。
     * @param  {any} service 服务实例。
     * @returns void
     */
    register(name: string, service: any): void;
    /**
     * 注册一个服务至服务容器中。
     * @param  {string} name 服务名称。
     * @param  {any} service 服务实例。
     * @param  {Array<Function>} contractTypes? 契约类型。
     * @returns void
     */
    register(name: string, service: any, contractTypes?: Array<Function>): void;
    /**
     * 注册一个服务至服务容器中。
     * @param  {Function} serviceType 服务类型。
     * @param  {Array<Function>} contractTypes? 契约类型。
     * @returns void
     */
    register(serviceType: Function, contractTypes?: Array<Function>): void;
    /**
     * 注册一个服务至服务容器中。
     * @param  {any} service 服务实例。
     * @param  {Array<Function>} contractTypes? 契约类型。
     * @returns void
     */
    register(service: any, contractTypes?: Array<Function>): void;
    /**
     * 移除指定名称的服务。
     * @param  {string} name 服务名称。
     * @returns void
     */
    unregister(name: string): void;
    /**
     * 根据指定服务名称获取服务实例。
     * @param  {string} name 服务名称。
     * @returns any
     */
    resolve<T>(name: string): T;
    /**
     * 根据指定服务类型获取服务实例。
     * @param  {Function|string} serviceType 服务类型。
     * @returns T
     */
    resolve<T>(serviceType: Function | string): T;
    /**
     * 根据指定服务类型获取所有服务实例。
     * @param  {Function} serviceType
     * @returns IEnumerable
     */
    resolveAll<T>(serviceType: Function): IEnumerable<T>;
}

/**
 * 用于检索服务对象的提供程序。
 * @class
 * @version 1.0.0
 */
declare class ServiceProvider implements IServiceProvider {
    protected _storage: IServiceStorage;
    protected _builder: IServiceBuilder;
    /**
     * 获取服务仓储实例。
     * @property
     * @returns IServiceStorage
     */
    readonly storage: IServiceStorage;
    /**
     * 获取服务生成器实例。
     * @property
     * @returns IServiceBuilder
     */
    readonly builder: IServiceBuilder;
    /**
     * 初始化服务提供程序的新实例。
     * @param  {IServiceStorage} storage? 服务仓储实例。
     * @param  {IServiceBuilder} builder? 服务生成器实例。
     */
    constructor(storage?: IServiceStorage, builder?: IServiceBuilder);
    /**
     * 注册一个服务至服务容器中。
     * @param  {string} name 服务名称。
     * @param  {Function} serviceType 服务类型。
     * @returns void
     */
    register(name: string, serviceType: Function): void;
    /**
     * 注册一个服务至服务容器中。
     * @param  {string} name 服务名称。
     * @param  {Function} serviceType 服务类型。
     * @param  {Array<Function>} contractTypes? 契约类型。
     * @returns void
     */
    register(name: string, serviceType: Function, contractTypes?: Array<Function>): void;
    /**
     * 注册一个服务至服务容器中。
     * @param  {string} name 服务名称。
     * @param  {any} service 服务实例。
     * @returns void
     */
    register(name: string, service: any): void;
    /**
     * 注册一个服务至服务容器中。
     * @param  {string} name 服务名称。
     * @param  {any} service 服务实例。
     * @param  {Array<Function>} contractTypes? 契约类型。
     * @returns void
     */
    register(name: string, service: any, contractTypes?: Array<Function>): void;
    /**
     * 注册一个服务至服务容器中。
     * @param  {Function} serviceType 服务类型。
     * @param  {Array<Function>} contractTypes? 契约类型。
     * @returns void
     */
    register(serviceType: Function, contractTypes?: Array<Function>): void;
    /**
     * 注册一个服务至服务容器中。
     * @param  {any} service 服务实例。
     * @param  {Array<Function>} contractTypes? 契约类型。
     * @returns void
     */
    register(service: any, contractTypes?: Array<Function>): void;
    /**
     * 移除指定名称的服务。
     * @param  {string} name 服务名称。
     * @returns void
     */
    unregister(name: string): void;
    /**
     * 根据指定服务名称获取服务实例。
     * @param  {string} name 服务名称。
     * @returns any
     */
    resolve<T>(name: string): T;
    /**
     * 根据指定服务类型获取服务实例。
     * @param  {Function|string} serviceType 服务类型。
     * @returns T
     */
    resolve<T>(serviceType: Function | string): T;
    /**
     * 根据指定服务类型获取所有服务实例。
     * @param  {Function} serviceType
     * @returns IEnumerable
     */
    resolveAll<T>(serviceType: Function): IEnumerable<T>;
    /**
     * 根据服务项获取服务实例。
     * @protected
     * @virtual
     * @param  {ServiceEntry} entry
     * @returns any 如果获取到服务则返回服务实例，否则为 null。
     */
    protected getService(entry: ServiceEntry): any;
}

/**
 * 提供关于服务供应程序容器的功能。
 * @interface
 * @version 1.0.0
 */
interface IServiceProviderFactory {
    /**
     * 获取设置默认的服务供应程序。
     * @property
     */
    default: IServiceProvider;
    /**
     * 获取指定名称的服务供应程序。
     * @param  {string} name 指定的服务供应程序名称。
     * @returns IServiceProvider 返回指定名称的服务供应程序。
     */
    getProvider(name: string): IServiceProvider;
}

/**
 * 提供关于服务供应程序容器的功能。
 * @class
 * @version 1.0.0
 */
declare class ServiceProviderFactory implements IServiceProviderFactory, IEnumerable<KeyValuePair<string, IServiceProvider>> {
    private _defaultName;
    private _providers;
    private static _instance;
    /**
     * 获取一个服务提供程序工厂的单实例。
     * @static
     * @property
     * @returns ServiceProviderFactory
     */
    static readonly instance: ServiceProviderFactory;
    /**
     * 获取或设置默认的服务提供程序。
     * @property
     */
    default: IServiceProvider;
    /**
     * 初始化服务提供程序工厂的新实例。
     * @param  {string} defaultName? 默认提供程序名称。
     */
    protected constructor(defaultName?: string);
    /**
     * 注册服务提供程序。
     * @param  {string} name 要注册的服务供应程序的名称。
     * @param  {IServiceProvider} provider 服务提供程序实例。
     * @returns void
     */
    register(name: string, provider: IServiceProvider): void;
    /**
     * 注销服务提供程序。
     * @param  {string} name 要注销的服务提供程序名称。
     */
    unregister(name: string): void;
    /**
     * 获取指定名称的服务供应程序。
     * @param  {string} name 指定的服务供应程序名称。
     * @returns IServiceProvider 返回指定名称的服务供应程序。
     */
    getProvider(name: string): IServiceProvider;
    /**
     * 返回一个循环访问集合的枚举器。
     * @returns IEnumerator<KeyValuePair<string, IServiceProvider>>
     */
    getEnumerator(): IEnumerator<KeyValuePair<string, IServiceProvider>>;
    /**
     * 对 IEnumerable<T> 进行迭代处理。
     * @param  {Function} callback 每次迭代中执行的回掉函数，当前迭代项将被作为参数传入该函数。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns void
     */
    forEach(callback: (item: KeyValuePair<string, IServiceProvider>, source: IEnumerable<KeyValuePair<string, IServiceProvider>>) => void, scope?: any): void;
}

/**
 * 服务仓储基类。
 * @abstract
 * @class
 * @version 1.0.0
 */
declare abstract class ServiceStorageBase implements IServiceStorage {
    private _provider;
    /**
     * 获取当前实际存储的服务项总数。
     * @property
     * @returns number
     */
    abstract readonly size: number;
    /**
     * 获取一个服务提供程序实例。
     * @property
     * @returns IServiceProvider
     */
    readonly provider: IServiceProvider;
    /**
     * 初始化服务仓储的新实例。
     * @param  {IServiceProvider} provider
     */
    constructor(provider: IServiceProvider);
    /**
     * 添加一个服务项至仓储中。
     * @param  {ServiceEntry} entry 服务项实例。
     * @returns void
     */
    add(entry: ServiceEntry): void;
    /**
     * 添加一个服务项至仓储中。
     * @param  {Function} serviceType 服务类型。
     * @returns ServiceEntry
     */
    add(serviceType: Function): ServiceEntry;
    /**
     * 添加一个服务项至仓储中。
     * @param  {any} service 服务实例。
     * @returns ServiceEntry
     */
    add(service: any): ServiceEntry;
    /**
     * 添加一个服务项至仓储中。
     * @param  {Function} serviceType 服务类型。
     * @param  {Array<Function>} contractTypes? 契约类型。
     * @returns ServiceEntry
     */
    add(serviceType: Function, contractTypes?: Array<Function>): ServiceEntry;
    /**
     * 添加一个服务项至仓储中。
     * @param  {any} service 服务实例。
     * @param  {Array<Function>} contractTypes? 契约类型。
     * @returns ServiceEntry
     */
    add(service: any, contractTypes?: Array<Function>): ServiceEntry;
    /**
     * 添加一个服务项至仓储中。
     * @param  {string} name 服务名称。
     * @param  {Function} serviceType 服务类型。
     * @returns ServiceEntry
     */
    add(name: string, serviceType: Function): ServiceEntry;
    /**
     * 添加一个服务项至仓储中。
     * @param  {string} name 服务名称。
     * @param  {any} service 服务实例。
     * @returns ServiceEntry
     */
    add(name: string, service: any): ServiceEntry;
    /**
     * 添加一个服务项至仓储中。
     * @param  {string} name 服务名称。
     * @param  {Function} serviceType 服务类型。
     * @param  {Array<Function>} contractTypes? 契约类型。
     * @returns ServiceEntry
     */
    add(name: string, serviceType: Function, contractTypes?: Array<Function>): ServiceEntry;
    /**
     * 添加一个服务项至仓储中。
     * @param  {string} name 服务名称。
     * @param  {any} service 服务实例。
     * @param  {Array<Function>} contractTypes? 契约类型。
     * @returns ServiceEntry
     */
    add(name: string, service: any, contractTypes?: Array<Function>): ServiceEntry;
    /**
     * 获取指定名称的服务项实例。
     * @param  {string} name
     * @returns ServiceEntry 服务项实例。
     */
    get(name: string): ServiceEntry;
    /**
     * 获取指定服务类型对应的服务项实例。
     * @param  {Function | string} serviceType 服务类型。
     * @returns ServiceEntry 服务项实例。
     */
    get(serviceType: Function | string): ServiceEntry;
    /**
     * 获取指定服务类型的所有服务项实例。
     * @param  {Function} serviceType 服务类型。
     * @returns IEnumerable<ServiceEntry> 服务项列表。
     */
    getAll(serviceType: Function): IEnumerable<ServiceEntry>;
    /**
     * 清空当前仓储下的所有服务项。
     * @abstract
     * @returns void
     */
    abstract clear(): void;
    /**
     * 移除指定名称的服务项。
     * @abstract
     * @returns ServiceEntry 移除后的服务项。
     */
    abstract remove(name: string): ServiceEntry;
    /**
     * 返回一个循环访问集合的枚举器。
     * @returns IEnumerator
     */
    abstract getEnumerator(): IEnumerator<ServiceEntry>;
    /**
     * 对 IEnumerable<T> 进行迭代处理。
     * @param  {(item:T,source:IEnumerable<T>)=>void} callback 每次迭代中执行的回掉函数，当前迭代项将传入该函数。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns void
     */
    abstract forEach(callback: (item: ServiceEntry, source: IEnumerable<ServiceEntry>) => void, scope?: any): void;
    /**
     * 添加一个服务项至仓储中。
     * @abstract
     * @param  {ServiceEntry} entry 服务项实例。
     * @returns void
     */
    protected abstract insert(entry: ServiceEntry): void;
    /**
     * 根据名称在指定的服务项列表中查找服务项。
     * @virtual
     * @param  {string} name 服务名称。
     * @param  {ISet<IServiceStorage>} storages 服务仓储列表。
     * @returns ServiceEntry
     */
    protected findByName(name: string, storages: ISet<IServiceStorage>): ServiceEntry;
    /**
     * 根据指定的类型进行寻找。
     * @virtual
     * @param  {Function | string} type 要查找的服务类型。
     * @param  {boolean} isMultiplex 是否为多个结果。
     * @returns any
     */
    protected findByType(type: Function | string, isMultiplex: boolean): ServiceEntry | ISet<ServiceEntry>;
    /**
     * 在指定的仓储中搜索类型。
     * @private
     * @returns any
     */
    private searchService;
}

/**
 * 表示一个用于存取服务项的仓储容器。
 * @class
 * @version 1.0.0
 */
declare class ServiceStorage extends ServiceStorageBase {
    private _entries;
    private _namedEntries;
    /**
     * 获取当前实际存储的服务项总数。
     * @override
     * @property
     * @returns number
     */
    readonly size: number;
    /**
     * 初始化服务仓储的实例。
     * @param  {IServiceProvider} provider
     */
    constructor(provider: IServiceProvider);
    /**
     * 清空当前仓储下的所有服务项。
     * @override
     * @returns void
     */
    clear(): void;
    /**
     * 移除指定名称的服务项。
     * @override
     * @returns ServiceEntry 移除后的服务项。
     */
    remove(name: string): ServiceEntry;
    /**
     * 获取指定名称的服务项实例。
     * @param  {string} name
     * @returns ServiceEntry 服务项实例。
     */
    get(name: string): ServiceEntry;
    /**
     * 获取指定服务类型对应的服务项实例。
     * @param  {Function|string} serviceType 服务类型。
     * @returns ServiceEntry 服务项实例。
     */
    get(serviceType: Function | string): ServiceEntry;
    /**
     * 返回一个循环访问集合的枚举器。
     * @returns IEnumerator
     */
    getEnumerator(): IEnumerator<ServiceEntry>;
    /**
     * 对当前仓储进行迭代处理。
     * @override
     * @param  {Function} callback 每次迭代中执行的回掉函数，当前迭代项及它的索引号将被作为参数传入该方法。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns void
     */
    forEach(callback: (value: ServiceEntry, source: IEnumerable<ServiceEntry>) => void, scope?: any): void;
    /**
     * 添加一个服务项至仓储中。
     * @override
     * @param  {ServiceEntry} entry 服务项实例。
     * @returns void
     */
    protected insert(entry: ServiceEntry): void;
}

/**
 * EventArgs 类作为创建事件参数的基类，当发生事件时，EventArgs 实例将作为参数传递给事件侦听器。
 * @class
 * @version 1.0.0
 */
declare class EventArgs {
    private _type;
    private _source;
    private _data;
    /**
     * 获取一个字符串值，表示事件的类型。
     * @property
     * @returns string
     */
    readonly type: string;
    /**
     * 获取或设置事件源对象。
     * @property
     * @returns any
     */
    source: any;
    /**
     * 获取或设置与事件关联的可选数据。
     * @property
     * @returns any
     */
    data: any;
    /**
     * 初始化 EventArgs 类的新实例。
     * @constructor
     * @param  {string} type 事件类型。
     * @param  {any?} data 可选数据。
     */
    constructor(type: string, data?: any);
}

/**
 * 为可取消的事件提供数据。
 * @class
 * @version 1.0.0
 */
declare class CancelEventArgs extends EventArgs {
    private _cancel;
    /**
     * 获取或设置指示是否应取消事件。
     * @property
     * @returns boolean
     */
    cancel: boolean;
}

/**
 * 定义用于添加或删除事件侦听器的方法，检查是否已注册特定类型的事件侦听器，并调度事件。
 * @interface
 * @version 1.0.0
 */
interface IEventProvider {
    /**
     * 为指定的事件类型注册一个侦听器，以使侦听器能够接收事件通知。
     * @summary 如果不再需要某个事件侦听器，可调用 removeListener() 删除它，否则会产生内存问题。
     * 由于垃圾回收器不会删除仍包含引用的对象，因此不会从内存中自动删除使用已注册事件侦听器的对象。
     * @param  {string} type 事件类型。
     * @param  {Function} 处理事件的侦听器函数。
     * @param  {any} scope? 侦听函数绑定的 this 对象。
     * @param  {boolean} once? 是否添加仅回调一次的事件侦听器，如果此参数设为 true 则在第一次回调时就自动移除监听。
     * @returns void
     */
    addListener(type: string, listener: Function, scope?: any, once?: boolean): void;
    /**
     * 移除侦听器。如果没有注册任何匹配的侦听器，则对此方法的调用没有任何效果。
     * @param  {string} type 事件类型。
     * @param  {Function} listener 处理事件的侦听器函数。
     * @param  {any} scope? 侦听函数绑定的 this 对象。
     * @returns void
     */
    removeListener(type: string, listener: Function, scope?: any): void;
    /**
     * 检查是否为特定事件类型注册了侦听器。
     * @param  {string} type 事件类型。
     * @returns boolean 如果指定类型的侦听器已注册，则值为 true；否则，值为 false。
     */
    hasListener(type: string): boolean;
    /**
     * 派发一个指定类型的事件。
     * @param  {string} type 事件类型。
     * @param  {any} data? 事件数据。
     * @returns void
     */
    dispatchEvent(type: string, data?: any): void;
    /**
     * 派发一个指定参数的事件。
     * @param  {EventArgs} eventArgs 事件参数实例。
     * @returns void
     */
    dispatchEvent(args: EventArgs): void;
}

/**
 * 事件提供程序类。
 * @description 用于添加或删除事件侦听器的方法，检查是否已注册特定类型的事件侦听器，并调度事件。
 * @class
 * @version 1.0.0
 */
declare class EventProvider implements IEventProvider {
    private _source;
    private _events;
    /**
     * 初始化事件提供程序的新实例。
     * @param  {any} source? 事件源实例。
     */
    constructor(source?: any);
    /**
     * 为指定的事件类型注册一个侦听器，以使侦听器能够接收事件通知。
     * @summary 如果不再需要某个事件侦听器，可调用 removeListener() 删除它，否则会产生内存问题。
     * 由于垃圾回收器不会删除仍包含引用的对象，因此不会从内存中自动删除使用已注册事件侦听器的对象。
     * @param  {string} type 事件类型。
     * @param  {Function} 处理事件的侦听器函数。
     * @param  {any} scope? 侦听函数绑定的 this 对象。
     * @param  {boolean} once? 是否添加仅回调一次的事件侦听器，如果此参数设为 true 则在第一次回调时就自动移除监听。
     * @returns void
     */
    addListener(type: string, listener: Function, scope?: any, once?: boolean): void;
    /**
     * 移除侦听器。如果没有注册任何匹配的侦听器，则对此方法的调用没有任何效果。
     * @param  {string} type 事件类型。
     * @param  {Function} listener 处理事件的侦听器函数。
     * @param  {any} scope? 侦听函数绑定的 this 对象。
     * @returns void
     */
    removeListener(type: string, listener: Function, scope?: any): void;
    /**
     * 检查是否为特定事件类型注册了侦听器。
     * @param  {string} type 事件类型。
     * @returns boolean 如果指定类型的侦听器已注册，则值为 true；否则，值为 false。
     */
    hasListener(type: string): boolean;
    /**
     * 派发一个指定类型的事件。
     * @param  {string} type 事件类型。
     * @param  {any} data? 事件数据。
     * @returns void
     */
    dispatchEvent(type: string, data?: any): void;
    /**
     * 派发一个指定参数的事件。
     * @param  {EventArgs} eventArgs 事件参数实例。
     * @returns void
     */
    dispatchEvent(args: EventArgs): void;
}

/**
 * 提供关于事件提供程序的功能。
 * @interface
 * @version 1.0.0
 */
interface IEventProviderFactory {
    /**
     * 获取指定事件源的事件提供程序。
     * @param  {any} source IEventProvider 所抛出事件对象的源对象。
     * @returns IEventProdiver 返回指定名称的事件提供程序。
     */
    getProvider(source: any): IEventProvider;
}

/**
 * 提供关于事件提供程序的功能。
 * @class
 * @version 1.0.0
 */
declare class EventProviderFactory implements IEventProviderFactory {
    private _providers;
    private static _instance;
    /**
     * 获取所有事件提供程序。
     * @property
     * @returns IMap<any, IEventProvider>
     */
    protected readonly providers: IMap<any, IEventProvider>;
    /**
     * 获取事件提供程序工厂的单实例。
     * @static
     * @property
     * @returns EventProviderFactory
     */
    static readonly instance: EventProviderFactory;
    /**
     * 初始化事件提供程序工厂的新实例。
     * @constructor
     */
    constructor();
    /**
     * 获取指定事件源的事件提供程序。
     * @param  {any} source IEventProvider 所抛出事件对象的源对象。
     * @returns IEventProdiver 返回指定名称的事件提供程序。
     */
    getProvider(source: any): IEventProvider;
    /**
     * 根据指定事件源创建一个事件提供程序。
     * @virtual
     * @param  {any} source IEventProvider 所抛出事件对象的源对象。
     * @returns IEventProvider 事件提供程序实例。
     */
    protected createProvider(source: any): IEventProvider;
}

/**
 * 关于工作器的状态信息。
 * @enum
 * @version 1.0.0
 */
declare const enum WorkerState {
    /**
     * 未运行/已停止。
     * @member
     */
    stopped = 0,
    /**
     * 正在启动中。
     * @member
     */
    starting = 1,
    /**
     * 运行中。
     * @member
     */
    running = 2,
    /**
     * 正在暂停中。
     * @member
     */
    pausing = 3,
    /**
     * 已暂停。
     * @member
     */
    paused = 4,
    /**
     * 正在恢复中。
     * @member
     */
    resuming = 5,
    /**
     * 正在停止中。
     * @member
     */
    stopping = 6
}

/**
 * 关于工作器的接口。
 * @interface
 * @version 1.0.0
 */
interface IWorker extends IEventProvider {
    /**
     * 表示当工作器状态改变后产生的事件。
     * @event WorkerStateChangedEventArgs
     */
    readonly STATE_CHANGED: string;
    /**
     * 获取当前工作器的名称。
     * @property
     */
    name: string;
    /**
     * 获取当前工作器的状态。
     * @property
     */
    state: WorkerState;
    /**
     * 获取或设置是否禁用工作器。
     * @property
     */
    disabled: boolean;
    /**
     * 获取工作器是否允许暂停和继续。
     * @property
     */
    canPauseAndContinue: boolean;
    /**
     * 启动工作器。
     * @async
     * @param  {Array<string>} ...args 启动的参数。
     * @returns void
     */
    start(...args: Array<string>): Promise<void>;
    /**
     * 停止工作器。
     * @async
     * @param  {Array<string>} ...args 停止的参数。
     * @returns void
     */
    stop(...args: Array<string>): Promise<void>;
    /**
     * 暂停工作器。
     * @async
     * @returns void
     */
    pause(): Promise<void>;
    /**
     * 恢复工作器，继续运行。
     * @async
     * @returns void
     */
    resume(): Promise<void>;
}

/**
 * 表示工作器状态改变后的事件参数。
 * @class
 * @version 1.0.0
 */
declare class WorkerStateChangedEventArgs extends EventArgs {
    /**
     * 操作名称。
     * @readonly
     * @member
     */
    readonly actionName: string;
    /**
     * 发生改变的状态。
     * @readonly
     * @member
     */
    readonly state: WorkerState;
    /**
     * 表示在发生状态改变时产生的异常。
     * @readonly
     * @member
     */
    readonly error: Error;
    /**
     * 初始化 WorkerStateChangedEventArgs 类的新实例。
     * @param {string} type 事件类型。
     * @param  {string} actionName 操作名称。
     * @param  {WorkerState} state 发生改变的状态。
     * @param  {Error} error? 发生状态改变时产生的异常。
     */
    constructor(type: string, actionName: string, state: WorkerState, error?: Error);
}

/**
 * 关于工作器的抽象类。
 * 实现子类应当重写 onStart onStop 这两个方法。
 *
 * @abstract
 * @class
 * @version 1.0.0
 * jason
 */
declare abstract class WorkerBase extends EventProvider implements IWorker {
    private _name;
    private _state;
    private _disabled;
    private _canPauseAndContinue;
    /**
     * 表示当工作器状态改变后产生的事件。
     * @event WorkerStateChangedEventArgs
     */
    readonly STATE_CHANGED: string;
    /**
     * 获取当前工作器的名称。
     * @property
     * @returns string
     */
    readonly name: string;
    /**
     * 获取工作器的状态。
     * @property
     * @returns WorkerState
     */
    readonly state: WorkerState;
    /**
     * 获取或设置是否禁用工作器。
     * @property
     * @returns boolean
     */
    disabled: boolean;
    /**
     * 获取工作器是否允许暂停和继续。
     * @property
     * @returns boolean
     */
    canPauseAndContinue: boolean;
    /**
     * 初始化工作器的新实例。
     * @constructor
     * @param  {string} name 工作器名称。
     */
    protected constructor(name: string);
    /**
     * 启动工作器。
     * @async
     * @param  {Array<string>} ...args 启动的参数。
     * @returns void
     */
    start(...args: Array<string>): Promise<void>;
    /**
     * 停止工作器。
     * @async
     * @param  {Array<string>} ...args 停止的参数。
     * @returns void
     */
    stop(...args: Array<string>): Promise<void>;
    /**
     * 暂停工作器。
     * @async
     * @returns void
     */
    pause(): Promise<void>;
    /**
     * 恢复工作器，继续运行。
     * @async
     * @returns void
     */
    resume(): Promise<void>;
    /**
     * 当工作器启动时调用。
     * @protected
     * @abstract
     * @async
     * @param  {Array<string>} ...args
     * @returns void
     */
    protected abstract onStart(...args: Array<string>): Promise<void>;
    /**
     * 当工作器停止时调用。
     * @protected
     * @abstract
     * @async
     * @param  {Array<string>} ...args
     * @returns void
     */
    protected abstract onStop(...args: Array<string>): Promise<void>;
    /**
     * 当工作器暂停时调用。
     * @protected
     * @virtual
     * @async
     * @returns void
     */
    protected onPause(): Promise<void>;
    /**
     * 当工作器恢复时调用。
     * @protected
     * @virtual
     * @async
     * @returns void
     */
    protected onResume(): Promise<void>;
    /**
     * 当工作器状态发生改变时调用。
     * @protected
     * @virtual
     * @param  {WorkerStateChangedEventArgs} args 事件参数。
     * @returns void
     */
    protected onStateChanged(args: WorkerStateChangedEventArgs): void;
}

/**
 * 提供一些常用类型检测与反射相关的方法。
 * @static
 * @class
 * @version 1.0.0
 */
declare class Type {
    private static readonly _metadatas;
    /**
     * 私有构造方法，使类型成为静态类。
     * @private
     */
    private constructor();
    /**
     * 检测一个值是否为数组。
     * @static
     * @param  {any} value
     * @returns boolean
     */
    static isArray(value: any): boolean;
    /**
     * 检测一个值是否为对象。
     * @static
     * @param  {any} value
     * @returns boolean
     */
    static isObject(value: any): boolean;
    /**
     * 检测一个值是否为字符串。
     * @static
     * @param  {any} value
     * @returns boolean
     */
    static isString(value: any): boolean;
    /**
     * 检测一个值是否为日期。
     * @static
     * @param  {any} value
     * @returns boolean
     */
    static isDate(value: any): boolean;
    /**
     * 检测一个值是否为正则表达式。
     * @static
     * @param  {any} value
     * @returns boolean
     */
    static isRegExp(value: any): boolean;
    /**
     * 检测一个值是否为函数。
     * @static
     * @param  {any} value
     * @returns boolean
     */
    static isFunction(value: any): boolean;
    /**
     * 检测一个值是否为布尔值。
     * @static
     * @param  {any} value
     * @returns boolean
     */
    static isBoolean(value: any): boolean;
    /**
     * 检测一个值是否为数值。
     * @static
     * @param  {any} value
     * @returns boolean
     */
    static isNumber(value: any): boolean;
    /**
     * 检测一个值是否为 null。
     * @static
     * @param  {any} value
     * @returns boolean
     */
    static isNull(value: any): boolean;
    /**
     * 检测一个值是否为 undefined。
     * @static
     * @param  {any} value
     * @returns boolean
     */
    static isUndefined(value: any): boolean;
    /**
     * 检测一个值是否为 null 或 undefined。
     * @static
     * @param  {any} value
     * @returns boolean
     */
    static isEmptyObject(value: any): boolean;
    /**
     * 表示一个字符串值是否为 null 或 undefined 或 空值。
     * @static
     * @param  {string} value 要检测的字符串实例。
     * @returns boolean
     */
    static isEmptyString(value: string): boolean;
    /**
     * 设置指定类型的元数据。
     * @param  {any} type 目标类型。
     * @param  {any} metadata 元数据。
     * @returns void
     */
    static setMetadata(type: any, metadata: any): void;
    /**
     * 获取指定类型的元数据。
     * @param  {any} type 目标类型。
     * @returns any 元数据。
     */
    static getMetadata(type: any): any;
    /**
     * 返回对象的类型(即构造函数)。
     * @param  {string|any} value 实例或类型路径。
     * @returns Function 如果成功解析则返回类型的构造函数，否则为 undefined。
     */
    static getClassType(value: string | any): Function;
    /**
     * 返回 value 参数指定的对象的类名。
     * @param  {any} value 需要取得类名称的对象，可以将任何 JavaScript 值传递给此方法，包括所有可用的 JavaScript 类型、对象实例、原始类型（如number)和类对象。
     * @returns string 类名称的字符串。
     */
    static getClassName(value: any): string;
    /**
     * 返回 value 参数指定的对象的完全限定类名。
     * @static
     * @param  {any} value 需要取得完全限定类名称的对象，可以将任何 JavaScript 值传递给此方法，包括所有可用的 JavaScript 类型、对象实例、原始类型（如number)和类对象。
     * @returns string 包含完全限定类名称的字符串。
     */
    static getQualifiedClassName(value: any): string;
    /**
     * 返回 value 参数指定的对象的基类的类名。
     * @param  {any} value 需要取得父类类名称的对象，可以将任何 JavaScript 值传递给此方法，包括所有可用的 JavaScript 类型、对象实例、原始类型（如number）和类对象。
     * @returns string 基类名称，或 null（如果不存在基类名称）。
     */
    static getSuperclassName(value: any): string;
    /**
     * 返回 value 参数指定的对象的基类的完全限定类名。
     * @param  {any} value 需要取得父类完全限定类名称的对象，可以将任何 JavaScript 值传递给此方法，包括所有可用的 JavaScript 类型、对象实例、原始类型（如number）和类对象。
     * @returns string 完全限定的基类名称，或 null（如果不存在基类名称）。
     */
    static getQualifiedSuperclassName(value: any): string;
    /**
     * 确定指定类型的实例是否可以分配给当前类型的实例。
     * @param  {Function} parentType 指定基类的类型。
     * @param  {Function} subType 指定的实例类型。
     * @returns boolean
     */
    static isAssignableFrom(parentType: Function | String, subType: Function): boolean;
    /**
     * 获取指定值的类型字符串(小写)。
     * @private
     * @static
     * @param  {any} value
     * @returns string
     */
    private static getTypeString;
}

/**
 * 提供一种用于释放非托管资源的机制。
 * @interface
 * @version 1.0.0
 */
interface IDisposable {
    /**
     * 执行与释放或重置非托管资源关联的应用程序定义的任务。
     * @returns void
     */
    dispose(): void;
}

/**
 * 向实现类提供应用扩展模块初始化和处置事件。
 * @interface
 * @version 1.0.0
 */
interface IApplicationModule extends IDisposable {
    /**
     * 获取应用扩展模块名称。
     * @property
     */
    name: string;
    /**
     * 初始化应用扩展模块，并使其为处理请求做好准备。
     * 使用该方法将事件处理方法向具体事件进行注册等初始化操作。
     * @param  {ApplicationContextBase} context 一个上下文对象，它提供对模块处理应用程序内所有应用程序对象的公用的方法、属性和事件的访问。
     * @returns void
     */
    initialize(context: ApplicationContextBase): void;
}

/**
 * 表示工作台的运行状态。
 * @enum
 * @version 1.0.0
 */
declare const enum WorkbenchStatus {
    /**
     * 未开始或已关闭。
     * @member
     */
    closed = 0,
    /**
     * 正在打开中。
     * @member
     */
    opening = 1,
    /**
     * 正常运行。
     * @member
     */
    running = 2,
    /**
     * 取消激活中。
     * @member
     */
    deactivating = 3,
    /**
     * 已被取消激活。
     * @member
     */
    deactivated = 4,
    /**
     * 正在激活中。
     * @member
     */
    activating = 5,
    /**
     * 正在关闭中。
     * @member
     */
    closing = 6
}

/**
 * 表示工作台的接口，包含对工作台的基本行为特性的定义。
 * @interface
 * @version 1.0.0
 */
interface IWorkbench extends IEventProvider {
    /**
     * 当工作台正在打开时产生的事件。
     * @event EventArgs
     */
    readonly OPENING: string;
    /**
     * 当工作台被打开后产生的事件。
     * @event EventArgs
     */
    readonly OPENED: string;
    /**
     * 当工作台正在取消激活时产生的事件。
     * @event EventArgs
     */
    readonly DEACTIVATING: string;
    /**
     * 当工作台取消激活后产生的事件。
     * @event EventArgs
     */
    readonly DEACTIVATED: string;
    /**
     * 当工作台正在激活时产生的事件。
     * @event EventArgs
     */
    readonly ACTIVATING: string;
    /**
     * 当工作台正在关闭时产生的事件。
     * @event CancelEventArgs
     */
    readonly CLOSING: string;
    /**
     * 当工作台被关闭后产生的事件。
     * @event EventArgs
     */
    readonly CLOSED: string;
    /**
     * 当工作台标题被更改后产生的事件。
     * @event EventArgs
     */
    readonly TITLE_CHANGED: string;
    /**
     * 获取工作台状态。
     * @property
     */
    status: WorkbenchStatus;
    /**
     * 获取或设置工作台标题。
     * @property
     */
    title: string;
    /**
     * 打开工作台。
     * @async
     * @param  {Array<string>} args
     * @returns void
     */
    open(args: Array<string>): Promise<void>;
    /**
     * 关闭工作台。
     * @async
     * @returns boolean
     */
    close(): Promise<boolean>;
    /**
     * 取消激活工作台。
     * @returns void
     */
    deactivate(): void;
    /**
     * 激活工作台。
     * @returns void
     */
    activate(): void;
}

/**
 * 表示实现该抽象类的是一个应用程序上下文。
 * @class
 * @version 1.0.0
 */
declare abstract class ApplicationContextBase {
    private _applicationId;
    private _title;
    private _modules;
    private _states;
    private _workbench;
    private _credential;
    /**
     * 获取或设置当前应用程序唯一代号。
     * @summary 注意：本属性一旦被设置则不能被更改。
     * @property
     * @returns string
     */
    applicationId: string;
    /**
     * 获取或设置当前应用程序的标题。
     * @property
     * @returns string
     */
    title: string;
    /**
     * 获取当前应用程序的服务管理对象。
     * @property
     * @returns IServiceProviderFactory
     */
    readonly serviceFactory: IServiceProviderFactory;
    /** 吗
     * 获取当前应用程序的模块集合。
     * @property
     * @returns ISet
     */
    readonly modules: ISet<IApplicationModule>;
    /**
     * 获取或设置当前用户的安全凭证。
     * @property
     * @returns ICredential
     */
    credential: ICredential;
    /**
     * 获取当前应用的状态字典。
     * @property
     * @returns IMap
     */
    readonly states: IMap<string, any>;
    /**
     * 获取当前应用程序的工作台(主界面)。
     * 必须使用 Application 类的 start 方法，启动应用程序后才能使用该属性获取到创建成功的工作台对象。
     * @property
     * @returns IWorkbench
     */
    readonly workbench: IWorkbench;
    /**
     * 初始化应用程序上下文的新实例。
     * @protected
     * @param  {string} applicationId? 应用程序的唯一代号。
     */
    protected constructor(applicationId?: string);
    /**
     * 返回当前应用程序的工作台(主界面)。
     * @param  {Array<string>} args 初始化的参数。
     * @returns IWorkbench 返回新建或已创建的工作台对象。
     */
    getWorkbench(args: Array<string>): IWorkbench;
    /**
     * 创建一个主窗体对象。
     * 通常子类中实现的该方法只是创建空的工作台对象，并没有构建出该工作台下面的子构件。
     * 具体构建工作台子构件的最佳时机通常在 Workbench 类的 Open 方法内进行。
     * @abstract
     * @returns IWorkbench
     */
    protected abstract createWorkbench(args: Array<string>): IWorkbench;
}

/**
 * 应用程序类，负责整个应用的启动和退出。
 * @static
 * @class
 * @version 1.0.0
 */
declare class Application {
    private static _isStarted;
    private static _context;
    private static _eventProvider;
    /**
     * 获取一个事件提供程序实例。
     * @private
     * @property
     * @returns IEventProvider
     */
    private static readonly eventProvider;
    /**
     * 获取一个布尔值，表示当前应用是否启动完成。
     * @static
     * @property
     * @returns boolean
     */
    static readonly isStarted: boolean;
    /**
     * 获取应用程序上下文实例。
     * @static
     * @property
     * @returns ApplicationContextBase
     */
    static readonly context: ApplicationContextBase;
    /**
     * 当应用程序启动时产生的事件。
     * @event ApplicationEventArgs
     */
    static STARTING: string;
    /**
     * 当应用程序启动后产生的事件。
     * @event ApplicationEventArgs
     */
    static STARTED: string;
    /**
     * 当应用程序即将退出时产生的事件。
     * @event CancelEventArgs
     */
    static EXITING: string;
    /**
     * 启动应用程序。
     * @static
     * @param  {ApplicationContextBase} context 应用程序上下文实例。
     * @param  {Array<string>} args 启动参数。
     * @returns void
     */
    static start(context: ApplicationContextBase, args?: Array<string>): void;
    /**
     * 关闭当前应用程序。
     * @static
     * @returns void
     */
    static exit(): void;
    /**
     * 为指定的事件类型注册一个侦听器，以使侦听器能够接收事件通知。
     * @summary 如果不再需要某个事件侦听器，可调用 removeListener() 删除它，否则会产生内存问题。
     * 由于垃圾回收器不会删除仍包含引用的对象，因此不会从内存中自动删除使用已注册事件侦听器的对象。
     * @param  {string} type 事件类型。
     * @param  {Function} 处理事件的侦听器函数。
     * @param  {any} scope? 侦听函数绑定的 this 对象。
     * @param  {boolean} once? 是否添加仅回调一次的事件侦听器，如果此参数设为 true 则在第一次回调时就自动移除监听。
     * @returns void
     */
    static addListener(type: string, listener: Function, scope?: any, once?: boolean): void;
    /**
     * 移除侦听器。如果没有注册任何匹配的侦听器，则对此方法的调用没有任何效果。
     * @param  {string} type 事件类型。
     * @param  {Function} listener 处理事件的侦听器函数。
     * @param  {any} scope? 侦听函数绑定的 this 对象。
     * @returns void
     */
    static removeListener(type: string, listener: Function, scope?: any): void;
    /**
     * 派发一个指定参数的事件。
     * @param  {EventArgs} eventArgs 事件参数实例。
     * @returns void
     */
    static dispatchEvent(args: EventArgs): void;
    /**
     * 初始化全局模块。
     * @private
     * @static
     * @param  {ApplicationContextBase} context
     * @returns void
     */
    private static initializeGlobalModules;
    /**
     * 卸载全局模块。
     * @private
     * @static
     * @param  {ApplicationContextBase} context
     * @returns void
     */
    private static disposeGlobalModules;
}

/**
 * 应用程序事件参数类。
 * @class
 * @version 1.0.0
 */
declare class ApplicationEventArgs extends EventArgs {
    /**
     * 获取应用程序上下文实例。
     * @member
     */
    readonly context: ApplicationContextBase;
    /**
     * 初始化应用程序事件参数类的新实例。
     * @param  {string} type 事件类型。
     * @param  {ApplicationContextBase} context 应用程序上下文实例。
     */
    constructor(type: string, context: ApplicationContextBase);
}

/**
 * 提供工作台的基本封装，建议自定义工作台从此类继承。
 * @abstract
 * @class
 * @version 1.0.0
 */
declare abstract class WorkbenchBase extends EventProvider implements IWorkbench {
    private _status;
    private _title;
    private _applicationContext;
    /**
     * 当工作台正在打开时产生的事件。
     * @event EventArgs
     */
    readonly OPENING: string;
    /**
     * 当工作台被打开后产生的事件。
     * @event EventArgs
     */
    readonly OPENED: string;
    /**
     * 当工作台正在取消激活时产生的事件。
     * @event EventArgs
     */
    readonly DEACTIVATING: string;
    /**
     * 当工作台取消激活后产生的事件。
     * @event EventArgs
     */
    readonly DEACTIVATED: string;
    /**
     * 当工作台正在激活时产生的事件。
     * @event EventArgs
     */
    readonly ACTIVATING: string;
    /**
     * 当工作台正在关闭时产生的事件。
     * @event CancelEventArgs
     */
    readonly CLOSING: string;
    /**
     * 当工作台被关闭后产生的事件。
     * @event EventArgs
     */
    readonly CLOSED: string;
    /**
     * 当工作台标题被更改后产生的事件。
     * @event EventArgs
     */
    readonly TITLE_CHANGED: string;
    /**
     * 获取工作台的当前状态。
     * @property
     * @returns WorkbenchStatus
     */
    readonly status: WorkbenchStatus;
    /**
     * 获取或设置工作台的标题。
     * @property
     * @returns string
     */
    title: string;
    /**
     * 获取工作台所属的应用程序上下文实例。
     * @property
     * @returns ApplicationContextBase
     */
    readonly applicationContext: ApplicationContextBase;
    /**
     * 初始化工作台的新实例。
     * @protected
     * @param  {ApplicationContextBase} applicationContext+
     */
    protected constructor(applicationContext: ApplicationContextBase);
    /**
     * 打开工作台。
     * @async
     * @param  {Array<string>} args
     * @returns void
     */
    open(args: Array<string>): Promise<void>;
    /**
     * 关闭工作台。
     * @async
     * @returns boolean
     */
    close(): Promise<boolean>;
    /**
     * 取消激活工作台。
     * @returns void
     */
    deactivate(): void;
    /**
     * 激活工作台。
     * @returns void
     */
    activate(): void;
    /**
     * 当准备打开工作台时调用。
     * @protected
     * @virtual
     * @returns void
     */
    protected onOpening(): void;
    /**
     * 当工作台打开时调用。
     * @async
     * @protected
     * @virtual
     * @param  {Array<string>} args
     * @returns void
     */
    protected onOpen(args: Array<string>): Promise<void>;
    /**
     * 当工作台打开完成时调用。
     * @protected
     * @virtual
     * @returns void
     */
    protected onOpened(): void;
    /**
     * 当准备关闭工作台时调用。
     * @protected
     * @virtual
     * @param  {CancelEventArgs} event
     */
    protected onClosing(event: CancelEventArgs): void;
    /**
     * 当工作台关闭时调用。
     * @async
     * @protected
     * @virtual
     * @returns void
     */
    protected onClose(): Promise<void>;
    /**
     * 当工作台关闭完成时调用。
     * @protected
     * @virtual
     * @returns void
     */
    protected onClosed(): void;
    /**
     * 当工作台准备失去焦点时调用。
     * @protected
     * @virtual
     * @returns void
     */
    protected onDeactivateing(): void;
    /**
     * 当工作台失去焦点时调用。
     * @protected
     * @virtual
     * @returns void
     */
    protected onDeactivate(): void;
    /**
     * 当工作台失去焦点后调用。
     * @protected
     * @virtual
     * @returns void
     */
    protected onDeactivated(): void;
    /**
     * 当工作台准备获得焦时调用。
     * @protected
     * @virtual
     * @returns void
     */
    protected onActivating(): void;
    /**
     * 当工作台获得焦时调用。
     * @protected
     * @virtual
     * @returns void
     */
    protected onActivate(): void;
    /**
     * 当工作台获得焦后调用。
     * @protected
     * @virtual
     * @returns void
     */
    protected onActivated(): void;
    /**
     * 当工作台标题更改后调用。
     * @protected
     * @virtual
     * @returns void
     */
    protected onTitleChanged(): void;
}

/**
 * 表示一条广播信息。
 * @class
 * @version 1.0.0
 */
declare class Broadcast {
    private _uri;
    private _scheme;
    private _action;
    private _extras;
    /**
     * 获取广播的方案。
     * @property
     * @returns string
     */
    readonly scheme: string;
    /**
     * 获取广播的动作。
     * @property
     * @returns string
     */
    readonly action: string;
    /**
     * 获取广播的标识符。
     * @property
     * @returns string
     */
    readonly uri: string;
    /**
     * 获取广播携带的数据。
     * @property
     * @returns Map
     */
    readonly extras: Map<string, any>;
    /**
     * 初始化一个广播新实例。
     * @property
     * @param  {string} uri 广播描述符。
     * @param  {Map<string, any>} extras? 携带的数据。
     */
    constructor(uri: string, extras?: Map<string, any>);
}

/**
 * 广播接收器接口。
 * @interface
 * @version 1.0.0
 */
interface IBroadcastReceiver {
    /**
     * 当接收到广播时调用的方法。
     * @param  {BroadcastContext} context 广播上下文实例。
     * @returns void
     */
    receive(context: BroadcastContext): void;
}

/**
 * 定义用于检索广播接收器对象的机制。
 * @interface
 * @version 1.0.0
 */
interface IBroadcastReceiverProvider {
    /**
     * 注册一个广播接收器至容器中。
     * @param  {BroadcastContract} contract 广播契约。
     * @param  {IBroadcastReceiver} receiver 广播接收器。
     * @returns void
     */
    register(contract: BroadcastContract, receiver: IBroadcastReceiver): void;
    /**
     * 移除指定契约的广播接收器。
     * @param  {BroadcastContract} contract 广播契约。
     * @returns void
     */
    unregister(contract: BroadcastContract): void;
    /**
     * 根据指定广播实例获取所有广播接收器实例。
     * @param  {Broadcast} broadcast 广播实例。
     * @returns IEnumerable<IBroadcastReceiver>
     */
    resolve(broadcast: Broadcast): IEnumerable<IBroadcastReceiver>;
}

/**
 * 表示一个广播契约。
 * @class
 * @version 1.0.0
 */
declare class BroadcastContract {
    private _scheme;
    private _priority;
    private _actions;
    /**
     * 获取广播契约的方案。
     * @property
     * @returns string
     */
    readonly scheme: string;
    /**
     * 获取或设置广播接收时的优先顺序。
     * @property
     * @returns number
     */
    priority: number;
    /**
     * 获取广播契约所拥有的动作。
     * @property
     * @returns Set
     */
    readonly actions: Set<string>;
    /**
     * 初始化广播契约的新实例。
     * @constructor
     * @param  {string} scheme 协议方案。
     * @param  {Array<string>} actions 协议包含的动作。
     */
    constructor(scheme: string, actions: Array<string>);
    /**
     * 初始化广播契约的新实例。
     * @constructor
     * @param  {string} uri 协议URI。
     */
    constructor(uri: string);
}

/**
 * 表示一条广播信息。
 * @class
 * @version 1.0.0
 */
declare class Broadcast$1 {
    private _uri;
    private _scheme;
    private _action;
    private _extras;
    /**
     * 获取广播的方案。
     * @property
     * @returns string
     */
    readonly scheme: string;
    /**
     * 获取广播的动作。
     * @property
     * @returns string
     */
    readonly action: string;
    /**
     * 获取广播的标识符。
     * @property
     * @returns string
     */
    readonly uri: string;
    /**
     * 获取广播携带的数据。
     * @property
     * @returns Map
     */
    readonly extras: Map<string, any>;
    /**
     * 初始化一个广播新实例。
     * @property
     * @param  {string} uri 广播描述符。
     * @param  {Map<string, any>} extras? 携带的数据。
     */
    constructor(uri: string, extras?: Map<string, any>);
}

/**
 * 提供用于广播注册发布等功能。
 * @class
 * @version 1.0.0
 */
declare class BroadcastManager {
    private _eventProvider;
    private _receiverProvider;
    private static _instance;
    /**
     * 获取一个事件提供程序。
     * @protected
     * @property
     * @returns IEventProvider
     */
    protected readonly eventProvider: IEventProvider;
    /**
     * 获取一个广播接收器提供程序。
     * @protected
     * @property
     * @returns IBroadcastReceiverProvider
     */
    protected readonly receiverProvider: IBroadcastReceiverProvider;
    /**
     * 获取广播管理器的单实例。
     * @static
     * @returns BroadcastManager
     */
    static readonly instance: BroadcastManager;
    /**
     * 初始化广播管理器的新实例。
     * @param  {IBroadcastReceiverProvider} receiverProvider? 广播接收器提供程序。
     */
    protected constructor(receiverProvider?: IBroadcastReceiverProvider);
    /**
     * 基于指定的契约注册一个广播接收程序。
     * @param  {BroadcastContract} contract 广播契约。
     * @param  {IBroadcastReceiver} receiver 接收程序。
     * @returns void
     */
    register(contract: BroadcastContract, receiver: IBroadcastReceiver): void;
    /**
     * 移除指定契约的广播接收器。
     * @param  {BroadcastContract} contract 广播契约。
     * @returns void
     */
    unregister(contract: BroadcastContract): void;
    /**
     * 发送一条广播信息。
     * @param  {Broadcast} broadcast 广播实例。
     * @returns void
     */
    send(broadcast: Broadcast$1): void;
    /**
     * 当接收广播时调用。
     * @protected
     * @virtual
     * @returns any
     */
    protected onReceive(request: any): void;
    /**
     * 创建广播上下文实例。
     * @protected
     * @virtual
     * @param  {Broadcast} broadcast
     * @returns BroadcastContext
     */
    protected createBroadcastContext(broadcast: Broadcast$1): BroadcastContext;
}

/**
 * 广播在传播过程中使用的上下文参数。
 * @class
 * @version 1.0.0
 */
declare class BroadcastContext {
    private _manager;
    private _uri;
    private _scheme;
    private _action;
    private _extras;
    private _aborted;
    /**
     * 获取广播所在的广播管理器实例。
     * @property
     * @returns BroadcastManager
     */
    readonly manager: BroadcastManager;
    /**
     * 获取广播的方案。
     * @property
     * @returns string
     */
    readonly scheme: string;
    /**
     * 获取广播的动作。
     * @property
     * @returns string
     */
    readonly action: string;
    /**
     * 获取广播的标识符。
     * @property
     * @returns string
     */
    readonly uri: string;
    /**
     * 获取广播携带的数据。
     * @property
     * @returns Map<string, any>
     */
    readonly extras: Map<string, any>;
    /**
     * 表示是否阻止广播继续传播。
     * @property
     * @returns boolean
     */
    readonly aborted: boolean;
    /**
     * 初始化广播上下文的新实例。
     * @param  {BroadcastManager} manager 广播管理器。
     * @param  {Broadcast} broadcast 广播实例。
     */
    constructor(manager: BroadcastManager, broadcast: Broadcast);
    /**
     * 阻止广播在本次传播中继续进行传播。
     * @returns void
     */
    abort(): void;
}

/**
 * 表示广播接收的优先级别。
 * @enum
 * @version 1.0.0
 */
declare const enum BroadcastPriority {
    /**
     * 默认优先级。
     * @member
     */
    normal = 0,
    /**
     * 最高的。
     * @member
     */
    highest = 9999,
    /**
     * 最低的。
     * @member
     */
    lowest = -9999
}

/**
 * 提供用于检索广播接收器广播项。
 * @class
 * @version 1.0.0
 */
declare class BroadcastReceiverEntry {
    private _contract;
    private _receiver;
    /**
     * 获取广播接收优先级。
     * @property
     * @returns number
     */
    readonly priority: number;
    /**
     * 获取广播契约实例。
     * @property
     * @returns BroadcastContract
     */
    readonly contract: BroadcastContract;
    /**
     * 获取广播接收器实例。
     * @property
     * @returns IBroadcastReceiver
     */
    readonly receiver: IBroadcastReceiver;
    /**
     * 初始化广播项的新实例。
     * @param  {BroadcastContract} contract 广播契约。
     * @param  {IBroadcastReceiver} receiver 广播接收器。
     */
    constructor(contract: BroadcastContract, receiver: IBroadcastReceiver);
}

/**
 * 提供用于检索广播接收器对象的机制。
 * @class
 * @version 1.0.0
 */
declare class BroadcastReceiverProvider implements IBroadcastReceiverProvider {
    private _entries;
    /**
     * 初始化广播接收器提供程序的新实例。
     * @constructor
     */
    constructor();
    /**
     * 注册一个广播接收器至容器中。
     * @param  {BroadcastContract} contract 广播契约。
     * @param  {IBroadcastReceiver} receiver 广播接收器。
     * @returns void
     */
    register(contract: BroadcastContract, receiver: IBroadcastReceiver): void;
    /**
     * 移除指定契约的广播接收器。
     * @param  {BroadcastContract} contract 广播契约。
     * @returns void
     */
    unregister(contract: BroadcastContract): void;
    /**
     * 根据指定广播实例获取所有广播接收器实例。
     * @param  {Broadcast} broadcast 广播实例。
     * @returns IEnumerable<IBroadcastReceiver>
     */
    resolve(broadcast: Broadcast$1): IEnumerable<IBroadcastReceiver>;
}

/**
 * 标注当前类型是一个广播接收器。
 * @param  {string} uri 广播描述符。
 * @param  {number} priority? 广播优先级。
 */
declare function receivable(uri: string, priority?: number): (receiverType: Function) => void;

/**
 * 表示命令执行器的接口。
 * @interface
 * @version 1.0.0
 */
interface ICommandExecutor {
    /**
     * 执行命令。
     * @param  {string} commandText 指定要执行的命令表达式文本。
     * @param  {any} parameter? 指定的输入参数。
     * @returns any 返回命令执行的结果。
     */
    execute(commandText: string, parameter?: any): any;
}

/**
 * 表示全局本地缓存容器。
 * @static
 * @class
 * @version 1.0.0
 */
declare class LocalStorage {
    private static _proxy;
    /**
     * 获取或设置缓存代理。
     * @returns any
     */
    static proxy: any;
    /**
     * 获取本地缓存容器的存储数量。
     * @static
     * @property
     * @returns number
     */
    static readonly size: number;
    /**
     * 私有构造方法。
     * @private
     */
    private constructor();
    /**
     * 将指定的键值对加入缓存中。
     * @static
     * @param  {string} key 缓存键。
     * @param  {any} obj 缓存值。
     * @returns void
     */
    static set(key: string, value: any): void;
    /**
     * 从缓存中获取指定键名的值。
     * @static
     * @param  {string} key 缓存键。
     * @returns T
     */
    static get<T>(key: string): T;
    /**
     * 从缓存中移除指定键名的值。
     * @static
     * @param  {string} key 缓存键。
     * @returns void
     */
    static remove(key: string): void;
    /**
     * 清空缓存容器中所有缓存。
     * @static
     * @returns void
     */
    static clear(): void;
    /**
     * 将指定的字符串序列化为一个字符串。
     * @private
     * @static
     * @param  {any} obj 待序列化的对象。
     * @returns string 序列化的字符串。
     */
    private static serialize;
    /**
     * 将指定的字符串反序列化为一个对象。
     * @private
     * @static
     * @param  {string} str 待反序列化的字符串。
     * @returns any 反序列化后的实例，如果反序列化失败则返回 undefined。
     */
    private static deserialize;
}

/**
 * 实现从字符串进行读取的读取器。
 * @class
 * @version 1.0.0
 */
declare class StringReader implements IDisposable {
    private _text;
    private _position;
    private _length;
    /**
     * 初始化从指定字符串进行读取的 StringReader 类的新实例。
     * @constructor
     * @param  {string} text
     */
    constructor(text: string);
    /**
     * 返回下一个可用的字符，但不使用它。
     * @returns number 表示下一个要读取的字符的整数，或者，如果没有更多的可用字符或该流不支持查找，则为 -1。
     */
    peek(): number;
    /**
     * 读取输入字符串中的下一个字符并将该字符的位置提升一个字符。
     * @returns number 基础字符串中的下一个字符，或者如果没有更多的可用字符，则为 -1。
     */
    read(): number;
    /**
     * 将整个流或从流的当前位置到流的结尾作为字符串读取。
     * @returns string 从当前位置到基础字符串的结尾之间的内容。
     */
    readToEnd(): string;
    /**
     * 从基础字符串中读取一行。
     * @returns string 基础字符串中的下一行；或者如果到达了基础字符串的末尾，则为 null。
     */
    readLine(): string;
    /**
     * 执行与释放或重置非托管资源关联的应用程序定义的任务。
     * @returns void
     */
    dispose(): void;
}

/**
 * 表示关于路径的锚定点。
 * @enum
 * @version 1.0.0
 */
declare const enum PathAnchor {
    /**
     * 未锚定。
     * @member
     */
    none = 0,
    /**
     * 基于当前位置。
     * @member
     */
    current = 1,
    /**
     * 基于上级节点。
     * @member
     */
    parent = 2,
    /**
     * 从根节点开始。
     * @member
     */
    root = 3
}

/**
 * 命令选项集合。
 * @class
 * @version 1.0.0
 */
declare class CommandOptionCollection implements IEnumerable<KeyValuePair<string, string>> {
    private _items;
    /**
     * 获取选项的数量。
     * @property
     * @returns number
     */
    readonly size: number;
    /**
     * 获取所有选项键。
     * @property
     * @returns Array
     */
    readonly keys: Array<string>;
    /**
     * 获取所有选项值。
     * @property
     * @returns Array
     */
    readonly values: Array<string>;
    /**
     * 初始化命令选项集合的新实例。
     * @param  {IEnumerable<KeyValuePair<string>>} items
     */
    constructor(items?: IEnumerable<KeyValuePair<string, string>>);
    /**
     * 根据指定的字符串键获取一个选项值。
     * @param  {string} key
     * @returns string
     */
    get(key: string): string;
    /**
     * 检测是否包含指定的选项值。
     * @param  {string} key
     * @returns boolean
     */
    has(key: string): boolean;
    /**
     * 返回一个循环访问集合的枚举器。
     * @returns IEnumerator
     */
    getEnumerator(): IEnumerator<KeyValuePair<string, string>>;
    /**
     * 对 IEnumerable<T> 进行迭代处理。
     * @param  {Function} callback 每次迭代中执行的回掉函数，当前迭代项将传入该函数。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns void
     */
    forEach(callback: (item: KeyValuePair<string, string>, source: IEnumerable<KeyValuePair<string, string>>) => void, scope?: any): void;
}

/**
 * 命令表达式类，提供命令的名称路径与参数选项等信息。
 * @class
 * @version 1.0.0
 */
declare class CommandExpression {
    private _name;
    private _path;
    private _fullPath;
    private _anchor;
    private _options;
    private _arguments;
    private _next;
    /**
     * 获取命令名称。
     * @property
     * @returns string
     */
    readonly name: string;
    /**
     * 获取命令的路径(不包含名称)。
     * @property
     * @returns string
     */
    readonly path: string;
    /**
     * 获取命令的完整路径(包含名称)。
     * @property
     * @returns string
     */
    readonly fullPath: string;
    /**
     * 获取命令的锚定点。
     * @property
     * @returns PathAnchor
     */
    readonly anchor: PathAnchor;
    /**
     * 获取命令的所有选项。
     * @property
     * @returns CommandOptionCollection
     */
    readonly options: CommandOptionCollection;
    /**
     * 获取命令的所有参数。
     * @property
     * @returns string
     */
    readonly arguments: Array<string>;
    /**
     * 获取获设置当前命令的下一个串联命令表达式。
     * @property
     * @returns CommandExpression
     */
    /**
    * 获取或设置当前命令的下一个串联命令表达式。
    * @property
    * @param  {CommandExpression} value
    */
    next: CommandExpression;
    /**
     * 初始化命令表达式的新实例。
     * @param  {PathAnchor} anchor 锚定点。
     * @param  {string} name 命令名称。
     * @param  {string} path 命令路径。
     * @param  {Map} options 命令选项。
     * @param  {string[]} ...args 命令参数。
     */
    constructor(anchor: PathAnchor, name: string, path: string, options: Map<string, string>, ...args: Array<string>);
    /**
     * 将指定的文本解析为一个命令表达式。
     * @static
     * @param  {string} text 命令文本。
     * @returns CommandExpression 命令表达式。
     */
    static parse(text: string): CommandExpression;
}

/**
 * 扩展命令接口。
 * @interface
 * @version 1.0.0
 */
interface ICommand {
    /**
     * 获取命令的名称。
     * @property
     */
    name: string;
    /**
     * 获取或设置一个值，该值指示命令是否可以执行。
     * @property
     */
    enabled: boolean;
    /**
     * 判断当前命令能否依据给定的选项和参数执行。
     * @param  {any} context 判断命令能否执行的上下文对象。
     * @returns boolean 返回能否执行的结果。
     */
    canExecute(context: any): boolean;
    /**
     * 执行命令。
     * 对实现着的要求：应该在本方法的实现中首先调用 canExecute 方法，以确保阻止非法的调用。
     * @async
     * @param  {any} context 执行命令的上下文对象。
     * @returns any 返回执行的返回结果。
     */
    execute(context: any): Promise<any>;
}

/**
 * 命令在执行器过程中使用的上下文参数。
 * @class
 * @version 1.0.0
 */
declare class CommandContext {
    private _executor;
    private _expression;
    private _command;
    private _parameter;
    private _extendedProperties;
    /**
     * 获取命令所在的命令执行器。
     * @property
     * @returns ICommandExecutor
     */
    readonly executor: ICommandExecutor;
    /**
     * 获取当前命令对应的表达式。
     * @property
     * @returns CommandExpression
     */
    readonly expression: CommandExpression;
    /**
     * 获取执行的命令对象。
     * @property
     * @returns ICommand
     */
    readonly command: ICommand;
    /**
     * 获取命令执行的传入参数。
     * @property
     * @returns any
     */
    readonly parameter: any;
    /**
     * 获取扩展属性集是否有内容。
     * 在不确定扩展属性集是否含有内容之前，建议先使用该属性来检测。
     * @property
     * @returns boolean
     */
    readonly hasExtendedProperties: boolean;
    /**
     * 获取可用于在本次执行过程中在各处理模块之间组织和共享数据的键/值集合。
     * @property
     * @returns Map
     */
    readonly extendedProperties: Map<string, any>;
    /**
     * 初始化执行命令上下文的新实例。
     * @constructor
     * @param  {ICommandExecutor} executor 执行命令所在的命令执行器。
     * @param  {CommandExpression} expression 命令对应的表达式。
     * @param  {ICommand} command 执行的命令对象。
     * @param  {any} parameter 命令执行的传入参数。
     * @param  {Map} extendedProperties 在本次执行过程中在各处理模块之间组织和共享数据的键/值集合。
     */
    constructor(executor: ICommandExecutor, expression: CommandExpression, command: ICommand, parameter: any, extendedProperties?: Map<string, any>);
}

/**
 * 提供实现 ICommand 接口功能的基类。
 * @abstract
 * @class
 * @description 建议需要完成 ICommand 接口功能的实现者从此类继承。
 * @version 1.0.0
 */
declare abstract class CommandBase<TContext extends CommandContext> implements ICommand {
    private _name;
    private _enabled;
    /**
     * 获取或设置命令的名称。
     * @property
     * @returns string
     */
    name: string;
    /**
     * 获取或设置当前命令是否可用。
     * @summary 该属性作为当前命令是否可被执行的备选方案，命令是否可被执行由 canExecute 方法决定，该方法的不同实现方式可能导致不同的判断逻辑。
     * 有关默认的判断逻辑请参考 canExecute 方法的帮助。
     * @property
     * @returns boolean
     */
    enabled: boolean;
    /**
     * 初始化命令的新实例。
     * @param  {string} name 命令名称。
     * @param  {boolean} enabled 是否启用。
     */
    constructor(name?: string, enabled?: boolean);
    /**
     * 判断当前命令能否依据给定的选项和参数执行。
     * @virtual
     * @param  {any} context 判断命令能否执行的上下文对象。
     * @returns boolean 返回能否执行的结果。
     */
    canExecute(context: TContext): boolean;
    /**
     * 执行命令。
     * @summary 对实现着的要求：应该在本方法的实现中首先调用 canExecute 方法，以确保阻止非法的调用。
     * @virtual
     * @async
     * @param  {any} context 执行命令的上下文对象。
     * @returns any 返回执行的返回结果。
     */
    execute(context: TContext): Promise<any>;
    /**
     * 当执行命令时调用。
     * @protected
     * @abstract
     * @async
     * @param  {TContext} context 执行命令的上下文对象。
     * @returns any 执行的返回结果。
     */
    protected abstract onExecute(context: TContext): Promise<any>;
}

/**
 * 表示一个命令容器，用户存储命令使用。
 * @class
 * @description 该类为临时过度方案，后续将会替换为命令树的形式进行存储。
 * @version 1.0.0
 */
declare class CommandCollection implements IEnumerable<KeyValuePair<string, ICommand>> {
    private _items;
    /**
     * 获取命令的总数量。
     * @property
     * @returns number
     */
    readonly size: number;
    /**
     * 初始化命令容器的新实例。
     * @constructor
     */
    constructor();
    /**
     * 将一个命令实例挂载至指定的的路径。
     * @summary 如果指定的路径已存在命令将会抛出异常。
     * @param  {string} path 路径字符串。
     * @param  {ICommand} command 命令。
     * @returns void
     */
    add(path: string, command: ICommand): void;
    /**
     * 移除指定路径的命令。
     * @param  {string} path 路径字符串。
     * @returns boolean
     */
    remove(path: string): boolean;
    /**
     * 根据指定的路径获取一个命令。
     * @param  {string} path 路径字符串。
     * @returns string
     */
    find(path: string): ICommand;
    /**
     * 检测是否包含指定的路径的命令。
     * @param  {string} path
     * @returns boolean
     */
    contains(path: string): boolean;
    /**
     * 返回一个循环访问集合的枚举器。
     * @returns IEnumerator
     */
    getEnumerator(): IEnumerator<KeyValuePair<string, ICommand>>;
    /**
     * 对 IEnumerable<T> 进行迭代处理。
     * @param  {Function} callback 每次迭代中执行的回掉函数，当前迭代项将传入该函数。
     * @param  {any} scope? 回掉函数中 this 所引用的对象。
     * @returns void
     */
    forEach(callback: (item: KeyValuePair<string, ICommand>, source: IEnumerable<KeyValuePair<string, ICommand>>) => void, scope?: any): void;
}

/**
 * 提供命令行文本解析功能。
 * @interface
 * @version 1.0.0
 */
interface ICommandExpressionParser {
    /**
     * 将指定的命令行文本解析成命令表达式对象。
     * @param  {string} text 指定的要解析的命令行文本。
     * @returns CommandExpression 返回解析的命令表达式对象，如果解析失败则返回空(null)。
     */
    parse(text: string): CommandExpression;
}

/**
 * 表示命令执行器在执行命令时产生的上下文。
 * @class
 * @version 1.0.0
 */
declare class CommandExecutorContext {
    private _executor;
    private _expression;
    private _parameter;
    /**
     * 获取当前命令执行器对象。
     * @property
     * @returns ICommandExecutor
     */
    readonly executor: ICommandExecutor;
    /**
     * 获取当前命令执行器的命令表达式。
     * @property
     * @returns CommandExpression
     */
    readonly expression: CommandExpression;
    /**
     * 获取从命令执行器传入的参数值。
     * @property
     * @returns any
     */
    readonly parameter: any;
    /**
     * 初始化命令执行器上下文的新实例。
     * @constructor
     * @param  {ICommandExecutor} executor 当前命令执行器对象。
     * @param  {CommandExpression} expression 当前命令执行器的命令表达式。
     * @param  {any} parameter 从命令执行器传入的参数。
     */
    constructor(executor: ICommandExecutor, expression: CommandExpression, parameter: any);
}

/**
 * 提供命令注册与执行的实现。
 * @class
 * @version 1.0.0
 */
declare class CommandExecutor implements ICommandExecutor {
    private _commands;
    private _parser;
    private static _default;
    /**
     * 获取或设置默认的命令执行器。
     * @static
     * @property
     * @returns CommandExecutor
     */
    /**
    * 获取或设置默认的命令执行器。
    * @static
    * @property
    * @param  {CommandExecutor} value
    */
    static default: CommandExecutor;
    /**
     * 初始化命令执行器的新实例。
     * @constructor
     */
    constructor(parser?: ICommandExpressionParser);
    /**
     * 注册一个命令。
     * 注意: 如果路径已存在，则会抛出一个异常。
     * @param  {string} path 命令路径。
     * @param  {ICommand} command 命令实例。
     * @returns void
     */
    register(path: string, command: ICommand): void;
    /**
     * 移除指定路径的命令。
     * @param  {string} path
     * @returns boolean
     */
    remove(path: string): boolean;
    /**
     * 查找指定路径的命令。
     * @param  {string} path 路径字符串。
     * @returns ICommand
     */
    find(path: string): ICommand;
    /**
     * 执行命令。
     * @summary 暂不支持表达式，commandText 仅为命令路径。
     * @async
     * @param  {string} commandText 指定要执行的命令表达式文本。
     * @param  {any} parameter 指定的输入参数。
     * @returns any 返回命令执行的结果。
     */
    execute(commandText: string, parameter?: any): Promise<any>;
    /**
     * 当执行命令时调用。
     * @async
     * @param  {CommandExecutorContext} context 命令执行上下文。
     * @returns any
     */
    protected onExecute(context: CommandExecutorContext): Promise<any>;
    /**
     * 执行命令。
     * @protected
     * @virtual
     * @async
     * @param  {CommandExecutorContext} context
     * @param  {CommandExpression} expression
     * @param  {ICommand} command
     * @param  {any} parameter
     * @returns any
     */
    protected executeCommand(context: CommandExecutorContext, expression: CommandExpression, command: ICommand, parameter: any): Promise<any>;
    /**
     * 创建命令执行上下文实例。
     * @protected
     * @virtual
     * @param  {string} commandText
     * @param  {any} parameter
     * @returns CommandExecutorContext
     */
    protected createExecutorContext(commandText: string, parameter: any): CommandExecutorContext;
    /**
     * 创建命令上下文实例。
     * @protected
     * @virtual
     * @param  {CommandExpression} expression
     * @param  {ICommand} command
     * @param  {any} parameter
     * @returns CommandContext
     */
    protected createCommandContext(expression: CommandExpression, command: ICommand, parameter: any): CommandContext;
    /**
     * 当解析命令表达式时调用。
     * @protected
     * @virtual
     * @param  {string} text
     * @returns CommandExpression
     */
    protected onParse(text: string): CommandExpression;
}

/**
 * 提供命令行文本解析功能。
 * @static
 * @class
 * @version 1.0.0
 */
declare class CommandExpressionParser implements ICommandExpressionParser {
    /**
     * 获取命令解析器的单实例。
     * @static
     * @member
     */
    static readonly instance: CommandExpressionParser;
    /**
     * 私有构造。
     * @private
     * @constructor
     */
    protected constructor();
    /**
     * 将指定的命令行文本解析成命令表达式对象。
     * @param  {string} text 指定的要解析的命令行文本。
     * @returns CommandExpression 返回解析的命令表达式对象，如果解析失败则返回空(null)。
     */
    parse(text: string): CommandExpression;
    /**
     * 根据字符串读取器解析命令表达式。
     * @protected
     * @virtual
     * @param  {StringReader} reader
     * @returns CommandExpression
     */
    protected onParse(reader: StringReader): CommandExpression;
    /**
     * 根据字符串读取器解析路径。
     * @private
     * @static
     * @param  {StringReader} reader
     * @returns PathAnchor
     */
    private static parsePath;
    /**
     * 根据字符串读取器解析参数和选项。
     * @private
     * @static
     * @param  {StringReader} reader
     * @returns KeyValuePair
     */
    private static parsePair;
    /**
     * 检测一个 char 字符是否为引号。
     * @private
     * @static
     * @param  {string} chr
     * @returns boolean
     */
    private static isQuote;
}

/**
 * 标注当前类型是一个可通过命令执行器执行的命令。
 * @param  {string} path
 */
declare function command(path: string): (commandType: Function) => void;

declare class CharUtils {
    static isChar(char: string): boolean;
    static isLatin(char: string): boolean;
    static isAscii(char: string): boolean;
    static isLetterOrDigit(char: string): boolean;
    static isWhiteSpace(char: string): boolean;
}

/**
 * 表示枚举项的描述。
 * @class
 * @version 1.0.0
 */
declare class EnumEntry {
    /**
     * 获取枚举项的名称。
     * @member
     */
    readonly name: string;
    /**
     * 获取枚举项的值。
     * @member
     */
    readonly value: number;
    /**
     * 获取枚举项的别名。
     * @member
     */
    readonly alias: string;
    /**
     * 当前描述枚举项的描述文本。
     * @member
     */
    readonly description: string;
    /**
     * 初始化枚举项的新实例。
     * @param  {string} name 枚举项的名称。
     * @param  {number} value 枚举项的值。
     * @param  {string=""} alias 枚举项的别名。
     * @param  {string=""} description 枚举项的描述。
     */
    constructor(name: string, value: number, alias?: string, description?: string);
}

/**
 * 关于的枚举辅助工具类。
 * @static
 * @class
 * @version 1.0.0
 */
declare class EnumUtils {
    private static readonly _entryCache;
    /**
     * 获取指定枚举项对应的描述对象。
     * @param  {number} value 枚举值。
     * @param  {any} type 要获取的枚举类型。
     * @returns EnumEntry 返回的指定枚举项对应的枚举描述对象。
     */
    static getEntry(value: number, type: any): EnumEntry;
    /**
     * 获取指定枚举的描述对象数据。
     * @param  {any} type 要获取的枚举类型。
     * @returns Array<EnumEntry> 返回的枚举描述对象数组。
     */
    static getEntries(type: any): Array<EnumEntry>;
    /**
     * 获取指定枚举类型的字段列表
     * @param  {any} type 枚举类型。
     * @returns Array<[string, number]> 一个元组数据，数据项以<名称,值>的方式返回。
     */
    static getFields(type: any): Array<[string, number]>;
}

/**
 * 正则表达式常用工具类。
 * @static
 * @class
 * @version 1.0.0
 */
declare class RegexUtils {
    /**
     * 表示一个 URI 正则表达式。
     * @static
     * @member
     */
    static readonly uri: RegExp;
    /**
     * 表示一个 Scheme 正则表达式。
     * @static
     * @member
     */
    static readonly scheme: RegExp;
}

declare class StringUtils {
    static trim(text: string, ...chars: Array<string>): string;
    static isMobile(text: string): boolean;
    static isPassword(text: string): boolean;
    static generateRandom(count: number): string;
}

/**
 * 表示一个日志的级别。
 * @enum
 * @version 1.0.0
 */
declare enum LogLevel {
    /**
     * 调试。
     * @member
     */
    debug = 1,
    /**
     * 警告。
     * @member
     */
    warn = 2,
    /**
     * 错误。
     * @member
     */
    error = 3
}

/**
 * 表示一个日志项。
 * @interface
 * @version 1.0.0
 */
declare class LogEntry {
    private _level;
    private _source;
    private _message;
    private _data;
    private _timestamp;
    /**
     * 获取日志级别。
     * @member
     * @returns LogLevel
     */
    readonly level: LogLevel;
    /**
     * 获取日志来源。
     * @member
     * @returns any
     */
    readonly source: any;
    /**
     * 获取或设置消息。
     * @member
     * @returns string
     */
    readonly message: string;
    /**
     * 获取或设置数据。
     * @member
     * @returns any
     */
    readonly data: any;
    /**
     * 获取或设置时间。
     * @member
     * @returns Date
     */
    readonly timestamp: Date;
    /**
     * 初始化日志项的新实例。
     * @param  {LogLevel} level 日志级别。
     * @param  {any} source 日志来源。
     * @param  {string} message 消息。
     * @param  {any} data? 附带数据。
     */
    constructor(level: LogLevel, source: any, message: string, data?: any);
}

/**
 * 表示实现该接口的是一个日志处理程序。
 * @interface
 * @version 1.0.0
 */
interface ILogHandler {
    /**
     * 处理日志项。
     * @param  {LogEntry} entry 日志项。
     * @returns void
     */
    handle(entry: LogEntry): void;
}

/**
 * 表示一个基于控制台输出的日志处理程序。
 * @class
 * @version 1.0.0
 */
declare class ConsoleLogHandler implements ILogHandler {
    /**
     * 处理日志项。
     * @param  {LogEntry} entry 日志项。
     * @returns void
     */
    handle(entry: LogEntry): void;
}

/**
 * 提供日志记录的功能。
 * @class
 * @version 1.0.0
 */
declare class Logger {
    private static _handlers;
    /**
     * 获取所有日志处理程序。
     * @static
     * @returns ISet
     */
    static readonly handlers: ISet<ILogHandler>;
    /**
     * 记录一个调试日志。
     * @static
     * @param  {any} source 日志来源。
     * @param  {string} message 日志消息。
     * @param  {any} data? 附带数据。
     * @returns void
     */
    static debug(source: any, message: string, data?: any): void;
    /**
     * 记录一个警告日志。
     * @static
     * @param  {any} source 日志来源。
     * @param  {string} message 日志消息。
     * @param  {any} data? 附带数据。
     * @returns void
     */
    static warn(source: any, message: string, data?: any): void;
    /**
     * 记录一个错误日志。
     * @static
     * @param  {any} source 日志来源。
     * @param  {string} message 日志消息。
     * @param  {any} data? 附带数据。
     * @returns void
     */
    static error(source: any, message: string, data?: any): void;
    /**
     * 写入日志。
     * @static
     * @param  {LogLevel} level 日志级别。
     * @param  {any} source 日志来源。
     * @param  {string} message 日志消息。
     * @param  {any} data? 附带数据。
     * @returns void
     */
    private static write;
}

/**
 * 表示在应用程序执行期间发生的错误。
 * @class
 * @version 1.0.0
 */
declare class Exception extends Error {
    constructor(message?: string);
}

/**
 * 当向方法提供的参数之一无效时引发的异常。
 * @class
 * @version 1.0.0
 */
declare class ArgumentException extends Exception {
    constructor(message?: string);
}

/**
 * 当方法调用对于对象的当前状态无效时引发的异常。
 * @class
 * @version 1.0.0
 */
declare class InvalidOperationException extends Exception {
    constructor(message?: string);
}

/**
 * 提供对象实例创建的方法。
 * @static
 * @class
 * @version 1.0.0
 */
declare class Activator {
    private static readonly _types;
    /**
     * 私有构造方法，使类型成为静态类。
     * @private
     */
    private constructor();
    /**
     * 创建指定类型的实例。
     * @param  {string|Function} type 类型字符串或类型构造函数。
     * @param  {any[]} ...params 需要传递给构造函数的参数。
     * @returns T
     */
    static createInstance<T>(type: string | Function, ...params: Array<any>): T;
}

declare const _default: {
    Application: typeof Application;
    ApplicationContextBase: typeof ApplicationContextBase;
    ApplicationEventArgs: typeof ApplicationEventArgs;
    WorkbenchBase: typeof WorkbenchBase;
    WorkbenchStatus: typeof WorkbenchStatus;
    Broadcast: typeof Broadcast;
    BroadcastContext: typeof BroadcastContext;
    BroadcastContract: typeof BroadcastContract;
    BroadcastManager: typeof BroadcastManager;
    BroadcastPriority: typeof BroadcastPriority;
    BroadcastReceiverEntry: typeof BroadcastReceiverEntry;
    BroadcastReceiverProvider: typeof BroadcastReceiverProvider;
    Receivable: typeof receivable;
    Enumerator: typeof Enumerator;
    KeyValuePair: typeof KeyValuePair;
    Map: typeof Map;
    Set: typeof Set;
    CommandBase: typeof CommandBase;
    CommandCollection: typeof CommandCollection;
    CommandContext: typeof CommandContext;
    CommandExecutor: typeof CommandExecutor;
    CommandExecutorContext: typeof CommandExecutorContext;
    CommandExpression: typeof CommandExpression;
    CommandExpressionParser: typeof CommandExpressionParser;
    CommandOptionCollection: typeof CommandOptionCollection;
    Command: typeof command;
    CharUtils: typeof CharUtils;
    EnumEntry: typeof EnumEntry;
    EnumUtils: typeof EnumUtils;
    RegexUtils: typeof RegexUtils;
    StringUtils: typeof StringUtils;
    ConsoleLogHandler: typeof ConsoleLogHandler;
    LogEntry: typeof LogEntry;
    Logger: typeof Logger;
    LogLevel: typeof LogLevel;
    CancelEventArgs: typeof CancelEventArgs;
    EventArgs: typeof EventArgs;
    EventProvider: typeof EventProvider;
    EventProviderFactory: typeof EventProviderFactory;
    ArgumentException: typeof ArgumentException;
    Exception: typeof Exception;
    InvalidOperationException: typeof InvalidOperationException;
    LocalStorage: typeof LocalStorage;
    StringReader: typeof StringReader;
    PathAnchor: typeof PathAnchor;
    Activator: typeof Activator;
    Type: typeof Type;
    Injectable: typeof injectable;
    ServiceEntry: typeof ServiceEntry;
    ServiceProvider: typeof ServiceProvider;
    ServiceProviderFactory: typeof ServiceProviderFactory;
    ServiceStorage: typeof ServiceStorage;
    ServiceStorageBase: typeof ServiceStorageBase;
    WorkerBase: typeof WorkerBase;
    WorkerStateChangedEventArgs: typeof WorkerStateChangedEventArgs;
    WorkerState: typeof WorkerState;
};

export default _default;
export { Activator, Application, ApplicationContextBase, ApplicationEventArgs, ArgumentException, Broadcast, BroadcastContext, BroadcastContract, BroadcastManager, BroadcastPriority, BroadcastReceiverEntry, BroadcastReceiverProvider, CancelEventArgs, CharUtils, command as Command, CommandBase, CommandCollection, CommandContext, CommandExecutor, CommandExecutorContext, CommandExpression, CommandExpressionParser, CommandOptionCollection, ConsoleLogHandler, EnumEntry, EnumUtils, Enumerator, EventArgs, EventProvider, EventProviderFactory, Exception, IApplicationModule, IBroadcastReceiver, IBroadcastReceiverProvider, ICommand, ICommandExecutor, ICommandExpressionParser, ICredential, IDisposable, IEnumerable, IEnumerator, IEventProvider, IEventProviderFactory, ILogHandler, IMap, IServiceBuilder, IServiceProvider, IServiceProviderFactory, IServiceStorage, ISet, IWorkbench, IWorker, injectable as Injectable, InvalidOperationException, KeyValuePair, LocalStorage, LogEntry, LogLevel, Logger, Map, PathAnchor, receivable as Receivable, RegexUtils, ServiceEntry, ServiceProvider, ServiceProviderFactory, ServiceStorage, ServiceStorageBase, Set, StringReader, StringUtils, Type, WorkbenchBase, WorkbenchStatus, WorkerBase, WorkerState, WorkerStateChangedEventArgs };
