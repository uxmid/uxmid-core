---
sidebarDepth: 2
---

# 创建Application
创建应用的流程
创建工作空间(继承实例) => 创建工作台(注入插件及依赖) => 生成应用程序上下文 => uxmid启动应用程序

## 创建工作空间(继承实例)
创建工作空间，继承自 `Vue` 实例，或者 `React` 的 `Component`。
以下以Vue为例。

```ts
// workspace.ts
import Vue, { CreateElement } from "vue";

import uxmid, { IWorkbench } from "uxmid-core";
import ApplicationContext from "./context";

/**
 * 提供工作空间的常用功能。
 * @class
 * @version 1.0.0
 */
export default class Workspace extends Vue
{
    private _workbench: IWorkbench;

    /**
     * 获取工作空间所属的工作台实例。
     * @property
     * @returns IWorkbench
     */
    public get workbench(): IWorkbench
    {
        return this._workbench;
    }
    
    /**
     * 初始化工作空间的新实例。
     * @constructor
     * @param  {IWorkbench} workbench 工作台实例。
     * @param  {Router} router 主路由程序。
     */
    public constructor(workbench: IWorkbench)
    {
        let options =
        {
            el: "#workspace",
            router: ApplicationContext.current.router,
            store: ApplicationContext.current.store,
            render(h: CreateElement)
            {
                return h("div",{ attrs: { id: "workspace" } }, [ h("router-view") ]);
            }
        };

        // 传入配置进行初始化
        super(options);

        // 保存工作台
        this._workbench = workbench;
    }
}

```

## 创建工作台(注入插件及依赖)
```ts
// workbench.ts
import Vue from "vue";
import uxmid, { WorkbenchBase, ApplicationContextBase } from "uxmid-core";

/**
 * 提供工作台的基本封装。
 * @class
 * @version 1.0.0
 */
export default class Workbench extends WorkbenchBase
{
    private _workspace: Workspace;
    
    /**
     * 获取当前应用的主工作空间。
     * @property
     * @returns Workspace
     */
    public get workspace(): Workspace
    {
        return this._workspace;
    }

    /**
     * 初始化工作台的新实例。 
     * @param  {ApplicationContextBase} applicationContext
     */
    public constructor(context: ApplicationContextBase)
    {
        super(context);
    }
    
    /**
     * 当工作台打开时调用。
     * @async
     * @protected
     * @virtual
     * @param  {Array<string>} args
     * @returns void
     */
    protected async onOpen(args: Array<string>): Promise<void>
    {
        let context = this.applicationContext as ApplicationContext;

        // 关闭生产提示
        Vue.config.productionTip = false;

        Vue.config.errorHandler = (err, vm, info) =>
        {
            // handle error
            // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
            // 只在 2.2.0+ 可用
            console.error(err, vm, info);
        };

        Vue.config.warnHandler = (msg, vm, trace) =>
        {
            // `trace` 是组件的继承关系追踪
            console.error(msg, vm, trace);
        };

        // 注册日志处理程序
        Logger.handlers.add(new ConsoleLogHandler());

        // 初始化系统及自定义组件
        this.initializeComponent(context);

        // 初始化第三方组件
        this.initializeCustomComponent(context);
        
        // 初始化路由程序
        this.initializeRouter(context);

        // 初始化状态管理程序
        this.initializeStore(context);
        
        // 初始化全局指令
        this.initializeDirectives(context);

        // 初始化全局过滤器
        this.initializeFilters(context);

        // 初始化 http 客户端
        this.initializeHttpClient(context);

        // 初始化工作空间
        this._workspace = this.createWorkspace();
    }
    
    /**
     * 创建一个工作空间对象。
     * @override
     * @returns IWorkspace
     */
    protected createWorkspace(): Workspace
    {
        return new Workspace(this);
    }
}
```

## 生成应用程序上下文
```ts
// context.ts
import Router from "vue-router";
import { Store } from "vuex";

import { IWorkbench, ApplicationContextBase, InvalidOperationException } from "uxmid-core";
import Workbench from "./workbench";
/**
 * 包含当前应用程序的上下文实例。
 * @class
 * @version 1.0.0
 */
export default class ApplicationContext extends ApplicationContextBase
{
    private _router: Router;
    private _store: Store<any>;

    /**
     * 获取或设置当前应用的主路由对象。
     * @property
     * @returns Router
     */
    public get router(): Router
    {
        return this._router;
    }
    
    public set router(value: Router)
    {
        if(!value)
        {
            throw new InvalidOperationException();
        }

        this._router = value;
    }
    
    /**
     * 获取或设置当前应用的状态管理对象。
     * @property
     * @returns Store<any>
     */
    public get store(): Store<any>
    {
        return this._store;
    }
    
    public set store(value: Store<any>)
    {
        if(!value)
        {
            throw new InvalidOperationException();
        }

        this._store = value;
    }

    /**
     * 获取当前应用程序的上下文实例。
     * @static
     * @member
     */
    public static readonly current: ApplicationContext = new ApplicationContext();
    
    /**
     * 私有构造函数。
     * @private
     */
    protected constructor()
    {
        super("uxmid-web");
    }
    
    /**
     * 创建一个工作台对象。
     * @override
     * @returns IWorkbench
     */
    protected createWorkbench(args: Array<string>): IWorkbench
    {
        return new Workbench(this);
    }
}
```

## uxmid启动应用程序
```ts
// main.ts
import { Application } from "flagwind-core";
import ApplicationContext from "./context";

// 获取应用上下文
const context = ApplicationContext.current;

// 启动应用程序
Application.start(context);
```