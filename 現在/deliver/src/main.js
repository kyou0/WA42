import Vue from 'vue'
import App from './App.vue'
// Materialize CSSの読込する

Vue.config.productionTip = true

new Vue({
  render: h => h(App)
}).$mount('#app')
