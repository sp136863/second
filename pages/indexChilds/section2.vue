<template>
  <div class="content">
    <div class="up">
      <div class="left">
        <h4>推广</h4>
        <div>
          <a href="http://" target="_blank" rel="noopener noreferrer"
            >舞蹈嘉年华全新起航</a
          >
        </div>
        <div>
          <a href="http://" target="_blank" rel="noopener noreferrer"
            >一起玩转"黑科技"</a
          >
        </div>
      </div>
      <div class="right">
        <a href="http://" target="_blank" rel="noopener noreferrer">观看列表</a>
      </div>
    </div>
    <div class="down">
      <div class="l">
        <div v-for="(item, index) in recomendlist" :key="index">
          <img :src="item.image" alt="" />
        </div>
      </div>
      <div class="r">
        <a href="http://" target="_blank" rel="noopener noreferrer"
          ><img :src="recomendimg.image" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recomendlist: {
      type: Array,
      default: []
    },
    recomendimg: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  margin-bottom: 40px;
}
.up {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.up div:first-child {
  display: flex;
  align-items: center;
}
.up div:first-child div {
  margin-right: 15px;
  font-size: 14px;
}
h4 {
  font-size: 24px;
  font-weight: 400;
  margin-right: 20px;
}
.up .right {
  text-align: center;
  width: 320px;
  background: #f4f4f4;
  line-height: 31px;
  font-size: 14px;
  color: #505050;
}
.down {
  display: flex;
}
.down .l {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-right: 30px;
}
.down .r {
  width: 320px;
}
</style>