<template>
  <pubcpt>
    <div slot="1" class="l_1">
      <li>正在直播</li>
      <li>当前共有{{ n }}个人在线直播</li>
    </div>
    <div slot="1" class="r_1">
      <div><span>换一换</span></div>
      <div><span>更多</span></div>
    </div>
    <div slot="2" class="l_2">
      <div v-for="(item, index) in alivelist" :key="index">
        <img :src="item.image" alt="" />
      </div>
    </div>
    <div slot="3" class="r_3">
      <div
        v-for="(item, index) in list"
        :key="index"
        @click="click(index)"
        :class="{ active: currentIndex === index }"
      >
        {{ item }}
      </div>
    </div>
    <div slot="4" ref="zero" v-if="on">
      <div class="block">
        <el-carousel height="404px">
          <el-carousel-item v-for="(item, index) in alivelist1" :key="index">
            <img :src="item.image" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div slot="4" ref="zero" v-else class="slot4">
      <div v-show="off" class="alive1">{{ alivelist1[0] }}</div>
      <div v-for="(item, index) in alivelist1" :key="index" class="alive2">
        <span>{{ item.text }}</span
        ><span>{{ item.num }}</span>
      </div>
    </div>
  </pubcpt>
</template>

<script>
export default {
  data() {
    return {
      n: 12810,
      list: ['直播排行', '关注的主播', '为你推荐'],
      currentIndex: 2
    }
  },
  props: {
    alivelist: {
      type: Array,
      default: []
    },
    alivelist1: {
      type: Array,
      default: []
    }
  },
  computed: {
    on() {
      if (this.currentIndex === 2) {
        return true
      } else {
        return false
      }
    },
    off() {
      if (this.currentIndex === 0) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    click(index) {
      // console.log(index)
      this.currentIndex = index;
      this.$emit('change', index)
    }
  }
}
</script>

<style scoped>
.l_1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.l_2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 450px;
}
.l_2 div {
  width: 207px;
  height: 50%;
}
.l_1 li {
  margin-right: 30px;
}
.l_1 li:first-child {
  cursor: pointer;
  font-size: 20px;
}
.l_1 li:first-child:hover {
  color: #1890ff;
  transition: 0.3s ease-in-out;
}
.l_1 li:last-child {
  font-size: 12px;
  color: #505050;
}
.r_1 {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: #505050;
}
.r_1 div {
  margin-left: 20px;
  border: 1px solid #505050;
  height: 22px;
  width: 70px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
}
.r_3 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  color: #505050;
}
.r_3 div {
  margin-right: 10px;
  cursor: pointer;
  height: 26px;
}
.active {
  color: #00aed6;
  border-bottom: 1px solid #00aed6;
  /* display: inline-block; */
}
.slot4{
  display: flex;
  flex-direction: column;
}
.alive2{
height: 40px;
width: 100%;
display: flex;
justify-content: space-between;
}
</style>