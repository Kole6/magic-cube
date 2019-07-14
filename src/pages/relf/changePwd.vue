<!--修改密码-->
<template>
  <div class="container">
    <el-form
      class="form"
      ref="form"
      :model="form"
      :rules="formRules"
      label-width="120px"
      size="medium"
    >
      <el-row>
        <el-form-item label="登录账号" prop="account">
          <el-input v-model="form.accrount" disabled></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="原始密码" prop="originPassword">
          <el-input v-model="form.originPassword"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="新的密码" prop="newPassword">
          <el-input v-model="form.newPassword" show-password></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="form.confirmPassword" show-password></el-input>
        </el-form-item>
      </el-row>
      <el-row type="flex" justify="center">
        <el-button type="primary" size="small" @click="modifyPassword">修改</el-button>
        <el-button size="small" @click="reset">重置</el-button>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    let originPasswordCheck = (rule,value,cb) =>{
      if(!value){
        cb(new Error('原始密码不能为空!'));
      }else{
        cb();
      }
    }
    let newPasswordCheck = (rule, value, cb) => {
      let regex = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/gi;
      // todo 密码长度校验，密码规则校验
      if (!value) {
        cb(new Error("密码不能为空!"));
      }
      if (this.form.originPassword === value) {
        cb(new Error("两次密码不能相同!"));
      } else {
        cb();
      }
    };
    let confirmPasswordCheck = (rule, value, cb) => {
      if(!this.form.newPassword){
        cb(new Error('请输入密码!'));
      }
      if (this.form.newPassword !== value) {
        cb(new Error("两次密码不一致!"));
      } else {
        cb();
      }
    };
    return {
      form: {},
      formRules: {
        originPassword:[{type:'string',validator:originPasswordCheck}],
        newPassword: [{ type: "string", validator: newPasswordCheck }],
        confirmPassword: [
          { type: "string", validator: confirmPasswordCheck, trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.$set(this.form, "accrount", localStorage.getItem("username"));
  },
  methods: {
    /**
     * @method reset 重置密码，将密码框清空
     */
    reset() {
      this.$set(this.form, "originPassword", "");
      this.$set(this.form, "newPassword", "");
      this.$set(this.form, "confirmPassword", "");
      this.$refs.form.resetFields();
    },
    modifyPassword() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$confirm("确认修改？", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              this.$message({
                type: "success",
                message: "修改成功!",
                duration: 1000
              });
            })
            .catch(() => {});
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.container {
  @include gobalBackground();
  .form {
    padding-top: 20px;
    width: 40%;
    min-width: 300px;
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>