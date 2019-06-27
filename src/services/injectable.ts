import ServiceProviderFactory from "./service-provider-factory";

/**
 * 标注当前类型是一个可注入的服务。
 * @summary 如果未指定 providerName 参数则默认注入至默认服务容器中。
 * @param providerName 服务容器名称。
 */
export default function injectable(providerName?: string)
{
    return function(serviceType: Function)
    {
        let factory = ServiceProviderFactory.instance,
            provider = providerName ? factory.getProvider(providerName) : factory.default;
        
        provider.register(serviceType);
    };
}
