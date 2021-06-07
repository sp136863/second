<template>
  <pubcpt id="pub">
    <div slot="1" class="l_u_1">
      <div>漫画</div>
      <div
        class="week"
        v-for="(item, index) in list"
        :key="index"
        @click="click(index)"
        :class="{ active: currentIndex === index }"
      >
        {{ item }}
      </div>
      <div>
        <a href="http://" target="_blank" rel="noopener noreferrer">下载APP</a>
      </div>
    </div>
    <div slot="1" class="r_1">
      <div><span>换一换</span></div>
      <div><span>更多</span></div>
    </div>
    <div slot="2" class="l_d_2">
      <div v-for="(item, index) in manga" :key="index">
        <div><img :src="item.image" alt="" /></div>
        <!-- <div class="pname">
        <a href="http://" target="_blank" rel="noopener noreferrer">{{
          palyname
        }}</a>
      </div> -->
      </div>
    </div>
    <div slot="3" class="r_3">
      <span>排行榜</span>
      <div
        v-for="(item, index) in list2"
        :key="index"
        @click="click1(index)"
        :class="{ active: currentIndex1 === index }"
      >
        {{ item }}
      </div>
    </div>
    <div slot="3" class="r_3_l">
      <div><span>更多</span></div>
    </div>
    <div slot="4">4444</div>
  </pubcpt>
</template>

<script>
export default {
  data() {
    return {
      list: ['人气推荐', '免费漫画推荐'],
      list2: ['月票', '应援', '飙升'],
      currentIndex: 0,
      currentIndex1: 0,
    }
  },
  props: {
    manga: {
      type: Array, default: []
    },
    // palyname: {
    //   type: String, default: ''
    // }
  },
  methods: {
    click(index) {
      this.currentIndex = index;
      this.$emit('changeWeek', index)
    },
    click1(index) {
      this.currentIndex1 = index;
      this.$emit('changeWeek1', index)
    }
  }
}
</script>

<style scoped>
.r_1,
.r_3_l {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: #505050;
}
.r_1 div,
.r_3_l div {
  margin-left: 20px;
  border: 1px solid #505050;
  height: 22px;
  width: 70px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  font-size: 12px;
  color: #505050;
}
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
.active {
  display: block;
  color: #00a1d6;
  border-bottom: 1px solid #00a1d6;
}
.l_d_2 {
  width: 100%;
  height: 710px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  /* margin: 0 29px 29px 0; */
}
.l_d_2 div {
  width: 207px;
  height: 50%;
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
.r_3 {
  height: 31px;
  font-size: 20px;
  display: flex;
  align-items: center;
}
.r_3 div {
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
}
#pub {
  height: auto;
}
</style>