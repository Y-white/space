<template>
<div>
  <div class="item">
    <span v-for='(item,index) in bar' :key='index'
    :class="{'active': index===count }" @click='page(index)'>{{item}}</span>
  </div>
  <div class="content">
      <div v-for='(item,index) in msgblock' :key='index'
        v-show='(bar[count] === msgblock[index].type)||!count' class="contents">
        <span><img :src='item.url' width="100%" height="100%"/></span>
        <span>
          <h3>{{item.name}}</h3>
          <h4>{{item.price}} {{item.level}} {{item.people}} {{item.type}}</h4>
        </span>
      </div>
   </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msgblock: [],
      count: 0,
      bar: ['全部', '前端开发', '后端开发', '前沿技术']
    }
  },
  methods: {
    getmsgblock () {
      this.msgblock = this.$route.params.id
    },
    page (index) {
      this.count = index
      console.log(!(this.bar[this.count] === this.msgblock[index].type))
    }
  },
  created () {
    this.getmsgblock()
  }
}
</script>

<style>
.item{
  width: 100%;
  height: 50px;
  margin: 0 5px 10px 2px;
  line-height: 50px;
}
.item span {
  width: auto;
  height: auto;
  padding: 3px 8px;
  align-content: center;
  background: gainsboro;
  border:1px solid white;
  border-radius: 10px;
  font-weight: 300;
}
.content {
  height: 70px;
  width: 90%;
  margin: 5px auto;
  clear: both;
  border-bottom: 1px solid gainsboro;
  padding-bottom: 10px;
}
.contents {
  width: 100%;
  height: 70px;
  margin-top: 10px;
}
.contents span:first-child {
  float: left;
  width: 30%;
  height: 70px;
  margin-top: 10px;
}
.contents span:last-child {
  float: left;
  width: 68%;
  height: 70px;
}
.contents span:last-child h3 {
  margin:0 0 10px 25px;
  color: #000000;
  font-size: 17px;
  font-weight: 300;
}
.contents span:last-child h4 {
  color: #000000;
  font-weight: 300;
  margin:0 0 0 25px;
}
.active{
  color: red;
}
</style>
