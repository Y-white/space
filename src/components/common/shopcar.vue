<template>
  <div>
    <div v-if="chosemsg.length" class="header" >
      <div v-for='(item,index) in chosemsg' :key='index' class="contents"
      @touchend.stop='clearloop' @touchstart='delet(index)'>
        <div class="input-wrap"><input type="checkbox" :value="index" :id="index" v-model="checkedNames"
        /></div>
        <div class="shoplist">
          <label :for="index">
            <img :src='item.url' width="100%" height="100%"/>
            <span>
              <label :for="index">{{item.name}}</label>
              <br>
              <label :for="index">¥{{item.price}}</label>
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="carfoot">
       <ul>
         <li><input type="checkbox" id="all" @click='checkedall' v-model="all"/><label for="all">全选</label></li>
         <li>合计:¥{{allprice}}</li>
         <li><button @click="allsubmit">结算</button></li>
       </ul>
    </div>
    <div class='popContainer' v-if="deletDialog">
      <div class="dialog" v-if='dialogbur'>
        <div class="dialog-msg">是否删除选定商品</div>
        <div class="dialog-bur">
          <span @click="deletburtrue">确定</span>
          <span @click="deletburfalse">取消</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    msgblock: {
      type: Array,
      default () {
        return []
      }
    },
    clearbur: {
      type: Boolean,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      chosemsg: [],
      msgnumber: [],
      checkedNames: [],
      all: false,
      dialogbur: true,
      deletDialog: false,
      deletmsg: null
    }
  },
  methods: {
    delet (index) {
      clearInterval(this.loop)
      document.oncontextmenu = function (e) {
        e.preventDefault()
      }
      this.loop = setInterval(() => {
        this.deletDialog = !this.deletDialog
        this.deletmsg = index
        console.log('delet')
      }, 1000)
    },
    deletburtrue () {
      this.chosemsg.splice(this.deletmsg, 1)
      let k = JSON.parse(localStorage.getItem('carts'))
      k.splice(this.deletmsg, 1)
      localStorage.setItem('carts', JSON.stringify(k))
      this.deletDialog = !this.deletDialog
    },
    deletburfalse () {
      this.deletDialog = !this.deletDialog
    },
    clearloop () {
      clearInterval(this.loop)
      console.log('clearloop')
    },
    getchosemsg () {
      let k = JSON.parse(localStorage.getItem('carts'))
      console.log(k)
      if (k) {
        for (let i = 0; i < k.length; i++) {
          this.chosemsg.push(this.msgblock[k[i].msgindex])
        }
      }
    },
    checkedall () {
      this.checkedNames = []
      if (!this.all) {
        for (let i = 0; i < this.chosemsg.length; i++) {
          this.checkedNames.push(i)
        }
      }
      console.log(Array.from(this.checkedNames))
    },
    allsubmit () {
      if (this.checkedNames.length) {
        alert('已提交订单')
      } else {
        alert('请选择商品')
      }
    },
    allvul () {
      if (this.chosemsg.length === this.checkedNames.length) {
        this.all = true
      } else {
        this.all = false
      }
    }
  },
  computed: {
    allprice () {
      let total = 0
      for (let i = 0; i < this.checkedNames.length; i++) {
        total += parseInt(this.chosemsg[this.checkedNames[i]].price)
      }
      this.allvul()
      return total
    }
  },
  watch: {
    clearbur: {
      handler: function () {
        localStorage.clear()
        this.chosemsg.splice(0, this.chosemsg.length)
        console.log(this.chosemsg)
        console.log('1111')
      }
    }
  },
  created () {
    this.getchosemsg()
  }
}
</script>

<style scoped>
.contents {
  width: 100%;
  height: 60px;
  padding-bottom: 10px;
  border-bottom: 2px solid #F5F5F5;
}
.input-wrap{
  display: inline-block;
  float: left;
  width: 25px;
  line-height: 60px;
  margin-right: 20px;
  text-align: center;
}
.contents input {
  width: 20px;
  height: 20px;
}
.shoplist{
  width: 80%;
  height: 60px;
  display: inline-block;
  float: left;
}
.shoplist img{
  width: 20%;
  height: 100%;
  display: inline-block;
  float: left;
  margin-right: 20px;
}
.shoplist span {
  width: 70%;
  height: 100%;
  display: inline-block;
  float: left;
  font-size: 20px;
  font-weight: 600;
}
.carfoot{
  width: 100%;
  height: 71px;
  background: goldenrod;
  position: fixed;
  bottom: 14px;
  z-index: 99;
}
.carfoot li {
  display: inline-block;
  position: absolute;
  margin:0;
  font-size: 20px;
  font-weight: 500;
}
.carfoot li:first-child{
  left: 10px;
  top: 30px;
}
.carfoot li:nth-child(2){
  left: 130px;
  top: 30px;
}
.carfoot li:last-child{
  left: 280px;
  top: 25px;
}
.carfoot li button{
  width: 90px;
  height: 40px;
  background: burlywood;
}
.carfoot li input{
  width: 15px;
  height: 15px;
}
.dialog {
  position: fixed;
  top: 250px;
  left: 60px;
  width: 300px;
  height: 150px;
  background: ghostwhite;
  z-index: 99;
}
.dialog-msg {
  width: 100%;
  height: 90px;
  font-size: 20px;
  font-weight: 800;
  line-height: 90px;
  text-align: center;
  border-bottom: 1px solid gainsboro;
}
.dialog-bur {
  width: 100%;
  height: 60px;
  background: gray;
  font-size: 20px;
  font-weight: 1000;
  line-height: 300%;
  text-align: center;
}
.dialog-bur span {
  margin-left: 10px;
  color: #000000;
}
.dialog-bur span:hover {
  color: white;
}
.popContainer{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  z-index: 1000;
}
</style>
