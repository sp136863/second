<template>
  <div class="container">
    <div class="box">
      <el-form ref="form" status-icon :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            prefix-icon="el-icon-s-custom"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            prefix-icon="el-icon-lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="login_item">
          <el-button type="primary" @click="submitForm">登陆</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login_check } from '../plugins/axios'
export default {
  layout: 'login',
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456',
      },
      rules: {
        username: [
          { required: true, message: '请输入登陆名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetForm() {
      this.$refs.form.resetFields();
    },
    submitForm() {
      this.$refs.form.validate(value => {
        if (!value) {
          return;
        };
        login_check(this.form.username, this.form.password).then(res => {
          console.log(res);
          if (res.status !== 200) { return this.$message.error("登陆失败") };
          this.$message.success("登陆成功");
          window.sessionStorage.setItem("token", res.data.data.userInfo.token);
          this.$router.push('/');
          // this.$bus.$on('change')
        })
      })
    }
  }
}
</script>

<style scoped>
.container {
  width: 500px;
  height: 350px;
  background: #eee;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.box {
  padding: 0 20px;
  padding-top: 100px;
}
.login_item {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
</style>



