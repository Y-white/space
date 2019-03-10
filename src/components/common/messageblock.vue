<template>
  <div>
    <div v-for='(item,index) in message' :key='index' class="contents" @click="addshop(index)">
      <span><img :src='item.url' width="100%" height="100%"/></span>
      <span>
        <h3>{{item.name}}</h3>
        <h4>{{item.price}} {{item.level}} {{item.people}} {{item.type}}</h4>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'messageblock',
  data () {
    return {
      mask: 0,
      carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : []
    }
  },
  props: {
    message: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    addshop: function (index) {
      console.log('11111')
      for (let k = 0; k < this.carts.length; k++) {
        if (this.carts[k].msgindex === index) {
          this.carts[k].count++
        }
      }
      this.carts.push({
        msgindex: index,
        count: '1'
      })
      localStorage.setItem('carts', JSON.stringify(this.carts))
      console.log('111')
    }
  }
}
</script>

<style scoped>
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
</style>
