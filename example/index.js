var Vue = require('vue')
var app = require('../src/index.vue')

new Vue({
  el: '#app',
  data: {
    a: 1
  },
  components: {
    app: app
  }
})
