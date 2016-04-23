<template lang="jade">
  div.vue-time-picker-panel(@click.stop='')
    div.vue-time-picker-panel-inner
      div.vue-time-picker-panel-input-wrap(@click='isActive = !isActive')
        input.vue-time-picker-panel-input(v-model='time')
      div.vue-time-picker-panel-combobox(v-show='isActive')
        div.vue-time-picker-panel-select
          ul
            li(
              v-for='item in hourData',
              @click='hour = item',
              :class="{'selected': item === hour}"
              v-text='item')
        div.vue-time-picker-panel-select
          ul
            li(
              v-for='item in minuteData',
              @click='minute = item',
              :class="{'selected': item === minute}"
              v-text='item')
</template>

<script>
function range(start, end) {
  let result = []

  for (let i = start; i <= end; i++) {
    result.push(i)
  }

  return result
}

export default {
  props: {
    time: String,
    twoWay: true
    // required: true
  },
  data() {
    return {
      isActive: false,
      hour: '',
      minute: '',
      hourData: [],
      minuteData: []
    }
  },
  methods: {
  },
  computed: {
    time() {
      if (this.hour || this.minute) {
        return `${this.hour} : ${this.minute}`
      }

      return ''
    }
  },
  created() {
    this.hourData = range(1, 24)
    this.minuteData = range(1, 60)

    document.addEventListener('click', () => {
      this.isActive = false;
    })
  }
}
</script>

<style lang="scss" scoped>
  $li-height: 24px;

  .vue-time-picker-panel {
    display: inline-block;

    &-inner {
      position: relative;
      outline: none;
      border: 1px solid #ccc;
      font-size: 12px;
      text-align: left;
      background-color: #fff;
      box-shadow: 0 0 4px rgba(0,0,0,0.17);
    }

    &-input-wrap {
      position: relative;
      padding: 6px;
      border-bottom: 1px solid #e9e9e9;

      input {
        outline: none;
        border: 0;
        margin: 0;
        padding: 0;
        line-height: 1.5;
        width: 100%;
      }
    }

    &-combobox {
      display: flex;
    }

    &-select {

      position: relative;
      // float: left;
      font-size: 12px;
      border: 1px solid #e9e9e9;
      // width: 56px;
      flex: 1;
      overflow: hidden;

      &:hover {
        overflow-y: auto;
      }

      ul {
        list-style: none;
        max-height: 144px;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      li {
        margin: 0;
        padding: 0;
        // padding-left: 16px;
        height: $li-height;
        line-height: $li-height;
        text-align: center;
        cursor: pointer;

        &.selected {
          background-color: #d5f1fd;
        }

        &:hover {
          background-color: #eaf8fe;
        }
      }
    }
  }
</style>
