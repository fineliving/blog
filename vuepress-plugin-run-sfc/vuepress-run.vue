<template>
  <div v-if="dynamicComponent" class="vuepress-run">
    <component v-bind="$attrs" :is="dynamicComponent"></component>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  data () {
    return {
      dynamicComponent: null,
    }
  },
  mounted () {
    this.add()
  },
  methods: {
    add () {
      // import('vue-run-sfc/src/vue-run-sfc').then(module => { 
      import('../vue-run-sfc/vue-run-sfc').then(module => { // 插件有BUG，所以使用本地的
        this.$attrs.themeColor = '#11A8CD'  //  TODO:改变主题
        this.dynamicComponent = module.default
      })
    }
  }
}
</script>
