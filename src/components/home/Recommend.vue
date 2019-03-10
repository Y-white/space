<template>
  <div>
    <shuffling :imgsrc='imgsrc'></shuffling>
    <div class="title1"><h1>实战推荐</h1></div>
    <messageblock :message='msgblock'></messageblock>
  </div>
</template>

<script>
import shuffling from '@/components/common/shuffling'
import messageblock from '@/components/common/messageblock'

export default {
  components: {
    shuffling,
    messageblock
  },
  data () {
    return {
      timer: null,
      mark: 0,
      place: null,
      msgblock: Array,
      imgsrc: [
        {
          url: require('../../../build/img1.jpeg')
        },
        {
          url: require('../../../build/img2.jpeg')
        },
        {
          url: require('../../../build/img3.jpeg')
        },
        {
          url: require('../../../build/img4.jpeg')
        }
      ]
    }
  },
  methods: {
    getmsgblock () {
      this.msgblock = this.$route.params.id
    },
    auto () {
      this.mark++
      if (this.mark === 4) {
        this.mark = 0
      }
    },
    play () {
      this.timer = setInterval(this.auto, 3000)
    },
    change (i) {
      clearInterval(this.timer)
      if (i === 3) {
        this.mark = 0
      }
      this.mark++
      this.play()
    }
  },
  created () {
    this.getmsgblock()
    this.play()
  }
}

</script>

<style scoped>
.title1 {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gainsboro;
  border-top: 1px solid gainsboro;
}
.title1 h1 {
  line-height: 20px;
  font-size: 25px;
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
</style>
