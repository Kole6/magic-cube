<!--授课情况-->
<template>
  <div id="wrapper">
    <card-wrapper button-name="授课情况">
      <card-list :data="totalList"></card-list>
    </card-wrapper>
    <card-wrapper button-name="在校档案">
      <card-list :data="totalList2"></card-list>
    </card-wrapper>
    <card-wrapper button-name="能力评估报告">
      <div id="radars"></div>
    </card-wrapper>
  </div>
</template>
<script>
import * as echarts from "echarts";
import cardWrapper from "@/components/init/cardWrapper.vue";
import cardList from "@/components/init/cardList.vue";
export default {
  components: { cardWrapper, cardList },
  data() {
    return {
      radarData: {
        tooltip: {},
        radar: [
          {
            indicator: [
              { text: "师德素养" },
              { text: "教科研能力" },
              { text: "教师发展" },
              { text: "教学能力" }
            ],
            center: ["50%", "50%"],
            radius: 120,
            startAngle: 90,
            splitNumber: 6,
            shape: "circle",
            name: {
              textStyle: {
                color: "#7A7A7A"
              }
            }
          }
        ],
        series: [
          {
            name: "雷达图",
            type: "radar",
            itemStyle: {
              emphasis: {
                lineStyle: {
                  width: 5
                }
              }
            },
            data: [
              {
                value: [0, 0, 0, 0],
                symbol: "rect",
                symbolSize: 5,
                lineStyle: {
                  normal: {
                    color: "#44E6CB"
                  }
                },
                areaStyle: {
                  color: "#44E6CB",
                  shadowColor: "rgba(207,226, 226,0.3)",
                  shadowBlur: 10
                }
              }
            ]
          }
        ]
      },
      totalList: [
        {
          icon: "&#xe83f;",
          name: "学生个人荣誉",
          core: "0"
        },
        {
          icon: "&#xe65b;",
          name: "学生数",
          core: "10"
        },
        {
          icon: "&#xe619;",
          name: "违反日常行为规范",
          core: "1"
        },
        {
          icon: "&#xe65b;",
          name: "好人好事",
          core: "24"
        }
      ],
      totalList2: [
        {
          icon: "&#xe83f;",
          name: "学生个人荣誉",
          core: "0"
        },
        {
          icon: "&#xe65b;",
          name: "学生数",
          core: "10"
        },
        {
          icon: "&#xe619;",
          name: "违反日常行为规范",
          core: "1"
        },
        {
          icon: "&#xe65b;",
          name: "好人好事",
          core: "24"
        },
        {
          icon: "&#xe65b;",
          name: "好人好事",
          core: "24"
        },
        {
          icon: "&#xe65b;",
          name: "好人好事",
          core: "24"
        },
        {
          icon: "&#xe65b;",
          name: "好人好事",
          core: "24"
        }
      ]
    };
  },
  mounted() {
    this.radar_funtion();
  },
  methods: {
    radar_funtion() {
      let div_ = document.getElementById("radars");
      this.myEcharts = echarts.init(div_);
      this.myEcharts.setOption(this.radarData, true);
    }
  }
};
</script>
<style lang='scss' scoped>
// @import "../../common/css/studentIndex";
#radars {
  display: inline-block;
  width: 48%;
  height: 500px;
}
</style>