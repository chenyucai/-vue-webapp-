var url = {
  set: function(k, v){
    if(typeof(v) === "undefined" || typeof(v) === null){
      console.log("storage value is undefined")
      return ;
    }
    if($.isPlainObject(v)){
      var defaults = {};
      var urlParam = $.extend({}, defaults, v);
      var JsonToString = JSON.stringify(urlParam);
      JsonToString = encodeURI(JsonToString);
      JsonToString = encodeURI(JsonToString);
      return k + "=" + JsonToString;
    }else{
      return k + "=" + v;
    }
  },
  get: function(k){
    var reg = new RegExp("(^|&)" + k + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      var param = unescape(r[2]);
      var paramStr = decodeURI(param);
      if (paramStr.substr(0,1) + paramStr.substr(paramStr.length-1,1) == '{}') {
        return JSON.parse(paramStr);
      }
      return param;
    }
    return null;
  }
};

var local = {
  objectHeader:'@@@OBJECT-',
  objectHeaderLen: 10,
  set: function(k, v){
    if(typeof(v) === "undefined" || typeof(v) === null){
      console.log("storage value is undefined")
      return ;
    }
    // if($.isPlainObject(v)){
    if(typeof(v) === "object"){
      localStorage.setItem(k, this.objectHeader + JSON.stringify(v));
    }else{
      localStorage.setItem(k, v);
    }
  },
  get: function(k){
    var v = localStorage.getItem(k);
    if(!v){
        return v;
    }
    if(v.length < this.objectHeaderLen){
      return v;
    }
    if(v.substr(0, this.objectHeaderLen) == this.objectHeader){
      return JSON.parse(v.substr(this.objectHeaderLen));
    }
    return v;
  },
  remove: function(k){
    localStorage.removeItem(k);
  },
  clear: function(){
    localStorage.clear();
  }
};

