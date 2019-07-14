<!--学校概况-->
<template>
  <div class="teachEval">
    <div id="infoTable">
      <div class="info-table">
        <div class="table-header">
          <div class="header-left">
            学校概况
            <div class="header-top"></div>
          </div>
          <!-- <div class="header-right">
            <el-button type="primary" size="small" @click="addData" plain>新增</el-button>
            <el-button type="primary" size="small" @click="handleUpload" plain>导入</el-button>
            <el-button type="primary" size="small" @click="handleDeleteMore" plain>批量删除</el-button>
          </div>-->
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
          prop: "xmmc"
        },
        {
          label: "国家标准",
          prop: "zjly"
        },
        {
          label: "全国平均",
          prop: "zjly"
        },
        {
          label: "全省平均",
          prop: "zjly"
        },
        {
          label: "本校目标",
          prop: "zjly"
        }
      ],
      tableData: [
        { name: "在校生总数（人)" },
        { name: "专任教师总数" },
        { name: "生师比" },
        { name: "专任教师结构分布" },
        { name: "校舍建筑面积" },
        { name: "生均教学仪器设备值" },
        { name: "生均校内实践教学工位数" },
        { name: "校内机构数" },
        { name: "培训服务" },
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