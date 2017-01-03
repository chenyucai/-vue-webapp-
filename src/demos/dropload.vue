<template>
  <div class="view">
    <div class="page">
      <div class="dropload">
        <div class="">
          <a href="javascript:;" class="weui_media_box weui_media_appmsg" v-for="(item,index) in dataList">
            <div class="weui_media_hd weui-updown">
              <img class="weui_media_appmsg_thumb lazyload" src="src/assets/img/blank.jpg" alt="" :data-lazy="item.pic">
            </div>
            <div class="weui_media_bd">
              <h4 class="weui_media_title">{{item.title}}</h4>
                <p class="weui_media_desc">{{item.date}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from '../assets/js/zepto.min.js'
import dropload from '../assets/js/dropload.js'
import LazyloadImg from '../assets/js/lazyloadImg.js'
export default {
  data:function(){
    return {
      dataList:[]
    }
  },
  created:function(){
    var lazyloadImg = new LazyloadImg({
      el: '[data-lazy]', //匹配元素
      top: 50, //元素在顶部伸出长度触发加载机制
      right: 50, //元素在右边伸出长度触发加载机制
      bottom: 50, //元素在底部伸出长度触发加载机制
      left: 50, //元素在左边伸出长度触发加载机制
      qriginal: false, // true，自动将图片剪切成默认图片的宽高；false显示图片真实宽高
      load: function(el) {
         el.style.cssText += '-webkit-animation: fadeIn 01s ease 0.2s 1 both;animation: fadeIn 1s ease 0.2s 1 both;';
      },
      error: function(el) {

      }
    });
   window.addEventListener('scroll',function(){
     console.log(1);
   } , false);
  },
  mounted:function(){
    var _this = this;
    $('.dropload').dropload({
      scrollArea : window,
      autoLoad : true,//自动加载
      domDown : {//上拉
          domClass   : 'dropload-down',
          domRefresh : '<div class="dropload-refresh f15 "><i class="icon icon-20"></i>上拉加载更多</div>',
          domLoad    : '<div class="dropload-load f15"><span class="weui-loading"></span>正在加载中...</div>',
          domNoData  : '<div class="dropload-noData">没有更多数据了</div>'
      },
      domUp : {//下拉
          domClass   : 'dropload-up',
          domRefresh : '<div class="dropload-refresh"><i class="icon icon-114"></i>上拉加载更多</div>',
          domUpdate  : '<div class="dropload-load f15"><i class="icon icon-20"></i>释放更新...</div>',
          domLoad    : '<div class="dropload-load f15"><span class="weui-loading"></span>正在加载中...</div>'
      },
      loadDownFn : function(me){
        $.ajax({
            type: 'GET',
            url: 'src/demos/more.json',
            dataType: 'json',
            success: function(data){
              _this.dataList = data.lists;
              console.log(_this.dataList);
                // alert(data);
                // 每次数据加载完，必须重置
                // me.resetload();
            },
            error: function(xhr, type){
                // alert('Ajax error!');
                // 即使加载出错，也得重置
                // me.resetload();
            }
         });
       }
    });
  }
}
</script>

<style scoped>
.weui_media_box.weui_media_appmsg {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.weui_media_box.weui_media_appmsg .weui_media_hd {
    margin-right: .8em;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
}
.weui_media_box.weui_media_appmsg .weui_media_appmsg_thumb {
    width: 100%;
    max-height: 100%;
    vertical-align: top;
}
.weui_media_box.weui_media_appmsg .weui_media_bd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
}
.weui_media_box .weui_media_title {
    font-weight: 400;
    font-size: 17px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    word-wrap: break-word;
    word-break: break-all;
}
.weui_media_box .weui_media_desc {
    color: #999;
    font-size: 13px;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.weui_media_box {
    padding: 15px;
    position: relative;
    background: #fff;
    border-bottom: 1px solid #dfdfdf;
}
.dropload-refresh, .dropload-update, .dropload-load, .dropload-noData {
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.f15 {
    font-size: 15px !important;
    line-height: 15px;
}
.dropload-up,.dropload-down{
    position: relative;
    height: 0;
    overflow: hidden;
    font-size: 12px;
    /* 开启硬件加速 */
    -webkit-transform:translateZ(0);
    transform:translateZ(0);
}
.dropload-down{
    height: 50px;
}
.dropload-refresh,.dropload-update,.dropload-load,.dropload-noData{
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.dropload-load .loading{
    display: inline-block;
    height: 15px;
    width: 15px;
    border-radius: 100%;
    margin: 6px;
    border: 2px solid #666;
    border-bottom-color: transparent;
    vertical-align: middle;
    -webkit-animation: rotate 0.75s linear infinite;
    animation: rotate 0.75s linear infinite;
}
@-webkit-keyframes rotate {
    0% {
        -webkit-transform: rotate(0deg);
    }
    50% {
        -webkit-transform: rotate(180deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
