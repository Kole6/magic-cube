<!--班级情况-->
<template>
  <div id="wrapper">
    <card-wrapper button-name="班级情况">
      <card-list :data="totalList"></card-list>
    </card-wrapper>
    <div class="conment">
      <div class="margin">
        <search-top :search="search" @clickbtn="handleBtn"></search-top>
      </div>
      <div class="report">
        <div class="table-header">
          <div class="header-left">
            学生列表
            <div class="header-top"></div>
          </div>
          <div class="header-right"></div>
        </div>
        <hr />
        <div class="teachEval">
          <el-table size="mini" :data="tableData">
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column
              v-for="item in headList"
              :label="item.label"
              :prop="item.prop"
              :key="item.label"
            ></el-table-column>
            <el-table-column minWidth="50" label="操作">
              <template slot-scope="scope">
                <table-icon icon="查看" @click="setEdit(scope.row)"></table-icon>
              </template>
            </el-table-column>
          </el-table>
          <paging :total="total" @handlePaging="handlePaging"></paging>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cardWrapper from "@/components/init/cardWrapper.vue";
import cardList from "@/components/init/cardList.vue";
export default {
  components: {
    cardWrapper,
    cardList
  },
  data() {
    return {
      activeName: "first",
      total: 0, //数据总数
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
      headList: [
        {
          label: "学号",
          prop: "date"
        },
        {
          label: "姓名",
          prop: "name"
        },
        {
          label: "性别",
          prop: "address"
        },
        {
          label: "系部",
          prop: "ysxj"
        },
        {
          label: "专业",
          prop: "ncys"
        },
        {
          label: "班级",
          prop: "tzys"
        }
      ],
      tableData: [{ name: "xx" }],
      search: {
        value1: {
          type: "input",
          name: "学生学号",
          model: ""
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
    handleBtn(keyVal) {
      console.log("search-keyval", keyVal);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    setEdit(row) {
      this.diologTitle = "查看";
      this.dialogVisible1 = true;
    },
    handlePaging(currentPage, pagesize) {
      console.log("currentPage", currentPage, "pagesize", pagesize);
      //this.getList(currentPage,pagesize);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../common/css/studentIndex";
</style>