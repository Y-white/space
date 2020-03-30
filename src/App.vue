<template>
  <div id="app">
    <div class="head"></div>
    <div class="centent">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footbar" style="font-size: 20px; height:200px;">
      <span><router-link :to = "{name: 'Home', params: { id: Aprop}}"> Home </router-link></span>
      <span><router-link :to = "{name: 'Parent1', params: { id: Aprop}}"> Parent1 </router-link></span>
      <span><router-link :to = "{name: 'Parent2', params: { id: Aprop}}"> Parent2 </router-link></span>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      Aprop: 'AppProp',
      child: ''
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
