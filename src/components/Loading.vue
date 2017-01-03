<template lang="html">
  <transition name="fade">
    <div>
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
          <i class="weui-loading weui-icon_toast"></i>
          <p class="weui-toast__content">{{ loading.title || defaultTitle }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data:function () {
    return {
      defaultTitle: '加载中'
    }
  },
  props: ['loading'],
  methods:{

  }
}
</script>

<style lang="css" scoped>
</style>
