const nav = require('./config/nav.js');
module.exports = {
  theme: 'vdoing', // npm主题依赖包
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题包，用于深度修改
  themeConfig: {
    nav,
    category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    archive: true,
    sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
    author: { // 文章默认的作者信息，可在.md文件front matter中单独配置此信息 String | {name: String, link: String}
      name: 'Evan Xu', // 必需
      link: 'https://github.com/xugaoyi' // 可选的
    },
    blogger:{ // 博主信息，显示在首页侧边栏
      avatar: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
      name: 'Evan Xu',
      slogan: '前端界的小学生'
    },
    social:{ // 社交图标，显示于博主信息栏和页脚栏
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
    footer:{ // 页脚信息
      createYear: 2019, // 博客创建年份
      copyrightInfo: 'Evan Xu | MIT License', // 博客版权信息，支持a标签
    }

 }
}