function trim(str){ //删除左右两端的空格
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
//小于10的数字前加0
function preZero(num){
  num = parseInt(num);
  if(num<10){
    return '0'+num;
  }else{
    return num;
  }
}

function randomString(len){
  len = len || 32;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';/****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length;
  var pwd = '';
  for (i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

function getDate(offset){
  var _offset = offset || 0;
  var date = new Date();
  date.setDate(date.getDate() + _offset);
  var yy = date.getFullYear();
  var mm = date.getMonth()+1;
  var dd = date.getDate();
  return yy+ '-' + preZero(mm) + '-' + preZero(dd);
}

function showToast(myset) {
  this.title = '加载中'; //提示的内容
  this.type = 'loading'; //只支持"success"、"loading",默认是loading
  this.duration = 1500; //提示的延迟时间，单位毫秒，默认：1500, loading类型时无效
  this.success = null;
  this.toastCss = 'position: fixed;z-index: 13000;top: 0;right: 0;left: 0;transition:all .2s';
  this.inCss = '-webkit-animation: fadeIn .5s ease 0.2s 1 both;animation: fadeIn .5s ease 0.2s 1 both;'; //入场动画，暂只支持animation
  this.outCss = '-webkit-animation: fadeOut .5s ease 0.2s 1 both;animation: fadeOut .5s ease 0.2s 1 both;';//退场动画，暂只支持animation

  for (var key in myset) { //覆盖配置
    this[key] = myset[key];
  }

  this.init = function(){
    this.createToast();
    var _this = this;
    // 监听hashchange，适用于单页应用
    window.addEventListener('hashchange', function(){
      var toast = document.getElementById('CATTY-TOAST-' + _this.type);
      if (toast) {
        toast.parentNode.removeChild(toast);
      }
    }, false);
    if (this.type == 'success') {
      setTimeout(function(){
        _this.removeToast();
      },this.duration);
    }
  };
  /**
   * 创建toast
   */
  this.createToast = function(){
    var toast = document.getElementById('CATTY-TOAST-' + this.type);
    if (toast) {
        return false; //已经创建了toast
    }
    toast = document.createElement('div');
    toast.id = 'CATTY-TOAST-' + this.type;
    toast.style.cssText = this.toastCss + this.inCss;
    if (this.type == 'loading') {
      toast.innerHTML = '<div class="weui-mask_transparent" style="z-index:13000;"></div>'+
        '<div class="weui-toast" style="z-index:13500;">'+
            '<i class="weui-loading weui-icon_toast"></i>'+
            '<p class="weui-toast__content">'+this.title+'</p>'+
        '</div>';
    }
    if (this.type == 'success') {
      toast.innerHTML = '<div class="weui-mask_transparent" style="z-index:13000;"></div>'+
      '<div class="weui-toast" style="z-index:13500;">'+
          '<i class="weui-icon-success-no-circle weui-icon_toast"></i>'+
          '<p class="weui-toast__content">'+this.title+'</p>'+
      '</div>';
    }
    document.body.appendChild(toast);
    toast.ontouchstart = function (e) { // 禁止触摸穿透
      e.stopPropagation();
    };
  };
  /**
   *  删除toast
   */
  this.removeToast = function(){
    var toast = document.getElementById('CATTY-TOAST-' + this.type);

    if (toast) {
      toast.style.cssText = this.toastCss + this.outCss;
      toast.addEventListener('animationend', function(){
        toast.parentNode.removeChild(toast);
      }, false);
      toast.addEventListener('webkitAnimationEnd', function(){
        toast.parentNode.removeChild(toast);
      }, false);
    }
  };

  this.init();
}

function hideToast(){
  this.toastCss = 'position: fixed;z-index: 13000;top: 0;right: 0;left: 0;transition:all .2s';
  this.outCss = '-webkit-animation: fadeOut .5s ease 0.2s 1 both;animation: fadeOut .5s ease 0.2s 1 both;';//退场动画，暂只支持animation
  var toast = document.getElementById('CATTY-TOAST-' + 'loading');
  if (toast) {
    toast.style.cssText = this.toastCss + this.outCss;
    toast.addEventListener('animationend', function(){
      toast.parentNode.removeChild(toast);
    }, false);
    toast.addEventListener('webkitAnimationEnd', function(){
      toast.parentNode.removeChild(toast);
    }, false);
  }
}

function showModal(opts){
  this.title = '提示'; //提示的标题
  this.content = ''; //提示的内容
  this.showCancel = true; //是否显示取消按钮，默认为 true
  this.cancelText = '取消'; //取消按钮的文字，默认为"取消"
  this.cancelColor = '#000000'; //取消按钮的文字颜色，默认为"#000000"
  this.confirmText = '确定'; //确定按钮的文字，默认为"确定"
  this.confirmColor = '#ff718b'; //确定按钮的文字颜色，默认为"#ff718b"
  this.confirm = null; //点击确认后回调函数
  this.cancel = null; //点击取消后回调函数
  this.modalCss = 'position: fixed;z-index: 13000;top: 0;right: 0;left: 0;transition:all .2s';
  this.inCss = '-webkit-animation: fadeIn .3s ease 0.2s 1 both;animation: fadeIn .3s ease 0.2s 1 both;'; //入场动画，暂只支持animation
  this.outCss = '-webkit-animation: fadeOut .3s ease 0.2s 1 both;animation: fadeOut .3s ease 0.2s 1 both;';//退场动画，暂只支持animation

  for (var key in opts) { //覆盖配置
    this[key] = opts[key];
  }
  /**
   * 创建 modal
   */
  this.createModal = function(){
    var modal = document.getElementById('CATTY-MODAL');
    if (modal) {
        return false; //已经创建了modal
    }
    modal = document.createElement('div');
    modal.id = 'CATTY-MODAL';
    modal.style.cssText = this.modalCss + this.inCss;
    modal.innerHTML = '<div class="weui-mask catty-mask" style="z-index:13000;"></div>'+
    '<div class="weui-dialog" style="z-index:13500;top:40%;">'+
        '<div class="weui-dialog__hd"><strong class="weui-dialog__title">'+this.title+'</strong></div>'+
        '<div class="weui-dialog__bd">'+this.content+'</div>'+
        '<div class="weui-dialog__ft">'+
            (this.showCancel?'<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default CATTY-MODAL-CANCEL" style="color:'+this.cancelColor+'">'+this.cancelText+'</a>':'')+
            '<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary CATTY-MODAL-CONFIRM" style="color:'+this.confirmColor+'">'+this.confirmText+'</a>'+
        '</div>'+
    '</div>';

    document.body.appendChild(modal);
    modal.querySelector('.catty-mask').ontouchstart = function (e) {
      e.stopPropagation();
      e.preventDefault();
      return ;

    };// 禁止触摸穿透;
    var _this = this;
    modal.querySelector('.CATTY-MODAL-CANCEL').onclick = function(){
      _this.removeModal('cancel');
    };
    modal.querySelector('.CATTY-MODAL-CONFIRM').onclick = function(){
      _this.removeModal('confirm');
    };
  };
  /**
   *  移除modal
   */
  this.removeModal = function(callbackType){
    var modal = document.getElementById('CATTY-MODAL');
    var _this = this;
    if (modal) {
      modal.style.cssText = this.modalCss + this.outCss;
      modal.addEventListener('animationend', function(){
        modal.parentNode.removeChild(modal);
        if (typeof _this[callbackType] === 'function') {
          _this[callbackType]();
        }
      }, false);
      modal.addEventListener('webkitAnimationEnd', function(){
        modal.parentNode.removeChild(modal);
        if (typeof _this[callbackType] === 'function') {
          _this[callbackType]();
        }
      }, false);
    }
  };

  this.init = function(){
    this.createModal();
    var _this = this;
    //监听hashchange，适用于单页应用
    window.addEventListener('hashchange', function(){
      var modal = document.getElementById('CATTY-MODAL');
      if (modal) {
        modal.parentNode.removeChild(modal);
      }
    }, false);
  };

  this.init();

}

function showActionSheet(opts){
  this.itemList = []; //按钮的文字数组
  this.itemColor = ''; //按钮的文字颜色，默认为"#000000"
  this.tap = null; //按钮点击后回调函数

  var maskInCss = 'z-index:13000;background: rgba(0,0,0,.6);-webkit-animation: fadeIn .3s ease 0.2s 1 both;animation: fadeIn .3s ease 0.2s 1 both;';
  var maskOutCss = 'z-index:13000;background: rgba(0,0,0,.6);-webkit-animation: fadeOut .3s ease 0.2s 1 both;animation: fadeOut .3s ease 0.2s 1 both;';
  var sheetInCss = 'z-index:13500;position: fixed;left: 0;bottom: 0;backface-visibility: hidden;width: 100%;background-color: #efeff4;-webkit-animation: slideInUp .3s ease 0.2s 1 both;animation: slideInUp .3s ease 0.2s 1 both;';
  var sheetOutCss = 'z-index:13500;position: fixed;left: 0;bottom: 0;backface-visibility: hidden;width: 100%;background-color: #efeff4;-webkit-animation: slideOutDown .3s ease 0.2s 1 both;animation: slideOutDown .3s ease 0.2s 1 both;';

  for (var key in opts) { //覆盖配置
    this[key] = opts[key];
  }
  this.createSheet = function(){
    var sheet = document.getElementById('CATTY-MODAL');
    if (sheet) {
        return false; //已经创建了sheet
    }
    sheet = document.createElement('div');
    sheet.id = 'CATTY-ACTIONSHEET';
    var itemListHtml = '';
    for (var i = 0; i < this.itemList.length; i++) {
      itemListHtml += '<div class="weui-actionsheet__cell catty-actionsheet-cell" data="'+i+'">'+this.itemList[i]+'</div>';
    }
    sheet.innerHTML =' <div class="weui-mask_transparent catty-mask"></div>'+
    '<div class="catty-actionsheet">'+
        '<div class="weui-actionsheet__menu">'+
            itemListHtml+
        '</div>'+
        '<div class="weui-actionsheet__action">'+
            '<div class="weui-actionsheet__cell catty-actionsheet-cancel">取消</div>'+
        '</div>'+
    '</div>';
    sheet.querySelector('.catty-mask').style.cssText = maskInCss;
    sheet.querySelector('.catty-actionsheet').style.cssText = sheetInCss;
    document.body.appendChild(sheet);
    var _this = this;
    sheet.querySelector('.catty-actionsheet-cancel').onclick = function(){
      _this.removeSheet();
    };
    sheet.querySelector('.catty-mask').addEventListener('touchstart', function(){
      _this.removeSheet('cancel');
    }, false);

    var arrs = sheet.querySelectorAll('.catty-actionsheet-cell');
    for (var i = 0; i < arrs.length; i++) {
      var el = arrs[i];
      el.addEventListener('click',function(e){
        var target = e.target || e.srcElement;
        var index = parseInt(target.getAttribute('data'));
        _this.removeSheet('tap',index);
      })
    }
  };

  /**
   *  移除 sheet
   */
  this.removeSheet = function(callbackType,tapIndex){
    var sheet = document.getElementById('CATTY-ACTIONSHEET');
    var _this = this;
    if (sheet) {
      var mask = sheet.querySelector('.catty-mask');
      var actionsheet = sheet.querySelector('.catty-actionsheet');
      mask.style.cssText = maskOutCss;
      actionsheet.style.cssText = sheetOutCss;
      actionsheet.addEventListener('animationend', function(){
        sheet.parentNode.removeChild(sheet);
        if (callbackType=='tap' && typeof _this[callbackType] === 'function') {
          _this[callbackType](tapIndex);
        }
      }, true);
      actionsheet.addEventListener('webkitAnimationEnd', function(){
        sheet.parentNode.removeChild(sheet);
        if (callbackType=='tap' && typeof _this[callbackType] === 'function') {
          _this[callbackType](tapIndex);
        }
      }, false);
    }
  };

  this.init = function(){
    this.createSheet();
    var _this = this;
    //监听hashchange，适用于单页应用
    window.addEventListener('hashchange', function(){
      var sheet = document.getElementById('CATTY-ACTIONSHEET');
      if (sheet) {
        sheet.parentNode.removeChild(sheet);
      }
    }, false);
  };

  this.init();
}

module.exports = {
  url: url,
  local: local,
  trim: trim,
  preZero: preZero,
  randomString: randomString,
  getDate: getDate,
  showToast:showToast,
  hideToast:hideToast,
  showModal:showModal,
  showActionSheet:showActionSheet
}
