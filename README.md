# vue-timepicker

Time picker component for Vue

## Screenshot
![pic](/images/pic.png)

## Installation

```shell
$ npm install vue-timepicker
```

## Usage

```js
var Vue = require('vue')
var TimePicker = require('vue-timepicker')

// or ES2015
import TimePicker from 'vue-timepicker'

new Vue({
  el: '#app',
  data: {
    myTime: ''
  },
  components: {
    TimePicker: TimePicker
  }
})
```

```html
<div id="app">
  <h1>{{ myTime }}</h1>
  <time-picker :time.sync="myTime"></time-picker>
```

## Development

```shell
$ npm install

$ npm run dev
```

## Todo
- [ ] support default value(e.g. now time)
- [ ] optional second selector
- [ ] on change callback 
