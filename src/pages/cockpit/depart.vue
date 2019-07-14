<!--系部情况-->
<template>
    <div id="wrapper">
      <div class="wrapper_top">
        <div class="hear" style="border-right: 1px solid #eee;">
          <span>系部名称</span>
          <p>计算机系</p>
        </div>
        <div class="hear" style="margin-left:15px;">
          <span>系部主任</span>
          <p>***</p>
        </div>
      </div>
      <card-wrapper button-name='系部情况'>
        <card-list :data="totalList"></card-list>
      </card-wrapper>
      <div class="conment">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="专业列表" name="first">
            <div class="margin">
              <search-top :search="search" @clickbtn="handleBtn"></search-top>
            </div>
            <div class="report">
              <div class="table-header">
                <div class="header-left">
                  专业调研报告
                  <div class="header-top"></div>
                </div>
                <div class="header-right">
                  <!-- <el-button type="primary" size="small" @click="addData" plain>新增</el-button>
                  <el-button type="primary" size="small" @click="handleUpload" plain>导入</el-button>
                  <el-button type="primary" size="small" plain>批量删除</el-button> -->
                </div>   
              </div>
              <hr>
              <div class="teachEval">
                <el-table size="mini" :data="tableData">
                  <el-table-column type="index" label="序号"></el-table-column>
                  <el-table-column
                    v-for="item in headList"
                    :label="item.label"
                    :prop="item.prop"
                    :key="item.label"
                  ></el-table-column>
                </el-table>
                <paging :total="total" @handlePaging='handlePaging'></paging>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="教师列表" name="second">
            <div class="report">
              <div class="table-header">
                <div class="header-left">
                  “十三五"规划情况
                  <div class="header-top"></div>
                </div>
                <div class="header-right">
                  <!-- <el-button type="primary" size="small" @click="addData" plain>新增</el-button>
                  <el-button type="primary" size="small" @click="handleUpload" plain>导入</el-button>
                  <el-button type="primary" size="small" plain>批量删除</el-button> -->
                </div>   
              </div>
              <hr>
              <div class="teachEval">
                <el-table size="mini" :data="tableData1">
                  <el-table-column type="index" label="序号"></el-table-column>
                  <el-table-column
                    v-for="item in headList1"
                    :label="item.label"
                    :prop="item.prop"
                    :key="item.label"
                  ></el-table-column>
                </el-table>
                <paging :total="total2" @handlePaging='handlePaging2'></paging>
              </div>
            </div>
            <div class="report">
              <div class="table-header">
                <div class="header-left">
                  学校专业年度建设计划
                  <div class="header-top"></div>
                </div>
                <div class="header-right">
                  <!-- <el-button type="primary" size="small" @click="addData" plain>新增</el-button>
                  <el-button type="primary" size="small" @click="handleUpload" plain>导入</el-button>
                  <el-button type="primary" size="small" plain>批量删除</el-button> -->
                </div>   
              </div>
              <hr>
              <div class="teachEval">
                <el-table size="mini" :data="tableData2">
                  <el-table-column type="index" label="序号"></el-table-column>
                  <el-table-column
                    v-for="item in headList2"
                    :label="item.label"
                    :prop="item.prop"
                    :key="item.label"
                  ></el-table-column>
                </el-table>
                <paging :total="total3" @handlePaging='handlePaging3'></paging>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="学生列表" name="third">
            <div class="report">
              <div class="teachEval">  
                <BarChart
                  :chartId="barChart.chartId"
                  :yName="barChart.yName"
                  :xAxis="barChart.xAxis"
                  :yAxis="barChart.yAxis"
                  :title="barChart.title"
                  :opinionData="barChart.opinionData"
                  :echartStyle="barChart.echartStyle"
                ></BarChart>
              </div>
            </div>
            <div class="report">
              <div class="table-header">
                <div class="header-left">
                  毕业生就业区域
                  <div class="header-top"></div>
                </div>
                <div class="header-right">
                  <!-- <el-button type="primary" size="small" @click="addData" plain>新增</el-button>
                  <el-button type="primary" size="small" @click="handleUpload" plain>导入</el-button>
                  <el-button type="primary" size="small" plain>批量删除</el-button> -->
                </div>   
              </div>
              <hr>
              <div class="teachEval">
                <el-table size="mini" :data="tableData3">
                  <el-table-column type="index" label="序号"></el-table-column>
                  <el-table-column
                    v-for="item in headList3"
                    :label="item.label"
                    :prop="item.prop"
                    :key="item.label"
                  ></el-table-column>
                </el-table>
                <paging :total="total4" @handlePaging='handlePaging4'></paging>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>
