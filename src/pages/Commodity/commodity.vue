<template>
    <div class="commodity">
        <NavMenu />
        <div class="panel" style="display:none">
          <el-collapse v-model="activeNames">
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
        </div>
        <div class="item_table" v-if="active">
          <div style="margin-bottom: 20px">
            <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
            <el-button type="success" @click="add()">添加商品</el-button>
          </div>
          <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" border="">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="id" label="商品编号" width="120">
            </el-table-column>
            <el-table-column prop="classify" label="分类" width="120">
            </el-table-column>
            <el-table-column prop="name" label="商品名称" width="120">
            </el-table-column>
            <el-table-column prop="money" label="价格" width="120">
            </el-table-column>
            <el-table-column prop="surplus" label="库存" width="120">
            </el-table-column>
            <el-table-column  label="操作" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="danger" size="mini" @click="del(scope.$index,tableData3)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import NavMenu from "../../components/NavMenu";
export default {
  data() {
    return {
      active: true,
      activeNames: ['1'],
      tableData3: [{
          date: '2016-05-03',
          id: '3xl2kj1',
          classify: 'a',
          name: '王小虎',
          money: 999,
          surplus: 777
        }, {
          date: '2016-05-02',
          id: '6x22kj1',
          classify: 'a',
          name: '王小虎',
          money: '3213',
          surplus: 777
        }, {
          date: '2016-05-04',
          id: '45x2721',
          classify: 'a',
          name: '王小虎',
          money: '1234',
          surplus: 777
        }, {
          date: '2016-05-01',
          id: '15xz721',
          classify: 'b',
          name: '王小虎',
          money: '5742',
          surplus: 777
        }],
        multipleSelection: []
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      console.log(row);
    },
    // 删除
    del(index,data) {
      this.$confirm('此操作将删除该商品信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        data.splice(index,1)
        // console.log(data)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        }) 
      });
    },
    // 添加 并跳转
    add() {
      this.active = false;
      this.$router.push('/commodity/editor')
    }
  },
  components: {
    NavMenu
  }
};
</script>

<style scoped>
.panel{
  float: left;
}
.item_table{
  width: 1000px;
  float: left;
  margin:20px 0 30px 30px;
}
</style>

