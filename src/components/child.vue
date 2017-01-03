<template>
  <transition name="slide-right" appear>
  <div class="view">
      <!-- <div class="pages"> -->
      <div class="page">
        <div class="page-content con">
          <router-link to="/about/child/child2">child2</router-link>
            这是{{page}}页面
        </div>


      </div>
<router-view></router-view>
      <!-- </div> -->
  </div>
  </transition>
</template>
<script>
    export default {
        data: function () {
            return {
                page: 'about'
            }
        },
        created:function(){

        }
    }
</script>
<style scoped>
.relative{
  /*overflow: hidden;*/
position: relative;
height: 100%;
}
.container {
  position: absolute;
z-index: 10;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: red;
}
.inner{
  position: relative;
height: 100%;
z-index: 2;
background: blue;
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
.con{
  height: 1000px;
  background: #f2f2f2;
  padding-top: 50px;
}
.fade-enter-active {
/*transition: opacity .3s ease;*/
-webkit-animation-name: slideInRight;
animation-name: slideInRight;
-webkit-animation-duration: 0.3s;
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
</style>
