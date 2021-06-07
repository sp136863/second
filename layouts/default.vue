<template>
  <div>
    <navbar />
    <topbgc>
      <img src="../static/top1.jpg" alt="" slot="bg" />
    </topbgc>
    <div id="banner">
      <navdir />
      <Nuxt />
    </div>
    <footers />
  </div>
</template>
<script>
export default {

}
</script>
<style>
body {
  font-size: 16px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#banner {
  width: 1630px;
  margin: 0 auto;
}
a {
  color: #000;
  vertical-align: middle;
}
img {
  vertical-align: middle;
}
</style>
