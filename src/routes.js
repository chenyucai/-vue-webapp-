module.exports = {
  // mode: 'history',
  routes:[
    // {
    //   path:'/about',
    //   component: function(resolve){
    //     require(['./components/about.vue'], resolve);
    //   },
    //   children:[
    //     {
    //       path:'child',
    //       component: function(resolve){
    //         require(['./components/child.vue'], resolve);
    //       },
    //       children:[
    //         {
    //           path:'child2',
    //           component: function(resolve){
    //             require(['./components/child2.vue'],resolve);
    //           },
    //           children:[
    //             {
    //               path:'child3',
    //               component: function(resolve){
    //                 require(['./components/child3.vue'], resolve);
    //               }
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // },
    {
      path:'/picker',
      component: function(resolve){
        require(['./demos/picker.vue'], resolve);
      }
    },
    {
      path:'/swipe',
      component: function(resolve){
        require(['./demos/swipe.vue'], resolve);
      }
    },
    {
      path:'/dropload',
      component: function(resolve){
        require(['./demos/dropload.vue'], resolve);
      }
    },
    {
      path:'/iscroll',
      component: function(resolve){
        require(['./demos/iscroll.vue'], resolve);
      }
    }
  ]
}
