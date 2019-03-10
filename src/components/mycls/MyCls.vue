<template>
  <div></div>
</template>

<script>
import messageblock from '@/components/common/messageblock'

export default {
  components: {
    messageblock
  },
  data () {
    return {
      msgblock: []
    }
  },
  methods: {
    getmsgblock () {
      this.msgblock = this.$route.params.id
    }
  },
  created () {
    this.getmsgblock()
  }
}
</script>

<style>
</style>
