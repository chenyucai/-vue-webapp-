<template>
<transition name="slide-right" mode="in-out" appear>
  <div class="view">
    <div class="page">
    <div class="page-content co">
      这是{{page}}页面
      <router-link to="/about/child">child</router-link>
      <button type="button" name="button" @click="number=40">点我</button>
      <!-- <div class="test">

      </div> -->
      <div class="weui_cells">
         <div class="weui_cell" v-for="item in number">
              <div class="weui_cell_bd weui_cell_primary">
                  <p class='weui-updown'>
                      <img src="../assets/img/blank.jpg" class="lazy-load" data-src="src/assets/img/test.jpg" height='100' width="130" />
                  </p>
              </div>
              <div class="weui_cell_ft">渐显.weui-updown</div>
          </div>
      </div>
    </div>

  </div>
  <!-- router -->
  <router-view></router-view>
  </div>


</transition>
</template>
<script>
import LazyloadImg from '../assets/js/lazyloadImg.js'
    export default {
        data: function () {
            return {
                page: 'about',
                number:20,
                transitionName:'fade'
            }
        },
        created:function(){
          var lazyloadImg = new LazyloadImg({
            el: '.lazy-load[data-src]', //匹配元素
            top: 50, //元素在顶部伸出长度触发加载机制
            right: 50, //元素在右边伸出长度触发加载机制
            bottom: 50, //元素在底部伸出长度触发加载机制
            left: 50, //元素在左边伸出长度触发加载机制
            qriginal: true, // true，自动将图片剪切成默认图片的宽高；false显示图片真实宽高
            load: function(el) {
                el.style.cssText += '-webkit-animation: fadeIn 01s ease 0.2s 1 both;animation: fadeIn 1s ease 0.2s 1 both;';
            },
            error: function(el) {

            }
          });

        }
    }
</script>
<style scoped>
/*.weui-updown{-webkit-animation:weui-updown .3s linear;animation:opacity .3s linear}*/
@-webkit-keyframes weui-updown{0%{opacity:0}100%{opacity:1}}
@keyframes weui-updown{0%{opacity:0}100%{opacity:1}}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
.co{
  padding-top: 50px;
}
.blue{
  background-color: blue;
}
.test{
  height: 800px;
  background: red;
}
.container {
  position: absolute;
z-index: 10;
top: 0;
left: 0;
height: 100%;
width: 100%;
}
.inner{
  position: relative;
height: 100%;
z-index: 2;
}
/*.page{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 1;
  background-color: #fff;
}*/
.fade-enter-active {
/*transition: opacity .3s ease;*/
-webkit-animation-name: slideInRight;
animation-name: slideInRight;
-webkit-animation-duration: 0.3s ease;
animation-duration: 0.3s;
-webkit-animation-fill-mode: both;
animation-fill-mode: both;
}
.fade-leave-active {
  /*-webkit-animation-name: slideInRight;
  animation-name: slideInRight;*/
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.cover-enter-active{
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  opacity: 1;
  transition: .3s opacity ease;
}
.cover-enter{
    opacity: 0;
}
.cover-leave-active{
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
  -webkit-animation-duration: 0.3s ease;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  opacity: 0;
  transition: .3s opacity ease;
}
/*.cover-enter-active{
    opacity: 1;
    transition: .3s opacity ease;
}*/

._effect {
    opacity: 1;
    transition: .3s all ease;
}

._effect--30 {
    transform: translate3d(-30%, 0, 0);
}

._effect--50 {
    opacity: 0;
    transform: translate3d(-50%, 0, 0);
}
@-webkit-keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  /*50% {
    transform: scale(1.5);
  }*/
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  /*50% {
    transform: scale(1.5);
  }*/
  100% {
    transform: scale(0);
  }
}
</style>
