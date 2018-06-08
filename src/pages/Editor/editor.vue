<template>
    <div class="editor">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="商品分类" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择分类">
                <el-option label="衣服" value="yf"></el-option>
                <el-option label="鞋子" value="xz"></el-option>
                </el-select>
            </el-form-item>
						<el-form-item label="优惠价格" prop="sale" style="width:250px; display:inline-block">
    					<el-input type="money" v-model.number="ruleForm.sale" ></el-input>
  					</el-form-item>
						<el-form-item label="原价" prop="money" style="width:250px; display:inline-block">
    					<el-input type="money" v-model.number="ruleForm.money" ></el-input>
  					</el-form-item>
						<el-form-item label="库存" prop="less"  style="width:250px; display:inline-block">
    					<el-input type="age" v-model.number="ruleForm.less" auto-complete="off"></el-input>
  					</el-form-item>
            <el-form-item label="属性">
              <el-col :span="8" v-for="(index, item) in ruleForm.property" :key="item" :prop="'property.' + index + '.value'">
                <el-input v-model="ruleForm.property.value"></el-input>
                <el-button @click.prevent="removeDomain(item)">删除</el-button>
              </el-col>
            </el-form-item>
            <el-form-item label="活动时间" required>
                <el-col :span="8">
                  <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%"></el-date-picker>
                  </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="banner设置" prop="">
                <el-upload style="display:inline-block; margin-left:50px;" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" >
                  <el-button size="small" type="primary">点击上传图片</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传3张</div>
                </el-upload>
                <el-upload style="float:left;" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed" >
                  <el-button size="small" type="primary">点击上传视频</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传1个视频文件</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="内容" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import NavMenu from "../../components/NavMenu";
export default {
  data() {
    return {
      active: false,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        delivery: false,
        property: [{
          value: ''
        }],
        type: [],
        resource: "",
				desc: "",
				less: "",
				money: "",
        sale: "",
        addr_file: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
				],
				money: [
					{ required: true, message: '原价不能为空'},
      		{ type: 'number', message: '原价必须为数字值'}
				],
				less: [
					{ required: true, message: '库存不能为空'},
      		{ type: 'number', message: '库存必须为数字值'}
				],
				money: [
					{ required: true, message: '原价不能为空'},
      		{ type: 'number', message: '原价必须为数字值'}
				],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写内容", trigger: "blur" }]
      },
      dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          // 填写信息
          console.log(this.ruleForm)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log("a")
        console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    removeDomain(item) {
      // var index = this.ruleForm.property.indexOf(item)
      // if (index !== -1) {
        this.ruleForm.property.splice(item-1, 1)
      // }
    },
  },
  components: {
    NavMenu
  }
};
</script>
<style scoped>
.editor {
  float: left;
  width: 800px;
  border: 1px solid #ccc;
  margin: 20px;
  padding: 15px;
}
.el-col{
  margin-left: 5px;
}
</style>
