<!--个人信息页面-->
<template>
  <div id="info_massage_tail">
    <div class="wy-table2">
      <div v-for="(list,index) in personTail" :key="index">
        <p class="title">{{list.title}}</p>
        <table>
          <tbody>
            <tr v-for="item in Math.ceil(list.data.length/2)" :key="item">
                <td>{{list.data[(item-1)*2].name}}</td>
                <td>{{list.data[(item-1)*2].value}}</td>
                <td v-if="list.data[(item-1)*2 + 1]">{{list.data[(item-1)*2 + 1].name}}</td>
                <td v-if="list.data[(item-1)*2 + 1]">{{list.data[(item-1)*2 + 1].value}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
let date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
const info = [
  {
    name: "入学编号",
    value: date
  },
  {
    name: "姓名",
    value: date
  },
  {
    name: "性别",
    value: date
  },
  {
    name: "出生年月",
    value: date
  },
  {
    name: "籍贯",
    value: date
  },
  {
    name: "岗位",
    value: date
  },
  {
    name: "录用类型",
    value: date
  },
  {
    name: "在岗情况",
    value: date
  },
  {
    name: "教师类别",
    value: date
  },
  {
    name: "手机号",
    value: date
  }
];
export default {
  data() {
    return {
      htmlStr: "",
      personTail: [
        {
          data: info,
          title: "基本信息"
        },
        {
          data:info,
          title:'其他信息'
        },
        {
          data:info,
          title:'信息'
        }
      ]
    };
  },
  created() {
  },
  methods: {
  }
};
</script>
<style lang="scss">
#info_massage_tail {
  @include gobalBackground();
  .title {
    padding-top: 20px;
    text-align: center;
    font-size: 2;
    font-weight: bold;
  }
  .wy-table2 {
    table {
      width: 96%;
      margin: 15px auto;
      border-collapse: collapse;
      text-align: center;
    }
    table td,
    table th {
      border: 1px solid #cad9ea;
      color: #666;
      height: 30px;
      padding-left: 20px;
      padding-right: 20px;
      line-height: 35px;
    }
    table thead th {
      background-color: #cce8eb;
    }
    table td:nth-child(odd) {
      background: #f5fafa;
      width: 150px;
    }
    table td:nth-child(even) {
      background: #fff;
      width: 300px;
      text-align: left;
    }
  }
}
</style>