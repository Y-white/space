<template>
  <div>
    <shuffling :imgsrc='imgsrc'></shuffling>
    <div class="sliding-wrapper">
      <div class="sliding">
        <ul>
          <li v-for="(item,index) in bar" :key='index'>
            {{item}}
          </li>
        </ul>
      </div>
    </div>
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
      bar: ['全部', '前端开发', '后端开发', '前沿技术'],
      timer: null,
      mark: 0,
      msgblock: [],
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
.sliding-wrapper {
  width: 100%;
  height: 80px;
  position: relative;
  overflow-y: hidden;
  overflow-x: visible;
}
.sliding-wrapper::-webkit-scrollbar {
  background: gold;
  height: 2px;
}
.sliding-wrapper::-webkit-scrollbar-thumb {
  background: brown;
  height: 2px;
}
.sliding {
  width: 400%;
  position: absolute;
  height: 100%;
}
.sliding ul {
  height: 100%;
  padding: 0;
  margin: 0;
  height: 80px;
  list-style: none;
}
.sliding li {
  display: inline-block;
  width: 24%;
  padding: 20px 0;
  margin: .5%;
  background: blanchedalmond;
  color: burlywood;
  border-radius: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  line-height: 100%;
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
