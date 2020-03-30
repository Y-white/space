<template>
  <div>
    <span>{{msg}}:</span>
    <span>{{msgParent2}}</span>
    <h2>下面是Nochild组件</h2>
    <Nochild></Nochild>
  </div>
</template>

<script>
import Nochild from '@/components/Nochild'

export default {
  name: 'Child1',
  components: {
    Nochild
  },
  data () {
    return {
      msg: 'Child1',
      msgParent2: String
    }
  },
  methods: {
    getmsg () { this.msgParent2 = this.$route.params.id }
  },
  created () {
    this.getmsg()
  }
}
</script>

<style>
</style>
