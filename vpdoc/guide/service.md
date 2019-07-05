# 服务容器
所有与网络请求相关的，我们都抽离到`service`中去处理了，在页面中`model`中应当只处理页面相关的逻辑。

## 实现

### `url`集合
```ts
// urls.ts
export default
{
    login: `${apiUrl}/oauth/token`,                                        // 登录
}
```

### 请求类集合
```ts
// apis.ts
import ArgumentException from "uxmid-core";
import axios from "axios";

/**
 * 发送ajax请求
 * @param {any} options 请求参数
 * @param {string} url 请求地址
 * @param {string} method 请求类型
 * @returns {any}
 */
const send = (url: string, options?: IHttpRequest, method: string = "post"): IHttpResponse =>
{
    // 如果未传入url以及参数抛出异常
    if (!url)
    {
        throw new ArgumentException("url is null.");
    }

    // 返回promise实例由用户处理
    return axios[method](
    {
        url,
        ...options
    });
};

export default class Apis
{
    public login = (options?: IHttpRequest) => send(API.login, options); // 登录接口
}
```


### `service` 基类
```ts
import apis from "apis";

/**
 * 业务服务基类。
 * @abstract
 * @class
 * @version 1.0.0
 */
export default abstract class ServiceBase
{
    /**
     * 获取所有数据接口地址。
     * @protected
     * @property
     * @returns apis
     */
    protected get apis(): apis
    {
        return new apis();
    }
    
}
```

## 构建服务容器
```ts
// services/user-service.ts
/**
 * 表示用户相关服务。
 * @class
 * @version 1.0.0
 */
@injectable()
export default class UserService extends ServiceBase
{
    public async login(model: ILoginModel): Promise<void>
    {
        // 登录之前清空上次的凭证
        this.applicationContext.credential = null;

        const result = await this.apis.login
        ({
            data:
            {
                username: model.username,
                password: model.password
            }
        });

        return result;
    }
}
```

### 页面上使用
```ts
import userService from "./user-service";

@component
export default class LoginView extends View
{
    private _userService: UserService;                      // 用户服务

    /**
     * 获取或设置用户服务实例。
     * @member
     * @protected
     * @returns UserService
     */
    protected get userService(): UserService
    {
        if(!this._userService)
        {
            this._userService = this.serviceProvier.resolve<UserService>(UserService);
        }

        return this._userService;
    }

    protected async login(username, password): Promise<void>
    {
        try
        {
            await this.userServiec.login({username, password});

            this.$router.push("login");
        }
        catch(error)
        {
            alert(error.message || "登录失败");
        }
    }
}
```