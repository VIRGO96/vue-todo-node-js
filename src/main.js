import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if ( requiresAuth &&  !localStorage.getItem("user")) {
    
      next('/')
  } else if (requiresAuth && localStorage.getItem("user")) {
      next()
  } else {
      next()
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
