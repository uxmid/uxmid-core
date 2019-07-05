module.exports =
{
    title: "uxmid-core",
    base: "/uxmid-core/",
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
                    { text: "API", link: "https://uxmid.github.io/uxmid-core/typedoc/globals.html" },
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
                            ]
                        }
                    ]
                }
            }
        }
    }
};