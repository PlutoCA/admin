<template>
    <div>
        <div class="header">
            <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group> -->
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <!-- <span slot="title">导航一</span> -->
                        <router-link to="/" tag="span" slot="title">首页</router-link>
                    </template>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <!-- <span slot="title">导航一</span> -->
                        <router-link to="/" tag="span" slot="title">商品管理</router-link>
                    </template>
                    <el-menu-item-group>
                    <!-- <span slot="title">商品</span> -->
                        <el-menu-item index="1-1"><router-link to="/commodity" tag="span" slot="title">商品信息</router-link></el-menu-item>
                        <el-menu-item index="1-2">添加商品</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <!-- <span slot="title">导航一</span> -->
                        <router-link to="/" tag="span" slot="title">首页</router-link>
                    </template>
                    <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 400px;
}
.header{
    width: 200px;
    float: left;
}
span{
    display: inline-block;
    width: 100%;
    height: 100%;
}
/* ul{
    width: 120px;
    height: 600px;
    background-color: #545c64;
}
ul>li{
    text-align: center;
    border-bottom: 1px solid rgb(67, 74, 80);
    color: #fff;
    width: 120px;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
}
li:hover{
    background-color: rgb(67, 74, 80)
} */
/* ul>li:first-of-type{
    margin-left: 150px;
} */
</style>
