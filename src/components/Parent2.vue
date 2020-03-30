<template>
  <div>
    <h1>Parent2</h1>
    <span>{{Aprop}}</span>
    <h2>Child3传来的数：{{count}}</h2>
    <Child3 @addcount="addCountBack"></Child3>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div>
      <span><router-link :to = "{ name: 'Child1', params: {id: msg} }">child1</router-link></span>
      <span><router-link :to = "{ name: 'Child2', params: {id: msg} }">child2</router-link></span>
    </div>
  </div>
</template>

<script>
import Child3 from '@/components/Child3'

export default {
  name: 'Paretn2',
  components: {
    Child3
  },
  data () {
    return {
      text: '国际',
      Aprop: String,
      msg: 'Parent2 通过路由传来的信息',
      count: null
    }
  },
  methods: {
    getmsg () { this.Aprop = this.$route.params.id },
    addCountBack (msg) {
      this.count = msg
    }
  },
  created () {
    this.getmsg()
  }
}
</script>

<style>
</style>
