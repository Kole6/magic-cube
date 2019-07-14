<!--学生素质报告-->
<template>
  <div id="wrapper">
    <card-wrapper button-name='学生素质报告'>
      <div id="radars"></div>
      <div class="curves">
        <el-table size="mini" :data="tableData">
          <el-table-column
            v-for="item in headList"
            :label="item.label"
            :prop="item.prop"
            :key="item.label"
          ></el-table-column>
        </el-table>
      </div>
    </card-wrapper>
    <div class="buttom">
      <div class="buttom_top">
        <span>指标详情</span>
      </div>
      <div class="tables">
        <table width="100%" cellspacing="0" cellpadding="0" :data="tableData1">
          <tr><th>一级指标</th><th>得分</th><th>二级指标</th><th>三级指标</th><th>得分</th></tr>
          <tr><td rowspan="5">资源条件</td><td rowspan="5">{{tableData1.name}}</td><td rowspan="5">专业师资结构（50%）</td><td>师生比（20%）</td><td>{{tableData1.ssb}}</td></tr>
          <tr><td>硕士及以上教师占比（20%）</td><td>  {{tableData1.suoshi}}   </td></tr>
          <tr><td>  双师教师占比（20%）</td><td>  {{tableData1.shuagnshi}}   </td></tr>
          <tr><td>  高级职称教师占比（20%）   </td><td>  {{tableData1.zhoagngao}}   </td></tr>
          <tr><td>  专业带头人占比（20%）   </td><td>  {{tableData1.zhuanye}}   </td></tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import cardWrapper from '@/components/init/cardWrapper.vue';
import cardList from '@/components/init/cardList.vue';
export default {
  components:{
    cardWrapper,
    cardList,
    },
  data() {
    return {
      value:"",
      tableData1:{
        name:"1.2",
        ssb:"1.57",
        suoshi:"3.96",
        shuagnshi:"4.95",
        zhoagngao:"2.92",
        zhuanye:"8.05",
        xiaonei:"1.89"
      },
      headList: [
        {
          label: "指标名称",
          prop: "date"
        },
        {
          label: "得分",
          prop: "name"
        },
      ],
      tableData: [
        {date:"资源条件",name: "4.0"},
        {date:"发展成效",name: "5"},
        {date:"社会服务能力",name: "8"},
        {date:"合规性",name: "10"},
      ],
      search: {
        value1: {
          type: "select",
          name: "年份",
          model: "",
          options: [
            {
              value: "",
              label: "请选择"
            },
            {
              value: "1001",
              label: "2019"
            }
          ]
        },
        value2: {
          type: "select",
          name: "系部名称",
          model: "",
          options: [
            {
              value: "",
              label: "请选择"
            },
            {
              value: "1001",
              label: "计算机"
            }
          ]
        },
        value3: {
          type: "select",
          name: "专业名称",
          model: "",
          options: [
            {
              value: "",
              label: "请选择"
            },
            {
              value: "1001",
              label: "电子"
            }
          ]
        }
      },
      radarData: {
        tooltip: {},
        radar: [
          {
            indicator: [
              { text: "遵纪守法" },
              { text: "服从分工" },
              { text: "尊重家长" },
              { text: "为人师表" },
              { text: "廉洁从教" }
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
            text: '',
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
                value: [9, 2, 5, 0,1],
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
    };
  },
  mounted() {
    this.radar_funtion();
  },
  methods: {
      handleBtn(keyVal) {
        console.log("search-keyval", keyVal);
      },
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
@import "~@/assets/style/pages/studentIndex.scss";
 #radars {
   display: inline-block;
   width: 48%;
   height: 500px;
 }

 .curves {
   width: 35%;
   vertical-align: top;
   display: inline-block;
   position: relative;
   transform: translate(25%, 50%);
 }
</style>