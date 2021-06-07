<template>
  <pubcpt>
    <div slot="1" class="l_1">
      <div>动画</div>
    </div>
    <div slot="1" class="r_1">
      <div><span>换一换</span></div>
      <div><span>更多</span></div>
    </div>
    <div slot="2" class="l_2">
      <div v-for="(item, index) in animationlist" :key="index">
        <img :src="item.image" alt="" />
      </div>
    </div>
    <div slot="3" class="r_3_l">
      <span>排行榜</span>
    </div>
    <div slot="3" class="r_3_r"><span>更多</span></div>
    <div slot="4" class="r_4_r">
      <div v-for="(item, index) in ranklist" :key="index">
        <span> {{ item.text }}</span>
      </div>
    </div>
  </pubcpt>
</template>

<script>
export default {
  props: {
    animationlist: {
      type: Array,
      default: []
    },
    ranklist: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.l_1 {
  font-size: 20px;
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
.r_1 {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: #505050;
}
.r_1 div,
.r_3_r {
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
.r_3_l {
  height: 31px;
  font-size: 20px;
}
.r_3_r {
  margin-bottom: 9px;
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