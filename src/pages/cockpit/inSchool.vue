<!--在校情况-->
<template>
  <div id="wrapper">
    <card-wrapper button-name='授课情况'>
      <card-list :data='totalList'></card-list>
    </card-wrapper>
    <card-wrapper button-name='能力评估报告'>
      <div id="radars"></div>
      <div id="curve">
        <div class="area-top">学生平均成绩</div>
        <div class="area-right">
          <el-select v-model="value" @change="handleChange(value)">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="area-content">
          <line-chart
            :chartId="charts1.chartId"
            :legend="charts1.legend"
            :echartStyle="charts1.echartStyle"
            :opinionData="charts1.opinionData"
            :xAxisData="charts1.xAxisData"
          ></line-chart>
        </div>
      </div>
    </card-wrapper>
  </div>
</template>
<script>
import * as echarts from "echarts";
import lineChart from "../../components/echart/line.vue";
import cardWrapper from '@/components/init/cardWrapper.vue';
import cardList from '@/components/init/cardList.vue';
export default {
  components:{
    lineChart,
    cardWrapper,
    cardList,
  },
  data() {
    return {
      value:"",
      options:[{ label: "公共基础课", value: 1 }, { label: "专业课", value: 2 }],
      charts1: {
        chartId: "charts1",
        echartStyle: {
          height: "420px",
          width: "100%",
        },
        xAxisData: [],
        legend: {
          data: ["平均线", "本人"]
        },
        opinionData: {
          //平均成绩
          "0": [],
          "1": []
        }
      },
      radarData: {
        tooltip: {},
        radar: [
          {
            indicator: [
              { text: "品德修养" },
              { text: "学生发展" },
              { text: "修习课程" },
              { text: "身心健康与艺术修养" }
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
    title: {
        text: '综合素质雷达图',
        // subtext: '纯属虚构',
        top: 50,
        left: 30
    },
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
      classMap: [
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
      ],
      totalList: [
        {
          icon: "&#xe83f;",
          name: "本学期个人荣誉",
          core: "0"
        },
        {
          icon: "&#xe65b;",
          name: "本月好人好事",
          core: "10"
        },
        {
          icon: "&#xe619;",
          name: "本周考勤情况",
          core: "1"
        },
        {
          icon: "&#xe65b;",
          name: "本周违反日常行为",
          core: "0"
        }
      ]
    };
  },
  mounted() {
    this.radar_funtion();
  },
  methods: {
    //学业平均成绩雷达图 charts1 xAxisData opinionData
    studentMarkldt: function(valueName) { 
    },
    handleChange(valueName) {
      this.studentMarkldt(valueName);
    },
    radar_funtion() {
      let div_ = document.getElementById("radars");
      this.myEcharts = echarts.init(div_);
      this.myEcharts.setOption(this.radarData, true);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../common/css/studentIndex";
#radars {
  display: inline-block;
  width: 48%;
  height: 500px;
}
#curve {
  // vertical-align: top;
  display: inline-block;
  width: 48%;
  height: 500px;
  position: relative;

  .area-top {
    display: inline-block;
    position: absolute;
    top: -40px;
    font-weight: bold;
    font-family: '黑体';
    font-size: 16px;
  }

  .area-right {
    position: absolute;
    right: -40px;
    top: -50px;
  }
}
</style>