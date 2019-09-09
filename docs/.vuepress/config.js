module.exports = {
    base: '/gulu/',
    title: '轱辘 UI',
    description: '一个好用的UI框架',
    themeConfig: {
        sidebar: [
            '/',
            {
                title: '入门',
                children: ['/install/',
                    '/get-started/',]
            },

            {
                title: '组件',
                children: ['/components/button', '/components/grid', '/components/input',
                    '/components/layout', '/components/tabs', '/components/toast']
            },


        ]
    }
}