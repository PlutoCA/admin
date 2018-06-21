<template>
    <div class="main">
        <NavMenu />
        <!-- <div class="panel">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="系统信息" name="1">
              <div>基本信息</div>
              <div>账号设置</div>
            </el-collapse-item>
            <el-collapse-item title="标题2" name="2">
              <div>控制反馈</div>
              <div>页面反馈</div>
            </el-collapse-item>
            <el-collapse-item title="标题3" name="3">
              <div>简化流程</div>
              <div>清晰明确</div>
            </el-collapse-item>
          </el-collapse>
        </div> -->
        <div class="content">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>管理员,你好！</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <div class="text item">
              当前为系统测试版本
            </div>
          </el-card>
          <div class="home_table">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="money" label="金额" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>
            </el-table>
          </div>
        </div>
    </div>
</template>
<script>
import NavMenu from "../../components/NavMenu";
export default {
  data() {
      return {
        activeNames: ['1'],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          money: 999,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          money: 999,
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          money: 999,
          address: '上海市普陀区金沙江路 1519 弄'
        }]
      };
    },
    methods: {
      handleChange(val) {
      }
    },
  components: {
    NavMenu
  }
};
</script>
<style scoped>
  .content{
    /* margin:20px 0 30px 200px; */
    float: left;
  }
  .text {
    font-size: 14px;
  }

</style>


