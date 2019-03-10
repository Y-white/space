<template>
  <div>
    <div class="advert">
      <img src="../../../build/logo.png"/>
    </div>
    <messageblock :message='msgblock'></messageblock>
  </div>
</template>

<script>
import messageblock from '@/components/common/messageblock'

export default {
  components: {
    messageblock
  },
  data () {
    return {
      msgblock: []
    }
  },
  methods: {
    getmsgblock () {
      this.msgblock = this.$route.params.id
    }
  },
  created () {
    this.getmsgblock()
  }
}
</script>

<style scoped>
.advert{
  width: 98%;
  height: 140px;
  border: 2px solid wheat;
}
.advert img{
  width: 100%;
  height: 100%;
}
.contents {
  width: 90%;
  height: 70px;
  margin: 20px auto;
  border: 0px solid gainsboro;
  padding-bottom: 20px;
  background: whitesmoke;
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
