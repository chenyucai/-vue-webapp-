<template>
  <div class="view" id="view">
    <div class="page">
      <div class="name" @click="show">
        点我
      </div>
      <div class="">
        {{value}}
      </div>
      <div class="name" @click="show2" id="name">
        点我2
      </div>
      <div class="name" @click="showCity">
        选择城市
      </div>
    </div>
  </div>
</template>

<script>
import $ from '../assets/js/zepto.min.js'
// import zeptoPicker from '../assets/js/zepto.picker.js'
import Picker from '../assets/js/picker.min.js'
import City from '../assets/js/city'
export default {
  data:function(){
    return {
      picker:null,
      picker2:null,
      citypicker:null,
      value:'',
      city:City
    }
  },
  created:function(){
    // window.addEventListener('hashchange', function(){
    //   // _this.picker.hide()
    //   $('.picker').remove()
    // }, false);
  },
  mounted:function(){
    console.log(this.$data);
    console.log($('#view'));
    console.log(document.getElementById('name'));
    console.log(document.getElementsByClassName('view'));

var data1 = [
    {
        text: '小美',
        value: 1
    }, {
        text: '猪猪',
        value: 2
    }
];

var data2 = [
    {
        text: '张三',
        value: 1
    },
    {
        text: '李四',
        value: 2
    },
    {
        text: '王五',
        value: 3
    },
    {
        text: '赵六',
        value: 4
    },
    {
        text: '吴七',
        value: 5
    },
    {
        text: '陈八',
        value: 6
    },
    {
        text: '杜九',
        value: 7
    },
    {
        text: '黄十',
        value: 8
    },
    {
        text: '呵呵',
        value: 9
    },
    {
        text: '哈哈',
        value: 10
    },
    {
        text: '嘿嘿',
        value: 11
    },
    {
        text: '啦啦',
        value: 12
    }
];
var data3 = [
    {
        text: '开心',
        value: 1
    }, {
        text: '生气',
        value: 2
    },
    {
        text: '搞笑',
        value: 3
    }, {
        text: '难过',
        value: 4
    }
];
var data = [data1,data2,data3]
    this.picker = new Picker({
      data:data,
      el:document.getElementById('view') //修改了下源码，如果有el则append到el,没有的话就append到body
    });
    var _this = this;
    this.picker.on('picker.change', function (index, selectedIndex) {

    });
    this.picker.on('picker.select', function (selectedVal, selectedIndex) {
      _this.value= data1[selectedIndex[0]].text + ' ' + data2[selectedIndex[1]].text + ' ' + data3[selectedIndex[2]].text;
    });
    this.picker2 = new Picker({
      data:[data1,data2],
      el:document.getElementById('view')
    });

    var first = []; /* 省，直辖市 */
    var second = []; /* 市 */
    var third = []; /* 镇 */

    var checked = [0, 0, 0]; /* 已选选项 */
    function creatList(obj, list){
      obj.forEach(function(item, index, arr){
      var temp = new Object();
      temp.text = item.name;
      temp.value = index;
      list.push(temp);
      })
    }

    var city = this.city;
    creatList(city, first);
    if (city[0].hasOwnProperty('sub')) {
      creatList(city[0].sub, second);
    } else {
      second = [{text: '', value: 0}];
    }

    if (city[0].sub[0].hasOwnProperty('sub')) {
      creatList(city[0].sub[0].sub, third);
    } else {
      third = [{text: '', value: 0}];
    }

    this.citypicker = new Picker({
    	data: [first, second, third],
    	selectedIndex: [0, 0, 0],
    	title: '地址选择',
      el:document.getElementById('view')
    });
    var citypicker = this.citypicker;

    citypicker.on('picker.change', function (index, selectedIndex) {
      if (index === 0){
        firstChange();
      } else if (index === 1) {
        secondChange();
      }

      function firstChange() {
        second = [];
        third = [];
        checked[0] = selectedIndex;
        var firstCity = city[selectedIndex];
        if (firstCity.hasOwnProperty('sub')) {
          creatList(firstCity.sub, second);

          var secondCity = city[selectedIndex].sub[0]
          if (secondCity.hasOwnProperty('sub')) {
            creatList(secondCity.sub, third);
          } else {
            third = [{text: '', value: 0}];
            checked[2] = 0;
          }
        } else {
          second = [{text: '', value: 0}];
          third = [{text: '', value: 0}];
          checked[1] = 0;
          checked[2] = 0;
        }

        citypicker.refillColumn(1, second);
        citypicker.refillColumn(2, third);
        citypicker.scrollColumn(1, 0)
        citypicker.scrollColumn(2, 0)
      }

      function secondChange() {
        third = [];
        checked[1] = selectedIndex;
        var first_index = checked[0];
        if (city[first_index].sub[selectedIndex].hasOwnProperty('sub')) {
          var secondCity = city[first_index].sub[selectedIndex];
          creatList(secondCity.sub, third);
          citypicker.refillColumn(2, third);
          citypicker.scrollColumn(2, 0)
        } else {
          third = [{text: '', value: 0}];
          checked[2] = 0;
          citypicker.refillColumn(2, third);
          citypicker.scrollColumn(2, 0)
        }
      }

    });
  },
  methods:{
    show:function(){
      this.picker.show()
    },
    show2:function(){
      this.picker2.show()
    },
    showCity:function(){
      this.citypicker.show()
    }
  }
}
</script>

<style scoped>
.picker{
  z-index: 1000 !important;
}
</style>
