<template>
  <div class="nav">
    <div class="inner">
      <ul class="left">
        <li v-for="(i, index) in left" :key="index">{{ i }}</li>
      </ul>
      <div class="box">
        <div class="content">
          <form action="">
            <input type="text" placeholder="杠精是怎样炼成的?" />
          </form>
          <div class="el-icon-search"></div>
        </div>
      </div>
      <ul class="right">
        <li
          v-for="(i, index) in right"
          :key="index"
          @click="login_click(index)"
        >
          {{ i }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      left: ["主站", "番剧", "游戏中心", "直播", "会员购", "漫画", "赛事", "下载APP"],
      right: ["登陆", "大会员", "消息", "动态", "收藏", "历史记录", "创作中心", "投稿",],
      input2: "",
    };
  },
  methods: {
    login_click(index) {
      if (index == 0) {
        let token = window.sessionStorage.getItem('token');
        if (token) {
          this.$router.push(`/mine`)
        } else {
          this.$router.push(`/login`)
        }
      }
    }
  }
};
</script>

<style scoped>
.box {
  width: 500px;
  height: 36px;
  margin: 0 10px;
  /* border: 1px solid red; */
}
.box .content {
  position: relative;
}
.box .content form {
  display: block;
  padding-right: 58px;
  padding-left: 16px;
  background-color: #fff;
}
.box .content div {
  position: absolute;
  right: 0;
  top: 0;
  width: 58px;
  height: 36px;
  background: #eee;
  cursor: pointer;
}
.box input {
  width: 100%;
  height: 36px;
  outline: none;
  border: none;
  overflow: hidden;
  font-size: 16px;
  letter-spacing: 2px;
  /* padding-left: 10px; */
}
.nav li {
  display: inline-block;
  cursor: pointer;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(100, 100, 100, 0.3);
}
.nav li:hover {
  color: #00a1d6;
}
.nav {
  position: absolute;
  /* top: 0;
  left: 0;
  right: 0; */
  width: 100%;
  height: 56px;
  z-index: 9;
  font-size: 14px;
  padding: 10px 0;
}
.nav .inner {
  width: 100%;
  padding: 0 24px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav .left {
  min-width: 450px;
  height: 36px;
  display: flex;
  align-items: center;
}
.nav .left li {
  margin-right: 13px;
}
.nav .right {
  min-width: 520px;
  height: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 25px;
}
.nav .right > li {
  margin-right: 12px;
  text-align: center;
}
.nav .right > li:last-child {
  padding: 8px 35px;
  background: #fb7299;
  border-radius: 2px;
}

form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
form div:first-child {
  width: 600px;
  height: 49px;
}
form div:last-child {
  width: 88px;
  height: 49px;
}
.el-icon-search {
  text-align: center;
  line-height: 36px;
  font-size: 18px;
}
.el-icon-search:hover {
  color: #00a1d6;
}
</style>
