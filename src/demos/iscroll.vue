<template>
  <div class="view">
    <div class="page">
      <div id="wrapper">
        <div class="scroll" id="scroll">
          <div id="pullDown" class="scroll_pull_down">
            <span>下拉刷新…</span>
          </div>
          <ul>
            <li v-for="(item,index) in 50">Pretty row {{index}}</li>
          </ul>
          <div id="pullUp">
            <span>上拉加载更多…</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IScroll from '../assets/js/iscroll-probe.js'
export default {
  data:function(){
    return {
      myScroll:null,
    }
  },
  mounted:function(){
    var pullDown = {
      el:document.getElementById('pullDown'),
      flag:0, // 0默认，1松手刷新，2正在加载，只有当为0时才能再次加载，防止过快拉动刷新
      tips:{
        // 下拉状态
        0: '下拉刷新',
        1: '松手即可刷新',
        2: '正在刷新',
        4: '刷新成功',
      },
      className:{
        0: 'scroll_pull_down',
        1: 'scroll_pull_down flip',
        2: 'scroll_pull_down loading',
      }
    }
    var pullUp = {
      el:document.getElementById('pullUp'),
      flag:0, // 0默认，1松手刷新，2正在加载，上拉不做弹性上拉刷新，判断下滑到底部就刷新
      tips:{
        // 上拉状态
        0: '上拉刷新',
        1: '松手即可刷新',
        2: '正在刷新'
      }
    }

    function positionJudge(){
        if(this.y>40 && pullDown.flag == 0){    //判断下拉
          pullDown.flag = 1;
          pullDown.el.innerHTML = pullDown.tips[pullDown.flag];
          pullDown.el.className = pullDown.className[pullDown.flag]
        }else if(this.y<(this.maxScrollY+10) && pullUp.flag==0){   //判断是否下滑到底部
          pullUp.flag = 1;
          pullUp.el.innerHTML = "正在加载";
        }

    }
    function action(){
        if(pullDown.flag==1){
            pullDown.flag = 2; //正在加载
            pullDown.el.innerHTML = pullDown.tips[pullDown.flag];
            pullDown.el.className = pullDown.className[pullDown.flag]

            // ajax请求

        }else if(pullUp.flag==1){
            pullUp.flag = 2; //正在加载
            pullUp.el.innerHTML = "正在刷新…";

            // ajax请求
        }
    }
    this.myScroll = new IScroll('#wrapper', {
		  scrollbars: 'custom', //自定义滚动条样式，但是在当前vue文件scoped下定义样式不生效,在style.css定义下才生效
      // scrollbars:true,
      resizeScrollbars: true,
		  // mouseWheel: true,
		  // interactiveScrollbars: true,
		  shrinkScrollbars: 'scale',
		  fadeScrollbars: true,
      probeType:2, //不写入该属性无法监听scroll事件

	  });
    this.myScroll.on('scroll',positionJudge);

    this.myScroll.on("scrollEnd",action);
  }
}
</script>

<style scoped>
#wrapper {
	position: absolute;
	z-index: 1;
	top: 0px;
	bottom: 0px;
	left: 0;
	width: 100%;
	background: #ccc;
	overflow: hidden;
}

#scroll {
	position: absolute;
	z-index: 1;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	width: 100%;
	-webkit-transform: translateZ(0);
	-moz-transform: translateZ(0);
	-ms-transform: translateZ(0);
	-o-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-text-size-adjust: none;
	-moz-text-size-adjust: none;
	-ms-text-size-adjust: none;
	-o-text-size-adjust: none;
	text-size-adjust: none;
}

#scroll ul {
	list-style: none;
	padding: 0;
	margin: 0;
	width: 100%;
	text-align: left;
}

#scroll li {
	padding: 0 10px;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #ccc;
	border-top: 1px solid #fff;
	background-color: #fafafa;
	font-size: 14px;
}
#pullDown, #pullUp {
   background:#fff;
   height:40px;
   line-height:40px;
   padding:5px 10px;
   border-bottom:1px solid #ccc;
   font-weight:bold;
   font-size:14px;
   color:#888;
}
.scroll_pull_down{
  margin-top: -40px;
}
.scroll_pull_down.loading{
  margin-top: 0;
}

</style>
