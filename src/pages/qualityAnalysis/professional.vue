<!--专业质量概况-->
<template>
  <div id="wrapper">
    <card-wrapper button-name="本校基本情况">
      <card-list :data="totalList"></card-list>
    </card-wrapper>
    <div class="conment">
      <div class="report">
        <div class="teachEval">
          <chart-im
            :xData="barChart.xData"
            :yData="barChart.yData"
            :title="barChart.title"
            :chartType="barChart.type"
            :chartStyle="barChart.echartStyle"
          />
        </div>
      </div>
      <div class="wrapper_echart">
        <div class="echart_top">
          <div class="top_left">
            <chart-im
              :xData="barChart4.xData"
              :yData="barChart4.yData"
              :title="barChart4.title"
              :chartType="barChart4.type"
              :chartStyle="barChart4.echartStyle"
            />
          </div>
          <div class="top_right">
            <chart-im
              :xData="barChart5.xData"
              :yData="barChart5.yData"
              :title="barChart5.title"
              :chartType="barChart5.type"
              :chartStyle="barChart5.echartStyle"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import chartIm from "@/components/echart/chartIm2.vue";
import cardWrapper from "@/components/init/cardWrapper.vue";
import cardList from "@/components/init/cardList.vue";
export default {
  components: {
    chartIm,
    cardWrapper,
    cardList
  },
  data() {
    return {
      total: 0, //数据总数
      totalList: [
        {
          icon: "&#xe83f;",
          name: "系部",
          core: "5个"
        },
        {
          icon: "&#xe65b;",
          name: "专业",
          core: "10个"
        },
        {
          icon: "&#xe619;",
          name: "平均分",
          core: "89分"
        },
        {
          icon: "&#xe83f;",
          name: "中位数",
          core: "80分"
        },
        {
          icon: "&#xe65b;",
          name: "最高分",
          core: "100分"
        },
        {
          icon: "&#xe60a;",
          name: "最低分",
          core: "67分"
        }
      ],
      headList: [
        {
          label: "专业名称",
          prop: "date"
        },
        {
          label: "所属系部",
          prop: "name"
        },
        {
          label: "综合得分",
          prop: "address"
        },
        {
          label: "资源条件",
          prop: "ysxj"
        },
        {
          label: "综合能力",
          prop: "ysxj"
        },
        {
          label: "分项指标得分合规性",
          prop: "ysxj"
        },
        {
          label: "发展成效",
          prop: "ysxj"
        },
        {
          label: "社会服务能力",
          prop: "ysxj"
        }
      ],
      tableData: [{ name: "xx" }],
      tableData: [],
      barChart: {
        chartId: "schoolBar",
        title: "本校专业TOP5",
        xData: [
          "会计",
          "高星级饭店运营与管理",
          "美容美体",
          "学前教育",
          "幼儿教育"
        ],
        type: "bar",
        yData: [{ name: "", data: [4, 6, 8, 8, 9] }],
        echartStyle:{height:'480px',width:'100%'},
      },
      barChart4: {
        chartId: "schoolBar4",
        title: "本校系部排名",
        // legrendpos: 360,
        xData: ["计划招生数", "招生数", "实际报到数"],
        type: "bar",
        yData: [{ name: "", data: [4000, 5500, 8500] }],
        echartStyle:{height:'380px',width:'100%'},
      },
      barChart5: {
        chartId: "schoolBar5",
        title: "系部内专业TOP5",
        // legrendpos: 360,
        xData: [
          "当年毕业生",
          "直接升学人数",
          "直接就业人数",
          "本地就业人数"
        ],
        type: "bar",
        yData: [{ name: "", data: [4000, 5500, 8500, 12000] }],
        echartStyle:{height:'380px',width:'100%'},
      }
    };
  },
  created() {
    this.classMap = [
      "kq",
      "error",
      "person",
      "horny",
      "formal",
      "kq",
      "error",
      "person",
      "horny",
      "formal",
      "kq",
      "error",
      "person",
      "horny",
      "formal"
    ];
  },
  methods: {
    //新增
    addData: function() {
      this.diologTitle = "新增";
      this.dialogVisible1 = true;
    },
    handleUpload() {
      this.up.upShow = true;
    },
    handlePaging(currentPage, pagesize) {
      console.log("currentPage", currentPage, "pagesize", pagesize);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "~@/assets/style/pages/studentIndex.scss";
.wrapper_echart{
  background: #fff;
}
.report{
  padding-top: 20px;
}
.top_left, .top_right{
  padding-top: 10px;
}
</style> 