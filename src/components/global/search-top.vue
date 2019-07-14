<!--
searchTop 3.0
表格上面的查询框和按钮组件

format="yyyy 年 MM 月 dd 日"
value-format="yyyy-MM-dd"
-->
<template>
  <div class="search-top">
    <div class="search-frame">
      <div class="top-frame" v-for="(itemList,index) of search" :key="index">
        <div v-if="itemList.type=='input'">
          <div class="word">
            <span>{{itemList.name }}：</span>
          </div>
          <div class="input">
            <el-input
              size="small"
              v-model="itemList.model"
              :placeholder="'请输入'+itemList.name"
              clearable
            ></el-input>
          </div>
        </div>

        <div v-else-if="itemList.type=='select'">
          <div class="word">
            <span>{{itemList.name }}：</span>
          </div>
          <div class="input">
            <el-select
              size="small"
              v-model="itemList.model"
              :placeholder="'请选择'+itemList.name"
              clearable
            >
              <el-option
                v-for="(item,index) in itemList.options"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div v-else-if="itemList.type=='date'">
          <div class="word">
            <span>{{itemList.name }}：</span>
          </div>
          <div class="input">
            <el-date-picker
              size="small"
              type="date"
              :placeholder="'请选择'+itemList.name"
              v-model="itemList.model"
              style="width: 100%;"
              clearable
            ></el-date-picker>
          </div>
        </div>
        <div v-else-if="itemList.type=='year'">
          <div class="word">
            <span>{{itemList.name }}：</span>
          </div>
          <div class="input">
            <el-date-picker
              size="small"
              type="year"
              :placeholder="'请选择'+itemList.name"
              v-model="itemList.model"
              style="width: 100%;"
              value-format="yyyy"
              clearable
            ></el-date-picker>
          </div>
        </div>
      </div>
    </div>

    <div class="search-btn">
      <div class="btns liColor-green" @click="handleClick()">查询</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "search-top",
  props: {
    search: {
      type: Object,
      default() {
        return {
          value1: {
            type: "input",
            name: "政策名称政策名称",
            param: ""
          }
        };
      }
    }
  },
  data() {
    return {
      // search: {
      //   value1: {
      //     type: "input",
      //     name: "政策名称政策名称",
      //     param: ""
      //   }
      // },
      searchTest: {
        value1: {
          type: "input",
          name: "政策名称",
          model: ""
        },
        value2: {
          type: "input",
          name: "岗位",
          model: ""
        },
        value3: {
          type: "select",
          name: "岗位",
          model: "",
          options: [
            {
              value: "",
              label: "全部"
            },
            {
              value: "1001",
              label: "岗位1"
            },
            {
              value: "1002",
              label: "岗位2"
            }
          ]
        }
      }
    };
  },
  methods: {
    handleClick() {
      var keyVal = {};
      // 将获取数据key-value形式返回
      for (let s in this.search) {
        keyVal[s] = this.search[s].model;
      }
      this.$emit("clickbtn", keyVal);
    }
  }
};
</script>
<style lang='scss' scoped>
.search-top {
  width: 100%;
  padding: 3px 5px 5px 0;
  //   border: 1px saddlebrown solid;
  font-size: 14px;
  .search-frame {
    margin-right: 100px;
    // border: 1px solid rgb(191, 231, 43);
    .top-frame {
      display: inline-block;
      vertical-align: top;
      margin-top: 5px;
      // width控制每行显示多少个input
      width: 322px;
      //   border: 1px solid darkblue;
      overflow: auto;
      padding: 5px 0 5px 0;
      .word {
        text-align: right;
        float: left;
        width: 138px;
        line-height: 32px;
      }
      .input {
        float: left;
        width: 182px;
      }
    }
  }

  .search-btn {
    // border: 1px saddlebrown solid;
    width: 90px;
    float: right;
    text-align: left;
    margin-top: -40px;
    .btns {
      display: inline;
      background-color: rgb(19, 192, 234);
      color: white;
      line-height: 38px;
      padding: 9px 20px;
      border-radius: 5px;
      user-select: none;
      cursor: pointer;
    }
    .btns:hover {
      opacity: 0.7;
    }
    .liColor-red {
      background-color: rgb(255, 85, 113);
    }
    .liColor-blue {
      background-color: rgb(19, 192, 234);
    }
    .liColor-gray {
      background-color: rgb(188, 188, 188);
    }
    .liColor-green {
      background-color: rgb(0, 193, 126);
    }
    .liColor-yellow {
      background-color: rgb(255, 186, 0);
    }
  }
  .search-btn-one {
    margin-left: 400px;
  }
  .search-btn-two {
    right: 0;
  }
}
</style>

<!--
<search-top :search="search" @clickbtn="handleBtn"></search-top>

search: {
        value1: {
          type: "input",
          name: "姓名",
          model: ""
        },
        value2: {
          type: "select",
          name: "岗位",
          model: "",
          options: [
            {
              value: "",
              label: "全部"
            },
            {
              value: "1001",
              label: "选项1"
            },
            {
              value: "1002",
              label: "选项2"
            }
          ]
        }
      },


handleBtn(keyVal) {
      console.log("search-keyval", keyVal);
    },

-->