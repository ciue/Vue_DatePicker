console.log('what happened')

import Vue from 'vue'
import App from '@/app.vue'

new Vue({
  el: "#app",
  components: {
    App
  },
  render: h => h(App)
})