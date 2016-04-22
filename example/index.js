var Vue = require('vue')
var TimePicker = require('../src/index.vue')

new Vue({
  el: '#app',
  data: {
    a: 1
  },
  components: {
    TimePicker: TimePicker
  }
})
