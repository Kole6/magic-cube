<!-- 
charts组件
只需配置 xdata ydata
每次不同需求改中间层组件不改页面和底层组件

显示效果：
一维：直接展示，不需echarts
二维：yData 长度为一
三维：yData 长度为多
思维：title 加个下拉框
-->
<template>
  <div class="chart-el">
    <div class="ripple" @mousemove="ripTheme=true" @mouseleave="ripTheme=false" v-if="toolboxShow">
      <i class="el-icon-picture-outline" @click="changeTheme"></i>
    </div>
    <div class="ripple-text" v-if="ripTheme">
      <p>切换主题</p>
    </div>
    <div :style="chartStyle" :ref="chartRef" class="my-echarts"></div>
  </div>
</template>
<script>
import "echarts/theme/macarons";
import "echarts/theme/vintage";
import "echarts/theme/roma";
import "echarts/theme/infographic";
import "echarts/theme/dark";

export default {
  props: {
    xData: [Array],
    yData: {
      type: Array,
      default() {
        return [];
      }
    },
    chartRef: {
      type: String,
      default: "myEcharts"
    },
    chartStyle: {
      type: Object,
      default() {
        return { height: "400px", width: "100%" };
      }
    },
    average: {
      type: Boolean,
      default: true
    },
    cursor: {
      type: Boolean,
      default: false
    },
    toolboxShow: {
      type: Boolean,
      default: true
    },
    chartType: {
      type: String,
      default: "pie"
    },
    pieRadius: {
      type: Array,
      default() {
        return [50, 110];
      }
    },
    pieCenter: {
      type: Array,
      default() {
        return ["50%", "50%"];
      }
    },
    markLine:{
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      /* chartRef: "myEcharts",
      chartStyle: { height: "500px", width: "100%" },
      average: true, //平均数
      cursor: false, //可下钻指针
      toolboxShow: true,
      chartType: "bar", //bar or line or pie
      pieRadius: [50, 110],
      pieCenter: ["50%", "50%"], 
      markLine: [
        { name: "全国平均值", data: 587 },
        { name: "全省平均值", data: 267 }
      ],*/
      themeArr: ["macarons", "infographic", "roma", "vintage"],
      theme: 0,
      ripTheme: false
    };
  },
  mounted() {
    this.drawEcharts();
  },
  methods: {
    //点击图表
    chartClick(params) {
      //   console.log("params", params);
      this.$emit("chartClick", params);
    },

    //切换主题
    changeTheme() {
      this.theme >= this.themeArr.length ? (this.theme = 0) : (this.theme += 1);
      this.$echarts.dispose(this.$refs[this.chartRef]);
      this.drawEcharts();
    },

    //画出图表
    drawEcharts() {
      let myChart = this.$echarts.init(
        this.$refs[this.chartRef],
        this.themeArr[this.theme]
      );
      /*------------------------------- option start ------------------------------ */
      myChart.setOption({
        // title: { text: "未来一周气温变化",  subtext: "模拟数据" },
        tooltip: {
          trigger: this.chartType == "pie" ? "item" : "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        toolbox: {
          show: this.toolboxShow,
          left: 80,
          top: 8,
          // itemSize :10,
          feature: {
            /*
            myTool1: {
              show: true,
              title: "切换主题",
              icon:
                "path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891",
              iconStyle: {
                normal: {
                  borderColor: "rgba(1,251, 56,1)"
                }
              }
            },
            */
            dataZoom: {
              show: !(this.chartType == "pie"),
              yAxisIndex: "none",
              iconStyle: {
                normal: {
                  borderColor: "#f60"
                }
              }
            },
            dataView: {
              readOnly: true,
              iconStyle: {
                normal: {
                  borderColor: "#EE6363"
                }
              },
              // optionToContent: function(opt) {
              //   let axisData = opt.xAxis.data;
              //   let series = opt.series;
              //   return table;
              // },
              onclick: function() {
                alert("myToolHandler1");
              }
            },
            magicType: {
              show: !(this.chartType == "pie"),
              type: ["line", "bar", "stack", "tiled"],
              iconStyle: {
                normal: {
                  borderColor: "#00EE00"
                }
              }
            },
            restore: {
              iconStyle: {
                normal: {
                  borderColor: "#191970"
                }
              }
            },
            saveAsImage: {
              iconStyle: {
                normal: {
                  borderColor: "#8B2500"
                }
              }
            }
          }
        },
        legend: {
          data:
            this.chartType == "pie"
              ? this.xData
              : this.getArraySameKey(this.yData, "name"),
          bottom: -5
        },
        xAxis:
          this.chartType == "pie"
            ? null
            : {
                boundaryGap: this.chartType == "bar" ? true : false,
                data: this.xData
              },
        yAxis:
          this.chartType == "pie"
            ? null
            : {
                type: "value"
                // axisTick : {show: false},
                // axisLabel: {  formatter: "{value} °C" }
              },
        series: this.setSeries(this.yData)
      });
      /*------------------------------- option end ------------------------------- */
      myChart.on("click", this.chartClick);
      // window.addEventListener("resize", function() {
      //   myChart.resize();
      // });
      window.onresize = myChart.resize;
      // this.chartWidth = myChart.getWidth()
      // console.log("myChart.option", myChart.getOption());
    },

    //获取数组对象中相同key值 返回新的数组
    getArraySameKey(arr, key) {
      let m = [];
      for (let i of arr) {
        m.push(i[key]);
      }
      return m;
    },

    //设置划线
    setMarkLine(lineArr) {
      let res = { data: [] };
      if (lineArr && lineArr.length) {
        for (let i of lineArr) {
          let r = {
            name: i.name,
            yAxis: i.data,
            label: {
              formatter: `${i.name}\n${i.data}`
            },
            itemStyle: { normal: { color: "#FF6A6A" } },
            
          };
          res.data.push(r);
        }
        return res;
      } else {
        return res;
      }
      /* var markLineData = {
        data: [
          {
            name: "全国平均值",
            yAxis: 800,
            label: {
              normal: {
                // position: "start",
                formatter: "全国平均值\n800"
              }
            },
            itemStyle: { normal: { color: "#FF6A6A" } }
          }
        ]
      }; */
    },

    //set series option
    setSeries(arr) {
      var s = [];
      if (this.chartType == "pie") {
        let m = [];
        for (let i in arr[0].data) {
          m.push({
            name: this.xData[i],
            value: arr[0].data[i]
          });
        }
        s.push({
          name: arr[0].name,
          type: this.chartType,
          radius: this.pieRadius,
          center: this.pieCenter,
          label: {
            normal: {
              formatter: "{b}\n{d}%"
            }
          },
          data: m
        });
      } else {
        var markLineData = this.setMarkLine(this.markLine);
        for (let i of arr) {
          s.push({
            name: i.name,
            type: this.chartType,
            data: i.data,
            barMaxWidth: 50,
            barMinHeight: 5,
            /* markLine: this.average
              ? {
                  data: [{ type: "average", name: "平均值" }]
                }
              : null, */
            markLine: markLineData.data.length ? markLineData : null,
            smooth: true,
            cursor: this.cursor ? "pointer" : "default",
            itemStyle: {
              normal: {
                barBorderRadius: 3
              }
            }
          });
        }
      }
      return s;
    }
  },
  watch: {
    yData(val, oldVal) {
      this.$nextTick(() => {
        this.drawEcharts();
      });
    }
  }
};
</script>
<style>
.chart-el {
  position: relative;
  /* border: 1px saddlebrown solid; */
}
.ripple {
  /* border: 1px saddlebrown solid; */
  position: absolute;
  margin-left: 58px;
  cursor: pointer;
  color: #67e0e3;
  margin-top: 14px;
  z-index: 1;
}
.ripple i {
  font-size: 19px;
  cursor: pointer;
}
.ripple i:hover {
  color: blue;
}
.ripple-text {
  font-size: 10px;
  color: #3e98c5;
  line-height: 12px;
  position: absolute;
  margin-top: 37px;
  margin-left: 40px;
  cursor: pointer;
}
.my-echarts :nth-child(3) {
  z-index: 5;
}
</style>
