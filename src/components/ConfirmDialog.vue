<template lang="html">
  <transition name="fade">
    <div>
      <div class="weui-mask"></div>
      <div class="weui-dialog">
          <!-- <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{ confirmDialog.title || defaultTitle}}</strong></div> -->
          <div class="weui-dialog__bd">{{ confirmDialog.content }}</div>
          <div class="weui-dialog__ft">
              <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="cancelCallback">{{ confirmDialog.cancelButtonName || defaultCancelButtonName}}</a>
              <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="confirmCallback">{{ confirmDialog.confirmButtonName || defaultConfirmButtonName}}</a>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data:function () {
    return {
      defaultCancelButtonName: '取消',
      defaultConfirmButtonName: '确定'
    }
  },
  props:['confirmDialog'],
  methods:{
    cancelCallback:function(){
      this.confirmDialog.show = false;
      if (typeof this.confirmDialog.cancelCallback == 'function') {
        this.confirmDialog.cancelCallback();
      }
    },
    confirmCallback:function(){
      this.confirmDialog.show = false;
      if (typeof this.confirmDialog.confirmCallback == 'function') {
        this.confirmDialog.confirmCallback();
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
