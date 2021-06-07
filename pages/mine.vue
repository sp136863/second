<template>
  <div class="box">
    <el-container>
      <el-header><el-button @click="btnClick">退出</el-button></el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  layout: 'mine',
  methods: {
    btnClick() {
      this.$router.push('/');
      window.sessionStorage.clear('token');
      // this.$bus.$on('loginChange')
    }
  }
}
</script>

<style scoped>
.box {
  width: 75%;
  margin: 0 auto;
  margin-top: 10%;
}
.el-header {
  height: 60px;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  width: 75%;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>