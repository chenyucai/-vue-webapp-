<template lang="html">
  <transition name="fade">
    <div>
      <div class="weui-mask"></div>
      <div class="weui-dialog">
          <!-- <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{ alertDialog.title || defaultTitle}}</strong></div> -->
          <div class="weui-dialog__bd">{{ alertDialog.content }}</div>
          <div class="weui-dialog__ft">
              <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="callback">{{ alertDialog.bottonName || defaultBottonName}}</a>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data:function () {
    return {
      defaultTitle:'提示',
      defaultBottonName:'知道了',
    }
  },
  props:['alertDialog'],
  created:function(){

  },
  methods:{
    callback: function(){
      var _this = this;
      _this.alertDialog.show = false;
      if (typeof this.alertDialog.callback == 'function') {
        _this.alertDialog.callback();
      }
    }
  }
}
</script>

<style lang="css" scoped>
.weui-dialog{
  top: 45%;
}
</style>
