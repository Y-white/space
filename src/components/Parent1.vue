<template>
  <div>
    <h1>{{text}}</h1>
    <span>{{Aprop}}</span>
    <shuffling></shuffling>
  </div>
</template>

<script>
import shuffling from '@/common/lunbotu'

export default {
  name: 'Paretn1',
  components: {
    shuffling
  },
  data () {
    return {
      text: 'Parent1',
      Aprop: String
    }
  },
  methods: {
    getmsg () { this.Aprop = this.$route.params.id }
  },
  created () {
    this.getmsg()
  }
}
</script>

<style>
</style>
