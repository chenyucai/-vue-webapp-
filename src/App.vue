<template>
    <div class="views" id="app">
      <div class="view">
        <div class="header">
            <!-- <router-link to="/about">about</router-link>
            <router-link to="/hello">hello</router-link>
            <router-link to="/home">home</router-link>
            <button @click="showLoading">点我</button> -->
            <!-- <div class="page__bd page__bd_spacing">
                <a href="javascript:;" class="weui-btn weui-btn_default" @click="showPicker">{{value}}</a>
                <a href="javascript:;" class="weui-btn weui-btn_default" @click="showDatePicker">{{date}}</a>
            </div> -->
            <router-link to="/picker">
              <a href="javascript:;" class="weui-btn weui-btn_default">picker</a>
            </router-link>
            <router-link to="/swipe">
              <a href="javascript:;" class="weui-btn weui-btn_default">swipe</a>
            </router-link>
            <router-link to="/dropload">
              <a href="javascript:;" class="weui-btn weui-btn_default">dropload</a>
            </router-link>
            <router-link to="/iscroll">
              <a href="javascript:;" class="weui-btn weui-btn_default">iscroll</a>
            </router-link>
        </div>
        <!-- <div class="weui_cells">
           <div class="weui_cell" v-for="item in 20">
                <div class="weui_cell_bd weui_cell_primary">
                    <p class='weui-updown'>
                        <img src="./assets/img/s.gif" data-src="./assets/img/test.jpg" height='100' />
                    </p>
                </div>
                <div class="weui_cell_ft">渐显.weui-updown</div>
            </div>
        </div> -->
        <!-- router -->
        <router-view keep-alive></router-view>
      </div>
      <div class="popup">
        <!-- loading -->
        <!-- <transition name="fade"> -->
          <loading :loading="$root.loading" v-if="$root.loading.show"></loading>
        <!-- </transition> -->

        <!-- alert -->
        <!-- <transition name="fade"> -->
          <alert :alert="$root.alert" v-if="$root.alert.show"></alert>
        <!-- </transition> -->

        <!-- alert-dialog -->
        <!-- <transition name="fade"> -->
          <alert-dialog :alert-dialog="$root.alertDialog" v-if="$root.alertDialog.show"></alert-dialog>
        <!-- </transition> -->

        <!-- confirm-dialog -->
        <!-- <transition name="fade"> -->
          <confirm-dialog :confirm-dialog="$root.confirmDialog" v-if="$root.confirmDialog.show"></confirm-dialog>
        <!-- </transition> -->

        <!-- success-toast -->
        <!-- <transition name="fade"> -->
          <success-toast :success-toast="$root.successToast" v-if="$root.successToast.show"></success-toast>
        <!-- </transition> -->

        <!-- action-sheet -->
        <!-- <transition name="">
          <action-sheet :action-sheet="$root.actionSheet" v-if="$root.actionSheet.show"></action-sheet>
        </transition> -->
        <action-sheet :action-sheet="$root.actionSheet" v-if="$root.actionSheet.show"></action-sheet>
      </div>
    </div>
</template>
<script>
// import weui from './assets/js/weui.min.js'
import LazyloadImg from './assets/js/lazyloadImg.js'

import Loading from './components/Loading.vue'
import Alert from './components/Alert.vue'
import SuccessToast from './components/SuccessToast.vue'
import AlertDialog from './components/AlertDialog.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
import ActionSheet from './components/ActionSheet.vue'

export default {
  data:function(){
    return {
      test:null
    }
  },
  components:{
    'loading': Loading,
    'alert': Alert,
    'alert-dialog': AlertDialog,
    'confirm-dialog': ConfirmDialog,
    'success-toast': SuccessToast,
    'action-sheet': ActionSheet
  },
  created: function() {
    // var lazyloadImg = new LazyloadImg({
    //   el: '[data-src]', //匹配元素
    //   top: 50, //元素在顶部伸出长度触发加载机制
    //   right: 50, //元素在右边伸出长度触发加载机制
    //   bottom: 50, //元素在底部伸出长度触发加载机制
    //   left: 50, //元素在左边伸出长度触发加载机制
    //   qriginal: true, // true，自动将图片剪切成默认图片的宽高；false显示图片真实宽高
    //   load: function(el) {
    //       el.style.cssText += '-webkit-animation: fadeIn 01s ease 0.2s 1 both;animation: fadeIn 1s ease 0.2s 1 both;';
    //   },
    //   error: function(el) {
    //
    //   }
    // });
  },
  methods:{
    showPicker:function(){
      var _this_ = this;
      console.log(this.value);
      // weui.picker([{
      //     label: '飞机票',
      //     value: 0
      // }, {
      //     label: '火车票',
      //     value: 1
      // }, {
      //     label: '的士票',
      //     value: 2
      // },{
      //     label: '公交票 (disabled)',
      //     disabled: true,
      //     value: 3
      // }, {
      //     label: '其他',
      //     value: 4
      // }], {
      //   vm:this.value,
      //     onChange: function (result) {
      //         // console.log(result);
      //         // _this.value = result
      //     },
      //     onConfirm: function (result) {
      //         console.log(result);
      //         // console.log(this.vm);
      //     }
      // });
    },
    showDatePicker:function(){
      var _this = this;
      // weui.datePicker({
      //     start: 1990,
      //     end: new Date().getFullYear(),
      //     onChange: function (result) {
      //         console.log(result);
      //         _this.date = result;
      //     },
      //     onConfirm: function (result) {
      //         console.log(result);
      //         _this.date = result;
      //     }
      // });
    },
    showLoading:function () {
      console.log(1);
      // this.$root.loading.show = true;
      // this.$root.alert.show=true;
      // this.$root.alert.content = 'sfdasdfsfds'
      // this.$root.successToast.show = true;
      // this.$root.alertDialog.show = true;
      // this.$root.alertDialog.content = 'ldsflsjlfjslkj';
      // this.$root.confirmDialog.show = true;
      // this.$root.confirmDialog.title = '123';
      // this.$root.confirmDialog.content = 'sdfsdsdf';
      // var root = this.$root;
      // this.$root.confirmDialog.cancelCallback = function(){
      //   // alert(root.confirmDialog.show)
      // }
      // this.$root.confirmDialog.confirmCallback = function(){
      //   // alert('confirm')
      // }
      // this.$root.actionSheet.show = true;
      // this.$root.actionSheet.list = [
      //   {name:'jack'},
      //   {name:'job'}
      // ]
    }
  }
}
</script>
<style>
.header{
  position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    /*height: 45px;*/
    line-height: 45px;
    font-size: 19px;
    /*background: linear-gradient(to bottom, #303036, #3c3b40);*/
    color: #ffffff;
    text-align: center;
}
</style>
