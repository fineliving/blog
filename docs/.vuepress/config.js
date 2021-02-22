const nav = require('./config/nav.js')
module.exports = {
  title: "LiYang's blog",
  description: 'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。', // 描述,以 <meta> 标签渲染到页面html中
  base: '/', // '/<github仓库名>/'， 默认'/'  // TODO: 同vue的.env文件一样，在gp-pages上要使用'/blog'，在coding上用'/'
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
  ],
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
    }
  },
  theme: 'vdoing',
  // theme: require.resolve('../../theme-vdoing'),
  themeConfig: {
    nav,
    sidebarDepth: 2, //最大显示为2，所以文件夹最多深度为2
    logo: '/img/logo.svg',
    repo: 'fineliving',
    category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    archive: true,
    sidebar: { mode: 'structuring', collapsable: false },// collapsable设置侧边栏不收缩
    author: { // 文章默认的作者信息，可在.md文件front matter中单独配置此信息 String | {name: String, link: String}
      name: 'Li Yang', // 必需
      link: 'https://github.com/fineliving' // 可选的
    },
    blogger: { // 博主信息，显示在首页侧边栏
      avatar: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
      name: 'Evan Xu',
      slogan: '前端界的小学生'
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:894072666@qq.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/xugaoyi'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2019, // 博客创建年份
      copyrightInfo: 'Evan Xu | MIT License', // 博客版权信息，支持a标签
    }
  },
  plugins: [ // 插件
    // ['run',{
    [require('../../vuepress-plugin-run-sfc/index'), { // TODO: 使用本地的vue组件
      jsLabs: ['https://unpkg.com/element-ui/lib/index.js', 'https://unpkg.com/babel-polyfill@6.26.0/dist/polyfill.min.js'],
      cssLabs: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
      // reverse: false,
      // isHideHeader: true,
      themeColor: 'red'
    },
    ],
    ["@babel/plugin-transform-runtime"]
  ]
}