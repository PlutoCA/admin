import Vue from 'vue'
import Router from 'vue-router'

const home = resolve => require(['../pages/Home/home'], resolve)
const commodity = resolve => require(['../pages/Commodity/commodity'], resolve)
const order = resolve => require(['../pages/Order/order'], resolve)
const editor = resolve => require(['../pages/Editor/editor'], resolve)

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: commodity,
      children: [
        {
          path: 'editor',
          name: 'editor',
          component: editor
        }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})


