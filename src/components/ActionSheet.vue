<template lang="html">
  <transition name="fade-fast">
   <div>
    <div :class="actionMaskClass" @click="cancel"></div>
    <div :class="actionSheetClass">
        <div class="weui-actionsheet__menu">
            <div class="weui-actionsheet__cell" v-for="item in actionSheet.list" @click="action">{{typeof item=='object'?item.name:item}}</div>
        </div>
        <div class="weui-actionsheet__action" @click="cancel">
            <div class="weui-actionsheet__cell">取消</div>
        </div>
    </div>
   </div>
  </transition>
</template>

<script>
export default {
  data:function (){
    return {
      actionSheetClass:'',
      actionMaskClass:''
    }
  },
  props:['actionSheet'],
  created:function(){
    this.actionSheetClass = 'weui-actionsheet';
    this.actionMaskClass = 'weui-mask_transparent actionsheet__mask';
    var _this = this;
    setTimeout(function(){
      _this.actionSheetClass = 'weui-actionsheet weui-actionsheet_toggle';
      _this.actionMaskClass = 'weui-mask_transparent actionsheet__mask actionsheet__mask_show';
    },1)

  },
  methods:{
    action:function(){
      this.actionSheetClass = 'weui-actionsheet';
      // this.actionMaskClass = 'weui-mask_transparent actionsheet__mask';
      var _this = this;
      setTimeout(function(){
        _this.actionSheet.show = false;
      },190)
      if (typeof this.actionSheet.callback == 'function') {
        this.actionSheet.callback();
      }
    },
    cancel:function(){
      this.actionSheetClass = 'weui-actionsheet';
      // this.actionMaskClass = 'weui-mask_transparent actionsheet__mask';
      var _this = this;
      setTimeout(function(){
        _this.actionSheet.show = false;
      },190)
    }
  }
}
</script>

<style lang="css" scoped>
.actionsheet__mask{
    display: none;
    transition:background .3s;
}
.actionsheet__mask_show{
    display: block;
    background: rgba(0,0,0,.6);
}
.fade-fast-enter-active, .fade-fast-leave-active {
  transition: opacity .2s ease-in-out;
}
.fade-fast-enter, .fade-fast-leave-active {
  opacity: 0
}
</style>
