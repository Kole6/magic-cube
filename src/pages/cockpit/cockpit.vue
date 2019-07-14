<!--领导驾驶仓-->
<template>
  <div>
    <card-wrapper button-name="运行监控">
      <card-list :data="totalList"></card-list>
    </card-wrapper>
    <card-wrapper button-name="运行分析" v-if="wrapShow">
      <div class="wrap" v-for="(item,i) of chartList" :key="i">
        <chart-im
          :xData="item.xData"
          :yData="item.yData"
          :title="item.title"
          :chartType="item.type"
          :markLine="item.markLine"
        />
      </div>
    </card-wrapper>
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
      wrapShow: false,
      chartList: [
        {
          xData: ["全国平均", "全省平均", "本校"],
          yData: [
            {
              name: "",
              data: [820, 932, 90]
            }
          ],
          title: "在校生人数",
          type: "bar"
        },
        {
          xData: ["全国平均", "全省平均", "本校"],
          yData: [
            {
              name: "",
              data: [820, 932, 90]
            }
          ],
          title: "在校生人数2",
          type: "pie"
        },
        {
          xData: ["全国平均", "全省平均", "本校"],
          yData: [
            {
              name: "",
              data: [820, 932, 90]
            }
          ],
          title: "在校生人数3",
          type: "line"
        },
        {
          xData: ["全国平均", "全省平均", "本校"],
          yData: [
            {
              name: "",
              data: [820, 932, 90]
            }
          ],
          title: "在校生人数4",
          type: "bar",
          markLine: [
            { name: "全国平均", data: 587 },
            { name: "全省平均", data: 267 }
          ]
        }
      ],
      totalList: [
        {
          icon: "&#xe83f;",
          name: "机构数",
          core: "65"
        },
        {
          icon: "&#xe65b;",
          name: "省级以上重点专业",
          core: "72"
        },
        {
          icon: "&#xe619;",
          name: "专业数",
          core: "72"
        },
        {
          icon: "&#xe60a;",
          name: "课程设置总数",
          core: "72"
        },
        {
          icon: "&#xe65b;",
          name: "自编教材数",
          core: "72"
        },
        {
          icon: "&#xe60a;",
          name: "精品课程总数",
          core: "72"
        },
        {
          icon: "&#xe65b;",
          name: "校外实践基地",
          core: "72"
        },
        {
          icon: "&#xe60a;",
          name: "合作企业数",
          core: "72"
        },
        {
          icon: "&#xe65b;",
          name: "在校生数",
          core: "72"
        },
        {
          icon: "&#xe60a;",
          name: "教职工总数",
          core: "72"
        },
        {
          icon: "&#xe65b;",
          name: "应届毕业生数",
          core: "456"
        },
        {
          icon: "&#xe60a;",
          name: "直接就业率",
          core: "33%"
        }
      ]
    };
  },
  mounted() {
    this.wrapShow = true;
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.wrap {
  width: 42%;
  display: inline-block;
  vertical-align: top;
  padding: 30px 4% 15px 4%;
  box-shadow: inset 0.01em 0.05em 0.05em #cecece;
}
</style>