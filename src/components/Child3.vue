<template>
  <div>这里是Child3：
      <button @click="add" >addcount</button>
      <span>{{count}}</span>
  </div>
</template>

<script>
export default {
  name: 'Child3',
  data () {
    return {
      count: 1
    }
  },
  methods: {
    add () {
      this.count++
      this.$emit('addcount', this.count)
    }
  },
  created () {
  }
}
</script>

<style>
</style>
