<!--菜单栏-->
<template>
  <div :class="{'collapse':$store.state.indexPage.Collapse}">
    <el-menu
      class="el-menu-vertical-demo"
      router
      :default-active="$route.path"
      @open="handleOpen"
      @close="handleClose"
      :collapse="$store.state.indexPage.Collapse"
    >
      <template v-for="(mex,i) of $store.state.menuObj">
        <el-menu-item
          v-if="mex.children==null || mex.children==undefined || mex.children.length === 0"
          :index="mex.href"
          @click="handClick(mex)"
          :key="i*10+'10'"
        >
          <i class="el-icon-document"></i>
          <!-- <router-link slot="title" tag="span" class="routerActive activeOne"  :to="mex.href">{{mex.name}}</router-link> -->
          <span slot="title" class="routerActive activeOne">{{mex.name}}</span>
        </el-menu-item>
        <!-- 第二层 start -->
        <el-submenu v-else :index="i+'href'" :key="i">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{mex.name}}</span>
          </template>

          <template v-for="(mexc,i2) of mex.children">
            <!-- 第三层 start  todo:绑定点击事件-->
            <el-submenu
              v-if="mexc.children!=undefined && mexc.children!=null &&  mexc.children.length != 0"
              :index="i2*100+'href'"
              :key="i2*100+'100'"
            >
              <template slot="title">{{mexc.name}}</template>
              <el-menu-item
                :index="mexct.href"
                v-for="(mexct,i3) of mexc.children"
                :key="i3*1000+'1000'"
                @click="handClick(mexct)"
              >{{mexct.name}}</el-menu-item>
            </el-submenu>

            <!-- 第三层 end 想用下面el-menu-item加上 v-else-->
            <el-menu-item v-else :index="mexc.href" :key="i2*100+'100'" @click="handClick(mexc)">
              <router-link :class="['routerActive','activeTwo',$store.state.indexPage.Collapse?'collapsed':'']" tag="div" :to="mexc.href">{{mexc.name}}</router-link>
              <!-- {{mexc.name}} -->
            </el-menu-item>
            <!--第三层 end-->
          </template>
        </el-submenu>
        <!-- 第二层 end -->
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    menuObj: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      isCollapse: true
    };
  },
    
  methods: {
    handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //   console.log(key, keyPath);
    },
    handClick(mexc) {
      this.$emit("clickMenu", mexc);
      // console.log("sxss", href);
    }
  }
};
</script>
<style scoped lang="scss">
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: $sidebarWidth;
  }
</style>