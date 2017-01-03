<template>
  <div class="view">
    <div class="page">
      <div class="swipe" id="mySwipe">
        <div class="swipe-wrap">
          <div v-for="item in imgList">
            <img alt="" :src="item"/>
          </div>
        </div>
        <div class="dot">
          <span v-for="(item,index) in imgList" :class="index == curIndex?'active':''"></span>
        </div>
      </div>

      <transition name="fade">
        <div class="page" v-show="showFullSwipe">
          <div class="swipe2" id="fullSwipe">
            <div class="swipe-wrap-2">
              <div style="background-image:url('src/demos/1.jpeg')"></div>
              <div style="background-image:url('src/demos/2.jpeg')"></div>
              <div style="background-image:url('src/demos/3.jpeg')"></div>
              <div style="background-image:url('src/demos/4.jpeg')"></div>
              <div style="background-image:url('src/demos/5.jpeg')"></div>
              <div style="background-image:url('src/demos/6.jpeg')" @click="showFullSwipe = !showFullSwipe"></div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Swipe from '../assets/js/swipe.js'
//不支持和lazyloadImg一起使用
// import LazyloadImg from '../assets/js/lazyloadImg.js'
export default {
  data:function(){
    return {
      mySwipe:null,
      curIndex:0,
      fullSwipe:null,
      showFullSwipe:true,
      imgList:[
        'src/assets/img/test.jpg',
        'src/assets/img/test.jpg',
        'src/assets/img/test.jpg'
      ]
    }
  },
  created:function(){

  },
  mounted:function(){
    var _this = this;
    var elem = document.getElementById('mySwipe');
    this.mySwipe = Swipe(elem, {
      startSlide: 0,
      auto: 4000,
      continuous: true,
      disableScroll: true,
      stopPropagation: true,
      callback: function(index, element) {
        // console.log(1);
      },
      transitionEnd: function(index, element) {
        // console.log(index);
        // console.log(element);
        _this.curIndex = index;
      }
    });

    this.fullSwipe = Swipe(document.getElementById('fullSwipe'), {
      startSlide: 0,
      // auto: 4000,
      continuous: false,
      disableScroll: true,
      stopPropagation: true,
      callback: function(index, element) {
        // console.log(1);
      },
      transitionEnd: function(index, element) {
        // console.log(index);
        // console.log(element);
      }
    });
  }
}
</script>

<style scoped>
/* Swipe 2 required styles */
.swipe {
  overflow: hidden;
  /*visibility: hidden;*/
  position: relative;
}
.swipe-wrap {
  overflow: hidden;
  position: relative;
}
.swipe-wrap > div {
  float:left;
  width:100%;
  position: relative;
}
/* END required styles */
.swipe .dot{
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
}
.swipe .dot span{
  margin: 0 5px;
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: .2;
}
.swipe .dot span.active{
  opacity: 1;
  background: #007aff;
}
.swipe-wrap img{
  width: 100%;
  margin: 0;
  padding: 0;
}

.swipe2 {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.swipe-wrap-2{
  overflow: hidden;
  position: relative;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
}
.swipe-wrap-2 div{
  float:left;
  width:100%;
  position: relative;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
