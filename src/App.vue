<template>
  <div id="app">
    <div class="balck_tit">后台管理系统</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.balck_tit{
  width: 100%;
  height: 60px;
  background-color: #545c64;
  line-height: 60px;
  color: #fff;
  font-size: 24px;
  padding-left: 50px;
}
</style>
