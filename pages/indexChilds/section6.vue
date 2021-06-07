<template>
  <pubcpt>
    <div slot="1" class="l_u_1">
      <div>番剧</div>
      <div
        class="week"
        v-for="(item, index) in list"
        :key="index"
        @click="click(index)"
        :class="{ active: currentIndex === index }"
      >
        {{ item }}
      </div>
    </div>
    <div slot="1" class="l_u_2">新番时间表</div>
    <div slot="2" v-for="(item, index) in weeklist" :key="index" class="l_d_2">
      <div><img :src="item.image" alt="" /></div>
      <div class="pname">
        <a href="http://" target="_blank" rel="noopener noreferrer">{{
          palyname
        }}</a>
      </div>
    </div>
    <div slot="3" class="r_3_l">
      <span>排行榜</span>
    </div>
    <div slot="4" class="r_4_r">
      <div v-for="(item, index) in ranklist" :key="index">
        <span> {{ item.text }}</span>
      </div>
    </div>
  </pubcpt>
</template>

<script>
export default {
  data() {
    return {
      list: ['最新', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      currentIndex: 0,
    }
  },
  props: {
    weeklist: {
      type: Array, default: []
    },
    palyname: {
      type: String, default: ''
    },
    ranklist: {
      type: Array,
      default: []
    }
  },
  methods: {
    click(index) {
      this.currentIndex = index;
      this.$emit('changeWeek', index)
    }
  }
}
</script>

<style scoped>
.l_u_1 {
  display: flex;
  align-items: center;
}
.l_u_1 div {
  height: 31px;
}
.l_u_1 div:first-child {
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
}
.l_u_1 div:first-child:hover {
  color: #00a1d6;
}
.week {
  font-size: 14px;
  color: #505050;
  margin-right: 20px;
  cursor: pointer;
  line-height: 28px;
}
.l_u_2 {
  width: 112px;
  height: 100%;
  border: 1px solid #00a1d6;
  text-align: center;
  line-height: 28px;
  color: #00a1d6;
  cursor: pointer;
  border-radius: 3px;
}
.l_u_2:hover {
  background-color: #00a1d6;
  color: #fff;
}
.active {
  display: block;
  color: #00a1d6;
  border-bottom: 1px solid #00a1d6;
}
.l_d_2 {
  display: flex;
  /* justify-content: space-between; */
  width: 227px;
  margin: 0 29px 29px 0;
}
.l_d_2 .pname {
  margin-left: 10px;
  font-size: 14px;
  color: #505050;
}
.l_d_2 .pname a {
  overflow: hidden;
  margin-top: 10px;
}
.r_3_l {
  height: 31px;
  font-size: 20px;
}
.r_4_r {
  height: 400px;
  display: flex;
  flex-direction: column;
}
.r_4_r div {
  flex: 1;
}
</style>