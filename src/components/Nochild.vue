<template>
  <div>这里是NoChild：
      <button @click="add" >触发非父组件通信</button>
  </div>
</template>

<script>
import bus from '@/common/bus.js'

export default {
  name: 'Nochild3',
  data () {
    return {
      count: '触发非父组件通信'
    }
  },
  methods: {
    add () {
      bus.$emit('addcount', this.count)
    }
  },
  created () {
  }
}
</script>

<style>
</style>
