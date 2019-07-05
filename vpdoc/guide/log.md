# 日志(Logger)
按照美化的格式输入日志。

## 注册
需要一开始初始化项目的时候在`workbench`里面注册日志处理程序。
```ts
// workbench.ts

// 注册日志处理程序
Logger.handlers.add(new ConsoleLogHandler());
```

## 使用
```ts
/**
 * @param  {any} source 日志来源。
 * @param  {string} message 日志消息。
 * @param  {any} data 附带数据。
 * @returns void
 */
Logger.debug(source, message, data);
Logger.warn(source, message, data);
Logger.warn(source, message, data);
Logger.warn(source, message, data);

Logger.warn(this, entry && entry.alias, { url: request.url, response, request });
// =>
// > [--------[WARN] 2019/7/3 下午4:06:03--------
// > 参数无效
// > >{url: "http://xxx.xx/token", response: {…}, request: {…}}
// > >e {options: {…}, _handlers: t}
// > ----------------------------------------------]
```