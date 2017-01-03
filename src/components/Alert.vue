<template lang="html">
  <transition name="fade">
    <div>
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast_ruochu">
          <p class="weui-toast__content_ruochu">{{ alert.content || defaultContent }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data:function () {
    return {
      defaultContent:''
    }
  },
  props:['alert'],
  created:function () {
    var _this = this;
    var delayTime = _this.alert.delayTime || 1600;
    setTimeout(function(){
      _this.alert.show = false;
    },delayTime);
  }
}
</script>

<style lang="css" scoped>
.weui-toast_ruochu{
  position: fixed;
  z-index: 5000;
  width: 100%;
  min-height: 2em;
  top: 40%;
  left: 0;
  text-align: center;
  color: #fff;
}
.weui-toast__content_ruochu{
  display: inline-block;
  background: rgba(40,40,40,.75);
  border-radius: 5px;
  padding: 10px 15px;
  max-width: 260px;
  font-size: 15px;
}
</style>
