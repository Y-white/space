<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import bus from '@/common/bus.js'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Home',
      Hprop: 'HomeProp'
    }
  },
  created () {
    bus.$on('addcount', msg => {
      alert('NoChild' + msg)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
