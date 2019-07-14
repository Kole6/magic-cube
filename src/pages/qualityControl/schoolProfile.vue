<!--学校概况-->
<template>
  <div class="eval">
    <div class="tong">
      <div class="tabs-left">
        <div
          class="left-el"
          v-for="(item,i) of tongNav"
          :key="i"
          :class="{'tabSelect':navSelect == i}"
          @click="selectNav(item,i)"
        >{{item.name}}</div>
      </div>
      <div class="tabs-right">
        <div class="right-title">
          <span>{{tongTitle}}</span>
          <span class="unit">（{{tongUnit}}）</span>
        </div>
        <!-- <div class="right-tabs-top" v-if="isTongNavSelectd.tab && isTongNavSelectd.tab.length">
          <el-tabs tab-position="top" v-model="activeName" @tab-click="tabsChange">
            <el-tab-pane
              v-for="(item,i) of isTongNavSelectd.tab"
              :key="i"
              :label="item"
              :value="i"
            />
          </el-tabs>
        </div>-->
        <div class="tong-chart">
          <chart-im :xData="xData" :yData="yData" :chartType="chartType"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import chartIm from "@/components/echart/chartIm2";
export default {
  components: {
    chartIm
  },
  data() {
    return {
      tongTitle: "标题",
      tongUnit: "%",
      showChart: false,
      chartType: "bar",
      tongNav: [
        { indexCode: "1001", name: "在校生总数", unit: "人", type: "pie", },
        { indexCode: "1002", name: "专任教师总数", unit: "人", type: "bar" },
        { indexCode: "1003",name: "生师比", unit: "%", type: "pie" },
        { indexCode: "1004",name: "专任教师结构分布", unit: "人", type: "bar" },
        { indexCode: "1005", name: "校舍建筑面积", unit: "人", type: "bar" },
        { indexCode: "1006",name: "生均教学仪器设备值", type: "bar", unit: "人" },
        { indexCode: "1007", name: "生均校内实践教学工位数", type: "bar", unit: "人" },
        { indexCode: "1008",name: "校内机构数", unit: "人", type: "bar" }
      ],
      isTongNavSelectd: {},
      navSelect: 0,
      activeName: 0,
      xData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      yData: [
        {
          name: "最高气温",
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
          name: "最低气温",
          data: [89, 9, 123, 568, 652, 555, 333]
        },
        {
          name: "多云",
          data: [99, 49, 1111, 1300, 563, 555, 333]
        },
        {
          name: "阴天",
          data: [99, 666, 77, 666, 3, 32, 333]
        },
        {
          name: "清风",
          data: [99, 1000, 55, 668, 785, 777, 22]
        }
      ] //pie yData length is one
    };
  },
  mounted() {},
  methods: {
    //点击左侧选项
    selectNav(tab, i) {
      this.navSelect = i;
      this.isTongNavSelectd = tab;
      this.tongTitle = tab.name;
      this.tongUnit = tab.unit;
      this.chartType = tab.type;
      // this.$router.push({path:tab.indexCode})
    }
    // tabsChange(tab, event) {
    //   console.log(tab.index, event);
    //   console.log("this.$route", this.$route);
    // }
  }
};
</script>
<style lang='scss' scoped>
// @import "@/common/css/indexInfo.scss";
@import "@/common/css/tong.scss";
</style>