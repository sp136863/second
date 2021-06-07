<template>
  <div class="bgc">
    <div class="bg">
      <slot name="bg"></slot>
    </div>
    <div class="logo"><img src="../static/logo.png" alt="" /></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bgc {
  position: relative;
  width: 100%;
  height: 180px;
  background: #ccc;
  margin-bottom: 16px;
}
.bg {
  width: 100%;
  height: 100%;
}
.bgc .bg img {
  width: 1900px;
  height: 100%;
}
.logo {
  position: absolute;
  left: 155px;
  top: 95px;
}
.logo img {
  width: 156px;
}
</style>