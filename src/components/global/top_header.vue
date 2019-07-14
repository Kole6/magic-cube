<!--头部-->
<template>
  <div class="head">
    <div class="header">
      <div class="img header-el" @click="handleHome">
        <img src="@/assets/img/mofang/u23.png" alt>
      </div>
      <div class="appName header-el" @click="handleHome">
        <!-- {{APP_NAME}} -->
        <img src="@/assets/img/title_logo.png" alt="">
      </div>
      <div class="right-tu">
        <el-dropdown @visible-change="arrowDown = !arrowDown" @command="handleCommand">
          <el-row>
            <img class="headers" src="@/assets/img/mofang/header1.png">
            <span>
              <i class="el-icon-arrow-down" :class="{'rota':arrowDown}"></i>
            </span>
          </el-row>
          <el-dropdown-menu slot="dropdown" :hide-on-click="true">
            <el-dropdown-item command="个人信息">个人信息</el-dropdown-item>
            <el-dropdown-item divided command="修改密码">修改密码</el-dropdown-item>
            <el-dropdown-item divided command="退出登录">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="middle">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
    name:'topHeader',
  data() {
    return {
      APP_NAME,
      arrowDown: false
    };
  },
  methods: {
    back() {
      this.$router.push({ path: "/login" });
    },
    handleHome() {
      this.$router.push({ path: "/head/home" });
    },
    handleCommand(command) {
      switch (command) {
        case "退出登录":
          this.back();
          break;
        case "修改密码":
          this.$router.push({ path: "/head/page/relf/changePwd" });
          break;
        case "个人信息":
          this.$router.push({ path: "/head/page/relf/info" });
          break;
        default:
          this.$message(command);
          break;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/style/pages/top_header.scss";
</style>