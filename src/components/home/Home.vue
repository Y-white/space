<template>
  <div class="home-wrap">
    <div class="shopcarlist" v-if="!shopcar">
      <div class="carbar">
        <span @click="changeshopcar">返回</span>
        <span @click="clear">清空购物车</span>
        <span>购物车</span>
      </div>
      <div class="carlist">
        <shop :msgblock ='msgblock' :clearbur = 'clearbur'></shop>
      </div>
    </div>
    <div class="wrap" v-if="shopcar">
       <div class="header">
        <span @click="changeshopcar"><img src="../../../build/shopping211.png" alt="购物车" width="100%" height="100%"/></span>
        <span><input type="text" placeholder="React.js  面试   算法"/></span>
        <span><img src="../../../build/shopping211.png" alt="购物车" width="100%" height="100%"/></span>
      </div>
      <div class="bar">
        <span><router-link :to="{ name: 'Recommend', params: { id: msgblock }}">推荐</router-link></span>
        <span><router-link :to="{ name: 'FreeCls', params: { id: msgblock }}">免费课程</router-link></span>
        <span><router-link :to="{ name: 'Case', params: { id: msgblock }}">实战</router-link></span>
        <span><router-link :to="{ name: 'Money', params: { id: msgblock }}">收费</router-link></span>
      </div>
      <div class='wrapper'>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import messageblock from '@/components/common/messageblock'
import shop from '@/components/common/shopcar'

export default {
  components: {
    messageblock,
    shop
  },
  data () {
    return {
      shopcar: true,
      clearbur: true,
      msgblock: [
        {
          url: require('../../../build/logo.png'),
          name: '全面系统Python3入门+进阶课程',
          price: '566  ',
          level: '初级  ',
          people: '6793',
          type: '前沿技术',
          count: '1'
        },
        {
          url: require('../../../build/img1.jpeg'),
          name: '全面系统+进阶课程',
          price: '396',
          level: '中级',
          people: '6793',
          type: '前端开发',
          count: '1'
        },
        {
          url: require('../../../build/logo.png'),
          name: 'Python3入门+进阶课程',
          price: '366',
          level: '初级',
          people: '6793',
          type: '后端开发',
          count: '1'
        },
        {
          url: require('../../../build/img2.jpeg'),
          name: '全面课程',
          price: '356',
          level: '高级',
          people: '6793',
          type: '前端开发',
          count: '1'
        },
        {
          url: require('../../../build/logo.png'),
          name: '全面系统Python3入门+进阶课程',
          price: '366',
          level: '初级',
          people: '6793',
          type: '前端开发',
          count: '1'
        },
        {
          url: require('../../../build/img3.jpeg'),
          name: '全面系统Python3入门+进阶课程',
          price: '866',
          level: '中级',
          people: '6793',
          type: '后端开发',
          count: '1'
        },
        {
          url: require('../../../build/logo.png'),
          name: '全面系统Python3入门+进阶课程',
          price: '96',
          level: '中级',
          people: '6793',
          type: '后端开发',
          count: '1'
        },
        {
          url: require('../../../build/img4.jpeg'),
          name: '全面系统Python3入门+进阶课程',
          price: '366',
          level: '中级',
          people: '6793',
          type: '后端开发',
          count: '1'
        }
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'Recommend', params: { id: this.msgblock }})
    },
    changeshopcar () {
      this.shopcar = !this.shopcar
    },
    clear () {
      this.clearbur = !this.clearbur
    }
  },
  created () {
    this.jump()
    console.log('home')
  }
}
</script>

<style scoped>
.home-wrap{
  width: 100%;
  height: 100%;
}
.wrap {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 15%;
  align-content: center;
  }
.header span:first-child {
  float: left;
  margin: 10px 10px 2px 0;
  width: 10%;
  left: 0;
}
.header span:last-child {
  float: right;
  margin: 10px 10px 2px 0;
  width: 10%;
  right: 0;
}
.header input {
  float: left;
  width: 60%;
  height: 40%;
  margin: 10px 10px 0 20px;
  text-align: center;
  font-size: 17px;
  font-weight: 300;
  background-color: gainsboro;
  color: gray;
  border: 2px solid #055;
  border-radius: 20px;
}
.bar {
  width: 100%;
  height: 5%;
  line-height: 20%;
  margin: 0 2px;
}
.bar span {
  float: left;
  width: auto;
  height: 100%;
  margin-left: 10px;
}
.bar span a {
  text-decoration: none;
  font-size: 20px;
  color: black;
  font-weight:1000;
}
.active{
  color: red !important;
}
.wrapper {
  width: 100%;
  height: 80%;
  overflow: scroll;
}
.shopcarlist{
  width: 100%;
  height: 100%;
}
.carbar{
  width: 100%;
  height: 70px;
  border-bottom: 2px solid palevioletred;
}
.carbar span:first-child{
  float: left;
  font-size: 20px;
  background: wheate;
  color: blueviolet;
  border: 1px solid;
  line-height: 35px;
  margin-left: 10px;
}
.carbar span:nth-child(2) {
  float: right;
  font-size: 20px;
  background: wheate;
  color: blueviolet;
  border: 1px solid;
  line-height: 35px;
  margin-right: 10px;
}
.carbar span:last-child{
  width: auto;
  height: 35px;
  margin-left: 90px;
  font-size: 30px;
  font-weight: 900;
}
.carlist{
  width: 100%;
  height: 90%;
  overflow: scroll;
}
.shop{
  width: 100%;
  height: 100px;
}
.carlist input {
  width: 25px;
  height: 25px;
  margin-top: 35px;
}
.shop span:first-child{
  float: left;
  width: 30px;
  height: 30px;
}
.shop span:last-child{
  float: left;
  margin-top: 10px;
  width: 80%;
  height: 100%;
  word-wrap: break-word;
}
</style>
