<template lang="html">
  <div class="view">
    <div class="page">
      <a href="javascript:;" class="weui-btn weui-btn_default" @click="showToast">显示toast</a>
      <a href="javascript:;" class="weui-btn weui-btn_default" @click="showModal">显示modal</a>
      <a href="javascript:;" class="weui-btn weui-btn_default" @click="showActionSheet">显示actionSheet</a>
    </div>
  </div>
</template>

<script>
import Catty from '../assets/js/catty.js'
export default {
  data:function(){
    return {

    }
  },
  created:function(){
    // Catty.showToast();
    // setTimeout(function(){
    //   Catty.hideToast();
    // },1500)
  },
  methods:{
    showToast:function(){
      Catty.showToast({
        type:'success',
        title:'已完成'
      });
    },
    showModal:function(){
      Catty.showModal({
        // showCancel:false
        cancel:function(){
          console.log(1);
          // alert(2)
        },
        confirm:function(){
          console.log(2);
        }
      });
    },
    showActionSheet:function(){
      Catty.showActionSheet({
        itemList:[1,2,3,4],
        tap:function(index){
          alert(index)
        }
      });
    }
  }
}
</script>

<style lang="css">
</style>
