<template lang="html">
  <transition name="fade">
    <div>
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
          <i class="weui-icon-success-no-circle weui-icon_toast"></i>
          <p class="weui-toast__content">{{ successToast.content || defaultContent }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data:function () {
    return {
      defaultContent:'已完成'
    }
  },
  props:['successToast'],
  created:function () {
    var root = this.$root;
    var delayTime = root.successToast.delayTime || 1600;
    setTimeout(function(){
      root.successToast.show = false;
    },delayTime);
  }
}
</script>

<style lang="css" scoped>
</style>
