module.exports = [
  { text: '首页', link: '/' },
  { text: '分类', link: '/categories/' },
  { text: '标签', link: '/tags/' },
  { text: '归档', link: '/archives/' },
  {
    text: '前端', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    link: '/pages/0a6679/',
    items: [
      { text: '编程基础', link: '/pages/0a6679/' },
      { text: '开发软件', link: '/pages/714859/' },
      { text: '类库框架', link: '/pages/690ae0/' },
      { text: '知识进阶', link: '/pages/d2dd63/' },
      { text: '工程开发', link: '/pages/fd695e/' },
      { text: '编程思想', link: '/pages/f37132/' },
      { text: '领域分支', link: '/pages/73d90e/' },
      { text: '社区发展', link: '/pages/b7eb61/' },
      { text: '计算机基础', link: '/pages/83b440/' },
      { text: '后端知识', link: '/pages/0d54d7/' },
      { text: '软技能', link: '/pages/416bc0/' }
    ]
  },
  { text: '🤡LeetCode', link: '/leetCode/' },
  {
    text: '笔记本',
    link: '/notes/',
    items: [
      {
        text: '书籍', items: [
          { text: '《ES6教程》', link: '/books/es6/' },
          { text: '《JavaScript高级程序设计》', link: '/books/professionalJs/' },
        ]
      },
      {
        text: '教程', items: [
          { text: 'CSS3(技术胖)', link: '/course/css3-jspang/' },
          { text: 'ES6(技术胖)', link: '/course/es6-jspang/' },
          { text: '性能(Google Developers)', link: '/course/performance/' },
        ]
      },
      {
        text: '技术文档', items: [
          { text: 'leaflet中文教程', link: '' },
        ]
      }
    ]
  }
]
