<!--专业建设-->
<template>
  <div class="teachEval">
    <div id="infoTable">
      <div class="info-table">
        <div class="table-header">
          <div class="header-left">
            专业建设
            <div class="header-top"></div>
          </div>
        </div>
        <hr>
        <div class="table-com">
          <el-table size="mini" :data="tableData" stripe>
            <el-table-column
              v-for="item in headList"
              :label="item.label"
              :prop="item.prop"
              :key="item.label"
            ></el-table-column>
          </el-table>
        </div>
      </div>
      <!-- <div class="info-table">
        <div class="table-header">
          <div class="header-left">
            系部明细
            <div class="header-top"></div>
          </div>
          <div class="header-right">
            <el-button type="primary" size="small" plain>返回</el-button>
          </div>
        </div>
        <hr>
        <div class="table-com">
          <el-table size="mini" :data="tableData" stripe>
            <el-table-column
              v-for="item in headList"
              :label="item.label"
              :prop="item.prop"
              :key="item.label"
            ></el-table-column>
          </el-table>
        </div>
      </div> -->
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      headList: [
        {
          label: "指标名称",
          prop: "name"
        },
        {
          label: "指标值",
          prop: "val1"
        },
        {
          label: "国家标准",
          prop: "val2"
        },
        {
          label: "全国平均",
          prop: "val3"
        },
        {
          label: "全省平均",
          prop: "val4"
        },
        {
          label: "本校目标",
          prop: "val5"
        }
      ],
      
      tableData: [
        { name: "专业开设情况" ,val1:'3200',val2:'1200↑',val3:'3211↓',val4:'2100↑',val5:'2300↑'},
        { name: "专业招生情况" },
        { name: "重点专业情况" },
        { name: "校外实践基地接受顶岗实习学生" },
        { name: "专业合作企业数" }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "@/common/css/indexInfo.scss";
</style>