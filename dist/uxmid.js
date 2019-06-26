/*!
 * uxmid-core v1.0.0 
 *
 * @Authors:
 *      jason <jasonsoop@gmail.com>
 *      Evan <skcy@vip.qq.com>
 * 
 * @Date:  2019-06-25 16:05:55
 * @version: 1.0.0
 * Licensed under the MIT License.
 * Copyright (C) 2010-2019 UXmid Inc. All rights reserved. 
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.uxmid = factory());
}(this, function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var exception = createCommonjsModule(function (module, exports) {
	/**
	 * 表示在应用程序执行期间发生的错误。
	 * @class
	 * @version 1.0.0
	 */
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var Exception = /** @class */ (function (_super) {
	    __extends(Exception, _super);
	    function Exception(message) {
	        return _super.call(this, message) || this;
	    }
	    return Exception;
	}(Error));
	exports.default = Exception;
	});

	unwrapExports(exception);

	var argumentException = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 当向方法提供的参数之一无效时引发的异常。
	 * @class
	 * @version 1.0.0
	 */
	var ArgumentException = /** @class */ (function (_super) {
	    __extends(ArgumentException, _super);
	    function ArgumentException(message) {
	        return _super.call(this, message) || this;
	    }
	    return ArgumentException;
	}(exception.default));
	exports.default = ArgumentException;
	});

	unwrapExports(argumentException);

	var invalidOperationException = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 当方法调用对于对象的当前状态无效时引发的异常。
	 * @class
	 * @version 1.0.0
	 */
	var InvalidOperationException = /** @class */ (function (_super) {
	    __extends(InvalidOperationException, _super);
	    function InvalidOperationException(message) {
	        return _super.call(this, message) || this;
	    }
	    return InvalidOperationException;
	}(exception.default));
	exports.default = InvalidOperationException;
	});

	unwrapExports(invalidOperationException);

	var exceptions = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.ArgumentException = argumentException.default;

	exports.Exception = exception.default;

	exports.InvalidOperationException = invalidOperationException.default;
	});

	unwrapExports(exceptions);
	var exceptions_1 = exceptions.ArgumentException;
	var exceptions_2 = exceptions.Exception;
	var exceptions_3 = exceptions.InvalidOperationException;

	var eventArgs = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * EventArgs 类作为创建事件参数的基类，当发生事件时，EventArgs 实例将作为参数传递给事件侦听器。
	 * @class
	 * @version 1.0.0
	 */
	var EventArgs = /** @class */ (function () {
	    /**
	     * 初始化 EventArgs 类的新实例。
	     * @constructor
	     * @param  {string} type 事件类型。
	     * @param  {any?} data 可选数据。
	     */
	    function EventArgs(type, data) {
	        if (!type) {
	            throw new exceptions.ArgumentException();
	        }
	        this._type = type;
	        this._data = data;
	    }
	    Object.defineProperty(EventArgs.prototype, "type", {
	        /**
	         * 获取一个字符串值，表示事件的类型。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._type;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EventArgs.prototype, "source", {
	        /**
	         * 获取或设置事件源对象。
	         * @property
	         * @returns any
	         */
	        get: function () {
	            return this._source;
	        },
	        set: function (value) {
	            if (!value) {
	                throw new exceptions.ArgumentException();
	            }
	            this._source = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EventArgs.prototype, "data", {
	        /**
	         * 获取或设置与事件关联的可选数据。
	         * @property
	         * @returns any
	         */
	        get: function () {
	            return this._data;
	        },
	        set: function (value) {
	            this._data = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return EventArgs;
	}());
	exports.default = EventArgs;
	});

	unwrapExports(eventArgs);

	var cancelEventArgs = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 为可取消的事件提供数据。
	 * @class
	 * @version 1.0.0
	 */
	var CancelEventArgs = /** @class */ (function (_super) {
	    __extends(CancelEventArgs, _super);
	    function CancelEventArgs() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this._cancel = false;
	        return _this;
	    }
	    Object.defineProperty(CancelEventArgs.prototype, "cancel", {
	        /**
	         * 获取或设置指示是否应取消事件。
	         * @property
	         * @returns boolean
	         */
	        get: function () {
	            return this._cancel;
	        },
	        set: function (value) {
	            this._cancel = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return CancelEventArgs;
	}(eventArgs.default));
	exports.default = CancelEventArgs;
	});

	unwrapExports(cancelEventArgs);

	var enumerator = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 表示一个默认的枚举器。
	 * @class
	 * @version 1.0.0
	 */
	var Enumerator = /** @class */ (function () {
	    /**
	     * 初始化 Enumerator<T> 类的新实例。
	     * @constructor
	     * @param  {Array<T>} items 要枚举的元素。
	     */
	    function Enumerator(items) {
	        if (!items) {
	            throw new exceptions.ArgumentException("items");
	        }
	        this._index = 0;
	        this._current = undefined;
	        this._items = items;
	    }
	    Object.defineProperty(Enumerator.prototype, "current", {
	        /**
	         * 获取当前遍历的值。
	         * @summary 如果已经遍历结束，则返回 undefined。
	         * @property
	         * @returns T
	         */
	        get: function () {
	            return this._current;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 将枚举数推进到集合的下一个元素。
	     * @returns boolean 如果枚举数已成功地推进到下一个元素，则为 true；如果枚举数传递到集合的末尾，则为 false。
	     */
	    Enumerator.prototype.next = function () {
	        var items = this._items;
	        if (this._index < items.length) {
	            this._current = items[this._index++];
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    return Enumerator;
	}());
	exports.default = Enumerator;
	});

	unwrapExports(enumerator);

	var keyValuePair = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 定义可设置或检索的键/值对。
	 * @class
	 * @version 1.0.0
	 */
	var KeyValuePair = /** @class */ (function () {
	    /**
	     * 初始化 KeyValuePair<K, V> 类的新实例。
	     * @param  {K} key 每个键/值对中定义的对象。
	     * @param  {V} value 与 key 相关联的定义。
	     */
	    function KeyValuePair(key, value) {
	        this._key = key;
	        this._value = value;
	    }
	    Object.defineProperty(KeyValuePair.prototype, "key", {
	        /**
	         * 获取键/值对中的键。
	         * @property
	         * @returns K
	         */
	        get: function () {
	            return this._key;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(KeyValuePair.prototype, "value", {
	        /**
	         * 获取键/值对中的值。
	         * @property
	         * @returns V
	         */
	        get: function () {
	            return this._value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 使用键和值的字符串表示形式返回 KeyValuePair<K, V> 的字符串表示形式。
	     * @override
	     * @returns string
	     */
	    KeyValuePair.prototype.toString = function () {
	        return "[" + (this._key || "") + ", " + (this._value || "") + "]";
	    };
	    return KeyValuePair;
	}());
	exports.default = KeyValuePair;
	});

	unwrapExports(keyValuePair);

	var map = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * 表示一个用于存储键值对的数据结构。
	 * @class
	 * @description Map 类似于对象，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
	 * @version 1.0.0
	 */
	var Map = /** @class */ (function () {
	    function Map() {
	        this._keys = []; // 键列表
	        this._values = []; // 值列表
	    }
	    Object.defineProperty(Map.prototype, "size", {
	        /**
	         * 获取 Map<K, V> 中实际包含的成员总数。
	         * @property
	         * @returns number
	         */
	        get: function () {
	            return this._keys.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 设置键名 key 对应的键值为 value，然后返回整个 Map<K, V> 结构。
	     * 如果 key 已经有值，则键值会被更新，否则就新生成该键。
	     * @param  {K} key 键。
	     * @param  {V} value 值。
	     * @returns void
	     */
	    Map.prototype.set = function (key, value) {
	        var keys = this._keys, index = keys.indexOf(key);
	        if (index === -1) {
	            index = keys.length;
	            keys[index] = key;
	        }
	        this._values[index] = value;
	        return this;
	    };
	    /**
	     * 读取 key 对应的键值，如果找不到 key，返回 undefined。
	     * @param  {K} key 键。
	     * @returns V
	     */
	    Map.prototype.get = function (key) {
	        var index = this._keys.indexOf(key);
	        return index !== -1 ? this._values[index] : undefined;
	    };
	    /**
	     * 确定 Map<K, V> 是否包含指定的键。
	     * @param  {K} key 键。
	     * @returns boolean 如果 Map<K, V> 包含具有指定键的成员，则为 true；否则为 false。
	     */
	    Map.prototype.has = function (key) {
	        return this._keys.indexOf(key) !== -1;
	    };
	    /**
	     * 从 Map<K, V> 中删除指定的键对应的项。
	     * @param  {K} key 键。
	     * @returns boolean  如果成功找到并移除该项，则为 true；否则为 false。
	     */
	    Map.prototype.delete = function (key) {
	        var index = this._keys.indexOf(key);
	        if (index !== -1) {
	            // 删除键和值
	            this._keys.splice(index, 1);
	            this._values.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    /**
	     * 清除所有键和值。
	     * @returns void
	     */
	    Map.prototype.clear = function () {
	        this._keys.length = 0;
	        this._values.length = 0;
	    };
	    /**
	     * 返回一个循环访问集合的枚举器。
	     * @returns IEnumerator
	     */
	    Map.prototype.getEnumerator = function () {
	        var entries = this.entries();
	        return new enumerator.default(entries);
	    };
	    /**
	     * 对 IEnumerable<T> 进行迭代处理。
	     * @param  {Function} callback 每次迭代中执行的回掉函数，当前迭代项将传入该函数。
	     * @param  {any} scope? 回掉函数中 this 所引用的对象。
	     * @returns void
	     */
	    Map.prototype.forEach = function (callback, scope) {
	        var keys = this._keys, values = this._values;
	        for (var i = 0, len = keys.length; i < len; i++) {
	            callback.call(scope, new keyValuePair.default(keys[i], values[i]), this);
	        }
	    };
	    /**
	     * 获取包含 Map<K, V> 中的键列表。
	     * @returns Array
	     */
	    Map.prototype.keys = function () {
	        return this._keys.concat();
	    };
	    /**
	     * 获取包含 Map<K, V> 中的值列表。
	     * @returns Array
	     */
	    Map.prototype.values = function () {
	        return this._values.concat();
	    };
	    /**
	     * 获取包含 Map<K, V> 中的成员列表。
	     * @returns Array
	     */
	    Map.prototype.entries = function () {
	        var entries = new Array();
	        this.forEach(function (item, source) {
	            entries.push(new keyValuePair.default(item.key, item.value));
	        });
	        return entries;
	    };
	    /**
	     * 返回 Map<K, V> 的字符串表示形式。
	     * @override
	     * @returns string
	     */
	    Map.prototype.toString = function () {
	        var obj = Object.create(null);
	        this.forEach(function (item, source) {
	            obj[item.key] = item.value;
	        });
	        return JSON.stringify(obj);
	    };
	    return Map;
	}());
	exports.default = Map;
	});

	unwrapExports(map);

	var set = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 表示一个强类型列表。提供用于对列表进行搜索、排序和操作的方法。
	 * @class
	 * @description Set<T> 接受 null 作为引用类型的有效值，但是不允许有重复的元素。
	 * @version 1.0.0
	 */
	var Set = /** @class */ (function () {
	    /**
	     * 初始化 Set<T> 的新实例。
	     * @param  {Array<T>} ...values
	     */
	    function Set() {
	        var _a;
	        var values = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            values[_i] = arguments[_i];
	        }
	        this._values = [];
	        (_a = this._values).push.apply(_a, values);
	    }
	    Object.defineProperty(Set.prototype, "size", {
	        /**
	         * 获取 Set<T> 中实际包含的元素总数。
	         * @property
	         * @returns number
	         */
	        get: function () {
	            return this._values.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 将元素添加到 Set<T> 的结尾处。
	     * @param  {T[]} ...values 要添加到 Set<T> 末尾处的元素。
	     * @returns Set
	     */
	    Set.prototype.add = function () {
	        var values = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            values[_i] = arguments[_i];
	        }
	        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
	            var value = values_1[_a];
	            if (!this.has(value)) {
	                this._values.push(value);
	            }
	        }
	        return this;
	    };
	    /**
	     * 获取指定索引处的元素。
	     * @param  {number} index 要获得或设置的元素从零开始的索引。
	     * @returns T 指定索引处的元素。
	     */
	    Set.prototype.get = function (index) {
	        return this._values[index];
	    };
	    /**
	     * 设置指定索引处的元素。
	     * @param  {number} index 设置的元素从零开始的索引。
	     * @param  {T} value 元素值。
	     * @returns void
	     */
	    Set.prototype.set = function (index, value) {
	        var values = this._values;
	        if (index >= 0 && index < values.length) {
	            if (!this.has(value)) {
	                values[index] = value;
	            }
	        }
	    };
	    /**
	     * 从 Set<T> 中移除特定元素的匹配项。
	     * @param  {T} value 要从 Set<T> 中移除的元素。
	     * @returns boolean 如果成功移除 value，则为 true；否则为 false。如果在 Set<T> 中没有找到 value，该方法也会返回 false。
	     */
	    Set.prototype.delete = function (value) {
	        var values = this._values, index = values.indexOf(value);
	        if (index !== -1) {
	            values.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    /**
	     * 移除 Set<T> 的指定索引处的元素。
	     * @param  {number} index 要移除的元素的从零开始的索引。
	     * @returns void
	     */
	    Set.prototype.deleteAt = function (index) {
	        var values = this._values;
	        if (index >= 0 && index < values.length) {
	            values.splice(index, 1);
	        }
	    };
	    /**
	     * 从 Set<T> 中移除所有元素。
	     * @returns void
	     */
	    Set.prototype.clear = function () {
	        this._values.length = 0;
	    };
	    /**
	     * 搜索指定的元素，并返回整个 Set<T> 中第一个匹配项的从零开始的索引。
	     * @param  {T} value 要在 Set<T> 中定位的元素。对于引用类型，该值可以为 null。
	     * @param  {number} index? 从零开始的搜索的起始索引。
	     * @returns number 如果在整个 Set<T> 中找到 value 的第一个匹配项，则为该项的从零开始的索引；否则为 -1。
	     */
	    Set.prototype.indexOf = function (value, index) {
	        return this._values.indexOf(value, index);
	    };
	    /**
	     * 确定某元素是否在 Set<T> 中。
	     * @param  {T} value 要在 Set<T> 中定位的元素。对于引用类型，该值可以为 null。
	     * @returns boolean 如果在 Set<T> 中找到 value，则为 true，否则为 false。
	     */
	    Set.prototype.has = function (value) {
	        return this._values.indexOf(value) !== -1;
	    };
	    /**
	     * 返回一个循环访问集合的枚举器。
	     * @returns IEnumerator
	     */
	    Set.prototype.getEnumerator = function () {
	        return new enumerator.default(this._values);
	    };
	    Set.prototype.forEach = function () {
	        var values = this._values, callback = arguments[0], scope = arguments[1], 
	        // tslint:disable-next-line:no-magic-numbers
	        fromEnumerable = callback.length === 2; // 标识是否从 IEnumerable 接口调用
	        for (var i = 0, len = values.length; i < len; i++) {
	            fromEnumerable ? callback.call(scope, values[i], this) : callback.call(scope, values[i], i, this);
	        }
	    };
	    /**
	     * 搜索与指定谓词所定义的条件相匹配的元素，并返回 Set<T> 中第一个匹配元素。
	     * @param  {Function} callback 定义要搜索的元素的条件。
	     * @param  {any} scope? 回掉函数中 this 所引用的对象。
	     * @returns T
	     */
	    Set.prototype.find = function (callback, scope) {
	        var values = this._values;
	        for (var i = 0, len = values.length; i < len; i++) {
	            if (callback.call(scope, values[i], i, this)) {
	                return values[i];
	            }
	        }
	        return undefined;
	    };
	    /**
	     * 使用指定的比较器对整个 Set<T> 中的元素进行排序。
	     * @param  {Function} comparer? 比较元素时要使用的比较器函数。
	     * @returns void
	     */
	    Set.prototype.sort = function (comparer) {
	        var values = this._values;
	        this._values = values.sort(comparer);
	    };
	    /**
	     * 将指定的 ISet<T> 合并到当前 ISet<T> 中。
	     * @param  {ISet<T>} second 需要合并的数据源。
	     * @returns ISet
	     */
	    Set.prototype.union = function (source) {
	        var values = source.values();
	        if (values.length > 0) {
	            this.add.apply(this, values);
	        }
	        return this;
	    };
	    /**
	     * 获取包含 Set<T> 中的值列表。
	     * @returns Array
	     */
	    Set.prototype.values = function () {
	        return this._values.concat();
	    };
	    /**
	     * 返回 Set<T> 的字符串表示形式。
	     * @override
	     * @returns string
	     */
	    Set.prototype.toString = function () {
	        return Array.prototype.toString.call(this._values);
	    };
	    return Set;
	}());
	exports.default = Set;
	});

	unwrapExports(set);

	var collections = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.Enumerator = enumerator.default;

	exports.KeyValuePair = keyValuePair.default;

	exports.Map = map.default;

	exports.Set = set.default;
	});

	unwrapExports(collections);
	var collections_1 = collections.Enumerator;
	var collections_2 = collections.KeyValuePair;
	var collections_3 = collections.Map;
	var collections_4 = collections.Set;

	var type = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 提供一些常用类型检测与反射相关的方法。
	 * @static
	 * @class
	 * @version 1.0.0
	 */
	var Type = /** @class */ (function () {
	    /**
	     * 私有构造方法，使类型成为静态类。
	     * @private
	     */
	    function Type() {
	    }
	    /**
	     * 检测一个值是否为数组。
	     * @static
	     * @param  {any} value
	     * @returns boolean
	     */
	    Type.isArray = function (value) {
	        return this.getTypeString(value) === "array";
	    };
	    /**
	     * 检测一个值是否为对象。
	     * @static
	     * @param  {any} value
	     * @returns boolean
	     */
	    Type.isObject = function (value) {
	        return this.getTypeString(value) === "object";
	    };
	    /**
	     * 检测一个值是否为字符串。
	     * @static
	     * @param  {any} value
	     * @returns boolean
	     */
	    Type.isString = function (value) {
	        return typeof value === "string";
	    };
	    /**
	     * 检测一个值是否为日期。
	     * @static
	     * @param  {any} value
	     * @returns boolean
	     */
	    Type.isDate = function (value) {
	        return this.getTypeString(value) === "date";
	    };
	    /**
	     * 检测一个值是否为正则表达式。
	     * @static
	     * @param  {any} value
	     * @returns boolean
	     */
	    Type.isRegExp = function (value) {
	        return this.getTypeString(value) === "regexp";
	    };
	    /**
	     * 检测一个值是否为函数。
	     * @static
	     * @param  {any} value
	     * @returns boolean
	     */
	    Type.isFunction = function (value) {
	        return typeof value === "function";
	    };
	    /**
	     * 检测一个值是否为布尔值。
	     * @static
	     * @param  {any} value
	     * @returns boolean
	     */
	    Type.isBoolean = function (value) {
	        return typeof value === "boolean";
	    };
	    /**
	     * 检测一个值是否为数值。
	     * @static
	     * @param  {any} value
	     * @returns boolean
	     */
	    Type.isNumber = function (value) {
	        return typeof value === "number";
	    };
	    /**
	     * 检测一个值是否为 null。
	     * @static
	     * @param  {any} value
	     * @returns boolean
	     */
	    Type.isNull = function (value) {
	        return value === null;
	    };
	    /**
	     * 检测一个值是否为 undefined。
	     * @static
	     * @param  {any} value
	     * @returns boolean
	     */
	    Type.isUndefined = function (value) {
	        return typeof value === "undefined";
	    };
	    /**
	     * 检测一个值是否为 null 或 undefined。
	     * @static
	     * @param  {any} value
	     * @returns boolean
	     */
	    Type.isEmptyObject = function (value) {
	        return Type.isNull(value) || Type.isUndefined(value);
	    };
	    /**
	     * 表示一个字符串值是否为 null 或 undefined 或 空值。
	     * @static
	     * @param  {string} value 要检测的字符串实例。
	     * @returns boolean
	     */
	    Type.isEmptyString = function (value) {
	        return Type.isEmptyObject(value) || value.trim() === "";
	    };
	    /**
	     * 设置指定类型的元数据。
	     * @param  {any} type 目标类型。
	     * @param  {any} metadata 元数据。
	     * @returns void
	     */
	    Type.setMetadata = function (type, metadata) {
	        if (!type || !metadata) {
	            throw new Error();
	        }
	        this._metadatas.set(type, metadata);
	    };
	    /**
	     * 获取指定类型的元数据。
	     * @param  {any} type 目标类型。
	     * @returns any 元数据。
	     */
	    Type.getMetadata = function (type) {
	        return this._metadatas.get(type) || null;
	    };
	    /**
	     * 返回对象的类型(即构造函数)。
	     * @param  {string|any} value 实例或类型路径。
	     * @returns Function 如果成功解析则返回类型的构造函数，否则为 undefined。
	     */
	    Type.getClassType = function (value) {
	        if (Type.isNull(value)) {
	            return null;
	        }
	        else if (Type.isUndefined(value)) {
	            return undefined;
	        }
	        else if (Type.isBoolean(value)) {
	            return Boolean;
	        }
	        else if (Type.isNumber(value)) {
	            return Number;
	        }
	        else if (Type.isString(value)) {
	            try {
	                // 通过 eval 解析字符串所指向的实际类型
	                // tslint:disable-next-line:no-eval
	                var ctor = eval(value);
	                return Type.isFunction(ctor) ? ctor : String;
	            }
	            catch (e) {
	                return String;
	            }
	        }
	        else {
	            var prototype = value.prototype ? value.prototype : Object.getPrototypeOf(value);
	            return prototype.constructor;
	        }
	    };
	    /**
	     * 返回 value 参数指定的对象的类名。
	     * @param  {any} value 需要取得类名称的对象，可以将任何 JavaScript 值传递给此方法，包括所有可用的 JavaScript 类型、对象实例、原始类型（如number)和类对象。
	     * @returns string 类名称的字符串。
	     */
	    Type.getClassName = function (value) {
	        var className = this.getQualifiedClassName(value).split(".");
	        return className[className.length - 1];
	    };
	    /**
	     * 返回 value 参数指定的对象的完全限定类名。
	     * @static
	     * @param  {any} value 需要取得完全限定类名称的对象，可以将任何 JavaScript 值传递给此方法，包括所有可用的 JavaScript 类型、对象实例、原始类型（如number)和类对象。
	     * @returns string 包含完全限定类名称的字符串。
	     */
	    Type.getQualifiedClassName = function (value) {
	        var type = typeof value;
	        if (!value || (type !== "object" && !value.prototype)) {
	            return type;
	        }
	        var prototype = value.prototype ? value.prototype : Object.getPrototypeOf(value);
	        if (prototype.hasOwnProperty("__class__")) {
	            return prototype["__class__"];
	        }
	        var constructorString = prototype.constructor.toString().trim();
	        var index = constructorString.indexOf("(");
	        // tslint:disable-next-line:no-magic-numbers
	        var className = constructorString.substring(9, index);
	        Object.defineProperty(prototype, "__class__", {
	            value: className,
	            enumerable: false,
	            writable: true
	        });
	        return className;
	    };
	    /**
	     * 返回 value 参数指定的对象的基类的类名。
	     * @param  {any} value 需要取得父类类名称的对象，可以将任何 JavaScript 值传递给此方法，包括所有可用的 JavaScript 类型、对象实例、原始类型（如number）和类对象。
	     * @returns string 基类名称，或 null（如果不存在基类名称）。
	     */
	    Type.getSuperclassName = function (value) {
	        var className = this.getQualifiedSuperclassName(value).split(".");
	        return className[className.length - 1];
	    };
	    /**
	     * 返回 value 参数指定的对象的基类的完全限定类名。
	     * @param  {any} value 需要取得父类完全限定类名称的对象，可以将任何 JavaScript 值传递给此方法，包括所有可用的 JavaScript 类型、对象实例、原始类型（如number）和类对象。
	     * @returns string 完全限定的基类名称，或 null（如果不存在基类名称）。
	     */
	    Type.getQualifiedSuperclassName = function (value) {
	        if (!value || (typeof value !== "object" && !value.prototype)) {
	            return null;
	        }
	        var prototype = value.prototype ? value.prototype : Object.getPrototypeOf(value);
	        var superProto = Object.getPrototypeOf(prototype);
	        if (!superProto) {
	            return null;
	        }
	        var superClass = this.getQualifiedClassName(superProto.constructor);
	        if (!superClass) {
	            return null;
	        }
	        return superClass;
	    };
	    /**
	     * 确定指定类型的实例是否可以分配给当前类型的实例。
	     * @param  {Function} parentType 指定基类的类型。
	     * @param  {Function} subType 指定的实例类型。
	     * @returns boolean
	     */
	    Type.isAssignableFrom = function (parentType, subType) {
	        // 两个参数任意却少一个都不会进行比较
	        if (!parentType || !subType) {
	            return false;
	        }
	        // 如果基类等于子类，则直接返回 true
	        if (parentType === subType) {
	            return true;
	        }
	        // 如果基类是 Object 则直接返回 true
	        if (parentType === Object || parentType === "Object") {
	            return true;
	        }
	        // 获取子类的原型实例
	        var subPrototype = subType.prototype;
	        // 1.首先，如果原型中有定义"__types__"则直接根据类型名称查找
	        // 注意: "__types__" 这个属性是由 TypeScript 引擎在生成代码时加入的
	        if (subPrototype.hasOwnProperty("__types__")) {
	            // 如果参数 parentType 不是字符串则获取基类的完全限定名称(包含命名空间)
	            var parentName = Type.isString(parentType) ? parentType : Type.getQualifiedClassName(parentType);
	            // 通过"__types__"去匹配基类名称
	            return subPrototype["__types__"].indexOf(parentName) !== -1;
	        }
	        // 2.其次，如果类型没有定义"__types__"，则根据原型链进行查找
	        // 获取子类的直属父类型(即上一级父类)
	        var superType = Object.getPrototypeOf(subPrototype).constructor;
	        // 如果已经查到顶层还没匹配到，则直接返回 false
	        if (superType === Object) {
	            return false;
	        }
	        if (Type.isString(parentType)) {
	            // 如果传进来的基类是字符串，则根据上级父类的名称进行匹配
	            if (Type.getQualifiedClassName(superType) === parentType) {
	                return true;
	            }
	        }
	        else {
	            // 否则根据传递进来的基类与直属父类进行匹配
	            if (superType === parentType) {
	                return true;
	            }
	        }
	        // 3.最后，如果当前层没匹配到，则通过递归原型向上一级一级查找
	        return Type.isAssignableFrom(parentType, superType);
	    };
	    /**
	     * 获取指定值的类型字符串(小写)。
	     * @private
	     * @static
	     * @param  {any} value
	     * @returns string
	     */
	    Type.getTypeString = function (value) {
	        return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
	    };
	    Type._metadatas = new collections.Map();
	    return Type;
	}());
	exports.default = Type;
	});

	unwrapExports(type);

	var runtime = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.Type = type.default;
	});

	unwrapExports(runtime);
	var runtime_1 = runtime.Type;

	var eventProvider = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	/**
	 * 表示一个事件项。
	 * @internal
	 * @class
	 * @version 1.0.0
	 */
	var EventEntry = /** @class */ (function () {
	    /**
	     * 初始化事件项的新实例。
	     * @param  {string} type 事件类型。
	     * @param  {Function} listener 侦听函数。
	     * @param  {any} scope 侦听函数中的 this 对象。
	     * @param  {boolean} scope 是否为仅回掉一次。
	     */
	    function EventEntry(type, listener, scope, once) {
	        this.type = type;
	        this.listener = listener;
	        this.scope = scope;
	        this.once = once;
	    }
	    return EventEntry;
	}());
	/**
	 * 事件提供程序类。
	 * @description 用于添加或删除事件侦听器的方法，检查是否已注册特定类型的事件侦听器，并调度事件。
	 * @class
	 * @version 1.0.0
	 */
	var EventProvider = /** @class */ (function () {
	    /**
	     * 初始化事件提供程序的新实例。
	     * @param  {any} source? 事件源实例。
	     */
	    function EventProvider(source) {
	        // 保存事件源对象
	        this._source = source || this;
	        // 初始化事件字典
	        this._events = new collections.Map();
	    }
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
	    EventProvider.prototype.addListener = function (type, listener, scope, once) {
	        if (scope === void 0) { scope = this; }
	        if (once === void 0) { once = false; }
	        if (!type || !listener) {
	            throw new exceptions.ArgumentException();
	        }
	        var entries = this._events.get(type);
	        if (!entries) {
	            entries = new Array();
	            this._events.set(type, entries);
	        }
	        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
	            var entry = entries_1[_i];
	            // 防止添加重复的侦听函数
	            if (entry.listener === listener && entry.scope === scope) {
	                return;
	            }
	        }
	        entries.push(new EventEntry(type, listener, scope, once));
	    };
	    /**
	     * 移除侦听器。如果没有注册任何匹配的侦听器，则对此方法的调用没有任何效果。
	     * @param  {string} type 事件类型。
	     * @param  {Function} listener 处理事件的侦听器函数。
	     * @param  {any} scope? 侦听函数绑定的 this 对象。
	     * @returns void
	     */
	    EventProvider.prototype.removeListener = function (type, listener, scope) {
	        if (scope === void 0) { scope = this; }
	        if (!type || !listener) {
	            throw new exceptions.ArgumentException();
	        }
	        var entries = this._events.get(type);
	        if (!entries) {
	            return;
	        }
	        for (var i = 0, len = entries.length; i < len; i++) {
	            var entry = entries[i];
	            if (entry.listener === listener && entry.scope === scope) {
	                entries.splice(i, 1);
	                break;
	            }
	        }
	        // 如果事件项为空，则需要释放资源
	        if (entries.length === 0) {
	            this._events.delete(type);
	        }
	    };
	    /**
	     * 检查是否为特定事件类型注册了侦听器。
	     * @param  {string} type 事件类型。
	     * @returns boolean 如果指定类型的侦听器已注册，则值为 true；否则，值为 false。
	     */
	    EventProvider.prototype.hasListener = function (type) {
	        var entries = this._events.get(type);
	        return !!entries && entries.length > 0;
	    };
	    EventProvider.prototype.dispatchEvent = function () {
	        var params = arguments, args;
	        switch (params.length) {
	            // 重载匹配: 
	            // dispatchEvent(args: EventArgs): void;
	            // dispatchEvent(type: string): void;
	            case 1:
	                {
	                    if (params[0] instanceof eventArgs.default) {
	                        // 参数匹配: args: EventArgs
	                        args = params[0];
	                    }
	                    else if (runtime.Type.isString(params[0])) {
	                        // 参数匹配: type: string
	                        args = new eventArgs.default(params[0]);
	                    }
	                    break;
	                }
	            // 重载匹配:
	            // dispatchEvent(type: string, data: any): void;
	            case 2:
	                {
	                    // 参数匹配: type: string, data: any
	                    args = new eventArgs.default(params[0], params[1]);
	                    break;
	                }
	        }
	        // 设置事件源
	        args.source = this._source;
	        // 根据事件类型获取所有事件项
	        var entries = this._events.get(args.type);
	        if (!entries || entries.length === 0) {
	            return;
	        }
	        // 临时数组用于保存只回掉一次的事件项
	        var onces = new Array();
	        for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
	            var entry = entries_2[_i];
	            entry.listener.call(entry.scope, args);
	            if (entry.once) {
	                onces.push(entry);
	            }
	        }
	        // 清除所有只回调一次的事件项
	        while (onces.length) {
	            var entry = onces.pop();
	            this.removeListener(entry.type, entry.listener, entry.scope);
	        }
	    };
	    return EventProvider;
	}());
	exports.default = EventProvider;
	});

	unwrapExports(eventProvider);

	var eventProviderFactory = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	/**
	 * 提供关于事件提供程序的功能。
	 * @class
	 * @version 1.0.0
	 */
	var EventProviderFactory = /** @class */ (function () {
	    /**
	     * 初始化事件提供程序工厂的新实例。
	     * @constructor
	     */
	    function EventProviderFactory() {
	        this._providers = new collections.Map();
	    }
	    Object.defineProperty(EventProviderFactory.prototype, "providers", {
	        /**
	         * 获取所有事件提供程序。
	         * @property
	         * @returns IMap<any, IEventProvider>
	         */
	        get: function () {
	            return this._providers;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EventProviderFactory, "instance", {
	        /**
	         * 获取事件提供程序工厂的单实例。
	         * @static
	         * @property
	         * @returns EventProviderFactory
	         */
	        get: function () {
	            if (!this._instance) {
	                this._instance = new EventProviderFactory();
	            }
	            return this._instance;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 获取指定事件源的事件提供程序。
	     * @param  {any} source IEventProvider 所抛出事件对象的源对象。
	     * @returns IEventProdiver 返回指定名称的事件提供程序。
	     */
	    EventProviderFactory.prototype.getProvider = function (source) {
	        if (!source) {
	            throw new exceptions.ArgumentException();
	        }
	        var provider = this._providers.get(source);
	        if (!provider) {
	            provider = this.createProvider(source);
	            this._providers.set(source, provider);
	        }
	        return provider;
	    };
	    /**
	     * 根据指定事件源创建一个事件提供程序。
	     * @virtual
	     * @param  {any} source IEventProvider 所抛出事件对象的源对象。
	     * @returns IEventProvider 事件提供程序实例。
	     */
	    EventProviderFactory.prototype.createProvider = function (source) {
	        return new eventProvider.default(source);
	    };
	    return EventProviderFactory;
	}());
	exports.default = EventProviderFactory;
	});

	unwrapExports(eventProviderFactory);

	var events = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.CancelEventArgs = cancelEventArgs.default;

	exports.EventArgs = eventArgs.default;

	exports.EventProvider = eventProvider.default;

	exports.EventProviderFactory = eventProviderFactory.default;
	});

	unwrapExports(events);
	var events_1 = events.CancelEventArgs;
	var events_2 = events.EventArgs;
	var events_3 = events.EventProvider;
	var events_4 = events.EventProviderFactory;

	var applicationEventArgs = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 应用程序事件参数类。
	 * @class
	 * @version 1.0.0
	 */
	var ApplicationEventArgs = /** @class */ (function (_super) {
	    __extends(ApplicationEventArgs, _super);
	    /**
	     * 初始化应用程序事件参数类的新实例。
	     * @param  {string} type 事件类型。
	     * @param  {ApplicationContextBase} context 应用程序上下文实例。
	     */
	    function ApplicationEventArgs(type, context) {
	        var _this = _super.call(this, type) || this;
	        _this.context = context;
	        return _this;
	    }
	    return ApplicationEventArgs;
	}(events.EventArgs));
	exports.default = ApplicationEventArgs;
	});

	unwrapExports(applicationEventArgs);

	var charUtils = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var CharUtils = /** @class */ (function () {
	    function CharUtils() {
	    }
	    CharUtils.isChar = function (char) {
	        return runtime.Type.isString(char) && char.length === 1;
	    };
	    CharUtils.isLatin = function (char) {
	        return char.charCodeAt(0) <= 255;
	    };
	    CharUtils.isAscii = function (char) {
	        return char.charCodeAt(0) <= 127;
	    };
	    CharUtils.isLetterOrDigit = function (char) {
	        if (!this.isChar(char)) {
	            return false;
	        }
	        var regex = /^[0-9a-zA-Z]*$/g;
	        return regex.test(char);
	    };
	    CharUtils.isWhiteSpace = function (char) {
	        if (!this.isChar(char)) {
	            return false;
	        }
	        var code = char.charCodeAt(0);
	        return code === 32 || code >= 9 && code <= 13 || code === 160 || code === 133;
	    };
	    return CharUtils;
	}());
	exports.default = CharUtils;
	});

	unwrapExports(charUtils);

	var enumEntry = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 表示枚举项的描述。
	 * @class
	 * @version 1.0.0
	 */
	var EnumEntry = /** @class */ (function () {
	    /**
	     * 初始化枚举项的新实例。
	     * @param  {string} name 枚举项的名称。
	     * @param  {number} value 枚举项的值。
	     * @param  {string=""} alias 枚举项的别名。
	     * @param  {string=""} description 枚举项的描述。
	     */
	    function EnumEntry(name, value, alias, description) {
	        this.name = name;
	        this.value = value;
	        this.alias = alias || "";
	        this.description = description || "";
	    }
	    return EnumEntry;
	}());
	exports.default = EnumEntry;
	});

	unwrapExports(enumEntry);

	var enumUtils = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	/**
	 * 关于的枚举辅助工具类。
	 * @static
	 * @class
	 * @version 1.0.0
	 */
	var EnumUtils = /** @class */ (function () {
	    function EnumUtils() {
	    }
	    /**
	     * 获取指定枚举项对应的描述对象。
	     * @param  {number} value 枚举值。
	     * @param  {any} type 要获取的枚举类型。
	     * @returns EnumEntry 返回的指定枚举项对应的枚举描述对象。
	     */
	    EnumUtils.getEntry = function (value, type) {
	        if (!type) {
	            throw new exceptions.ArgumentException();
	        }
	        var entries = this.getEntries(type).filter(function (e) { return e.value === value; });
	        return entries.length === 1 ? entries[0] : null;
	    };
	    /**
	     * 获取指定枚举的描述对象数据。
	     * @param  {any} type 要获取的枚举类型。
	     * @returns Array<EnumEntry> 返回的枚举描述对象数组。
	     */
	    EnumUtils.getEntries = function (type) {
	        if (!type) {
	            throw new exceptions.ArgumentException();
	        }
	        // 尝试从缓存中获取
	        if (this._entryCache.has(type)) {
	            return this._entryCache.get(type);
	        }
	        // 获取枚举的元数据
	        var metadata = runtime.Type.getMetadata(type) || {};
	        var entries = new Array(), fields = this.getFields(type);
	        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
	            var _a = fields_1[_i], name_1 = _a[0], value = _a[1];
	            var meta = metadata[name_1];
	            var alias = meta ? meta.alias : "";
	            var description = meta ? meta.description : "";
	            entries.push(new enumEntry.default(name_1, value, alias, description));
	        }
	        // 加入缓存以便下次获取
	        if (entries.length > 0) {
	            this._entryCache.set(type, entries);
	        }
	        return entries;
	    };
	    /**
	     * 获取指定枚举类型的字段列表
	     * @param  {any} type 枚举类型。
	     * @returns Array<[string, number]> 一个元组数据，数据项以<名称,值>的方式返回。
	     */
	    EnumUtils.getFields = function (type) {
	        if (!type) {
	            throw new exceptions.ArgumentException();
	        }
	        var fields = Object.keys(type)
	            .map(function (key) { return [key, type[key]]; })
	            .filter(function (_a) {
	            var key = _a[0], value = _a[1];
	            return runtime.Type.isNumber(value);
	        });
	        return fields;
	    };
	    EnumUtils._entryCache = new collections.Map();
	    return EnumUtils;
	}());
	exports.default = EnumUtils;
	});

	unwrapExports(enumUtils);

	var regexUtils = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 正则表达式常用工具类。
	 * @static
	 * @class
	 * @version 1.0.0
	 */
	var RegexUtils = /** @class */ (function () {
	    function RegexUtils() {
	    }
	    /**
	     * 表示一个 URI 正则表达式。
	     * @static
	     * @member
	     */
	    RegexUtils.uri = /^([a-zA-Z0-9\.]+:\/\/)(.+)$/;
	    /**
	     * 表示一个 Scheme 正则表达式。
	     * @static
	     * @member
	     */
	    RegexUtils.scheme = /^([a-zA-Z0-9\.]+:\/\/)$/;
	    return RegexUtils;
	}());
	exports.default = RegexUtils;
	});

	unwrapExports(regexUtils);

	var stringUtils = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var StringUtils = /** @class */ (function () {
	    function StringUtils() {
	    }
	    StringUtils.trim = function (text) {
	        var chars = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            chars[_i - 1] = arguments[_i];
	        }
	        for (var _a = 0, chars_1 = chars; _a < chars_1.length; _a++) {
	            var char = chars_1[_a];
	            text = text.replace(new RegExp("^" + char + "+|" + char + "+$", "g"), "");
	        }
	        return text.trim();
	    };
	    StringUtils.isMobile = function (text) {
	        return /^1[34578]\d{9}$/.test(text);
	    };
	    StringUtils.isPassword = function (text) {
	        return text.length >= 6 && text.length <= 16;
	    };
	    StringUtils.generateRandom = function (count) {
	        var result = "";
	        for (var i = 0; i < count; i++) {
	            var id = Math.ceil(Math.random() * 35);
	            result += chars[id];
	        }
	        return result;
	    };
	    return StringUtils;
	}());
	exports.default = StringUtils;
	});

	unwrapExports(stringUtils);

	var common = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.CharUtils = charUtils.default;

	exports.EnumEntry = enumEntry.default;

	exports.EnumUtils = enumUtils.default;

	exports.RegexUtils = regexUtils.default;

	exports.StringUtils = stringUtils.default;
	});

	unwrapExports(common);
	var common_1 = common.CharUtils;
	var common_2 = common.EnumEntry;
	var common_3 = common.EnumUtils;
	var common_4 = common.RegexUtils;
	var common_5 = common.StringUtils;

	var logLevel = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 表示一个日志的级别。
	 * @enum
	 * @version 1.0.0
	 */
	var LogLevel;
	(function (LogLevel) {
	    /**
	     * 调试。
	     * @member
	     */
	    LogLevel[LogLevel["debug"] = 1] = "debug";
	    /**
	     * 警告。
	     * @member
	     */
	    LogLevel[LogLevel["warn"] = 2] = "warn";
	    /**
	     * 错误。
	     * @member
	     */
	    LogLevel[LogLevel["error"] = 3] = "error";
	})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
	/*
	* 定义枚举元数据。
	*/
	runtime.Type.setMetadata(LogLevel, 
	// tslint:disable-next-line:align
	{
	    debug: {
	        alias: "DEBUG",
	        description: "调试"
	    },
	    warn: {
	        alias: "WARN",
	        description: "警告"
	    },
	    error: {
	        alias: "ERROR",
	        description: "错误"
	    }
	});
	});

	unwrapExports(logLevel);
	var logLevel_1 = logLevel.LogLevel;

	var consoleLogHandler = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * 表示一个基于控制台输出的日志处理程序。
	 * @class
	 * @version 1.0.0
	 */
	var ConsoleLogHandler = /** @class */ (function () {
	    function ConsoleLogHandler() {
	    }
	    /**
	     * 处理日志项。
	     * @param  {LogEntry} entry 日志项。
	     * @returns void
	     */
	    ConsoleLogHandler.prototype.handle = function (entry) {
	        var print;
	        var level = common.EnumUtils.getEntry(entry.level, logLevel.LogLevel);
	        switch (entry.level) {
	            case logLevel.LogLevel.debug:
	                {
	                    print = console.log;
	                    break;
	                }
	            case logLevel.LogLevel.warn:
	                {
	                    print = console.warn;
	                    break;
	                }
	            case logLevel.LogLevel.error:
	                {
	                    print = console.error;
	                    break;
	                }
	        }
	        print("[--------[" + level.alias + "] " + entry.timestamp.toLocaleString() + "--------");
	        print(entry.message);
	        if (entry.data) {
	            print(entry.data);
	        }
	        print(entry.source);
	        print("----------------------------------------------]");
	    };
	    return ConsoleLogHandler;
	}());
	exports.default = ConsoleLogHandler;
	});

	unwrapExports(consoleLogHandler);

	var logEntry = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 表示一个日志项。
	 * @interface
	 * @version 1.0.0
	 */
	var LogEntry = /** @class */ (function () {
	    /**
	     * 初始化日志项的新实例。
	     * @param  {LogLevel} level 日志级别。
	     * @param  {any} source 日志来源。
	     * @param  {string} message 消息。
	     * @param  {any} data? 附带数据。
	     */
	    function LogEntry(level, source, message, data) {
	        this._level = level;
	        this._source = source;
	        this._message = message;
	        this._data = data;
	        this._timestamp = new Date();
	    }
	    Object.defineProperty(LogEntry.prototype, "level", {
	        /**
	         * 获取日志级别。
	         * @member
	         * @returns LogLevel
	         */
	        get: function () {
	            return this._level;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LogEntry.prototype, "source", {
	        /**
	         * 获取日志来源。
	         * @member
	         * @returns any
	         */
	        get: function () {
	            return this._source;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LogEntry.prototype, "message", {
	        /**
	         * 获取或设置消息。
	         * @member
	         * @returns string
	         */
	        get: function () {
	            return this._message;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LogEntry.prototype, "data", {
	        /**
	         * 获取或设置数据。
	         * @member
	         * @returns any
	         */
	        get: function () {
	            return this._data;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LogEntry.prototype, "timestamp", {
	        /**
	         * 获取或设置时间。
	         * @member
	         * @returns Date
	         */
	        get: function () {
	            return this._timestamp;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return LogEntry;
	}());
	exports.default = LogEntry;
	});

	unwrapExports(logEntry);

	var logger = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	/**
	 * 提供日志记录的功能。
	 * @class
	 * @version 1.0.0
	 */
	var Logger = /** @class */ (function () {
	    function Logger() {
	    }
	    Object.defineProperty(Logger, "handlers", {
	        /**
	         * 获取所有日志处理程序。
	         * @static
	         * @returns ISet
	         */
	        get: function () {
	            return this._handlers;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 记录一个调试日志。
	     * @static
	     * @param  {any} source 日志来源。
	     * @param  {string} message 日志消息。
	     * @param  {any} data? 附带数据。
	     * @returns void
	     */
	    Logger.debug = function (source, message, data) {
	        this.write(logLevel.LogLevel.debug, source, message, data);
	    };
	    /**
	     * 记录一个警告日志。
	     * @static
	     * @param  {any} source 日志来源。
	     * @param  {string} message 日志消息。
	     * @param  {any} data? 附带数据。
	     * @returns void
	     */
	    Logger.warn = function (source, message, data) {
	        this.write(logLevel.LogLevel.warn, source, message, data);
	    };
	    /**
	     * 记录一个错误日志。
	     * @static
	     * @param  {any} source 日志来源。
	     * @param  {string} message 日志消息。
	     * @param  {any} data? 附带数据。
	     * @returns void
	     */
	    Logger.error = function (source, message, data) {
	        this.write(logLevel.LogLevel.error, source, message, data);
	    };
	    /**
	     * 写入日志。
	     * @static
	     * @param  {LogLevel} level 日志级别。
	     * @param  {any} source 日志来源。
	     * @param  {string} message 日志消息。
	     * @param  {any} data? 附带数据。
	     * @returns void
	     */
	    Logger.write = function (level, source, message, data) {
	        var entry = new logEntry.default(level, source, message, data);
	        this._handlers.forEach(function (handler) {
	            handler.handle(entry);
	        });
	    };
	    Logger._handlers = new collections.Set();
	    return Logger;
	}());
	exports.default = Logger;
	});

	unwrapExports(logger);

	var diagnostics = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.ConsoleLogHandler = consoleLogHandler.default;

	exports.LogEntry = logEntry.default;

	exports.Logger = logger.default;

	exports.LogLevel = logLevel.LogLevel;
	});

	unwrapExports(diagnostics);
	var diagnostics_1 = diagnostics.ConsoleLogHandler;
	var diagnostics_2 = diagnostics.LogEntry;
	var diagnostics_3 = diagnostics.Logger;
	var diagnostics_4 = diagnostics.LogLevel;

	var application = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	/**
	 * 应用程序类，负责整个应用的启动和退出。
	 * @static
	 * @class
	 * @version 1.0.0
	 */
	var Application = /** @class */ (function () {
	    function Application() {
	    }
	    Object.defineProperty(Application, "eventProvider", {
	        /**
	         * 获取一个事件提供程序实例。
	         * @private
	         * @property
	         * @returns IEventProvider
	         */
	        get: function () {
	            if (!this._eventProvider) {
	                this._eventProvider = new events.EventProvider(this);
	            }
	            return this._eventProvider;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Application, "isStarted", {
	        /**
	         * 获取一个布尔值，表示当前应用是否启动完成。
	         * @static
	         * @property
	         * @returns boolean
	         */
	        get: function () {
	            return this._isStarted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Application, "context", {
	        /**
	         * 获取应用程序上下文实例。
	         * @static
	         * @property
	         * @returns ApplicationContextBase
	         */
	        get: function () {
	            return this._context;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 启动应用程序。
	     * @static
	     * @param  {ApplicationContextBase} context 应用程序上下文实例。
	     * @param  {Array<string>} args 启动参数。
	     * @returns void
	     */
	    Application.start = function (context, args) {
	        var _this = this;
	        if (!context) {
	            throw new exceptions.ArgumentException("context");
	        }
	        if (this._isStarted) {
	            return;
	        }
	        // 激发 "starting" 事件
	        this.dispatchEvent(new applicationEventArgs.default(this.STARTING, context));
	        try {
	            // 保存应用程序上下文
	            this._context = context;
	            // 将应用上下文对象注册到默认服务容器中
	            context.serviceFactory.default.register("applicationContext", context);
	            // 初始化全局模块
	            this.initializeGlobalModules(context);
	            // 获取工作台对象
	            var workbench = context.getWorkbench(args);
	            // 如果工作台对象不为空则运行工作台
	            if (workbench) {
	                // 挂载工作台打开事件
	                workbench.addListener(workbench.OPENED, function (e) {
	                    // 标识应用程序启动完成
	                    _this._isStarted = true;
	                    // 激发 "started" 事件
	                    _this.dispatchEvent(new applicationEventArgs.default(_this.STARTED, context));
	                });
	                // 挂载工作台关闭事件
	                workbench.addListener(workbench.CLOSED, function (e) {
	                    _this.exit();
	                });
	                // 启动工作台
	                workbench.open(args);
	            }
	        }
	        catch (ex) {
	            // 应用无法启动，写入日志
	            diagnostics.Logger.error(this, ex);
	            // 重抛异常
	            throw ex;
	        }
	    };
	    /**
	     * 关闭当前应用程序。
	     * @static
	     * @returns void
	     */
	    Application.exit = function () {
	        var context = this._context;
	        // 如果上下文对象为空，则表示尚未启动
	        if (!context) {
	            return;
	        }
	        // 重置启动标记
	        this._isStarted = false;
	        // 创建取消事件参数
	        var args = new events.CancelEventArgs(this.EXITING, this);
	        // 激发 "exiting" 事件
	        this.dispatchEvent(args);
	        // 判断是否取消退出，如果是则退出
	        if (args.cancel) {
	            return;
	        }
	        // 关闭工作台
	        if (context.workbench) {
	            context.workbench.close();
	        }
	        // 卸载全局模块
	        this.disposeGlobalModules(context);
	        // 释放应用程序上下文
	        this._context = null;
	    };
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
	    Application.addListener = function (type, listener, scope, once) {
	        this.eventProvider.addListener(type, listener, scope, once);
	    };
	    /**
	     * 移除侦听器。如果没有注册任何匹配的侦听器，则对此方法的调用没有任何效果。
	     * @param  {string} type 事件类型。
	     * @param  {Function} listener 处理事件的侦听器函数。
	     * @param  {any} scope? 侦听函数绑定的 this 对象。
	     * @returns void
	     */
	    Application.removeListener = function (type, listener, scope) {
	        this.eventProvider.removeListener(type, listener, scope);
	    };
	    /**
	     * 派发一个指定参数的事件。
	     * @param  {EventArgs} eventArgs 事件参数实例。
	     * @returns void
	     */
	    Application.dispatchEvent = function (args) {
	        this.eventProvider.dispatchEvent(args);
	    };
	    /**
	     * 初始化全局模块。
	     * @private
	     * @static
	     * @param  {ApplicationContextBase} context
	     * @returns void
	     */
	    Application.initializeGlobalModules = function (context) {
	        context.modules.forEach(function (module) {
	            if (module) {
	                module.initialize(context);
	            }
	        });
	    };
	    /**
	     * 卸载全局模块。
	     * @private
	     * @static
	     * @param  {ApplicationContextBase} context
	     * @returns void
	     */
	    Application.disposeGlobalModules = function (context) {
	        context.modules.forEach(function (module) {
	            if (module) {
	                module.dispose();
	            }
	        });
	    };
	    Application._isStarted = false; // 标识应用程序是否启动完成
	    Application._context = null; // 应用程序上下文实例
	    /**
	     * 当应用程序启动时产生的事件。
	     * @event ApplicationEventArgs
	     */
	    Application.STARTING = "starting";
	    /**
	     * 当应用程序启动后产生的事件。
	     * @event ApplicationEventArgs
	     */
	    Application.STARTED = "started";
	    /**
	     * 当应用程序即将退出时产生的事件。
	     * @event CancelEventArgs
	     */
	    Application.EXITING = "exiting";
	    return Application;
	}());
	exports.default = Application;
	});

	unwrapExports(application);

	var localStorage = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * 表示全局本地缓存容器。
	 * @static
	 * @class
	 * @version 1.0.0
	 */
	var LocalStorage = /** @class */ (function () {
	    /**
	     * 私有构造方法。
	     * @private
	     */
	    function LocalStorage() {
	    }
	    Object.defineProperty(LocalStorage, "proxy", {
	        /**
	         * 获取或设置缓存代理。
	         * @returns any
	         */
	        get: function () {
	            if (!this._proxy && window && window.localStorage) {
	                return window.localStorage;
	            }
	            return this._proxy;
	        },
	        set: function (value) {
	            this._proxy = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LocalStorage, "size", {
	        /**
	         * 获取本地缓存容器的存储数量。
	         * @static
	         * @property
	         * @returns number
	         */
	        get: function () {
	            return this.proxy.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 将指定的键值对加入缓存中。
	     * @static
	     * @param  {string} key 缓存键。
	     * @param  {any} obj 缓存值。
	     * @returns void
	     */
	    LocalStorage.set = function (key, value) {
	        if (!key) {
	            throw new exceptions.ArgumentException();
	        }
	        var serialized = this.serialize(value);
	        this.proxy.setItem(key, serialized);
	    };
	    /**
	     * 从缓存中获取指定键名的值。
	     * @static
	     * @param  {string} key 缓存键。
	     * @returns T
	     */
	    LocalStorage.get = function (key) {
	        return this.deserialize(this.proxy.getItem(key));
	    };
	    /**
	     * 从缓存中移除指定键名的值。
	     * @static
	     * @param  {string} key 缓存键。
	     * @returns void
	     */
	    LocalStorage.remove = function (key) {
	        if (!key) {
	            throw new exceptions.ArgumentException(key);
	        }
	        this.proxy.removeItem(key);
	    };
	    /**
	     * 清空缓存容器中所有缓存。
	     * @static
	     * @returns void
	     */
	    LocalStorage.clear = function () {
	        this.proxy.clear();
	    };
	    /**
	     * 将指定的字符串序列化为一个字符串。
	     * @private
	     * @static
	     * @param  {any} obj 待序列化的对象。
	     * @returns string 序列化的字符串。
	     */
	    LocalStorage.serialize = function (obj) {
	        return runtime.Type.isUndefined(obj) || runtime.Type.isFunction(obj) ? obj + "" : JSON.stringify(obj);
	    };
	    /**
	     * 将指定的字符串反序列化为一个对象。
	     * @private
	     * @static
	     * @param  {string} str 待反序列化的字符串。
	     * @returns any 反序列化后的实例，如果反序列化失败则返回 undefined。
	     */
	    LocalStorage.deserialize = function (str) {
	        try {
	            return JSON.parse(str);
	        }
	        catch (ex) {
	            return str || undefined;
	        }
	    };
	    return LocalStorage;
	}());
	exports.default = LocalStorage;
	});

	unwrapExports(localStorage);

	var stringReader = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 实现从字符串进行读取的读取器。
	 * @class
	 * @version 1.0.0
	 */
	var StringReader = /** @class */ (function () {
	    /**
	     * 初始化从指定字符串进行读取的 StringReader 类的新实例。
	     * @constructor
	     * @param  {string} text
	     */
	    function StringReader(text) {
	        if (!text) {
	            throw new exceptions.ArgumentException();
	        }
	        this._text = text;
	        this._position = 0;
	        this._length = text.length;
	    }
	    /**
	     * 返回下一个可用的字符，但不使用它。
	     * @returns number 表示下一个要读取的字符的整数，或者，如果没有更多的可用字符或该流不支持查找，则为 -1。
	     */
	    StringReader.prototype.peek = function () {
	        if (this._position === this._length) {
	            return -1;
	        }
	        return this._text.charCodeAt(this._position);
	    };
	    /**
	     * 读取输入字符串中的下一个字符并将该字符的位置提升一个字符。
	     * @returns number 基础字符串中的下一个字符，或者如果没有更多的可用字符，则为 -1。
	     */
	    StringReader.prototype.read = function () {
	        if (this._position === this._length) {
	            return -1;
	        }
	        var pos = this._position;
	        this._position++;
	        return this._text.charCodeAt(pos);
	    };
	    /**
	     * 将整个流或从流的当前位置到流的结尾作为字符串读取。
	     * @returns string 从当前位置到基础字符串的结尾之间的内容。
	     */
	    StringReader.prototype.readToEnd = function () {
	        var str = this._position !== 0 ? this._text.substring(this._position, this._length) : this._text;
	        this._position = this._length;
	        return str;
	    };
	    /**
	     * 从基础字符串中读取一行。
	     * @returns string 基础字符串中的下一行；或者如果到达了基础字符串的末尾，则为 null。
	     */
	    StringReader.prototype.readLine = function () {
	        var text = this._text, pos;
	        for (pos = this._position; pos < this._length; ++pos) {
	            var code = text.charCodeAt(pos);
	            var char = String.fromCharCode(code);
	            switch (char) {
	                case "\r":
	                case "\n":
	                    {
	                        var str = text.substring(this._position, pos);
	                        this._position = pos + 1;
	                        // tslint:disable-next-line:no-magic-numbers
	                        if (code === 13 && this._position < this._length && text.charCodeAt(this._position) === 10) {
	                            this._position++;
	                        }
	                        return str;
	                    }
	                default:
	                    {
	                        continue;
	                    }
	            }
	        }
	        if (pos <= this._position) {
	            return null;
	        }
	        var str1 = text.substring(this._position, pos);
	        this._position = pos;
	        return str1;
	    };
	    /**
	     * 执行与释放或重置非托管资源关联的应用程序定义的任务。
	     * @returns void
	     */
	    StringReader.prototype.dispose = function () {
	        this._text = null;
	        this._position = 0;
	        this._length = 0;
	    };
	    return StringReader;
	}());
	exports.default = StringReader;
	});

	unwrapExports(stringReader);

	var pathAnchor = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 表示关于路径的锚定点。
	 * @enum
	 * @version 1.0.0
	 */
	var PathAnchor;
	(function (PathAnchor) {
	    /**
	     * 未锚定。
	     * @member
	     */
	    PathAnchor[PathAnchor["none"] = 0] = "none";
	    /**
	     * 基于当前位置。
	     * @member
	     */
	    PathAnchor[PathAnchor["current"] = 1] = "current";
	    /**
	     * 基于上级节点。
	     * @member
	     */
	    PathAnchor[PathAnchor["parent"] = 2] = "parent";
	    /**
	     * 从根节点开始。
	     * @member
	     */
	    PathAnchor[PathAnchor["root"] = 3] = "root";
	})(PathAnchor = exports.PathAnchor || (exports.PathAnchor = {}));
	});

	unwrapExports(pathAnchor);
	var pathAnchor_1 = pathAnchor.PathAnchor;

	var io = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.LocalStorage = localStorage.default;

	exports.StringReader = stringReader.default;

	exports.PathAnchor = pathAnchor.PathAnchor;
	});

	unwrapExports(io);
	var io_1 = io.LocalStorage;
	var io_2 = io.StringReader;
	var io_3 = io.PathAnchor;

	var activator = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * 提供对象实例创建的方法。
	 * @static
	 * @class
	 * @version 1.0.0
	 */
	var Activator = /** @class */ (function () {
	    /**
	     * 私有构造方法，使类型成为静态类。
	     * @private
	     */
	    function Activator() {
	    }
	    /**
	     * 创建指定类型的实例。
	     * @param  {string|Function} type 类型字符串或类型构造函数。
	     * @param  {any[]} ...params 需要传递给构造函数的参数。
	     * @returns T
	     */
	    Activator.createInstance = function (type) {
	        var params = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            params[_i - 1] = arguments[_i];
	        }
	        var types = this._types, ctor;
	        if (runtime.Type.isString(type)) {
	            type = type;
	            // 先从缓存中获取类型，如果不存在则动态解析并加入缓存
	            if (!types.has(type)) {
	                ctor = runtime.Type.getClassType(type);
	                if (ctor === String) {
	                    throw new TypeError("Can not found the type \"" + type + "\".");
	                }
	                // 只有解析到的类型不是字符串，而是真实的类型时才往下走
	                types.set(type, ctor);
	            }
	            else {
	                ctor = types.get(type);
	            }
	        }
	        else if (runtime.Type.isFunction(type)) {
	            ctor = type;
	        }
	        return new (ctor.bind.apply(ctor, [void 0].concat(params)))();
	    };
	    Activator._types = new collections.Map();
	    return Activator;
	}());
	exports.default = Activator;
	});

	unwrapExports(activator);

	var reflection = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.Activator = activator.default;
	});

	unwrapExports(reflection);
	var reflection_1 = reflection.Activator;

	var serviceEntry = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * 表示一个用于存取服务使用的服务项。
	 * @class
	 * @version 1.0.0
	 */
	var ServiceEntry = /** @class */ (function () {
	    function ServiceEntry() {
	        this._name = null; // 服务名称
	        this._service = null; // 服务实例
	        this._serviceType = null; // 服务类型
	        this._contractTypes = null; // 服务所持有的契约类型
	        this._serviceBuilder = null; // 服务生成器
	        var args = arguments;
	        switch (args.length) {
	            // 签名匹配: 
	            // constructor(serviceType: Function, contractTypes?: Array<Function>);
	            // constructor(service: any, contractTypes?: Array<Function>);
	            case 1:
	            // tslint:disable-next-line:no-magic-numbers
	            case 2:
	                {
	                    // 参数匹配: serviceType: Function
	                    if (runtime.Type.isFunction(args[0])) {
	                        this._serviceType = args[0];
	                    }
	                    // 参数匹配: service: any
	                    else {
	                        this._service = args[0];
	                        this._serviceType = runtime.Type.getClassType(args[0]);
	                    }
	                    // 参数匹配: contractTypes?: Array<Function>
	                    this._contractTypes = args[1] || null;
	                    break;
	                }
	            // 签名匹配: 
	            // constructor(name: string, serviceType: Function, contractTypes?: Array<Function>);
	            // constructor(name: string, service: any, contractTypes?: Array<Function>);
	            // tslint:disable-next-line:no-magic-numbers
	            case 3:
	                {
	                    // 参数匹配: name: string
	                    this._name = args[0];
	                    // 参数匹配: serviceType: Function
	                    if (runtime.Type.isFunction(args[1])) {
	                        this._serviceType = args[1];
	                    }
	                    // 参数匹配: service: any
	                    else {
	                        this._service = args[1];
	                        this._serviceType = runtime.Type.getClassType(args[1]);
	                    }
	                    // 参数匹配: contractTypes?: Array<Function>
	                    // tslint:disable-next-line:no-magic-numbers
	                    this._contractTypes = args[2] || null;
	                    break;
	                }
	        }
	    }
	    Object.defineProperty(ServiceEntry.prototype, "name", {
	        /**
	         * 获取服务的名称。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ServiceEntry.prototype, "serviceType", {
	        /**
	         * 获取服务的类型。
	         * @property
	         * @returns Function
	         */
	        get: function () {
	            if (!this._serviceType) {
	                var instance = this._service;
	                if (instance) {
	                    this._serviceType = runtime.Type.getClassType(instance);
	                }
	            }
	            return this._serviceType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ServiceEntry.prototype, "service", {
	        /**
	         * 获取服务实例。
	         * @property
	         * @returns any
	         */
	        get: function () {
	            if (!this._service) {
	                // 创建一个新的服务实例
	                this._service = this.createService();
	            }
	            return this._service;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ServiceEntry.prototype, "hasService", {
	        /**
	         * 获取一个布尔值，表示当前服务项是否包含服务实例。
	         * @property
	         * @returns boolean
	         */
	        get: function () {
	            return this._service ? true : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ServiceEntry.prototype, "hasContracts", {
	        /**
	         * 获取一个布尔值，表示当前服务项是否包含契约类型。
	         * @property
	         * @returns boolean
	         */
	        get: function () {
	            return this._contractTypes && this._contractTypes.length > 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ServiceEntry.prototype, "contractTypes", {
	        /**
	         * 获取当前服务项包含的所有契约类型。
	         * @property
	         * @returns Function
	         */
	        get: function () {
	            return this._contractTypes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ServiceEntry.prototype, "serviceBuilder", {
	        /**
	         * 获取或设置服务生成器。
	         * @property
	         * @param  {IServiceBuilder} value
	         */
	        get: function () {
	            return this._serviceBuilder;
	        },
	        set: function (value) {
	            this._serviceBuilder = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 返回服务项的字符串表现形式。
	     * @override
	     * @returns string
	     */
	    ServiceEntry.prototype.toString = function () {
	        var typeName = runtime.Type.getQualifiedClassName(this.serviceType);
	        if (runtime.Type.isEmptyString(this.name)) {
	            return typeName;
	        }
	        else {
	            return this.name + " (" + typeName + ")";
	        }
	    };
	    /**
	     * 创建服务实例。
	     * @protected
	     * @virtual
	     * @returns any
	     */
	    ServiceEntry.prototype.createService = function () {
	        var builder = this._serviceBuilder;
	        if (builder) {
	            // 如果服务生成器，则交由服务生成器生成实例
	            var instance = builder.build(this);
	            if (instance) {
	                this._serviceType = runtime.Type.getClassType(instance);
	            }
	            return instance;
	        }
	        var type = this._serviceType;
	        if (type) {
	            // 否则由默认的实例生成函数生成实例
	            return reflection.Activator.createInstance(type);
	        }
	        return null;
	    };
	    return ServiceEntry;
	}());
	exports.default = ServiceEntry;
	});

	unwrapExports(serviceEntry);

	var serviceStorageBase = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });






	/**
	 * 服务仓储基类。
	 * @abstract
	 * @class
	 * @version 1.0.0
	 */
	var ServiceStorageBase = /** @class */ (function () {
	    /**
	     * 初始化服务仓储的新实例。
	     * @param  {IServiceProvider} provider
	     */
	    function ServiceStorageBase(provider) {
	        if (!provider) {
	            throw new exceptions.ArgumentException("provider");
	        }
	        this._provider = provider;
	    }
	    Object.defineProperty(ServiceStorageBase.prototype, "provider", {
	        /**
	         * 获取一个服务提供程序实例。
	         * @property
	         * @returns IServiceProvider
	         */
	        get: function () {
	            return this._provider;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ServiceStorageBase.prototype.add = function () {
	        var args = arguments, entry;
	        switch (args.length) {
	            // 重载匹配: 
	            // add(entry: ServiceEntry): void;
	            // add(serviceType: Function): ServiceEntry;
	            // add(service: any): ServiceEntry;
	            case 1:
	                {
	                    if (args[0] instanceof serviceEntry.default) {
	                        // 参数匹配: entry: ServiceEntry
	                        entry = args[0];
	                    }
	                    else {
	                        // 参数匹配: serviceType: Function,
	                        // 参数匹配: service: any
	                        entry = new serviceEntry.default(args[0], null);
	                    }
	                    break;
	                }
	            // 重载匹配: 
	            // add(serviceType: Function, contractTypes?: Array<Function>): ServiceEntry;
	            // add(service: any, contractTypes?: Array<Function>): ServiceEntry;
	            // add(name: string, serviceType: Function): ServiceEntry;
	            // add(name: string, service: any): ServiceEntry;
	            // tslint:disable-next-line:no-magic-numbers
	            case 2:
	                {
	                    if (!runtime.Type.isString(args[0])) {
	                        // 参数匹配: serviceType: Function, contractTypes?: Array<Function>
	                        // 参数匹配: service: any, contractTypes?: Array<Function>
	                        entry = new serviceEntry.default(args[0], args[1]);
	                    }
	                    else {
	                        // 参数匹配: name: string, serviceType: Function
	                        // 参数匹配: name: string, service: any
	                        entry = new serviceEntry.default(args[0], args[1], null);
	                    }
	                    break;
	                }
	            // 重载匹配: 
	            // add(name: string, serviceType: Function, contractTypes?: Array<Function>): ServiceEntry;
	            // add(name: string, service: any, contractTypes?: Array<Function>): ServiceEntry;
	            // tslint:disable-next-line:no-magic-numbers
	            case 3:
	                {
	                    // 参数匹配: name: string, serviceType: Function, contractTypes?: Array<Function>
	                    // 参数匹配: name: string, service: any, contractTypes?: Array<Function>
	                    // tslint:disable-next-line:no-magic-numbers
	                    entry = new serviceEntry.default(args[0], args[1], args[2]);
	                    break;
	                }
	        }
	        if (!entry) {
	            throw new exceptions.ArgumentException("Can not add service, please check the arguments.");
	        }
	        // 调用抽象方法添加至容器中
	        this.insert(entry);
	        return entry;
	    };
	    ServiceStorageBase.prototype.get = function () {
	        var args = arguments, result = null;
	        // 重载匹配: get(name: string): ServiceEntry;
	        if (runtime.Type.isString(args[0])) {
	            // 从当前容器及其外链容器中查找指定名称的服务
	            result = this.findByName(args[0], new collections.Set(this));
	            // 如果上面的查找失败，则尝试从默认服务容器及其外链容器中查找指定名称的服务
	            var defaultProvider = serviceProviderFactory.default.instance.default;
	            if (!result && defaultProvider && defaultProvider.storage !== this) {
	                result = this.findByName(args[0], new collections.Set(defaultProvider.storage));
	            }
	            // 如果根据名称还没找到，则根据类型进行匹配
	            if (!result) {
	                // 根据指定类型查找
	                // tslint:disable-next-line:whitespace
	                result = this.findByType(args[0], false);
	            }
	        }
	        // 重载匹配: get(serviceType: Function): ServiceEntry;
	        else {
	            // 根据指定类型查找
	            result = this.findByType(args[0], false);
	        }
	        return result;
	    };
	    /**
	     * 获取指定服务类型的所有服务项实例。
	     * @param  {Function} serviceType 服务类型。
	     * @returns IEnumerable<ServiceEntry> 服务项列表。
	     */
	    ServiceStorageBase.prototype.getAll = function (serviceType) {
	        return this.findByType(serviceType, true);
	    };
	    /**
	     * 根据名称在指定的服务项列表中查找服务项。
	     * @virtual
	     * @param  {string} name 服务名称。
	     * @param  {ISet<IServiceStorage>} storages 服务仓储列表。
	     * @returns ServiceEntry
	     */
	    ServiceStorageBase.prototype.findByName = function (name, storages) {
	        if (!name || !storages) {
	            return null;
	        }
	        for (var i = 0; i < storages.size; i++) {
	            var storage = storages.get(i);
	            // 获取当前仓储的迭代器
	            var enumerator = storage.getEnumerator();
	            while (enumerator.next()) {
	                var entry = enumerator.current;
	                if (!entry) {
	                    continue;
	                }
	                // 如果名称匹配成功则返回
	                if (entry.name === name) {
	                    return entry;
	                }
	                // 如果当前服务项是一个服务容器
	                if (entry.serviceType && runtime.Type.isAssignableFrom(serviceProvider.default, entry.serviceType)) {
	                    var provider = entry.service;
	                    // 如果当前服务项对应的服务容器不在外部容器列表中，则将当前服务项(服务容器)加入到外部服务容器列表中
	                    if (provider && !storages.has(provider.storage)) {
	                        storages.add(provider.storage);
	                    }
	                }
	            }
	        }
	        // 返回空(查找失败)
	        return null;
	    };
	    /**
	     * 根据指定的类型进行寻找。
	     * @virtual
	     * @param  {Function | string} type 要查找的服务类型。
	     * @param  {boolean} isMultiplex 是否为多个结果。
	     * @returns any
	     */
	    ServiceStorageBase.prototype.findByType = function (type, isMultiplex) {
	        // 从当前容器及其外链容器中查找指定类型的服务
	        var result = this.searchService(type, isMultiplex, new collections.Set(this));
	        var succeed = !runtime.Type.isEmptyObject(result);
	        if (succeed) {
	            // 如果查找结果是一个空 Set，则标识查找失败，继续往下查找
	            if (result instanceof collections.Set && result.size === 0) {
	                succeed = false;
	            }
	        }
	        // 如果上面的查找失败，则尝试从默认服务容器及其外链容器中查找指定类型的服务
	        var defaultProvider = serviceProviderFactory.default.instance.default;
	        if (!succeed && defaultProvider && defaultProvider.storage !== this) {
	            result = this.searchService(type, isMultiplex, new collections.Set(defaultProvider.storage));
	        }
	        return result;
	    };
	    /**
	     * 在指定的仓储中搜索类型。
	     * @private
	     * @returns any
	     */
	    ServiceStorageBase.prototype.searchService = function (type, isMultiplex, storages) {
	        if (!type || !storages) {
	            return null;
	        }
	        var weaklys = new collections.Set();
	        var strongs = new collections.Set();
	        for (var i = 0; i < storages.size; i++) {
	            var storage = storages.get(i);
	            // 获取当前仓储的迭代器
	            var enumerator = storage.getEnumerator();
	            // 迭代查找服务，首先进行类型匹配然后再进行匹配比对
	            while (enumerator.next()) {
	                var entry = enumerator.current;
	                if (!entry || !entry.serviceType) {
	                    continue;
	                }
	                // 如果服务项声明了契约，则按契约声明进行匹配
	                if (entry.hasContracts) {
	                    // 契约的严格匹配
	                    if (runtime.Type.isFunction(type) && entry.contractTypes.indexOf(type) !== -1) {
	                        if (!isMultiplex) {
	                            return entry;
	                        }
	                        strongs.add(entry);
	                    }
	                    // 契约的弱匹配
	                    else {
	                        for (var _i = 0, _a = entry.contractTypes; _i < _a.length; _i++) {
	                            var contract = _a[_i];
	                            if (runtime.Type.isAssignableFrom(type, contract)) {
	                                weaklys.add(entry);
	                            }
	                        }
	                    }
	                }
	                // 处理未声明契约的服务
	                else {
	                    // 服务类型的严格匹配
	                    if (runtime.Type.isFunction(type) && entry.serviceType === type) {
	                        if (!isMultiplex) {
	                            return entry;
	                        }
	                        strongs.add(entry);
	                    }
	                    // 服务类型的弱匹配
	                    else {
	                        if (runtime.Type.isAssignableFrom(type, entry.serviceType)) {
	                            weaklys.add(entry);
	                        }
	                    }
	                }
	                // 如果只查找单个服务
	                if (!isMultiplex) {
	                    // 如果只查找单个服务，并且弱匹配已成功则退出查找
	                    if (weaklys.size > 0) {
	                        break;
	                    }
	                    // 如果当前服务项是一个服务容器
	                    if (entry.serviceType && runtime.Type.isAssignableFrom(serviceProvider.default, entry.serviceType)) {
	                        var provider = entry.service;
	                        // 如果当前服务项对应的服务容器不在外部容器列表中，则将当前服务项(服务容器)加入到外部服务容器列表中
	                        if (provider && !storages.has(provider.storage)) {
	                            storages.add(provider.storage);
	                        }
	                    }
	                }
	            }
	            if (isMultiplex) {
	                return strongs.union(weaklys);
	            }
	            else if (weaklys.size > 0) {
	                return weaklys.get(0);
	            }
	        }
	        // 返回空(查找失败)
	        return null;
	    };
	    return ServiceStorageBase;
	}());
	exports.default = ServiceStorageBase;
	});

	unwrapExports(serviceStorageBase);

	var serviceStorage = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });




	/**
	 * 表示一个用于存取服务项的仓储容器。
	 * @class
	 * @version 1.0.0
	 */
	var ServiceStorage = /** @class */ (function (_super) {
	    __extends(ServiceStorage, _super);
	    /**
	     * 初始化服务仓储的实例。
	     * @param  {IServiceProvider} provider
	     */
	    function ServiceStorage(provider) {
	        var _this = _super.call(this, provider) || this;
	        _this._entries = new collections.Set();
	        _this._namedEntries = new collections.Map();
	        return _this;
	    }
	    Object.defineProperty(ServiceStorage.prototype, "size", {
	        /**
	         * 获取当前实际存储的服务项总数。
	         * @override
	         * @property
	         * @returns number
	         */
	        get: function () {
	            return this._entries.size;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 清空当前仓储下的所有服务项。
	     * @override
	     * @returns void
	     */
	    ServiceStorage.prototype.clear = function () {
	        this._entries.clear();
	        this._namedEntries.clear();
	    };
	    /**
	     * 移除指定名称的服务项。
	     * @override
	     * @returns ServiceEntry 移除后的服务项。
	     */
	    ServiceStorage.prototype.remove = function (name) {
	        if (!name) {
	            return null;
	        }
	        var entry = null;
	        if (this._namedEntries.has(name)) {
	            entry = this._namedEntries.get(name);
	            this._entries.delete(entry);
	            this._namedEntries.delete(name);
	        }
	        return entry;
	    };
	    ServiceStorage.prototype.get = function () {
	        var args = arguments;
	        // 首先从命名项的字典中查找指定名称的服务项
	        if (runtime.Type.isString(args[0]) && this._namedEntries.has(args[0])) {
	            return this._namedEntries.get(args[0]);
	        }
	        // 调用父类的查找逻辑
	        return _super.prototype.get.call(this, args[0]);
	    };
	    /**
	     * 返回一个循环访问集合的枚举器。
	     * @returns IEnumerator
	     */
	    ServiceStorage.prototype.getEnumerator = function () {
	        return this._entries.getEnumerator();
	    };
	    /**
	     * 对当前仓储进行迭代处理。
	     * @override
	     * @param  {Function} callback 每次迭代中执行的回掉函数，当前迭代项及它的索引号将被作为参数传入该方法。
	     * @param  {any} scope? 回掉函数中 this 所引用的对象。
	     * @returns void
	     */
	    ServiceStorage.prototype.forEach = function (callback, scope) {
	        this._entries.forEach(callback, scope);
	    };
	    /**
	     * 添加一个服务项至仓储中。
	     * @override
	     * @param  {ServiceEntry} entry 服务项实例。
	     * @returns void
	     */
	    ServiceStorage.prototype.insert = function (entry) {
	        if (!entry) {
	            throw new exceptions.ArgumentException();
	        }
	        if (entry.name) {
	            this._namedEntries.set(entry.name, entry);
	        }
	        this._entries.add(entry);
	    };
	    return ServiceStorage;
	}(serviceStorageBase.default));
	exports.default = ServiceStorage;
	});

	unwrapExports(serviceStorage);

	var serviceProvider = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });






	/**
	 * 用于检索服务对象的提供程序。
	 * @class
	 * @version 1.0.0
	 */
	var ServiceProvider = /** @class */ (function () {
	    /**
	     * 初始化服务提供程序的新实例。
	     * @param  {IServiceStorage} storage? 服务仓储实例。
	     * @param  {IServiceBuilder} builder? 服务生成器实例。
	     */
	    function ServiceProvider(storage, builder) {
	        // 如果服务仓储为空，则使用默认的仓储
	        storage = storage || new serviceStorage.default(this);
	        this._storage = storage;
	        this._builder = builder;
	    }
	    Object.defineProperty(ServiceProvider.prototype, "storage", {
	        /**
	         * 获取服务仓储实例。
	         * @property
	         * @returns IServiceStorage
	         */
	        get: function () {
	            return this._storage;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ServiceProvider.prototype, "builder", {
	        /**
	         * 获取服务生成器实例。
	         * @property
	         * @returns IServiceBuilder
	         */
	        get: function () {
	            return this._builder;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ServiceProvider.prototype.register = function () {
	        var args = arguments, entry;
	        switch (args.length) {
	            // 签名匹配: 
	            // register(name: string, serviceType: Function): void;
	            // register(name: string, service: any): void;
	            // register(serviceType: Function, contractTypes?: Array<Function>): void;
	            // register(service: any, contractTypes?: Array<Function>): void;
	            case 1:
	            // tslint:disable-next-line:no-magic-numbers
	            case 2:
	                {
	                    if (runtime.Type.isString(args[0])) {
	                        // 参数匹配: name: string, serviceType: Function
	                        // 参数匹配: name: string, service: any
	                        entry = new serviceEntry.default(args[0], args[1], null);
	                    }
	                    else {
	                        // 参数匹配: serviceType: Function, contractTypes?: Array<Function>
	                        // 参数匹配: service: any, contractTypes?: Array<Function>
	                        entry = new serviceEntry.default(args[0], args[1]);
	                    }
	                    break;
	                }
	            // 签名匹配: 
	            // register(name: string, serviceType: Function, contractTypes?: Array<Function>): void;
	            // register(name: string, service: any, contractTypes?: Array<Function>): void;
	            // tslint:disable-next-line:no-magic-numbers
	            case 3:
	                {
	                    // 参数匹配: name: string, serviceType: Function, contractTypes?: Array<Function>
	                    // 参数匹配: name: string, service: any, contractTypes?: Array<Function>
	                    // tslint:disable-next-line:no-magic-numbers
	                    entry = new serviceEntry.default(args[0], args[1], args[2]);
	                    break;
	                }
	        }
	        if (!entry) {
	            throw new exceptions.ArgumentException("Can not register service, please check the arguments.");
	        }
	        // 将服务项添加至服务仓储中
	        this._storage.add(entry);
	    };
	    /**
	     * 移除指定名称的服务。
	     * @param  {string} name 服务名称。
	     * @returns void
	     */
	    ServiceProvider.prototype.unregister = function (name) {
	        this._storage.remove(name);
	    };
	    ServiceProvider.prototype.resolve = function () {
	        // 通过服务仓储获取服务项
	        var entry = this._storage.get(arguments[0]);
	        if (!runtime.Type.isEmptyObject(entry)) {
	            // 根据服务项解析服务
	            return this.getService(entry);
	        }
	        return null;
	    };
	    /**
	     * 根据指定服务类型获取所有服务实例。
	     * @param  {Function} serviceType
	     * @returns IEnumerable
	     */
	    ServiceProvider.prototype.resolveAll = function (serviceType) {
	        var _this = this;
	        var result = new collections.Set(), entries = this._storage.getAll(serviceType);
	        entries.forEach(function (entry) {
	            result.add(_this.getService(entry));
	        });
	        return result;
	    };
	    /**
	     * 根据服务项获取服务实例。
	     * @protected
	     * @virtual
	     * @param  {ServiceEntry} entry
	     * @returns any 如果获取到服务则返回服务实例，否则为 null。
	     */
	    ServiceProvider.prototype.getService = function (entry) {
	        if (!entry) {
	            return null;
	        }
	        var result = entry.service;
	        // 如果服务项未包含服务实例，则尝试用生成器生成实例
	        if (runtime.Type.isEmptyObject(result)) {
	            var builder = this._builder;
	            if (builder) {
	                result = builder.build(entry);
	            }
	        }
	        return result || reflection.Activator.createInstance(entry.serviceType);
	    };
	    return ServiceProvider;
	}());
	exports.default = ServiceProvider;
	});

	unwrapExports(serviceProvider);

	var serviceProviderFactory = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	/**
	 * 提供关于服务供应程序容器的功能。
	 * @class
	 * @version 1.0.0
	 */
	var ServiceProviderFactory = /** @class */ (function () {
	    /**
	     * 初始化服务提供程序工厂的新实例。
	     * @param  {string} defaultName? 默认提供程序名称。
	     */
	    function ServiceProviderFactory(defaultName) {
	        if (defaultName === void 0) { defaultName = ""; }
	        this._defaultName = defaultName;
	        this._providers = new collections.Map();
	    }
	    Object.defineProperty(ServiceProviderFactory, "instance", {
	        /**
	         * 获取一个服务提供程序工厂的单实例。
	         * @static
	         * @property
	         * @returns ServiceProviderFactory
	         */
	        get: function () {
	            if (!this._instance) {
	                this._instance = new ServiceProviderFactory();
	            }
	            return this._instance;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ServiceProviderFactory.prototype, "default", {
	        /**
	         * 获取或设置默认的服务提供程序。
	         * @property
	         */
	        get: function () {
	            var provicer = this.getProvider(this._defaultName);
	            if (!provicer) {
	                provicer = new serviceProvider.default();
	                this.register(this._defaultName, provicer);
	            }
	            return provicer;
	        },
	        set: function (value) {
	            if (!value) {
	                throw new exceptions.ArgumentException();
	            }
	            this.register(this._defaultName, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 注册服务提供程序。
	     * @param  {string} name 要注册的服务供应程序的名称。
	     * @param  {IServiceProvider} provider 服务提供程序实例。
	     * @returns void
	     */
	    ServiceProviderFactory.prototype.register = function (name, provider) {
	        if (runtime.Type.isEmptyObject(name)) {
	            throw new exceptions.ArgumentException("name");
	        }
	        this._providers.set(name.trim(), provider);
	    };
	    /**
	     * 注销服务提供程序。
	     * @param  {string} name 要注销的服务提供程序名称。
	     */
	    ServiceProviderFactory.prototype.unregister = function (name) {
	        if (runtime.Type.isEmptyObject(name)) {
	            throw new exceptions.ArgumentException();
	        }
	        this._providers.delete(name.trim());
	    };
	    /**
	     * 获取指定名称的服务供应程序。
	     * @param  {string} name 指定的服务供应程序名称。
	     * @returns IServiceProvider 返回指定名称的服务供应程序。
	     */
	    ServiceProviderFactory.prototype.getProvider = function (name) {
	        if (runtime.Type.isEmptyObject(name)) {
	            throw new exceptions.ArgumentException("name");
	        }
	        name = name.trim();
	        if (this._providers.has(name)) {
	            return this._providers.get(name);
	        }
	        return null;
	    };
	    /**
	     * 返回一个循环访问集合的枚举器。
	     * @returns IEnumerator<KeyValuePair<string, IServiceProvider>>
	     */
	    ServiceProviderFactory.prototype.getEnumerator = function () {
	        return this._providers.getEnumerator();
	    };
	    /**
	     * 对 IEnumerable<T> 进行迭代处理。
	     * @param  {Function} callback 每次迭代中执行的回掉函数，当前迭代项将被作为参数传入该函数。
	     * @param  {any} scope? 回掉函数中 this 所引用的对象。
	     * @returns void
	     */
	    ServiceProviderFactory.prototype.forEach = function (callback, scope) {
	        this._providers.forEach(callback, scope);
	    };
	    return ServiceProviderFactory;
	}());
	exports.default = ServiceProviderFactory;
	});

	unwrapExports(serviceProviderFactory);

	var injectable_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 标注当前类型是一个可注入的服务。
	 * @summary 如果未指定 providerName 参数则默认注入至默认服务容器中。
	 * @param  {string} providerName? 服务容器名称。
	 */
	function injectable(providerName) {
	    return function (serviceType) {
	        var factory = serviceProviderFactory.default.instance, provider = providerName ? factory.getProvider(providerName) : factory.default;
	        provider.register(serviceType);
	    };
	}
	exports.default = injectable;
	});

	unwrapExports(injectable_1);

	var workerStateChangedEventArgs = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 表示工作器状态改变后的事件参数。
	 * @class
	 * @version 1.0.0
	 */
	var WorkerStateChangedEventArgs = /** @class */ (function (_super) {
	    __extends(WorkerStateChangedEventArgs, _super);
	    /**
	     * 初始化 WorkerStateChangedEventArgs 类的新实例。
	     * @param {string} type 事件类型。
	     * @param  {string} actionName 操作名称。
	     * @param  {WorkerState} state 发生改变的状态。
	     * @param  {Error} error? 发生状态改变时产生的异常。
	     */
	    function WorkerStateChangedEventArgs(type, actionName, state, error) {
	        var _this = _super.call(this, type) || this;
	        _this.actionName = actionName;
	        _this.state = state;
	        _this.error = error;
	        return _this;
	    }
	    return WorkerStateChangedEventArgs;
	}(events.EventArgs));
	exports.default = WorkerStateChangedEventArgs;
	});

	unwrapExports(workerStateChangedEventArgs);

	var workerBase = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });



	/**
	 * 关于工作器的抽象类。
	 * 实现子类应当重写 onStart onStop 这两个方法。
	 *
	 * @abstract
	 * @class
	 * @version 1.0.0
	 * jason
	 */
	var WorkerBase = /** @class */ (function (_super) {
	    __extends(WorkerBase, _super);
	    /**
	     * 初始化工作器的新实例。
	     * @constructor
	     * @param  {string} name 工作器名称。
	     */
	    function WorkerBase(name) {
	        var _this = _super.call(this) || this;
	        /**
	         * 表示当工作器状态改变后产生的事件。
	         * @event WorkerStateChangedEventArgs
	         */
	        _this.STATE_CHANGED = "stateChanged";
	        _this._name = name;
	        _this._disabled = false;
	        _this._canPauseAndContinue = false;
	        _this._state = 0 /* stopped */;
	        return _this;
	    }
	    Object.defineProperty(WorkerBase.prototype, "name", {
	        /**
	         * 获取当前工作器的名称。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WorkerBase.prototype, "state", {
	        /**
	         * 获取工作器的状态。
	         * @property
	         * @returns WorkerState
	         */
	        get: function () {
	            return this._state;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WorkerBase.prototype, "disabled", {
	        /**
	         * 获取或设置是否禁用工作器。
	         * @property
	         * @returns boolean
	         */
	        get: function () {
	            return this._disabled;
	        },
	        set: function (value) {
	            if (this._disabled === value) {
	                return;
	            }
	            this._disabled = value;
	            if (value) {
	                this.stop();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WorkerBase.prototype, "canPauseAndContinue", {
	        /**
	         * 获取工作器是否允许暂停和继续。
	         * @property
	         * @returns boolean
	         */
	        get: function () {
	            return this._canPauseAndContinue;
	        },
	        set: function (value) {
	            if (this._state !== 0 /* stopped */) {
	                throw new exceptions.InvalidOperationException();
	            }
	            this._canPauseAndContinue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 启动工作器。
	     * @async
	     * @param  {Array<string>} ...args 启动的参数。
	     * @returns void
	     */
	    WorkerBase.prototype.start = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        return __awaiter(this, void 0, void 0, function () {
	            var ex_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (this._disabled || this._state !== 0 /* stopped */) {
	                            return [2 /*return*/];
	                        }
	                        // 更新当前状态为“启动中”
	                        this._state = 1 /* starting */;
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        // 调用启动抽象方法，已执行实际的启动操作
	                        return [4 /*yield*/, this.onStart.apply(this, args)];
	                    case 2:
	                        // 调用启动抽象方法，已执行实际的启动操作
	                        _a.sent();
	                        // 更新当前状态为“运行中”
	                        this._state = 2 /* running */;
	                        // 激发“StateChanged”事件
	                        this.onStateChanged(new workerStateChangedEventArgs.default(this.STATE_CHANGED, "start", 2 /* running */));
	                        return [3 /*break*/, 4];
	                    case 3:
	                        ex_1 = _a.sent();
	                        this._state = 0 /* stopped */;
	                        // 激发“StateChanged”事件
	                        this.onStateChanged(new workerStateChangedEventArgs.default(this.STATE_CHANGED, "start", 0 /* stopped */, ex_1));
	                        throw ex_1;
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    /**
	     * 停止工作器。
	     * @async
	     * @param  {Array<string>} ...args 停止的参数。
	     * @returns void
	     */
	    WorkerBase.prototype.stop = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        return __awaiter(this, void 0, void 0, function () {
	            var originalState, ex_2;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        originalState = this._state;
	                        if (this._disabled || originalState === 6 /* stopping */ || originalState === 0 /* stopped */) {
	                            return [2 /*return*/];
	                        }
	                        // 更新当前状态为“正在停止中”
	                        this._state = 6 /* stopping */;
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        // 调用停止抽象方法，以执行实际的停止操作
	                        return [4 /*yield*/, this.onStop.apply(this, args)];
	                    case 2:
	                        // 调用停止抽象方法，以执行实际的停止操作
	                        _a.sent();
	                        // 更新当前状态为"已停止"
	                        this._state = 0 /* stopped */;
	                        // 激发“StateChanged”事件
	                        this.onStateChanged(new workerStateChangedEventArgs.default(this.STATE_CHANGED, "stop", 0 /* stopped */));
	                        return [3 /*break*/, 4];
	                    case 3:
	                        ex_2 = _a.sent();
	                        // 还原状态
	                        this._state = originalState;
	                        // 激发“StateChanged”事件
	                        this.onStateChanged(new workerStateChangedEventArgs.default(this.STATE_CHANGED, "stop", originalState, ex_2));
	                        throw ex_2;
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    /**
	     * 暂停工作器。
	     * @async
	     * @returns void
	     */
	    WorkerBase.prototype.pause = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var originalState, ex_3;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        originalState = this._state;
	                        if (this._disabled || !this._canPauseAndContinue) {
	                            return [2 /*return*/];
	                        }
	                        if (originalState !== 2 /* running */) {
	                            return [2 /*return*/];
	                        }
	                        // 更新当前状态为"正在暂停中"
	                        this._state = 3 /* pausing */;
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        // 执行暂停操作
	                        return [4 /*yield*/, this.onPause()];
	                    case 2:
	                        // 执行暂停操作
	                        _a.sent();
	                        // 更新当前状态为"已经暂停"
	                        this._state = 4 /* paused */;
	                        // 激发“StateChanged”事件
	                        this.onStateChanged(new workerStateChangedEventArgs.default(this.STATE_CHANGED, "pause", 4 /* paused */));
	                        return [3 /*break*/, 4];
	                    case 3:
	                        ex_3 = _a.sent();
	                        // 还原状态
	                        this._state = originalState;
	                        // 激发“StateChanged”事件
	                        this.onStateChanged(new workerStateChangedEventArgs.default(this.STATE_CHANGED, "pause", originalState, ex_3));
	                        throw ex_3;
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    /**
	     * 恢复工作器，继续运行。
	     * @async
	     * @returns void
	     */
	    WorkerBase.prototype.resume = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var originalState, e_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        originalState = this._state;
	                        if (this._disabled || !this._canPauseAndContinue) {
	                            return [2 /*return*/];
	                        }
	                        if (originalState !== 4 /* paused */) {
	                            return [2 /*return*/];
	                        }
	                        // 更新当前状态为"正在恢复中"
	                        this._state = 5 /* resuming */;
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        // 执行恢复
	                        return [4 /*yield*/, this.onResume()];
	                    case 2:
	                        // 执行恢复
	                        _a.sent();
	                        // 更新当前状态为"运行中"
	                        this._state = 2 /* running */;
	                        // 激发“StateChanged”事件
	                        this.onStateChanged(new workerStateChangedEventArgs.default(this.STATE_CHANGED, "resume", 2 /* running */));
	                        return [3 /*break*/, 4];
	                    case 3:
	                        e_1 = _a.sent();
	                        // 还原状态
	                        this._state = originalState;
	                        // 激发“StateChanged”事件
	                        this.onStateChanged(new workerStateChangedEventArgs.default(this.STATE_CHANGED, "resume", originalState, e_1));
	                        throw e_1;
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    /**
	     * 当工作器暂停时调用。
	     * @protected
	     * @virtual
	     * @async
	     * @returns void
	     */
	    // tslint:disable-next-line:no-empty
	    WorkerBase.prototype.onPause = function () {
	        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
	            return [2 /*return*/];
	        }); });
	    };
	    /**
	     * 当工作器恢复时调用。
	     * @protected
	     * @virtual
	     * @async
	     * @returns void
	     */
	    // tslint:disable-next-line:no-empty    
	    WorkerBase.prototype.onResume = function () {
	        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
	            return [2 /*return*/];
	        }); });
	    };
	    /**
	     * 当工作器状态发生改变时调用。
	     * @protected
	     * @virtual
	     * @param  {WorkerStateChangedEventArgs} args 事件参数。
	     * @returns void
	     */
	    WorkerBase.prototype.onStateChanged = function (args) {
	        this.dispatchEvent(this.STATE_CHANGED, args);
	    };
	    return WorkerBase;
	}(events.EventProvider));
	exports.default = WorkerBase;
	});

	unwrapExports(workerBase);

	var workerState = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 关于工作器的状态信息。
	 * @enum
	 * @version 1.0.0
	 */
	var WorkerState;
	(function (WorkerState) {
	    /**
	     * 未运行/已停止。
	     * @member
	     */
	    WorkerState[WorkerState["stopped"] = 0] = "stopped";
	    /**
	     * 正在启动中。
	     * @member
	     */
	    WorkerState[WorkerState["starting"] = 1] = "starting";
	    /**
	     * 运行中。
	     * @member
	     */
	    WorkerState[WorkerState["running"] = 2] = "running";
	    /**
	     * 正在暂停中。
	     * @member
	     */
	    WorkerState[WorkerState["pausing"] = 3] = "pausing";
	    /**
	     * 已暂停。
	     * @member
	     */
	    WorkerState[WorkerState["paused"] = 4] = "paused";
	    /**
	     * 正在恢复中。
	     * @member
	     */
	    WorkerState[WorkerState["resuming"] = 5] = "resuming";
	    /**
	     * 正在停止中。
	     * @member
	     */
	    WorkerState[WorkerState["stopping"] = 6] = "stopping";
	})(WorkerState = exports.WorkerState || (exports.WorkerState = {}));
	});

	unwrapExports(workerState);
	var workerState_1 = workerState.WorkerState;

	var services = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.Injectable = injectable_1.default;

	exports.ServiceEntry = serviceEntry.default;

	exports.ServiceProvider = serviceProvider.default;

	exports.ServiceProviderFactory = serviceProviderFactory.default;

	exports.ServiceStorage = serviceStorage.default;

	exports.ServiceStorageBase = serviceStorageBase.default;

	exports.WorkerBase = workerBase.default;

	exports.WorkerStateChangedEventArgs = workerStateChangedEventArgs.default;

	exports.WorkerState = workerState.WorkerState;
	});

	unwrapExports(services);
	var services_1 = services.Injectable;
	var services_2 = services.ServiceEntry;
	var services_3 = services.ServiceProvider;
	var services_4 = services.ServiceProviderFactory;
	var services_5 = services.ServiceStorage;
	var services_6 = services.ServiceStorageBase;
	var services_7 = services.WorkerBase;
	var services_8 = services.WorkerStateChangedEventArgs;
	var services_9 = services.WorkerState;

	var applicationContextBase = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	var CREDENTIALL_SYMBOL = "__credential__";
	/**
	 * 表示实现该抽象类的是一个应用程序上下文。
	 * @class
	 * @version 1.0.0
	 */
	var ApplicationContextBase = /** @class */ (function () {
	    /**
	     * 初始化应用程序上下文的新实例。
	     * @protected
	     * @param  {string} applicationId? 应用程序的唯一代号。
	     */
	    function ApplicationContextBase(applicationId) {
	        if (applicationId) {
	            this._applicationId = applicationId;
	        }
	    }
	    Object.defineProperty(ApplicationContextBase.prototype, "applicationId", {
	        /**
	         * 获取或设置当前应用程序唯一代号。
	         * @summary 注意：本属性一旦被设置则不能被更改。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._applicationId;
	        },
	        set: function (value) {
	            if (!value) {
	                throw new exceptions.ArgumentException("value");
	            }
	            if (this._applicationId) {
	                throw new exceptions.InvalidOperationException("The ApplicationId has specified already.");
	            }
	            this._applicationId = value.trim();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ApplicationContextBase.prototype, "title", {
	        /**
	         * 获取或设置当前应用程序的标题。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._title;
	        },
	        set: function (value) {
	            this._title = value || "";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ApplicationContextBase.prototype, "serviceFactory", {
	        /**
	         * 获取当前应用程序的服务管理对象。
	         * @property
	         * @returns IServiceProviderFactory
	         */
	        get: function () {
	            return services.ServiceProviderFactory.instance;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ApplicationContextBase.prototype, "modules", {
	        /** 吗
	         * 获取当前应用程序的模块集合。
	         * @property
	         * @returns ISet
	         */
	        get: function () {
	            if (!this._modules) {
	                this._modules = new collections.Set();
	            }
	            return this._modules;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ApplicationContextBase.prototype, "credential", {
	        /**
	         * 获取或设置当前用户的安全凭证。
	         * @property
	         * @returns ICredential
	         */
	        get: function () {
	            // 如果内存没有凭证，则从 LocalStorage 中获取
	            if (!this._credential) {
	                this._credential = io.LocalStorage.get(CREDENTIALL_SYMBOL);
	            }
	            return this._credential;
	        },
	        set: function (value) {
	            this._credential = value;
	            // 将安全凭证存入 LocalStorage 中
	            io.LocalStorage.set(CREDENTIALL_SYMBOL, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ApplicationContextBase.prototype, "states", {
	        /**
	         * 获取当前应用的状态字典。
	         * @property
	         * @returns IMap
	         */
	        get: function () {
	            if (!this._states) {
	                this._states = new collections.Map();
	            }
	            return this._states;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ApplicationContextBase.prototype, "workbench", {
	        /**
	         * 获取当前应用程序的工作台(主界面)。
	         * 必须使用 Application 类的 start 方法，启动应用程序后才能使用该属性获取到创建成功的工作台对象。
	         * @property
	         * @returns IWorkbench
	         */
	        get: function () {
	            return this._workbench;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 返回当前应用程序的工作台(主界面)。
	     * @param  {Array<string>} args 初始化的参数。
	     * @returns IWorkbench 返回新建或已创建的工作台对象。
	     */
	    ApplicationContextBase.prototype.getWorkbench = function (args) {
	        if (!this._workbench) {
	            // 创建工作台对象
	            this._workbench = this.createWorkbench(args);
	        }
	        return this._workbench;
	    };
	    return ApplicationContextBase;
	}());
	exports.default = ApplicationContextBase;
	});

	unwrapExports(applicationContextBase);

	var workbenchBase = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * 提供工作台的基本封装，建议自定义工作台从此类继承。
	 * @abstract
	 * @class
	 * @version 1.0.0
	 */
	var WorkbenchBase = /** @class */ (function (_super) {
	    __extends(WorkbenchBase, _super);
	    /**
	     * 初始化工作台的新实例。
	     * @protected
	     * @param  {ApplicationContextBase} applicationContext+
	     */
	    function WorkbenchBase(applicationContext) {
	        var _this = _super.call(this) || this;
	        /**
	         * 当工作台正在打开时产生的事件。
	         * @event EventArgs
	         */
	        _this.OPENING = "opening";
	        /**
	         * 当工作台被打开后产生的事件。
	         * @event EventArgs
	         */
	        _this.OPENED = "opened";
	        /**
	         * 当工作台正在取消激活时产生的事件。
	         * @event EventArgs
	         */
	        _this.DEACTIVATING = "deactivating";
	        /**
	         * 当工作台取消激活后产生的事件。
	         * @event EventArgs
	         */
	        _this.DEACTIVATED = "deactivated";
	        /**
	         * 当工作台正在激活时产生的事件。
	         * @event EventArgs
	         */
	        _this.ACTIVATING = "activating";
	        /**
	         * 当工作台正在关闭时产生的事件。
	         * @event CancelEventArgs
	         */
	        _this.CLOSING = "closing";
	        /**
	         * 当工作台被关闭后产生的事件。
	         * @event EventArgs
	         */
	        _this.CLOSED = "closed";
	        /**
	         * 当工作台标题被更改后产生的事件。
	         * @event EventArgs
	         */
	        _this.TITLE_CHANGED = "title_changed";
	        if (!applicationContext) {
	            throw new exceptions.ArgumentException();
	        }
	        _this._status = 0 /* closed */;
	        _this._title = applicationContext.title;
	        _this._applicationContext = applicationContext;
	        return _this;
	    }
	    Object.defineProperty(WorkbenchBase.prototype, "status", {
	        /**
	         * 获取工作台的当前状态。
	         * @property
	         * @returns WorkbenchStatus
	         */
	        get: function () {
	            return this._status;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WorkbenchBase.prototype, "title", {
	        /**
	         * 获取或设置工作台的标题。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._title;
	        },
	        set: function (value) {
	            // 如果与之前的标题相等，则不处理
	            if (this._title === value) {
	                return;
	            }
	            this._title = value ? value : "";
	            // 通知标题被更改
	            this.onTitleChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WorkbenchBase.prototype, "applicationContext", {
	        /**
	         * 获取工作台所属的应用程序上下文实例。
	         * @property
	         * @returns ApplicationContextBase
	         */
	        get: function () {
	            return this._applicationContext;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 打开工作台。
	     * @async
	     * @param  {Array<string>} args
	     * @returns void
	     */
	    WorkbenchBase.prototype.open = function (args) {
	        return __awaiter(this, void 0, void 0, function () {
	            var ex_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        // 如果工作台已经启动过则不处理
	                        if (this._status !== 0 /* closed */) {
	                            return [2 /*return*/];
	                        }
	                        try {
	                            // 通知工作台正在打开中
	                            this.onOpening();
	                        }
	                        catch (ex) {
	                            // 注意：可能因为预打开事件处理程序或工作台构建过程出错，都必须重置工作台状态为"closed"
	                            this._status = 0 /* closed */;
	                            // 重抛异常，导致后续的关闭代码不能继续
	                            throw ex;
	                        }
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        // 调用虚拟方法以执行实际启动的操作
	                        return [4 /*yield*/, this.onOpen(args)];
	                    case 2:
	                        // 调用虚拟方法以执行实际启动的操作
	                        _a.sent();
	                        return [3 /*break*/, 4];
	                    case 3:
	                        ex_1 = _a.sent();
	                        // 注意：如果在实际启动操作中，子类可能已经通过 onOpened 方法设置了工作台状态为运行，则无需再重置工作台状态；
	                        // 否则必须重置工作台状态为"closed"
	                        if (this._status === 1 /* opening */) {
	                            this._status = 0 /* closed */;
	                        }
	                        // 重抛异常，导致后续的关闭代码不能继续，故而上面代码重置了工作台状态
	                        throw ex_1;
	                    case 4:
	                        if (this._status === 1 /* opening */) {
	                            // 通知工作台打开完成
	                            this.onOpened();
	                        }
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    /**
	     * 关闭工作台。
	     * @async
	     * @returns boolean
	     */
	    WorkbenchBase.prototype.close = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var originalStatus, args, ex_2;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        originalStatus = this._status;
	                        // 如果工作台正在关闭或已经关闭，则直接退出
	                        if (originalStatus === 6 /* closing */ || originalStatus === 0 /* closed */) {
	                            return [2 /*return*/, false];
	                        }
	                        if (originalStatus === 1 /* opening */) {
	                            throw new exceptions.InvalidOperationException();
	                        }
	                        args = new events.CancelEventArgs(this.CLOSING);
	                        try {
	                            this.onClosing(args);
	                        }
	                        catch (ex) {
	                            // 注意：由于事件处理程序出错，必须还原工作台状态
	                            this._status = originalStatus;
	                            // 重抛异常，导致后续的关闭代码不能继续，故而上面代码重置了工作台状态
	                            throw ex;
	                        }
	                        // 如果事件处理程序要取消后续的关闭操作，则重置工作台状态
	                        if (args.cancel === true) {
	                            // 还原工作台状态
	                            this._status = originalStatus;
	                            // 因为取消关闭，所以退出后续关闭操作
	                            return [2 /*return*/, false];
	                        }
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        // 调用虚拟方法以进行实际的关闭操作
	                        return [4 /*yield*/, this.onClose()];
	                    case 2:
	                        // 调用虚拟方法以进行实际的关闭操作
	                        _a.sent();
	                        return [3 /*break*/, 4];
	                    case 3:
	                        ex_2 = _a.sent();
	                        // 注意：如果在实际关闭操作中，子类可能已经通过 onClosed 方法设置了工作台状态为关闭，则无需再重置工作台状态；
	                        // 否则必须还原工作台状态
	                        if (this._status === 6 /* closing */) {
	                            this._status = originalStatus;
	                        }
	                        // 重抛异常，导致后续的关闭代码不能继续，故而上面代码重置了工作台状态
	                        throw ex_2;
	                    case 4:
	                        if (this._status !== 0 /* closed */) {
	                            // 通知工作台关闭完成
	                            this.onClosed();
	                        }
	                        // 返回成功
	                        return [2 /*return*/, true];
	                }
	            });
	        });
	    };
	    /**
	     * 取消激活工作台。
	     * @returns void
	     */
	    WorkbenchBase.prototype.deactivate = function () {
	        // 保存原来的状态
	        var originalStatus = this._status;
	        // 如果工作台不是在运行中，则直接退出
	        if (originalStatus !== 2 /* running */) {
	            return;
	        }
	        try {
	            // 通知工作台正在失去焦点中
	            this.onDeactivateing();
	        }
	        catch (ex) {
	            // 还原状态
	            this._status = originalStatus;
	            // 重抛异常，导致后续的代码不能继续
	            throw ex;
	        }
	        try {
	            // 调用虚拟方法以执行实际失去焦点操作
	            this.onDeactivate();
	        }
	        catch (ex) {
	            // 注意：如果在实际取消激活操作中，子类可能已经通过 onDeactivated 方法设置了工作台状态为已经取消激活，则无需再重置工作台状态；
	            // 否则必须重置工作台状态为原来的状态
	            if (this._status === 3 /* deactivating */) {
	                // 还原状态
	                this._status = originalStatus;
	            }
	            // 重抛异常，导致后续的关闭代码不能继续，故而上面代码重置了工作台状态
	            throw ex;
	        }
	        if (this._status !== 4 /* deactivated */) {
	            // 通知工作台取消激活完成
	            this.onDeactivated();
	        }
	    };
	    /**
	     * 激活工作台。
	     * @returns void
	     */
	    WorkbenchBase.prototype.activate = function () {
	        // 保存原来的状态
	        var originalStatus = this._status;
	        // 如果工作台不是在取消激活中，则直接退出
	        if (originalStatus !== 4 /* deactivated */) {
	            return;
	        }
	        try {
	            // 通知工作台正在获得焦点中
	            this.onActivating();
	        }
	        catch (ex) {
	            // 还原状态
	            this._status = originalStatus;
	            // 重抛异常，导致后续的代码不能继续
	            throw ex;
	        }
	        try {
	            // 调用虚拟方法以执行实际获得焦点操作
	            this.onActivate();
	        }
	        catch (ex) {
	            // 注意：如果在实际取消激活操作中，子类可能已经通过 onActivated 方法设置了工作台状态为正在运行，则无需再重置工作台状态；
	            // 否则必须重置工作台状态为原来的状态
	            if (this._status === 5 /* activating */) {
	                // 还原状态
	                this._status = originalStatus;
	            }
	            // 重抛异常，导致后续的关闭代码不能继续，故而上面代码重置了工作台状态
	            throw ex;
	        }
	        if (this._status === 5 /* activating */) {
	            // 通知工作台取消激活完成
	            this.onActivated();
	        }
	    };
	    /**
	     * 当准备打开工作台时调用。
	     * @protected
	     * @virtual
	     * @returns void
	     */
	    WorkbenchBase.prototype.onOpening = function () {
	        // 更改工作台状态为"opening"
	        this._status = 1 /* opening */;
	        // 激发工作台"opening"事件
	        this.dispatchEvent(this.OPENING);
	    };
	    /**
	     * 当工作台打开时调用。
	     * @async
	     * @protected
	     * @virtual
	     * @param  {Array<string>} args
	     * @returns void
	     */
	    WorkbenchBase.prototype.onOpen = function (args) {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                return [2 /*return*/];
	            });
	        });
	    };
	    /**
	     * 当工作台打开完成时调用。
	     * @protected
	     * @virtual
	     * @returns void
	     */
	    WorkbenchBase.prototype.onOpened = function () {
	        // 更改工作台状态为"running"
	        this._status = 2 /* running */;
	        // 激发工作台"opened"事件
	        this.dispatchEvent(this.OPENED);
	    };
	    /**
	     * 当准备关闭工作台时调用。
	     * @protected
	     * @virtual
	     * @param  {CancelEventArgs} event
	     */
	    WorkbenchBase.prototype.onClosing = function (event) {
	        // 设置工作台的状态为"closing"
	        this._status = 6 /* closing */;
	        // 激发工作台"closing"事件
	        this.dispatchEvent(event);
	    };
	    /**
	     * 当工作台关闭时调用。
	     * @async
	     * @protected
	     * @virtual
	     * @returns void
	     */
	    WorkbenchBase.prototype.onClose = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                return [2 /*return*/];
	            });
	        });
	    };
	    /**
	     * 当工作台关闭完成时调用。
	     * @protected
	     * @virtual
	     * @returns void
	     */
	    WorkbenchBase.prototype.onClosed = function () {
	        // 更改工作台状态为"closed"
	        this._status = 0 /* closed */;
	        // 激发工作台"closed"事件
	        this.dispatchEvent(this.CLOSED);
	    };
	    /**
	     * 当工作台准备失去焦点时调用。
	     * @protected
	     * @virtual
	     * @returns void
	     */
	    WorkbenchBase.prototype.onDeactivateing = function () {
	        // 设置工作台的状态为"deactivating"
	        this._status = 3 /* deactivating */;
	        // 激发工作台"deactivating"事件
	        this.dispatchEvent(this.DEACTIVATING);
	    };
	    /**
	     * 当工作台失去焦点时调用。
	     * @protected
	     * @virtual
	     * @returns void
	     */
	    WorkbenchBase.prototype.onDeactivate = function () {
	        // virtual
	    };
	    /**
	     * 当工作台失去焦点后调用。
	     * @protected
	     * @virtual
	     * @returns void
	     */
	    WorkbenchBase.prototype.onDeactivated = function () {
	        // 设置工作台的状态为"deactivated"
	        this._status = 4 /* deactivated */;
	        // 激发工作台"deactivated"事件
	        this.dispatchEvent(this.DEACTIVATED);
	    };
	    /**
	     * 当工作台准备获得焦时调用。
	     * @protected
	     * @virtual
	     * @returns void
	     */
	    WorkbenchBase.prototype.onActivating = function () {
	        // 设置工作台的状态为"activating"
	        this._status = 5 /* activating */;
	        // 激发工作台"activating"事件
	        this.dispatchEvent(this.ACTIVATING);
	    };
	    /**
	     * 当工作台获得焦时调用。
	     * @protected
	     * @virtual
	     * @returns void
	     */
	    WorkbenchBase.prototype.onActivate = function () {
	        // virtual
	    };
	    /**
	     * 当工作台获得焦后调用。
	     * @protected
	     * @virtual
	     * @returns void
	     */
	    WorkbenchBase.prototype.onActivated = function () {
	        // 设置工作台的状态为"running"
	        this._status = 2 /* running */;
	    };
	    /**
	     * 当工作台标题更改后调用。
	     * @protected
	     * @virtual
	     * @returns void
	     */
	    WorkbenchBase.prototype.onTitleChanged = function () {
	        // 激发工作台"titleChanged"事件
	        this.dispatchEvent(this.TITLE_CHANGED);
	    };
	    return WorkbenchBase;
	}(events.EventProvider));
	exports.default = WorkbenchBase;
	});

	unwrapExports(workbenchBase);

	var workbenchStatus = createCommonjsModule(function (module, exports) {
	/**
	 * 表示工作台的运行状态。
	 * @enum
	 * @version 1.0.0
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	var WorkbenchStatus;
	(function (WorkbenchStatus) {
	    /**
	     * 未开始或已关闭。
	     * @member
	     */
	    WorkbenchStatus[WorkbenchStatus["closed"] = 0] = "closed";
	    /**
	     * 正在打开中。
	     * @member
	     */
	    WorkbenchStatus[WorkbenchStatus["opening"] = 1] = "opening";
	    /**
	     * 正常运行。
	     * @member
	     */
	    WorkbenchStatus[WorkbenchStatus["running"] = 2] = "running";
	    /**
	     * 取消激活中。
	     * @member
	     */
	    WorkbenchStatus[WorkbenchStatus["deactivating"] = 3] = "deactivating";
	    /**
	     * 已被取消激活。
	     * @member
	     */
	    WorkbenchStatus[WorkbenchStatus["deactivated"] = 4] = "deactivated";
	    /**
	     * 正在激活中。
	     * @member
	     */
	    WorkbenchStatus[WorkbenchStatus["activating"] = 5] = "activating";
	    /**
	     * 正在关闭中。
	     * @member
	     */
	    WorkbenchStatus[WorkbenchStatus["closing"] = 6] = "closing";
	})(WorkbenchStatus = exports.WorkbenchStatus || (exports.WorkbenchStatus = {}));
	});

	unwrapExports(workbenchStatus);
	var workbenchStatus_1 = workbenchStatus.WorkbenchStatus;

	var application$1 = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.Application = application.default;

	exports.ApplicationContextBase = applicationContextBase.default;

	exports.ApplicationEventArgs = applicationEventArgs.default;

	exports.WorkbenchBase = workbenchBase.default;

	exports.WorkbenchStatus = workbenchStatus.WorkbenchStatus;
	});

	unwrapExports(application$1);
	var application_2 = application$1.Application;
	var application_3 = application$1.ApplicationContextBase;
	var application_4 = application$1.ApplicationEventArgs;
	var application_5 = application$1.WorkbenchBase;
	var application_6 = application$1.WorkbenchStatus;

	var broadcast = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	/**
	 * 表示一条广播信息。
	 * @class
	 * @version 1.0.0
	 */
	var Broadcast = /** @class */ (function () {
	    /**
	     * 初始化一个广播新实例。
	     * @property
	     * @param  {string} uri 广播描述符。
	     * @param  {Map<string, any>} extras? 携带的数据。
	     */
	    function Broadcast(uri, extras) {
	        if (!uri || !common.RegexUtils.uri.test(uri)) {
	            throw new exceptions.ArgumentException();
	        }
	        this._uri = uri;
	        this._scheme = RegExp.$1;
	        this._action = RegExp.$2;
	        this._extras = extras || new collections.Map();
	    }
	    Object.defineProperty(Broadcast.prototype, "scheme", {
	        /**
	         * 获取广播的方案。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._scheme;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Broadcast.prototype, "action", {
	        /**
	         * 获取广播的动作。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._action;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Broadcast.prototype, "uri", {
	        /**
	         * 获取广播的标识符。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._uri;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Broadcast.prototype, "extras", {
	        /**
	         * 获取广播携带的数据。
	         * @property
	         * @returns Map
	         */
	        get: function () {
	            return this._extras;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Broadcast;
	}());
	exports.default = Broadcast;
	});

	unwrapExports(broadcast);

	var broadcastContext = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 广播在传播过程中使用的上下文参数。
	 * @class
	 * @version 1.0.0
	 */
	var BroadcastContext = /** @class */ (function () {
	    /**
	     * 初始化广播上下文的新实例。
	     * @param  {BroadcastManager} manager 广播管理器。
	     * @param  {Broadcast} broadcast 广播实例。
	     */
	    function BroadcastContext(manager, broadcast) {
	        if (!manager || !broadcast) {
	            throw new exceptions.ArgumentException();
	        }
	        this._manager = manager;
	        this._scheme = broadcast.scheme;
	        this._action = broadcast.action;
	        this._uri = broadcast.uri;
	        this._extras = broadcast.extras;
	        this._aborted = false;
	    }
	    Object.defineProperty(BroadcastContext.prototype, "manager", {
	        /**
	         * 获取广播所在的广播管理器实例。
	         * @property
	         * @returns BroadcastManager
	         */
	        get: function () {
	            return this._manager;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BroadcastContext.prototype, "scheme", {
	        /**
	         * 获取广播的方案。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._scheme;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BroadcastContext.prototype, "action", {
	        /**
	         * 获取广播的动作。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._action;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BroadcastContext.prototype, "uri", {
	        /**
	         * 获取广播的标识符。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._uri;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BroadcastContext.prototype, "extras", {
	        /**
	         * 获取广播携带的数据。
	         * @property
	         * @returns Map<string, any>
	         */
	        get: function () {
	            return this._extras;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BroadcastContext.prototype, "aborted", {
	        /**
	         * 表示是否阻止广播继续传播。
	         * @property
	         * @returns boolean
	         */
	        get: function () {
	            return this._aborted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 阻止广播在本次传播中继续进行传播。
	     * @returns void
	     */
	    BroadcastContext.prototype.abort = function () {
	        this._aborted = true;
	    };
	    return BroadcastContext;
	}());
	exports.default = BroadcastContext;
	});

	unwrapExports(broadcastContext);

	var broadcastContract = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	/**
	 * 表示一个广播契约。
	 * @class
	 * @version 1.0.0
	 */
	var BroadcastContract = /** @class */ (function () {
	    function BroadcastContract() {
	        var args = arguments;
	        // 匹配签名: constructor(uri: string)
	        if (args.length === 1) {
	            var uri = args[0];
	            if (!common.RegexUtils.uri.test(uri)) {
	                throw new exceptions.ArgumentException();
	            }
	            this._scheme = RegExp.$1;
	            this.actions.add(RegExp.$2);
	        }
	        // 匹配签名: constructor(scheme: string, actions: Array<string>)
	        else {
	            var scheme = args[0], actions = args[1];
	            if (!scheme || !common.RegexUtils.scheme.test(scheme) || !actions) {
	                throw new exceptions.ArgumentException();
	            }
	            // 保存协议方案
	            this._scheme = scheme;
	            // 保存协议动作
	            for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
	                var method = actions_1[_i];
	                this.actions.add(method);
	            }
	        }
	        // 设置默认优先级
	        this._priority = 0 /* normal */;
	    }
	    Object.defineProperty(BroadcastContract.prototype, "scheme", {
	        /**
	         * 获取广播契约的方案。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._scheme;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BroadcastContract.prototype, "priority", {
	        /**
	         * 获取或设置广播接收时的优先顺序。
	         * @property
	         * @returns number
	         */
	        get: function () {
	            return this._priority;
	        },
	        set: function (value) {
	            this._priority = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BroadcastContract.prototype, "actions", {
	        /**
	         * 获取广播契约所拥有的动作。
	         * @property
	         * @returns Set
	         */
	        get: function () {
	            if (!this._actions) {
	                this._actions = new collections.Set();
	            }
	            return this._actions;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return BroadcastContract;
	}());
	exports.default = BroadcastContract;
	});

	unwrapExports(broadcastContract);

	var broadcastReceiverEntry = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * 提供用于检索广播接收器广播项。
	 * @class
	 * @version 1.0.0
	 */
	var BroadcastReceiverEntry = /** @class */ (function () {
	    /**
	     * 初始化广播项的新实例。
	     * @param  {BroadcastContract} contract 广播契约。
	     * @param  {IBroadcastReceiver} receiver 广播接收器。
	     */
	    function BroadcastReceiverEntry(contract, receiver) {
	        this._contract = contract;
	        this._receiver = receiver;
	    }
	    Object.defineProperty(BroadcastReceiverEntry.prototype, "priority", {
	        /**
	         * 获取广播接收优先级。
	         * @property
	         * @returns number
	         */
	        get: function () {
	            return this._contract.priority;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BroadcastReceiverEntry.prototype, "contract", {
	        /**
	         * 获取广播契约实例。
	         * @property
	         * @returns BroadcastContract
	         */
	        get: function () {
	            return this._contract;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BroadcastReceiverEntry.prototype, "receiver", {
	        /**
	         * 获取广播接收器实例。
	         * @property
	         * @returns IBroadcastReceiver
	         */
	        get: function () {
	            return this._receiver;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return BroadcastReceiverEntry;
	}());
	exports.default = BroadcastReceiverEntry;
	});

	unwrapExports(broadcastReceiverEntry);

	var broadcastReceiverProvider = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	/**
	 * 提供用于检索广播接收器对象的机制。
	 * @class
	 * @version 1.0.0
	 */
	var BroadcastReceiverProvider = /** @class */ (function () {
	    /**
	     * 初始化广播接收器提供程序的新实例。
	     * @constructor
	     */
	    function BroadcastReceiverProvider() {
	        this._entries = new collections.Map();
	    }
	    /**
	     * 注册一个广播接收器至容器中。
	     * @param  {BroadcastContract} contract 广播契约。
	     * @param  {IBroadcastReceiver} receiver 广播接收器。
	     * @returns void
	     */
	    BroadcastReceiverProvider.prototype.register = function (contract, receiver) {
	        var _this = this;
	        if (!contract || !receiver) {
	            throw new exceptions.ArgumentException();
	        }
	        contract.actions.forEach(function (action) {
	            // 根据契约 scheme + action 组合成 uri 注册
	            var uri = contract.scheme.concat(action), set = _this._entries.get(uri);
	            if (!set) {
	                set = new collections.Set();
	                _this._entries.set(uri, set);
	            }
	            set.add(new broadcastReceiverEntry.default(contract, receiver));
	        });
	    };
	    /**
	     * 移除指定契约的广播接收器。
	     * @param  {BroadcastContract} contract 广播契约。
	     * @returns void
	     */
	    BroadcastReceiverProvider.prototype.unregister = function (contract) {
	        var _this = this;
	        if (!contract) {
	            throw new exceptions.ArgumentException();
	        }
	        contract.actions.forEach(function (action) {
	            // 根据契约 scheme + action 组合成 uri 注册
	            var uri = contract.scheme.concat(action);
	            if (_this._entries.has(uri)) {
	                _this._entries.delete(uri);
	            }
	        });
	    };
	    /**
	     * 根据指定广播实例获取所有广播接收器实例。
	     * @param  {Broadcast} broadcast 广播实例。
	     * @returns IEnumerable<IBroadcastReceiver>
	     */
	    BroadcastReceiverProvider.prototype.resolve = function (broadcast) {
	        if (this._entries.has(broadcast.uri)) {
	            var entries = this._entries.get(broadcast.uri), receivers_1 = new collections.Set();
	            // 根据优先级排序
	            entries.sort(function (a, b) { return b.priority - a.priority; });
	            // 追加至返回列表中
	            entries.forEach(function (entry) { return receivers_1.add(entry.receiver); });
	            return receivers_1;
	        }
	        return new collections.Set();
	    };
	    return BroadcastReceiverProvider;
	}());
	exports.default = BroadcastReceiverProvider;
	});

	unwrapExports(broadcastReceiverProvider);

	var broadcastManager = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	/**
	 * 提供用于广播注册发布等功能。
	 * @class
	 * @version 1.0.0
	 */
	var BroadcastManager = /** @class */ (function () {
	    /**
	     * 初始化广播管理器的新实例。
	     * @param  {IBroadcastReceiverProvider} receiverProvider? 广播接收器提供程序。
	     */
	    function BroadcastManager(receiverProvider) {
	        this._eventProvider = new events.EventProvider(this);
	        this._receiverProvider = receiverProvider || new broadcastReceiverProvider.default();
	    }
	    Object.defineProperty(BroadcastManager.prototype, "eventProvider", {
	        /**
	         * 获取一个事件提供程序。
	         * @protected
	         * @property
	         * @returns IEventProvider
	         */
	        get: function () {
	            return this._eventProvider;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BroadcastManager.prototype, "receiverProvider", {
	        /**
	         * 获取一个广播接收器提供程序。
	         * @protected
	         * @property
	         * @returns IBroadcastReceiverProvider
	         */
	        get: function () {
	            return this._receiverProvider;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BroadcastManager, "instance", {
	        /**
	         * 获取广播管理器的单实例。
	         * @static
	         * @returns BroadcastManager
	         */
	        get: function () {
	            if (!this._instance) {
	                this._instance = new BroadcastManager();
	            }
	            return this._instance;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 基于指定的契约注册一个广播接收程序。
	     * @param  {BroadcastContract} contract 广播契约。
	     * @param  {IBroadcastReceiver} receiver 接收程序。
	     * @returns void
	     */
	    BroadcastManager.prototype.register = function (contract, receiver) {
	        // 将协议注册至事件提供程序中
	        if (!this.eventProvider.hasListener(contract.scheme)) {
	            this.eventProvider.addListener(contract.scheme, this.onReceive, this);
	        }
	        // 将接收程序注册至服务提供程序中
	        this.receiverProvider.register(contract, receiver);
	    };
	    /**
	     * 移除指定契约的广播接收器。
	     * @param  {BroadcastContract} contract 广播契约。
	     * @returns void
	     */
	    BroadcastManager.prototype.unregister = function (contract) {
	        this.receiverProvider.unregister(contract);
	    };
	    /**
	     * 发送一条广播信息。
	     * @param  {Broadcast} broadcast 广播实例。
	     * @returns void
	     */
	    BroadcastManager.prototype.send = function (broadcast) {
	        if (!broadcast) {
	            throw new exceptions.ArgumentException();
	        }
	        this.eventProvider.dispatchEvent(broadcast.scheme, broadcast);
	    };
	    /**
	     * 当接收广播时调用。
	     * @protected
	     * @virtual
	     * @returns any
	     */
	    BroadcastManager.prototype.onReceive = function (request) {
	        var broadcast = request.data, receivers = this.receiverProvider.resolve(broadcast), enumerator = receivers.getEnumerator(), context = this.createBroadcastContext(broadcast);
	        while (enumerator.next()) {
	            var receiver = enumerator.current;
	            try {
	                if (context.aborted) {
	                    return;
	                }
	                receiver.receive(context);
	            }
	            catch (ex) {
	                diagnostics.Logger.error(this, ex);
	            }
	        }
	    };
	    /**
	     * 创建广播上下文实例。
	     * @protected
	     * @virtual
	     * @param  {Broadcast} broadcast
	     * @returns BroadcastContext
	     */
	    BroadcastManager.prototype.createBroadcastContext = function (broadcast) {
	        return new broadcastContext.default(this, broadcast);
	    };
	    return BroadcastManager;
	}());
	exports.default = BroadcastManager;
	});

	unwrapExports(broadcastManager);

	var broadcastPriority = createCommonjsModule(function (module, exports) {
	/**
	 * 表示广播接收的优先级别。
	 * @enum
	 * @version 1.0.0
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	var BroadcastPriority;
	(function (BroadcastPriority) {
	    /**
	     * 默认优先级。
	     * @member
	     */
	    BroadcastPriority[BroadcastPriority["normal"] = 0] = "normal";
	    /**
	     * 最高的。
	     * @member
	     */
	    BroadcastPriority[BroadcastPriority["highest"] = 9999] = "highest";
	    /**
	     * 最低的。
	     * @member
	     */
	    BroadcastPriority[BroadcastPriority["lowest"] = -9999] = "lowest";
	})(BroadcastPriority = exports.BroadcastPriority || (exports.BroadcastPriority = {}));
	});

	unwrapExports(broadcastPriority);
	var broadcastPriority_1 = broadcastPriority.BroadcastPriority;

	var receivable_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	var receivers = new collections.Map();
	/**
	 * 标注当前类型是一个广播接收器。
	 * @param  {string} uri 广播描述符。
	 * @param  {number} priority? 广播优先级。
	 */
	function receivable(uri, priority) {
	    if (!uri) {
	        throw new exceptions.InvalidOperationException("The broadcast uri is empty.");
	    }
	    return function (receiverType) {
	        var receiver = receivers.get(receiverType), contract = new broadcastContract.default(uri);
	        // 设置优先级
	        if (priority) {
	            contract.priority = priority;
	        }
	        // 生成接收器实例
	        if (!receiver) {
	            receiver = reflection.Activator.createInstance(receiverType);
	            receivers.set(receiverType, receiver);
	        }
	        // 注册至管理器中
	        broadcastManager.default.instance.register(contract, receiver);
	    };
	}
	exports.default = receivable;
	});

	unwrapExports(receivable_1);

	var broadcast$1 = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.Broadcast = broadcast.default;

	exports.BroadcastContext = broadcastContext.default;

	exports.BroadcastContract = broadcastContract.default;

	exports.BroadcastManager = broadcastManager.default;

	exports.BroadcastPriority = broadcastPriority.BroadcastPriority;

	exports.BroadcastReceiverEntry = broadcastReceiverEntry.default;

	exports.BroadcastReceiverProvider = broadcastReceiverProvider.default;

	exports.Receivable = receivable_1.default;
	});

	unwrapExports(broadcast$1);
	var broadcast_2 = broadcast$1.Broadcast;
	var broadcast_3 = broadcast$1.BroadcastContext;
	var broadcast_4 = broadcast$1.BroadcastContract;
	var broadcast_5 = broadcast$1.BroadcastManager;
	var broadcast_6 = broadcast$1.BroadcastPriority;
	var broadcast_7 = broadcast$1.BroadcastReceiverEntry;
	var broadcast_8 = broadcast$1.BroadcastReceiverProvider;
	var broadcast_9 = broadcast$1.Receivable;

	var commandBase = createCommonjsModule(function (module, exports) {
	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });



	/**
	 * 提供实现 ICommand 接口功能的基类。
	 * @abstract
	 * @class
	 * @description 建议需要完成 ICommand 接口功能的实现者从此类继承。
	 * @version 1.0.0
	 */
	var CommandBase = /** @class */ (function () {
	    /**
	     * 初始化命令的新实例。
	     * @param  {string} name 命令名称。
	     * @param  {boolean} enabled 是否启用。
	     */
	    function CommandBase(name, enabled) {
	        if (name === void 0) { name = ""; }
	        if (enabled === void 0) { enabled = true; }
	        // 如果没有传递名称参数，则约定采用类名(除掉尾部Command)作为命令名称
	        this.name = runtime.Type.isEmptyString(name) ? common.StringUtils.trim(runtime.Type.getClassName(this), "Command").toLowerCase() : name;
	        this._enabled = enabled;
	    }
	    Object.defineProperty(CommandBase.prototype, "name", {
	        /**
	         * 获取或设置命令的名称。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._name;
	        },
	        set: function (value) {
	            if (!value) {
	                throw new exceptions.ArgumentException();
	            }
	            if (value.indexOf(".") !== -1 || value.indexOf("/") !== -1) {
	                throw new exceptions.ArgumentException();
	            }
	            this._name = value.trim();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandBase.prototype, "enabled", {
	        /**
	         * 获取或设置当前命令是否可用。
	         * @summary 该属性作为当前命令是否可被执行的备选方案，命令是否可被执行由 canExecute 方法决定，该方法的不同实现方式可能导致不同的判断逻辑。
	         * 有关默认的判断逻辑请参考 canExecute 方法的帮助。
	         * @property
	         * @returns boolean
	         */
	        get: function () {
	            return this._enabled;
	        },
	        set: function (value) {
	            this._enabled = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 判断当前命令能否依据给定的选项和参数执行。
	     * @virtual
	     * @param  {any} context 判断命令能否执行的上下文对象。
	     * @returns boolean 返回能否执行的结果。
	     */
	    CommandBase.prototype.canExecute = function (context) {
	        return this.enabled;
	    };
	    /**
	     * 执行命令。
	     * @summary 对实现着的要求：应该在本方法的实现中首先调用 canExecute 方法，以确保阻止非法的调用。
	     * @virtual
	     * @async
	     * @param  {any} context 执行命令的上下文对象。
	     * @returns any 返回执行的返回结果。
	     */
	    CommandBase.prototype.execute = function (context) {
	        return __awaiter(this, void 0, void 0, function () {
	            var result;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        // 在执行之前首先判断是否可以执行
	                        if (!this.canExecute(context)) {
	                            return [2 /*return*/, null];
	                        }
	                        return [4 /*yield*/, this.onExecute(context)];
	                    case 1:
	                        result = _a.sent();
	                        return [2 /*return*/, result];
	                }
	            });
	        });
	    };
	    return CommandBase;
	}());
	exports.default = CommandBase;
	});

	unwrapExports(commandBase);

	var commandCollection = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * 表示一个命令容器，用户存储命令使用。
	 * @class
	 * @description 该类为临时过度方案，后续将会替换为命令树的形式进行存储。
	 * @version 1.0.0
	 */
	var CommandCollection = /** @class */ (function () {
	    /**
	     * 初始化命令容器的新实例。
	     * @constructor
	     */
	    function CommandCollection() {
	        this._items = new collections.Map();
	    }
	    Object.defineProperty(CommandCollection.prototype, "size", {
	        /**
	         * 获取命令的总数量。
	         * @property
	         * @returns number
	         */
	        get: function () {
	            return this._items.size;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 将一个命令实例挂载至指定的的路径。
	     * @summary 如果指定的路径已存在命令将会抛出异常。
	     * @param  {string} path 路径字符串。
	     * @param  {ICommand} command 命令。
	     * @returns void
	     */
	    CommandCollection.prototype.add = function (path, command) {
	        if (this._items.has(path)) {
	            throw new exceptions.ArgumentException("The command path \"" + path + "\" is existed.");
	        }
	        this._items.set(path, command);
	    };
	    /**
	     * 移除指定路径的命令。
	     * @param  {string} path 路径字符串。
	     * @returns boolean
	     */
	    CommandCollection.prototype.remove = function (path) {
	        return this._items.delete(path);
	    };
	    /**
	     * 根据指定的路径获取一个命令。
	     * @param  {string} path 路径字符串。
	     * @returns string
	     */
	    CommandCollection.prototype.find = function (path) {
	        var command = this._items.get(path);
	        return command || null;
	    };
	    /**
	     * 检测是否包含指定的路径的命令。
	     * @param  {string} path
	     * @returns boolean
	     */
	    CommandCollection.prototype.contains = function (path) {
	        return this._items.has(path);
	    };
	    /**
	     * 返回一个循环访问集合的枚举器。
	     * @returns IEnumerator
	     */
	    CommandCollection.prototype.getEnumerator = function () {
	        return this._items.getEnumerator();
	    };
	    /**
	     * 对 IEnumerable<T> 进行迭代处理。
	     * @param  {Function} callback 每次迭代中执行的回掉函数，当前迭代项将传入该函数。
	     * @param  {any} scope? 回掉函数中 this 所引用的对象。
	     * @returns void
	     */
	    CommandCollection.prototype.forEach = function (callback, scope) {
	        this._items.forEach(callback, scope);
	    };
	    return CommandCollection;
	}());
	exports.default = CommandCollection;
	});

	unwrapExports(commandCollection);

	var commandContext = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * 命令在执行器过程中使用的上下文参数。
	 * @class
	 * @version 1.0.0
	 */
	var CommandContext = /** @class */ (function () {
	    /**
	     * 初始化执行命令上下文的新实例。
	     * @constructor
	     * @param  {ICommandExecutor} executor 执行命令所在的命令执行器。
	     * @param  {CommandExpression} expression 命令对应的表达式。
	     * @param  {ICommand} command 执行的命令对象。
	     * @param  {any} parameter 命令执行的传入参数。
	     * @param  {Map} extendedProperties 在本次执行过程中在各处理模块之间组织和共享数据的键/值集合。
	     */
	    function CommandContext(executor, expression, command, parameter, extendedProperties) {
	        if (extendedProperties === void 0) { extendedProperties = null; }
	        if (!command) {
	            throw new exceptions.ArgumentException();
	        }
	        this._executor = executor;
	        this._expression = expression;
	        this._command = command;
	        this._parameter = parameter;
	        this._extendedProperties = extendedProperties;
	    }
	    Object.defineProperty(CommandContext.prototype, "executor", {
	        /**
	         * 获取命令所在的命令执行器。
	         * @property
	         * @returns ICommandExecutor
	         */
	        get: function () {
	            return this._executor;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandContext.prototype, "expression", {
	        /**
	         * 获取当前命令对应的表达式。
	         * @property
	         * @returns CommandExpression
	         */
	        get: function () {
	            return this._expression;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandContext.prototype, "command", {
	        /**
	         * 获取执行的命令对象。
	         * @property
	         * @returns ICommand
	         */
	        get: function () {
	            return this._command;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandContext.prototype, "parameter", {
	        /**
	         * 获取命令执行的传入参数。
	         * @property
	         * @returns any
	         */
	        get: function () {
	            return this._parameter;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandContext.prototype, "hasExtendedProperties", {
	        /**
	         * 获取扩展属性集是否有内容。
	         * 在不确定扩展属性集是否含有内容之前，建议先使用该属性来检测。
	         * @property
	         * @returns boolean
	         */
	        get: function () {
	            return this._extendedProperties && this._extendedProperties.size > 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandContext.prototype, "extendedProperties", {
	        /**
	         * 获取可用于在本次执行过程中在各处理模块之间组织和共享数据的键/值集合。
	         * @property
	         * @returns Map
	         */
	        get: function () {
	            if (!this._extendedProperties) {
	                this._extendedProperties = new collections.Map();
	            }
	            return this._extendedProperties;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return CommandContext;
	}());
	exports.default = CommandContext;
	});

	unwrapExports(commandContext);

	var commandOptionCollection = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 命令选项集合。
	 * @class
	 * @version 1.0.0
	 */
	var CommandOptionCollection = /** @class */ (function () {
	    /**
	     * 初始化命令选项集合的新实例。
	     * @param  {IEnumerable<KeyValuePair<string>>} items
	     */
	    function CommandOptionCollection(items) {
	        var _this = this;
	        this._items = new collections.Map();
	        if (items) {
	            items.forEach(function (item) {
	                _this._items.set(item.key, item.value);
	            });
	        }
	    }
	    Object.defineProperty(CommandOptionCollection.prototype, "size", {
	        /**
	         * 获取选项的数量。
	         * @property
	         * @returns number
	         */
	        get: function () {
	            return this._items.size;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandOptionCollection.prototype, "keys", {
	        /**
	         * 获取所有选项键。
	         * @property
	         * @returns Array
	         */
	        get: function () {
	            return this._items.keys();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandOptionCollection.prototype, "values", {
	        /**
	         * 获取所有选项值。
	         * @property
	         * @returns Array
	         */
	        get: function () {
	            return this._items.values();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 根据指定的字符串键获取一个选项值。
	     * @param  {string} key
	     * @returns string
	     */
	    CommandOptionCollection.prototype.get = function (key) {
	        return this._items.get(key);
	    };
	    /**
	     * 检测是否包含指定的选项值。
	     * @param  {string} key
	     * @returns boolean
	     */
	    CommandOptionCollection.prototype.has = function (key) {
	        return this._items.has(key);
	    };
	    /**
	     * 返回一个循环访问集合的枚举器。
	     * @returns IEnumerator
	     */
	    CommandOptionCollection.prototype.getEnumerator = function () {
	        return this._items.getEnumerator();
	    };
	    /**
	     * 对 IEnumerable<T> 进行迭代处理。
	     * @param  {Function} callback 每次迭代中执行的回掉函数，当前迭代项将传入该函数。
	     * @param  {any} scope? 回掉函数中 this 所引用的对象。
	     * @returns void
	     */
	    CommandOptionCollection.prototype.forEach = function (callback, scope) {
	        this._items.forEach(callback, scope);
	    };
	    return CommandOptionCollection;
	}());
	exports.default = CommandOptionCollection;
	});

	unwrapExports(commandOptionCollection);

	var commandExpression = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	/**
	 * 命令表达式类，提供命令的名称路径与参数选项等信息。
	 * @class
	 * @version 1.0.0
	 */
	var CommandExpression = /** @class */ (function () {
	    /**
	     * 初始化命令表达式的新实例。
	     * @param  {PathAnchor} anchor 锚定点。
	     * @param  {string} name 命令名称。
	     * @param  {string} path 命令路径。
	     * @param  {Map} options 命令选项。
	     * @param  {string[]} ...args 命令参数。
	     */
	    function CommandExpression(anchor, name, path, options) {
	        var args = [];
	        for (var _i = 4; _i < arguments.length; _i++) {
	            args[_i - 4] = arguments[_i];
	        }
	        this._next = null;
	        if (!name) {
	            throw new exceptions.ArgumentException("name");
	        }
	        // 修缮传入的路径参数值
	        path = common.StringUtils.trim(path, "/", " ", "\t", "\r", "\n");
	        this._anchor = anchor;
	        this._name = name.trim();
	        switch (anchor) {
	            case 3 /* root */:
	                {
	                    if (!path) {
	                        this._path = "/";
	                    }
	                    else {
	                        this._path = "/" + path + "/";
	                    }
	                    break;
	                }
	            case 1 /* current */:
	                {
	                    if (!path) {
	                        this._path = "./";
	                    }
	                    else {
	                        this._path = "./" + path + "/";
	                    }
	                    break;
	                }
	            case 2 /* parent */:
	                {
	                    if (!path) {
	                        this._path = "../";
	                    }
	                    else {
	                        this._path = "../" + path + "/";
	                    }
	                    break;
	                }
	            default:
	                {
	                    if (!path) {
	                        this._path = "";
	                    }
	                    else {
	                        this._path = path + "/";
	                    }
	                    break;
	                }
	        }
	        this._fullPath = this._path + this._name;
	        this._options = new commandOptionCollection.default(options);
	        this._arguments = args || new Array();
	    }
	    Object.defineProperty(CommandExpression.prototype, "name", {
	        /**
	         * 获取命令名称。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandExpression.prototype, "path", {
	        /**
	         * 获取命令的路径(不包含名称)。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._path;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandExpression.prototype, "fullPath", {
	        /**
	         * 获取命令的完整路径(包含名称)。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._fullPath;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandExpression.prototype, "anchor", {
	        /**
	         * 获取命令的锚定点。
	         * @property
	         * @returns PathAnchor
	         */
	        get: function () {
	            return this._anchor;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandExpression.prototype, "options", {
	        /**
	         * 获取命令的所有选项。
	         * @property
	         * @returns CommandOptionCollection
	         */
	        get: function () {
	            return this._options;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandExpression.prototype, "arguments", {
	        /**
	         * 获取命令的所有参数。
	         * @property
	         * @returns string
	         */
	        get: function () {
	            return this._arguments;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandExpression.prototype, "next", {
	        /**
	         * 获取获设置当前命令的下一个串联命令表达式。
	         * @property
	         * @returns CommandExpression
	         */
	        get: function () {
	            return this._next;
	        },
	        /**
	         * 获取或设置当前命令的下一个串联命令表达式。
	         * @property
	         * @param  {CommandExpression} value
	         */
	        set: function (value) {
	            this._next = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 将指定的文本解析为一个命令表达式。
	     * @static
	     * @param  {string} text 命令文本。
	     * @returns CommandExpression 命令表达式。
	     */
	    CommandExpression.parse = function (text) {
	        return commandExpressionParser.default.instance.parse(text);
	    };
	    return CommandExpression;
	}());
	exports.default = CommandExpression;
	});

	unwrapExports(commandExpression);

	var commandExpressionParser = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	var CommandPathState;
	(function (CommandPathState) {
	    CommandPathState[CommandPathState["none"] = 0] = "none";
	    CommandPathState[CommandPathState["dot"] = 1] = "dot";
	    CommandPathState[CommandPathState["doubleDot"] = 2] = "doubleDot";
	    CommandPathState[CommandPathState["slash"] = 3] = "slash";
	    CommandPathState[CommandPathState["part"] = 4] = "part";
	})(CommandPathState || (CommandPathState = {}));
	var CommandPairState;
	(function (CommandPairState) {
	    CommandPairState[CommandPairState["none"] = 0] = "none";
	    CommandPairState[CommandPairState["slash"] = 1] = "slash";
	    CommandPairState[CommandPairState["assign"] = 2] = "assign";
	    CommandPairState[CommandPairState["part"] = 3] = "part";
	})(CommandPairState || (CommandPairState = {}));
	/**
	 * 提供命令行文本解析功能。
	 * @static
	 * @class
	 * @version 1.0.0
	 */
	var CommandExpressionParser = /** @class */ (function () {
	    /**
	     * 私有构造。
	     * @private
	     * @constructor
	     */
	    function CommandExpressionParser() {
	    }
	    /**
	     * 将指定的命令行文本解析成命令表达式对象。
	     * @param  {string} text 指定的要解析的命令行文本。
	     * @returns CommandExpression 返回解析的命令表达式对象，如果解析失败则返回空(null)。
	     */
	    CommandExpressionParser.prototype.parse = function (text) {
	        if (!text) {
	            return null;
	        }
	        var result = null, current = null, reader = new io.StringReader(text);
	        while (reader.peek() > 0) {
	            current = this.onParse(reader);
	            if (result === null) {
	                result = current;
	            }
	            // 线性查找命令表达式的管道链，并更新其指向
	            else {
	                var previous = result;
	                while (previous.next !== null) {
	                    previous = previous.next;
	                }
	                previous.next = current;
	            }
	        }
	        // 释放字符串读取器
	        reader.dispose();
	        return result;
	    };
	    /**
	     * 根据字符串读取器解析命令表达式。
	     * @protected
	     * @virtual
	     * @param  {StringReader} reader
	     * @returns CommandExpression
	     */
	    CommandExpressionParser.prototype.onParse = function (reader) {
	        var _a;
	        var args = new collections.Set(), options = new collections.Map(), anchor, name, path;
	        // 解析命令表达式中的路径部分，如果表达式有误则该解析方法内部抛出异常
	        _a = CommandExpressionParser.parsePath(reader), anchor = _a[0], name = _a[1], path = _a[2];
	        var pair;
	        // 依次解析命令表达式中的选项和参数
	        while ((pair = CommandExpressionParser.parsePair(reader)) !== null) {
	            if (!pair.key) {
	                args.add(pair.value);
	            }
	            else {
	                options.set(pair.key, pair.value);
	            }
	        }
	        // 返回一个命令表达式
	        return new (commandExpression.default.bind.apply(commandExpression.default, [void 0, anchor, name, path, options].concat(args.values())))();
	    };
	    /**
	     * 根据字符串读取器解析路径。
	     * @private
	     * @static
	     * @param  {StringReader} reader
	     * @returns PathAnchor
	     */
	    CommandExpressionParser.parsePath = function (reader) {
	        var state = 0 /* none */, parts = new collections.Set(), valueRead = 0, anchor = 0 /* none */, name = "", path = "";
	        while ((valueRead = reader.read()) > 0) {
	            var chr = String.fromCharCode(valueRead);
	            // 首先对位于路径中间的点号进行转换，以方便后续的处理
	            if (chr === "." && state === 4 /* part */) {
	                chr = "/";
	            }
	            if (chr === ".") {
	                switch (state) {
	                    case 0 /* none */:
	                        {
	                            state = 1 /* dot */;
	                            anchor = 1 /* current */;
	                            break;
	                        }
	                    case 1 /* dot */:
	                        {
	                            state = 2 /* doubleDot */;
	                            anchor = 2 /* parent */;
	                            break;
	                        }
	                    default:
	                        {
	                            throw new exceptions.InvalidOperationException("Invalid anchor of command path.");
	                        }
	                }
	            }
	            else if (chr === "/") {
	                if (state === 3 /* slash */) {
	                    throw new exceptions.InvalidOperationException("Duplicate '/' slash characters.");
	                }
	                if (state === 0 /* none */) {
	                    anchor = 3 /* root */;
	                }
	                else if (state === 4 /* part */) {
	                    parts.add(name);
	                    name = "";
	                }
	                state = 3 /* slash */;
	            }
	            else if (common.CharUtils.isLetterOrDigit(chr) || chr === "_") {
	                if (state === 1 /* dot */ || state === 2 /* doubleDot */) {
	                    throw new exceptions.InvalidOperationException("Missing '/' slash character between dot and letter or digit.");
	                }
	                name += chr;
	                state = 4 /* part */;
	            }
	            else if (common.CharUtils.isWhiteSpace(chr)) {
	                if (state === 0 /* none */) {
	                    continue;
	                }
	                else {
	                    break;
	                }
	            }
	            else {
	                throw new exceptions.InvalidOperationException("Contains '" + chr + "' illegal character(s) in the command path.");
	            }
	        }
	        // 如果路径以斜杠符结尾，即为非法路径格式
	        if (state === 3 /* slash */ && ((parts && parts.size > 0) || anchor !== 3 /* root */)) {
	            throw new exceptions.InvalidOperationException("The command path can not at the end of '/' character.");
	        }
	        if (parts && parts.size > 0) {
	            path = parts.values().join(".");
	        }
	        else if (!name) {
	            switch (anchor) {
	                case 3 /* root */:
	                    name = "/";
	                    break;
	                case 1 /* current */:
	                    name = ".";
	                    break;
	                case 2 /* parent */:
	                    name = "..";
	                    break;
	            }
	            anchor = 0 /* none */;
	        }
	        return [anchor, name, path];
	    };
	    /**
	     * 根据字符串读取器解析参数和选项。
	     * @private
	     * @static
	     * @param  {StringReader} reader
	     * @returns KeyValuePair
	     */
	    CommandExpressionParser.parsePair = function (reader) {
	        var quote = "\0", isEscaping = false, key = "", value = "", state = 0 /* none */, valueRead;
	        while ((valueRead = reader.read()) > 0) {
	            var chr = String.fromCharCode(valueRead);
	            if (chr === "-" || chr === "/") {
	                if (state === 1 /* slash */) {
	                    throw new exceptions.InvalidOperationException("Duplicate '" + chr + "' option indicator of command expression.");
	                }
	                if (state === 0 /* none */ && quote === "\0") {
	                    state = 1 /* slash */;
	                    continue;
	                }
	            }
	            else if (chr === ":" || chr === "=") {
	                if (key && state === 3 /* part */ && (quote === "\0" && !isEscaping)) {
	                    state = 2 /* assign */;
	                    continue;
	                }
	            }
	            else if (chr === "|") {
	                if (quote === "\0") {
	                    if (!key && !value) {
	                        return null;
	                    }
	                    return new collections.KeyValuePair(key, value);
	                }
	            }
	            else if (common.CharUtils.isWhiteSpace(chr)) {
	                if (state === 1 /* slash */) {
	                    throw new exceptions.InvalidOperationException("A white-space character at the back of the option indicator.");
	                }
	                if (state === 0 /* none */) {
	                    continue;
	                }
	                else if (quote === "\0") {
	                    return new collections.KeyValuePair(key, value);
	                }
	            }
	            else if (this.isQuote(chr) && !isEscaping) {
	                if (quote !== "\0") {
	                    quote = "\0";
	                    continue;
	                }
	                else if (state !== 3 /* part */) {
	                    quote = chr;
	                    continue;
	                }
	            }
	            // 设置转义状态：即当前字符为转义符并且当前状态不为转义状态
	            isEscaping = chr === "\\" && (!isEscaping);
	            if (isEscaping) {
	                continue;
	            }
	            switch (state) {
	                case 1 /* slash */:
	                    {
	                        key += chr;
	                        break;
	                    }
	                case 0 /* none */:
	                case 2 /* assign */:
	                    {
	                        value += chr;
	                        break;
	                    }
	                default:
	                    {
	                        if (!value) {
	                            key += chr;
	                        }
	                        else {
	                            value += chr;
	                        }
	                        break;
	                    }
	            }
	            state = 3 /* part */;
	        }
	        if (!key && !value) {
	            return null;
	        }
	        return new collections.KeyValuePair(key, value);
	    };
	    /**
	     * 检测一个 char 字符是否为引号。
	     * @private
	     * @static
	     * @param  {string} chr
	     * @returns boolean
	     */
	    CommandExpressionParser.isQuote = function (chr) {
	        return (chr === '"' || chr === "\'");
	    };
	    /**
	     * 获取命令解析器的单实例。
	     * @static
	     * @member
	     */
	    CommandExpressionParser.instance = new CommandExpressionParser();
	    return CommandExpressionParser;
	}());
	exports.default = CommandExpressionParser;
	});

	unwrapExports(commandExpressionParser);

	var commandExecutorContext = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * 表示命令执行器在执行命令时产生的上下文。
	 * @class
	 * @version 1.0.0
	 */
	var CommandExecutorContext = /** @class */ (function () {
	    /**
	     * 初始化命令执行器上下文的新实例。
	     * @constructor
	     * @param  {ICommandExecutor} executor 当前命令执行器对象。
	     * @param  {CommandExpression} expression 当前命令执行器的命令表达式。
	     * @param  {any} parameter 从命令执行器传入的参数。
	     */
	    function CommandExecutorContext(executor, expression, parameter) {
	        if (!executor || !expression) {
	            throw new exceptions.ArgumentException();
	        }
	        this._executor = executor;
	        this._expression = expression;
	        this._parameter = parameter;
	    }
	    Object.defineProperty(CommandExecutorContext.prototype, "executor", {
	        /**
	         * 获取当前命令执行器对象。
	         * @property
	         * @returns ICommandExecutor
	         */
	        get: function () {
	            return this._executor;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandExecutorContext.prototype, "expression", {
	        /**
	         * 获取当前命令执行器的命令表达式。
	         * @property
	         * @returns CommandExpression
	         */
	        get: function () {
	            return this._expression;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandExecutorContext.prototype, "parameter", {
	        /**
	         * 获取从命令执行器传入的参数值。
	         * @property
	         * @returns any
	         */
	        get: function () {
	            return this._parameter;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return CommandExecutorContext;
	}());
	exports.default = CommandExecutorContext;
	});

	unwrapExports(commandExecutorContext);

	var commandExecutor = createCommonjsModule(function (module, exports) {
	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });






	/**
	 * 提供命令注册与执行的实现。
	 * @class
	 * @version 1.0.0
	 */
	var CommandExecutor = /** @class */ (function () {
	    /**
	     * 初始化命令执行器的新实例。
	     * @constructor
	     */
	    function CommandExecutor(parser) {
	        this._commands = new commandCollection.default();
	        this._parser = parser || commandExpressionParser.default.instance;
	    }
	    Object.defineProperty(CommandExecutor, "default", {
	        /**
	         * 获取或设置默认的命令执行器。
	         * @static
	         * @property
	         * @returns CommandExecutor
	         */
	        get: function () {
	            if (!this._default) {
	                this._default = new CommandExecutor();
	            }
	            return this._default;
	        },
	        /**
	         * 获取或设置默认的命令执行器。
	         * @static
	         * @property
	         * @param  {CommandExecutor} value
	         */
	        set: function (value) {
	            if (!value) {
	                throw new exceptions.ArgumentException("value");
	            }
	            this._default = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 注册一个命令。
	     * 注意: 如果路径已存在，则会抛出一个异常。
	     * @param  {string} path 命令路径。
	     * @param  {ICommand} command 命令实例。
	     * @returns void
	     */
	    CommandExecutor.prototype.register = function (path, command) {
	        this._commands.add(path, command);
	    };
	    /**
	     * 移除指定路径的命令。
	     * @param  {string} path
	     * @returns boolean
	     */
	    CommandExecutor.prototype.remove = function (path) {
	        return this._commands.remove(path);
	    };
	    /**
	     * 查找指定路径的命令。
	     * @param  {string} path 路径字符串。
	     * @returns ICommand
	     */
	    CommandExecutor.prototype.find = function (path) {
	        return this._commands.find(path);
	    };
	    /**
	     * 执行命令。
	     * @summary 暂不支持表达式，commandText 仅为命令路径。
	     * @async
	     * @param  {string} commandText 指定要执行的命令表达式文本。
	     * @param  {any} parameter 指定的输入参数。
	     * @returns any 返回命令执行的结果。
	     */
	    CommandExecutor.prototype.execute = function (commandText, parameter) {
	        if (parameter === void 0) { parameter = null; }
	        return __awaiter(this, void 0, void 0, function () {
	            var context, result;
	            return __generator(this, function (_a) {
	                if (!commandText) {
	                    throw new exceptions.ArgumentException();
	                }
	                context = null;
	                try {
	                    // 创建命令执行器上下文
	                    context = this.createExecutorContext(commandText, parameter);
	                    if (!context) {
	                        throw new exceptions.InvalidOperationException("Create executor context failed.");
	                    }
	                }
	                catch (ex) {
	                    diagnostics.Logger.error(this, ex);
	                    return [2 /*return*/, null];
	                }
	                result = this.onExecute(context);
	                return [2 /*return*/, result];
	            });
	        });
	    };
	    /**
	     * 当执行命令时调用。
	     * @async
	     * @param  {CommandExecutorContext} context 命令执行上下文。
	     * @returns any
	     */
	    CommandExecutor.prototype.onExecute = function (context) {
	        return __awaiter(this, void 0, void 0, function () {
	            var entries, expression, command, parameter, i, len, entry;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        entries = new Array(), expression = context.expression;
	                        while (expression !== null) {
	                            command = this.find(expression.fullPath);
	                            // 如果指定的路径不存在的则抛出异常
	                            if (!command) {
	                                throw new exceptions.InvalidOperationException("The command path \"" + expression.fullPath + "\" can not found.");
	                            }
	                            // 将找到的命令表达式和对应的节点加入数组中
	                            entries.push([expression, command]);
	                            // 设置下一个待搜索的命令表达式
	                            expression = expression.next;
	                        }
	                        parameter = context.parameter;
	                        // 如果列表为空，则返回空
	                        if (entries.length < 1) {
	                            return [2 /*return*/, null];
	                        }
	                        i = 0, len = entries.length;
	                        _a.label = 1;
	                    case 1:
	                        if (!(i < len)) return [3 /*break*/, 4];
	                        entry = entries[0];
	                        return [4 /*yield*/, this.executeCommand(context, entry[0], entry[1], parameter)];
	                    case 2:
	                        // 执行命令
	                        parameter = _a.sent();
	                        _a.label = 3;
	                    case 3:
	                        i++;
	                        return [3 /*break*/, 1];
	                    case 4: 
	                    // 返回最后一个命令的执行结果
	                    return [2 /*return*/, parameter];
	                }
	            });
	        });
	    };
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
	    CommandExecutor.prototype.executeCommand = function (context, expression, command, parameter) {
	        return __awaiter(this, void 0, void 0, function () {
	            var result;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (!context || !expression) {
	                            throw new exceptions.ArgumentException();
	                        }
	                        if (!command) {
	                            return [2 /*return*/, null];
	                        }
	                        return [4 /*yield*/, command.execute(this.createCommandContext(expression, command, parameter))];
	                    case 1:
	                        result = _a.sent();
	                        return [2 /*return*/, result];
	                }
	            });
	        });
	    };
	    /**
	     * 创建命令执行上下文实例。
	     * @protected
	     * @virtual
	     * @param  {string} commandText
	     * @param  {any} parameter
	     * @returns CommandExecutorContext
	     */
	    CommandExecutor.prototype.createExecutorContext = function (commandText, parameter) {
	        // 解析当前命令文本
	        var expression = this.onParse(commandText);
	        if (!expression) {
	            throw new exceptions.InvalidOperationException("Invalid command expression text: " + commandText + ".");
	        }
	        return new commandExecutorContext.default(this, expression, parameter);
	    };
	    /**
	     * 创建命令上下文实例。
	     * @protected
	     * @virtual
	     * @param  {CommandExpression} expression
	     * @param  {ICommand} command
	     * @param  {any} parameter
	     * @returns CommandContext
	     */
	    CommandExecutor.prototype.createCommandContext = function (expression, command, parameter) {
	        return new commandContext.default(this, expression, command, parameter);
	    };
	    /**
	     * 当解析命令表达式时调用。
	     * @protected
	     * @virtual
	     * @param  {string} text
	     * @returns CommandExpression
	     */
	    CommandExecutor.prototype.onParse = function (text) {
	        return this._parser.parse(text);
	    };
	    return CommandExecutor;
	}());
	exports.default = CommandExecutor;
	});

	unwrapExports(commandExecutor);

	var command_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	/**
	 * 标注当前类型是一个可通过命令执行器执行的命令。
	 * @param  {string} path
	 */
	function command(path) {
	    if (!path) {
	        throw new exceptions.InvalidOperationException("The command path is empty.");
	    }
	    return function (commandType) {
	        if (!runtime.Type.isAssignableFrom(commandBase.default, commandType)) {
	            throw new exceptions.InvalidOperationException("The class \"" + runtime.Type.getQualifiedClassName(commandType) + "\" is not a command type.");
	        }
	        // 生成命令实例
	        var command = reflection.Activator.createInstance(commandType);
	        // 注册至默认的执行器中
	        commandExecutor.default.default.register(path, command);
	    };
	}
	exports.default = command;
	});

	unwrapExports(command_1);

	var commands = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.CommandBase = commandBase.default;

	exports.CommandCollection = commandCollection.default;

	exports.CommandContext = commandContext.default;

	exports.CommandExecutor = commandExecutor.default;

	exports.CommandExecutorContext = commandExecutorContext.default;

	exports.CommandExpression = commandExpression.default;

	exports.CommandExpressionParser = commandExpressionParser.default;

	exports.CommandOptionCollection = commandOptionCollection.default;

	exports.Command = command_1.default;
	});

	unwrapExports(commands);
	var commands_1 = commands.CommandBase;
	var commands_2 = commands.CommandCollection;
	var commands_3 = commands.CommandContext;
	var commands_4 = commands.CommandExecutor;
	var commands_5 = commands.CommandExecutorContext;
	var commands_6 = commands.CommandExpression;
	var commands_7 = commands.CommandExpressionParser;
	var commands_8 = commands.CommandOptionCollection;
	var commands_9 = commands.Command;

	var exports_1 = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(application$1);
	__export(broadcast$1);
	__export(collections);
	__export(commands);
	__export(common);
	__export(diagnostics);
	__export(events);
	__export(exceptions);
	__export(io);
	__export(reflection);
	__export(runtime);
	__export(services);
	});

	unwrapExports(exports_1);

	var bin = createCommonjsModule(function (module, exports) {
	/*!
	 * @Authors:
	 *      jason <jasonsoop@gmail.com>
	 *      Evan <skcy@vip.qq.com>
	 *
	 * @Date:  2019-06-25 16:05:55
	 * @version: 1.0.0
	 * Licensed under the MIT License.
	 * Copyright (C) 2010-present UXmid Inc. All rights reserved.
	 */
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(exports_1);
	var uxmid = exports_1;
	exports.default = __assign({}, uxmid);
	});

	var index = unwrapExports(bin);

	return index;

}));
