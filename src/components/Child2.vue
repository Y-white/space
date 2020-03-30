<template>
  <div>
    <span>{{msg}}:</span>
    <span>{{msgParent2}}</span>
  </div>
</template>

<script>

export default {
  name: 'Child2',
  data () {
    return {
      msg: 'Child2',
      msgParent2: String,
      count: 1
    }
  },
  methods: {
    getmsg () {
      this.msgParent2 = this.$route.params.id
    }
  },
  created () {
    this.getmsg()
  }
}
</script>

<style>
</style>
