<template>
  <div class="wrapper">
    <div class="shuffling-figure">
      <transition-group tag = 'li' name ='image'>
        <li v-for="(item,index) in imgsrc" v-show="index===mark" @click='change(index)' :key='index'>
          <img :src="item.url"/>
        </li>
      </transition-group>
    </div>
    <div class="dot">
      <span v-for="(item,index) in imgsrc" :class="{ 'active':index===mark }" :key='index'></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shuffling',
  data () {
    return {
      mark: 0
    }
  },
  props: {
    imgsrc: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
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
    this.play()
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.shuffling-figure {
  width: 100%;
  height: 200px;
}
.shuffling-figure li {
  width: 100%;
  height: 100%;
  position:absolute;
  list-style: none;
}
.shuffling-figure li img {
  width: 100%;
  height: 100%;
}
.dot {
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 10px;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
}
.image-enter-active {
    transform: translateX(0) scale(1);
    transition: all 2.5s;
  }
.image-leave-active {
  transform: translateX(-100%) scale(0.5);
  transition: all 2.5s;
}
.image-enter {
  transform: translateX(100%) scale(0.5);
}
  .image-leave {
  transform: translateX(0) scale(1);;
}
.active {
  background: red !important;
}
.dot span {
  width: 10px;
  height:10px;
  border: 1px solid white;
  border-radius: 5px;
  background: blue;
  opacity: 0.8;
  display: inline-block;
  margin-right: 10px;
}
</style>
