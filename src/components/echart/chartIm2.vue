<!--
领导驾驶舱
图表中间配置层
只在 yData 整体变化时重新渲染
-->
<template>
  <div class="chart">
    <div class="chart-top">{{title}}</div>
    <div class="chart-content">
      <charts
        :xData="xData"
        :yData="yData"
        :chartRef="chartRef"
        :chartStyle="chartStyle"
        :average="average"
        :cursor="cursor"
        :chartType="chartType"
        :toolboxShow="toolboxShow"
        :pieRadius="pieRadius"
        :pieCenter="pieCenter"
        :markLine="markLine"
        @chartClick="chartClick"
      ></charts>
    </div>
  </div>
</template>
<script>
import charts from "./charts.vue";
export default {
  props: {
    title:String,
    xData: [Array],
    yData: {
      type: Array,
      default() {
        return [];
      }
    },
    chartStyle: {
      type: Object,
      default() {
        return { height: "300px", width: "100%" };
      }
    },
    markLine: [Array],
    chartType: {
      type: String,
      default: "bar"
    }
  },
  components: {
    charts
  },
  data() {
    return {
      chartRef: "myEcharts" + Math.random(),
      // chartStyle: { height: "300px", width: "100%" },
      average: true, //平均数
      cursor: false, //可下钻指针
      // chartType: "bar", //bar or line or pie
      toolboxShow: true, //图表变换
      pieRadius: [60, 110],
      pieCenter: ["50%", "50%"],
      xDataTest: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      yDataTest: [
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
  methods: {
    chartClick(params) {
      this.$emit("chartClick", params);
    }
  }
};
</script>
<style lang='scss' scoped>
.chart {
  width: 100%;
  //   border: 1px solid green;
  // background-color: #04077c;
  .chart-top {
    color: black;
    font-size: 16px;
    font-weight: bold;
    // line-height: 45px;
    font-family: YouYuan;
    padding-left: 20px;
  }
  /* .chart-content {
     border: 1px solid salmon;
  } */
}
</style>
<!--
运用实例

<chart-im :xData="xDataTest" :yData="yDataTest" @chartClick="chartClick" />

-->