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
    if($.isPlainObject(v)){
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
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
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
