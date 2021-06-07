<template>
  <div class="content">
    <div class="l">
      <div class="u">
        <slot name="1"></slot>
      </div>
      <div class="d">
        <slot name="2"></slot>
      </div>
    </div>
    <div class="r">
      <div class="u">
        <slot name="3"></slot>
      </div>
      <div class="d">
        <slot name="4"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content {
  display: flex;
  margin-bottom: 40px;
  width: 100%;
  height: 450px;
}
.l {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.r {
  width: 320px;
  height: 100%;
  margin-left: 30px;
}

.l .d {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* align-items: center; */
  /* flex-grow: 1; */
}
.l .u,
.r .u {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  height: 26px;
  width: 100%;
}
.r .u{
  line-height: 26px;
}
</style>