<script>
import BarChart from "../../components/echart/moreBarChart3";
import cardWrapper from '@/components/init/cardWrapper.vue';
import cardList from '@/components/init/cardList.vue';
export default {
  components: {
    BarChart,
    cardWrapper,
    cardList,
  },
    data() {
      return{
      activeName: 'first',
      total: 0,//数据总数
      total1: 0,//数据总数
      total2: 0,//数据总数
      total3: 0,//数据总数
      total4: 0,//数据总数
      totalList: [
        {
          icon: "&#xe83f;",
          name: "贯通专业",
          core: "0"
        },
        {
          icon: "&#xe65b;",
          name: "企业合作数",
          core: "10"
        },
        {
          icon: "&#xe619;",
          name: "省级以上重点专业数",
          core: "1"
        },
        {
          icon: "&#xe65b;",
          name: "双师型教师数",
          core: "24"
        },
        {
          icon: "&#xe60a;",
          name: "学生数",
          core: "2324"
        },
        {
          icon: "&#xe65b;",
          name: "校外简直教师数",
          core: "0"
        },
        {
          icon: "&#xe60a;",
          name: "校外实践基地",
          core: "10"
        },
        {
          icon: "&#xe65b;",
          name: "专任教师数",
          core: "76"
        },
        {
          icon: "&#xe60a;",
          name: "专业总数",
          core: "9"
        }
      ],
      headList: [
        {
          label: "系部",
          prop: "date"
        },
        {
          label: "调研类型",
          prop: "name"
        },
        {
          label: "企业名称",
          prop: "address"
        },
        {
          label: "调研专业",
          prop: "ysxj"
        },
        {
          label: "调研报告",
          prop: "ncys"
        },
        {
          label: "调研内容",
          prop: "tzys"
        },
        {
          label: "提交时间",
          prop: "time"
        }
      ],
      headList1: [
        {
          label: "”十三五“规划指标项",
          prop: "date"
        },
        {
          label: "有无量化目标",
          prop: "name"
        },
        {
          label: "有无按时提交",
          prop: "address"
        },
        {
          label: "有无可实施措施",
          prop: "ysxj"
        }
      ],
      headList2: [
        {
          label: "系部",
          prop: "date"
        },
        {
          label: "年度计划名称",
          prop: "name"
        },
        {
          label: "有无按时提交",
          prop: "address"
        },
        {
          label: "有无量化、对应规划的目标",
          prop: "ysxj"
        },
        {
          label: "有无可实施措施",
          prop: "ysxj"
        },
        {
          label: "得分",
          prop: "ysxj"
        }
      ],
      tableData1:[],
      tableData2:[],
      headList3: [
        {
          label: "学生姓名",
          prop: "date"
        },
        {
          label: "入学编号",
          prop: "name"
        },
        {
          label: "班级",
          prop: "address"
        },
        {
          label: "专业",
          prop: "ysxj"
        },
        {
          label: "就业单位",
          prop: "ysxj"
        },
        {
          label: "就业岗位",
          prop: "ysxj"
        },
        {
          label: "就业单位地区",
          prop: "ysxj"
        },
        {
          label: "就业时间",
          prop: "ysxj"
        }
      ],
      tableData: [
        {name: "xx"},
      ],
      tableData1:[],
      tableData2:[],
      tableData3:[],
      barChart: {
        chartId: "schoolBar",
        title: "各系毕业生就业情况",
        legrendpos: 360,
        rotate:20,
        xAxis: ["制造业", "建筑业和房地产业", "交通运输、仓储和邮政业", "金融业","居民服务、卫生和社会工作","科教文体事业","公共管理、社会组织等","批发零售业","其他"],
        opinionData: [
          { name: "", type: "bar", value: [0.15,0.25,0.35,0.45,0.55,0.65,0.75,0.85,0.95 ] }
        ],
        yName: "",
        echartStyle: { width: "1300px", height: "500px" }
      },
      search: {
        value1: {
          type: "input",
          name: "学生学号",
          model: "",
        },
        value2: {
          type: "input",
          name: "姓名",
          model: ""
        },
        value3: {
          type: "select",
          name: "所在班级",
          model: "",
          options: [
            {
              value: "",
              label: "请选择"
            },
            {
              value: "1001",
              label: "一班"
            }
          ]
        }
      },
      }
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
    methods:{
      handleBtn(keyVal) {
        console.log("search-keyval", keyVal);
      },
      //新增
      addData: function() {
        this.diologTitle = "新增";
        this.dialogVisible1 = true;
      },
      handleUpload() {
        this.up.upShow = true;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handlePaging(currentPage,pagesize){
        console.log('currentPage',currentPage,'pagesize',pagesize)
      },
      handlePaging1(currentPage,pagesize){
        console.log('currentPage',currentPage,'pagesize',pagesize)
      },
      handlePaging2(currentPage,pagesize){
        console.log('currentPage',currentPage,'pagesize',pagesize)
      },
      handlePaging3(currentPage,pagesize){
        console.log('currentPage',currentPage,'pagesize',pagesize)
      },
      handlePaging4(currentPage,pagesize){
        console.log('currentPage',currentPage,'pagesize',pagesize)
      },
    }
}
</script>
<style lang='scss' scoped>
@import "../../common/css/studentIndex";
</style>