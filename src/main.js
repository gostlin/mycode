// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import '../theme/index.css'
import './static/css/reset.css'
import './static/css/default.css'
import './static/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(elementUi)
router.push('/login')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
