module.exports =
{
    title: "uxmid-core",
    dest: "./docs",
    locales:
    {
        "/":
        {
            lang: "zh-CN",
            description: "🌋 可插拔的企业级应用框架。",
        }
    },
    serviceWorker: {},
    themeConfig:
    {
        repo: "uxmid/uxmid-core",
        lastUpdated: "Last Updated",
        editLinks: true,
        docsDir: "docs",
        serviceWorker:
        {
            updatePopup:
            {
                message: "New content is available.",
                buttonText: "Refresh",
            },
        },
        locales:
        {
            "/":
            {
                selectText: "选择语言",
                label: "English",
                editLinkText: "在 GitHub 上编辑此页",
                nav:
                [
                    { text: "指南", link: "/guide/" },
                    { text: "API", link: "https://github.com/uxmid/uxmid-core/docs/typedoc/globals.html" },
                    { text: "发布日志", link: "https://github.com/uxmid/uxmid-core/releases" }
                ],
                sidebar:
                {
                    "/guide/":
                    [
                        {
                            title: "指南",
                            collapsable: false,
                            children:
                            [
                                "",
                                "getting-started",
                                "create-app",
                                "broadcast",
                                "collections",
                                "commands",
                                "common",
                                "log",
                                "event",
                                "exception",
                                "reflection",
                                "runtime",
                                "service"
                            ],
                        }
                        // {
                        //     title: "参考",
                        //     collapsable: false,
                        //     children: ["faq", "migration", "env-variables"],
                        // }
                    ],
                    // "/zh/config/": [""],
                    // "/zh/api/": [""],
                    // "/zh/plugin/": [
                        // {
                        //     title: "插件",
                        //     collapsable: false,
                        //     children: [""],
                        // },
                        // {
                        //     title: "官方插件",
                        //     collapsable: false,
                        //     children: ["umi-plugin-react", "umi-plugin-prerender"],
                        // },
                        // {
                        //     title: "插件开发",
                        //     collapsable: false,
                        //     children: ["develop"],
                        // }
                    // ],
                },
            }
        },
    },
};