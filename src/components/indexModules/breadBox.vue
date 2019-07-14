<template>
  <div class="bread">
    <div class="tubiao" v-if="$store.state.showIcon">
      <span class="el-icon-s-unfold" @click="changeCollapse" v-if="$store.state.indexPage.Collapse"></span>
      <span class="el-icon-s-fold" @click="changeCollapse" v-else></span>
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>{{param}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "breadBox",
  props: {
    param: {
      type: String,
      default: "导航"
    }
  },
  data() {
    return {};
  },
  watch:{
    // $route(to){
    //   console.log(this.$store.state)
    // }
  },
  mounted(){
    console.log(this.$store.state.menuObj)
  },
  methods: {
    changeCollapse() {
      this.$store.commit("updateCollapse", !this.$store.state.indexPage.Collapse);
    }
  }
};
</script>
<style lang="scss" scoped>
.bread {
  background-color: white;
  width: calc(100% - 10px);
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  box-shadow: 0.05em 0em 0em $globalMainColor3 inset;
  .el-breadcrumb {
    font-size: 14px;
    line-height: 23px;
    margin-left: 25px;
  }
  .btn {
    height: 35px;
    width: 60px;
    background-color: rgb(255, 186, 0);
    color: white;
    font-size: 14px;
    line-height: 35px;
    border-radius: 5px;
    text-align: center;
    float: right;
    margin-top: -25px;
    margin-right: 60px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: rgb(255, 220, 0);
  }
  .tubiao {
    float: left;
    width: 20px;
    span {
      font-size: 20px;
      cursor: pointer;
      line-height: 23px;
      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>