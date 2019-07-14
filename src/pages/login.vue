<template>
  <div  id="login_wrapper">
    <div class="login_title">
      <img src="../assets/img/mofang/u2.png" alt>
      <span>{{APP_NAME}}</span>
    </div>
    <div class="login_content">
      <div class="user_login">
        您好！
        <br>
        <span>欢迎进入{{APP_NAME}}:</span>
      </div>
      <!-- <ul class="user_list">
        <li v-for="(item,index) in userList" :key="index" @click="roles(item.name)">
          <img
            :src="item.imgs"
            alt
            v-show="item.name!==chooseNum"
            :class="{choose_user:item.name==chooseNum}"
          >
          <img
            :src="item.byimgs"
            alt
            v-show="item.name==chooseNum"
            :class="{choose_user:item.name==chooseNum}"
          >
          <span class="login_role">{{item.name}}</span>
        </li>
      </ul>-->
      <div class="login_message">
        <!-- <div class="login_account" v-show="chooseNum=='家长'">
          <input type="text" placeholder="请输入手机号" v-model="phoneNo">
        </div>
        <div class="login_account" v-show="chooseNum=='家长'||chooseNum=='学生'">
          <input type="text" placeholder="请输入学生号" v-model="studentNo">
        </div>
        <div class="login_account" v-show="chooseNum=='教职工'">
          <input type="text" placeholder="请输入教职工号" v-model="teacherNo">
        </div>
        <div class="login_account" v-show="chooseNum=='企业'">
          <input type="text" placeholder="请输入社会信用码" v-model="shxym">
        </div>-->
        <div class="login_account">
          <input type="text" placeholder="请输入账号" v-model="teacherNo">
        </div>
        <div class="login_account">
          <input id="password" type="password" placeholder="请输入密码" v-model="password">
          <div class="pass_word">
            <span class="getPassword">
              <!-- <input type="checkbox">记住账号 -->
              <el-checkbox v-model="isChecked">记住账号</el-checkbox>
            </span>
          </div>
        </div>
      </div>
      <div class="logining">
        <button @click="loginButton">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
import {
  HTTP_ROOT_ADMIN,
  SCHOOL_CODE,
  PRO_ID
} from "@/config/http";
export default {
  data() {
    return {
      APP_NAME:'appName',
      titleName: "",
      chooseNum: "教职工",
      userRole: "",
      isChecked: false,
      userList: [
        {
          byimgs: "" + require(`../assets/img/u27_selected.png`) + "",
          imgs: "" + require(`../assets/img/u27.png`) + "",
          name: "教职工"
        },
        {
          byimgs: "" + require(`../assets/img/u38.png`) + "",
          imgs: "" + require(`../assets/img/u35.png`) + "",
          name: "学生"
        },
        {
          byimgs: "" + require(`../assets/img/u45.png`) + "",
          imgs: "" + require(`../assets/img/u42.png`) + "",
          name: "家长"
        }
      ],
      studentNo: "",
      phoneNo: "",
      shxym: "",
      teacherRoles: [],
      pass: false,
      //teacherNo: "29061",
      //password: "abc@1234",
      teacherNo: "",
      password: "",
      isShow: false
    };
  },
  mounted() {
    // let u = this.$route.query.u;
    // let p = this.$route.query.p;
    // if (u != undefined && p != undefined) {
    //   this.teacherNo = u;
    //   this.password = p;
    //   this.pass = true;
    //   this.loginButton();
    // } else {
    //   this.isShow = true;
    // }
  },
  methods: {
    roles(user) {
      this.chooseNum = user;
      sessionStorage.setItem("user", user);
      this.phoneNo = "";
      this.studentNo = "";
      this.teacherNo = "";
      this.password = "";
    },
    loginImg() {
      this.$router.push({ path: "/head" });
    },

    //登录(学校编码和项目编号都写死了)
    loginButton() {
      let sysUserEntity = {
        schoolCode: SCHOOL_CODE,
        username: this.teacherNo,
        password: this.password
      };
      if (this.chooseNum == "教职工") {
        sysUserEntity.username = this.teacherNo;
      } else if (this.chooseNum == "学生") {
        sysUserEntity.username = this.studentNo;
      }
      let params = {
        sysUserEntity: sysUserEntity,
        proId: PRO_ID
      };
      this.$HTTP.api({
        url: "/test/getData",
        method: "POST",
        params,
        successCallback: function(data) {
          //console.log(data)
          if (data.code == 0) {
            window.localStorage.setItem("name", data.data.name);
            window.localStorage.setItem("username", data.data.username);
            window.localStorage.setItem("schoolCode", data.data.schoolCode);
            window.localStorage.setItem("userId", data.data.userId);
            window.localStorage.setItem("token", data.data.token);
            window.localStorage.setItem("userType", data.data.userType);
            // todo 是记住密码还是记住账号名称
            if (this.pwdChecked) {
              //记住密码
              window.localStorage.setItem("userInfo", JSON.stringify(params));
            } else {
              window.localStorage.removeItem("userInfo");
            }
            //获取菜单
            this.getMenu();
          } else {
            this.$message({
              type: "error",
              message: data.msg
            });
          }
        }.bind(this)
      });
    },

    //获取菜单
    getMenu() {
      this.$HTTP.api({
        root: HTTP_ROOT_ADMIN,
        url: "/api/sys/sysmenu/getMenuTree/" + PRO_ID, //proId是2
        method: "POST",
        successCallback: function(data) {
          console.log(data);
          if (data.code == 0) {
            window.localStorage.setItem("menuTrees", JSON.stringify(data.data));
            if (this.pass) {
              this.$router.push({ path: "/head/page/collect/indexSjcjCwys" });
            } else {
              this.$message({ message: "登录成功！", type: "success" });
              this.$router.push({ path: "/head" });
            }
          } else {
            this.$message({
              type: "error",
              message: data.msg
            });
          }
        }.bind(this)
      });
    }
  }
};
</script>
<style scoped lang="scss">
@import '~@/assets/style/pages/login.scss';
</style>
