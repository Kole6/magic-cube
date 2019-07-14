<!--质量监控对接页面-->
<template>
  <quality :tongNav="tongNav" :resposeList='resposeList'></quality>
</template>
<script>
import quality from "./aTong.vue";
import { HTTP_ROOT,HTTP_INDEX_CENTER } from "@/config/http";
export default {
  components: {
    quality
  },
  data() {
    return {
      modules:[],
      tongNav: [
        // { indexCode: "1001", name: "在校生总数" },
        // { indexCode: "1002", name: "专任教师总数" }
      ],
      resposeList: [
        {
          title: "在校生总数",
          unit: "人",
          type: "bar",
          xData: ["物理系", "生物系", "化学系"],
          yData: [
            {
              name: "情况1",
              data: [820, 932, 901]
            },
            {
              name: "情况2",
              data: [89, 9, 123]
            }
          ]
        },
        {
          title: "在校生总数（历年对比）",
          unit: "%",
          type: "bar",
          xData: ["2017", "2018", "2019"],
          yData: [
            {
              name: "情况1",
              data: [820, 932, 901]
            },
            {
              name: "情况2",
              data: [89, 9, 123]
            }
          ],
          markLine: [{ name: "国家合格标准", data: 111 },{ name: "全国平均值", data: 222 },{name:'全省平均值',data:333},{name:'目标值',data:444}]
        }
      ],
    };
  },
  methods: {
    emitTab(tab) {
      // console.log("tab.indexCode", tab.indexCode);
    },

    //查询菜单对应的页面
    queryPages(menuCode) {
      this.$HTTP.api({
        root: HTTP_INDEX_CENTER,
        url: "/api/center/centermodules/listModules",
        params:{
          "menuCode":menuCode
        },
        method: "POST",
        successCallback: function(result) {
          if (result.code == "0") {
            this.modules=result.data
            let pages=[]
            for(let item of this.modules){
                let have=0;
                for(let i of pages){
                  if(item.pageCode==i.indexCode){
                    have++
                    break
                  }
                }
                if(have==0){
                  pages.push({ indexCode: item.pageCode, name: item.pageName})
                }
            }
            console.log(pages)
            this.tongNav=pages
          } else {
            this.$message({
              type: "error",
              message: result.msg
            });
          }
        }.bind(this)
      });
    },

    //查询图表
    queryChart(moduleCode) {
      this.$HTTP.api({
        root: HTTP_INDEX_CENTER,
        url: "/api/center/centermodulechart/modulecode/"+moduleCode,
        method: "POST",
        successCallback: function(result) {
          if (result.code == "0") {
            let list=result.data
            let x=[]
            let y=[]
            let y1=[]
            let y2=[]
            for(let item of list){
              if(item.idx_name=="计划招生数"){
                 x.push(item.jgmc)
                 y1.push(item.idx_value)
              }
              else if(item.idx_name=="实际录取数"){
                 y2.push(item.idx_value)
              }
            }
            this.xData=x;
            this.yData=[{
              "name":"计划招生数",
              "data":y1
            },
            {
              "name":"实际录取数",
              "data":y2
            }]
          } else {
            this.$message({
              type: "error",
              message: result.msg
            });
          }
        }.bind(this)
      });
    }


  },

  /*
  当 indexCode 为 x001 时，重新加载所有，并且跳转到正确页面
  当 indexCode 变化时，更新图表
  当 vs 变化时，重新加载所有，并且跳转到正确页面
  */
  mounted() {
    //console.log("roo", this.$route);
    //console.log("indexCode", this.$route.params.indexCode);
    //console.log('vs',this.$route.params.vs)
    //this.queryPages(this.$route.params.vs)
    this.queryChart('10002')
  },
  watch: {
    $route(to, from) {
      this.queryPages(this.$route.params.vs)
    }
  }
};
</script>
<style lang='scss' scoped>
</style>