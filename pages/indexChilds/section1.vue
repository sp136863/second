<template>
  <div id="swiper">
    <div class="left">
      <div class="block">
        <el-carousel height="242px">
          <el-carousel-item v-for="(item, index) in swiper1" :key="index">
            <img :src="item.image" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="right">
      <div v-for="(item, index) in swiper2" :key="index">
        <!-- <div v-for="(i, index) in item" :key="index"> -->
        <img :src="item.image" alt="" />
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    swiper1: {
      type: Array,
      default: []
    },
    swiper2: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
#swiper {
  display: flex;
  margin-bottom: 40px;
}
.left {
  width: 552px;
  height: 242px;
  margin-right: 12px;
}
.right {
  width: 1070px;
  height: 242px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.right > div {
  width: 207px;
  height: 116px;
  margin-bottom: 10px;
}
/* .right > div > div {
  width: 207px;
  height: 116px;
} */
</style>