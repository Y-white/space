<template>
  <div id="app">
    <div class="space">
        <router-view></router-view>
    </div>
    <div class='foot'>
      <span><router-link :to= "{ name: 'Recommend', params: { id: msgblock }}">首页</router-link></span>
      <span><router-link :to= "{ name: 'Note', params: { id: msgblock }}">手记</router-link></span>
      <span><router-link :to= "{ name: 'MyCls', params: { id: msgblock }}">我的课程</router-link></span>
      <span><router-link :to= "{ name: 'Account', params: { id: msgblock }}">账号</router-link></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isRouterAlive: true,
      msgblock: [
        {
          url: require('../build/logo.png'),
          name: '全面系统Python3入门+进阶课程',
          price: '366  ',
          level: '初级  ',
          people: '6793',
          type: '前沿技术',
          count: '1'
        },
        {
          url: require('../build/logo.png'),
          name: '全面系统Python3入门+进阶课程',
          price: '366',
          level: '中级',
          people: '6793',
          type: '前端开发',
          count: '1'
        },
        {
          url: require('../build/logo.png'),
          name: '全面系统Python3入门+进阶课程',
          price: '366',
          level: '初级',
          people: '6793',
          type: '后端开发',
          count: '1'
        },
        {
          url: require('../build/logo.png'),
          name: '全面系统Python3入门+进阶课程',
          price: '366',
          level: '高级',
          people: '6793',
          type: '前端开发',
          count: '1'
        },
        {
          url: require('../build/logo.png'),
          name: '全面系统Python3入门+进阶课程',
          price: '366',
          level: '初级',
          people: '6793',
          type: '前端开发',
          count: '1'
        },
        {
          url: require('../build/logo.png'),
          name: '全面系统Python3入门+进阶课程',
          price: '366',
          level: '中级',
          people: '6793',
          type: '后端开发',
          count: '1'
        },
        {
          url: require('../build/logo.png'),
          name: '全面系统Python3入门+进阶课程',
          price: '366',
          level: '中级',
          people: '6793',
          type: '后端开发',
          count: '1'
        },
        {
          url: require('../build/logo.png'),
          name: '全面系统Python3入门+进阶课程',
          price: '366',
          level: '中级',
          people: '6793',
          type: '后端开发',
          count: '1'
        }
      ]
    }
  }
}
</script>

<style>
html,body{
  height: 98%;
  margin: 5px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.space {
  height: 90%;
  overflow: hidden;
}
.foot {
  height: 10%;
  width: 100%;
  line-height: 220%;
  margin-top: 5px;
  background: paleturquoise;
  font-size: 20px;
  font-weight: 900;
}
.foot span {
  float: left;
  margin: 5px;
}
.foot span a {
  text-decoration: none;
}
.active {
  color: red;
}
</style>
