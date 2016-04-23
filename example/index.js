var Vue = require('vue')
var TimePicker = require('../src/index.vue')

new Vue({
  el: '#app',
  data: {
    myTime: ''
  },
  components: {
    TimePicker: TimePicker
  }
})
