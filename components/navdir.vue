<template>
  <div class="navbar">
    <div class="navbar-inner">
      <ul class="navbar-left">
        <li>
          <div><i class="el-icon-s-home"></i></div>
          <span>首页</span>
        </li>
        <li>
          <div><i class="el-icon-star-off"></i></div>
          <span>动态</span>
        </li>
        <li>
          <div>
            <i class="el-icon-s-opportunity"></i>
          </div>
          <span>热门</span>
        </li>
        <li>
          <div>
            <i class="el-icon-s-data"></i>
          </div>
          <span>频道</span>
        </li>
      </ul>
      <ul class="navbar-center">
        <div v-for="(item, index) in list" :key="index" @click="click(index)">
          <span>{{ item }}</span>
        </div>
      </ul>
      <ul class="navbar-right">
        <li><span>专栏</span></li>
        <li><span>活动</span></li>
        <li><span>小黑屋</span></li>
        <li><span>直播</span></li>
        <li><span>课堂</span></li>
        <li><span>音乐PLUS</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["动画", "音乐", "舞蹈", "知识", "生活", "时尚", "娱乐", "放映厅", "美食", "单机游戏",
        "番剧", "国创", "游戏", "数码", "鬼畜", "资讯", "影视", "搞笑", "动物圈", "VLOG",],
    };
  },
};
</script>

<style scoped>
.navbar {
  margin-bottom: 16px;
  font-size: 14px;
}
.navbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
}
.navbar-left {
  width: 280px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-right: 1px solid #ccc;
  padding-right: 20px;
}
.navbar-center {
  width: 1033px;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.navbar-center div {
  width: 98px;
  flex-grow: 1;
  padding: 5px 0;
  cursor: pointer;
}
.navbar-center div span:hover,
.navbar-right li span:hover,
.navbar-left li span:hover {
  color: #00aed6;
}
.navbar-right {
  width: 320px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-left: 1px solid #ccc;
  padding-left: 20px;
}
.navbar-right li {
  width: 99px;
  padding: 5px 0;
}
.navbar-right li span {
  cursor: pointer;
}
/* .navbar-left,
.navbar-center,
.navbar-right {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap; */
/* overflow: hidden; */
/* height: 70px; */
/* line-height: 35px; */
/* text-align: left; */
/* align-items: flex-start; */
/* } */
/* .navbar-center,
.navbar-right {
  padding-left: 5px;
  flex-wrap: wrap;
  justify-content: space-between;
  border-left: 1px solid rgba(100, 100, 100, 0.5);
} */
/* .navbar-left,
.navbar-right {
  flex-grow: 0.1;
} */
/* .navbar-center {
  flex-grow: 0.8;
} */
.navbar-left li {
  height: 100%;
  width: 50px;
  cursor: pointer;
  text-align: center;
}
.navbar-left li div {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  color: #00aed6;
}
</style>