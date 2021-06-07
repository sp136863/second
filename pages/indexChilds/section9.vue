<template>
  <pubcpt id="spc">
    <div slot="1" class="l_u_1">
      <a href="http://" target="_blank" rel="noopener noreferrer">特别推荐</a>
    </div>
    <div slot="2" class="l_d_1">
      <div v-for="(item, index) in spacialrec" :key="index">
        <img :src="item.image" alt="" />
      </div>
    </div>
  </pubcpt>
</template>

<script>
export default {
  props: {
    spacialrec: {
      type: Array, default: []
    }
  }
}
</script>

<style scoped>
.l_u_1 {
  font-size: 20px;
}
.l_u_1 a:hover {
  color: #00aed6;
}
.l_d_1 {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.l_d_1 div {
  width: 207px;
  cursor: pointer;
}
#spc {
  height: auto;
}
</style>