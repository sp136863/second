<template>
  <div class="footer">
    <div class="banner">
      <div class="up">
        <div>
          <p>bilibili</p>
          <ul class="ul_1">
            <li v-for="(item, index) in list1" :key="index">{{ item }}</li>
          </ul>
        </div>
        <div>
          <p>传送门</p>
          <ul class="ul_2">
            <li v-for="(item, index) in list2" :key="index">{{ item }}</li>
          </ul>
        </div>
        <div>
          <ul class="right">
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <li class="el-icon-download"></li>

                <span>下载APP</span>
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <li class="el-icon-share"></li>

                <span>兴浪微博</span>
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <li class="el-icon-chat-round"></li>

                <span>官方微信</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="down"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list1: ['关于我们', '友情链接', '联系我们', '隐私政策', '用户协议', 'bilibili认证', '加入我们', 'inverstor Relations'],
      list2: ['协议汇总', '帮助中心', '名人堂', '活动中心', '用户反馈论坛', 'MCN管理中心', '活动专题页', '壁纸站', '高级弹幕', '侵权申诉', '广告合作', '企业号官网']
    }
  }
}
</script>

<style scoped>
.footer {
  font-size: 14px;
  background: #f6f9fa;
}
.banner {
  width: 1630px;
  margin: 0 auto;
}
.up {
  display: flex;
  padding: 25px 0;
}
.up div:first-child {
  /* width: 500px; */
  flex: 1;
  margin-right: 40px;
  padding-right: 40px;
  border-right: 1px solid #eee;
}
.up div:nth-child(2) {
  /* width: 770px; */
  flex: 2;
  border-right: 1px solid #eee;
}
.up div:nth-child(3) {
  flex: 1;
}
.up ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  height: 110px;
}
.up .ul_1 li,
.up .ul_2 li {
  width: 200px;
  margin-bottom: 8px;
}

.up .ul_2 li:hover,
.up .ul_1 li:hover {
  color: #00aed6;
  cursor: pointer;
}
p {
  color: #999;
  font-size: 16px;
  margin-bottom: 20px;
}
.up .right {
  height: 100%;
  margin-left: 40px;
  display: flex;
  flex-direction: row;
}
.up .right li {
  height: 100%;
  flex: 1;
  text-align: center;
}
.up .right li a:hover {
  color: #00aed6;
}
.up .right li li {
  display: block;
  padding-top: 40px;
  padding-right: 0;
  margin-bottom: 15px;
  height: 80px;
  width: 100%;
  font-size: 28px;
  border: none;
  /* text-align: center; */
}
</style>