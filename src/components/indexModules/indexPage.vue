<!--内部组件库-->
<template>
  <div class="vuc loading_cube_3_0">
    <el-container>
      <!-- menuing -->
      <div
        v-if="menuShow"
        style="height: calc(100vh - 68px);
    overflow: auto;
    overflow-x: hidden;"
      >
        <pageMenu :menuObj="menuObj" v-if="menuShow" @clickMenu="clickMenu"></pageMenu>
      </div>
      <!-- maining -->
      <el-main id="pageRight" :class="{'Ncollapse':!$store.state.indexPage.Collapse}">
        <bread-box :param="breadParam"></bread-box>
        <div class="important-content">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
var RELF = [
  {
    name: "用户",
    href: "relf",
    menuType: "relf",
    children: [
      {
        name: "个人信息",
        href: "/head/page/relf/info"
      },
      {
        name: "修改密码",
        href: "/head/page/relf/changePwd"
      }
    ]
  }
];

import Mock from "@/config/mock_data/home_menu.js";
import pageMenu from "./pageMenu.vue";
import breadBox from "./breadBox.vue";
import { parse } from "path";
export default {
  components: {
    breadBox,
    pageMenu
  },
  data() {
    return {
      menuObj: {},
      menuShow: true,
      nav: "school",
      breadParam: "学校信息"
    };
  },
  mounted() {
    this.handleNav(this.$route.params.id);
  },
  watch: {
    //路由id改变去查menu改变menuObj
    $route(to, from) {
      this.$Global.rightScrollTop();
      if (to.params.id && to.params.id != from.params.id) {
        this.handleNav(to.params.id);
      }
    }
  },
  methods: {
    handleNav(id) {
      this.menuShow = false;
      let obj;
      var menuArr = menuMock
        ? Mock
        : JSON.parse(localStorage.menuTrees).concat(RELF);
      // console.log('menuArr',menuArr)
      for (let i of menuArr) {
        if (i.href == id) {
          obj = i;
        } else if (i.href == this.$route.path) {
          this.breadParam = i.name;
        }
      }
      if (obj) {
        this.$nextTick(() => {
          this.menuShow = true;
        });
        console.log(obj);
        this.$store.commit("updateMenuObj", obj.children || obj);
        this.breadParam = this.getBread(obj.children, this.$route.path);
      }
    },
    // todo:面包屑问题
    getBread(list, path) {
      for (let i of list) {
        if (i.href === path) {
          return i.name;
        } else if (i.children) {
          for (let j of i.children) {
            if (j.href === path) {
              return j.name;
            }
          }
        }
      }
      return "";
    },
    clickMenu(mexc) {
      console.log("mexc", mexc);
      this.breadParam = mexc.name;
    }
  }
};
</script>
<style lang='scss' scoped>
#pageRight.Ncollapse{
  width:calc(100% - 270px);
}
.vuc {
  height: 100%;

  .el-container {
    height: 100%;
  }

  .el-aside {
    background-color: white;
    // border-right: 1px solid rgba(0, 0, 0, .07);
    height: calc(100vh - 58px);
  }

  .el-main {
    background-color: #f3f7fd;
    height: calc(100vh - 58px);
    padding: 0;

    .important-content {
      padding: 8px;
      height: calc(100% - 60px);
    }
  }
}
</style>