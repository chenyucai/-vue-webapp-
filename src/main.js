import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter(routes);

new Vue({
    el: '#App',
    data:{
      loading:{
        show:false
      },
      alert:{
        show:false
      },
      successToast:{
        show:false
      },
      alertDialog:{
        show:false
      },
      confirmDialog:{
        show:false
      },
      actionSheet:{
        show:false
      }
    },
    router: router,
    render: h => h(App)
})
