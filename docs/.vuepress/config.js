module.exports = {
    title: 'C++高级程序设计', // 网站标题
    description: 'C++高级程序设计的课程笔记', // 网站描述

    // 插入html头
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],

    // // 插件
    plugins: [
        ['@maginapp/vuepress-plugin-katex', { // katex公式
          delimiters: 'dollars'
        }],

        ['vuepress-plugin-container', {
            type: 'definition',
            before: info => `<div class="definition"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['vuepress-plugin-container', {
            type: 'theorem',
            before: info => `<div class="theorem"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['vuepress-plugin-container', {
            type: 'conclusion',
            before: info => `<div class="conclusion"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['@vuepress/back-to-top'],

        ['vuepress-plugin-mygitalk', {
            // 是否启用(关闭请设置为false)(default: true)
            enable: false,
            // 是否开启首页评论(default: true)
            home: false,
            // Gitalk配置
            // gitalk: {
            //     // GitHub Application Client ID.
            //     clientID: 'd82b318c0c7bcc30fc72',
            //     // GitHub Application Client Secret.
            //     clientSecret: 'c1d713026e3dc925bf0afa184fc2339ce730c3ca',
            //     // GitHub repository. 存储评论的 repo
            //     repo: 'static-analysis',
            //     // GitHub repository 所有者，可以是个人或者组织。
            //     owner: 'Cqhddyb',
            //     // 设置语言(default: zh-CN)
            //     language: 'zh-CN',
            //}
        }]
    ],
    
    markdown: { // markdown渲染设置
        lineNumbers: true
    },
    locales: {  // 网站语言设置
        '/': {
            lang: 'zh-CN'
            //title: '高级程序设计',
            //description: 'C++高级程序设计课程笔记'
        }
    },
    themeConfig: { // 主题设置
        // 关于导航栏
        logo: '/favicon.png', // 导航栏logo
        navbar: true, // 启用导航栏
        nav: [ // 导航栏内容设置
            {
                text: '目录',
                items: [
                    {
                        text: '第一部分：类和对象',
                        items: [
                            {text: '1 数据的抽象与封装', link: '/01-foundation/'},
                            {text: '2 类和对象的基本概念及面向对象概述', link: '/02-ir/'},
                            {text: '3 this指针', link: '/02-ir/'},
                            {text: '4 构造函数与析构函数', link: '/02-ir/'},
                            {text: '5 拷贝构造函数', link: '/02-ir/'}
                        ]
                    },
                    {
                        text: '第二部分：操作符重载',
                        items: [
                            {text: '6 对象数组和对象指针', link: '/02-ir/'},
                            {text: '7 类作用域和对象生命期', link: '/02-ir/'},
                            {text: '6 常成员函数与静态成员', link: '/03-dfa-ap/'},
                            {text: '7 成员对象和封闭类', link: '/04-dfa-fd/'},
                            {text: '8 友元', link: '/05-inter/'}
                        ]
                    },
                    {
                        text: '第三部分：继承与多态',
                        items: [
                            {text: '9 基本操作符重载', link: '/06-pta-intro/'},
                            {text: '10 特殊操作符重载', link: '/07-pta-fd/'},
                        ]
                    }                
                ]
            },
            { text: '笔者博客', link: 'https://blog.chenqihang.top' },
            //{ text: '配套实验', link: 'https://tai-e.pascal-lab.net/'}
        ],
        repo: 'Cqhddyb/advanecd-programming', // 文档项目的github仓库

        // 关于侧边栏
        displayAllHeaders: false, // 显示所有页面的标题链接，否则只显示当前页面的
        activeHeaderLinks: false, // 活动的标题链接
        sidebarDepth: 3, // 
        sidebar: [
            '/preface/',
            {
                title: '第一部分：类和对象',   
                // path: '/01-intro/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/01-foundation/',
                    '/02-enhance/'
                    //'/02-ir/'
                ]
            },
            {
                title: '第二部分：操作符重载',   
                // path: '/03-dfa-ap/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    //'/03-dfa-ap/',
                    //'/04-dfa-fd/',
                    //'/05-inter/'
                ]
            },
            {
                title: '第三部分：继承与多态',   
                // path: '/06-pta-intro/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    //'/06-pta-intro/',
                    //'/07-pta-fd/',
                    //'/08-pta-cs/',
                    //'/09-security/',
                    //'/10-datalog/'
                ]
            },
            {
                title: '第四部分：输入输出与模板',   
                // path: '/06-pta-intro/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    //'/06-pta-intro/',
                    //'/07-pta-fd/',
                    //'/08-pta-cs/',
                    //'/09-security/',
                    //'/10-datalog/'
                ]
            },
            {
                title: '第五部分：其他',   
                // path: '/06-pta-intro/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    //'/06-pta-intro/',
                    //'/07-pta-fd/',
                    //'/08-pta-cs/',
                    //'/09-security/',
                    //'/10-datalog/'
                ]
            },
            // ['/demo', 'Explicit link text'], // 显示地指定文字
        ],

        // 关于页脚
        nextLinks: true, // 下一篇
        prevLinks: true, // 上一篇
        lastUpdated: '最后更新', // string | boolean 最后更新时间
        repoLabel: '查看源码',
        // docsRepo: 'vuejs/vuepress', // 文档仓库，默认为项目仓库
        docsDir: 'docs', // 文档目录
        docsBranch: 'main', // 文档分支
        editLinks: true,
        editLinkText: '帮助我改善此页面！',

        smoothScroll: true // 页面滚动 
    }
}

