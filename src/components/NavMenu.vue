<template>
    <div class="menu">
        <div class="header">
            <ul>
                <router-link tag="li" to="/">首页</router-link>
                <router-link tag="li" to="/commodity">商品管理</router-link>
                <router-link tag="li" to="/order">订单管理</router-link>
                <router-link tag="li" to="">菜单4</router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
<style scoped>
.menu {
  max-width: 1600px;
}
ul{
    width: 100%;
    height: 60px;
    background-color: #545c64;
    line-height: 60px;
}
ul>li{
    text-align: center;
    float: left;
    color: #fff;
    width: 100px;
    padding: 0 10px;
}
li:hover{
    background-color: rgb(67, 74, 80)
}
ul>li:first-of-type{
    margin-left: 150px;
}
</style>
