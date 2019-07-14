<!--首页-->
<template>
  <div class="home">
    <div class="picture">
      <el-carousel :interval="5000" >
        <el-carousel-item v-for="(item,i) of picList" :key="i">
          <img :src="item" alt>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="label" v-if="columnMock">
      <div class="ul-head">
        <ul>
          <li
            v-for="(item,i) of labelList"
            :key="i"
            @mouseenter="mouseEnter(item,i)"
            @click="watchDetail()"
            :class="{'hov':i==indexLi}"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="ul-body-container">
        <div class="ul-body">
          <div class="ul-body-btn">
            <el-button type="primary" size="mini" plain @click="watchDetail()">查看更多</el-button>
          </div>
          <!-- <article-list :data="msg" :options="options" :handleRouter="handleRouter"></article-list> -->
        </div>
      </div>
    </div>
    <div class="middle-body">
      <div class="card-src">
        <div class="card-div" v-for="(item,index) of carder" :key="index" @click="wantTo(item)">
          <div class="card-body">
            <div class="card-content">
              <div class="card-content-left">
                <p class="iconfont icon1" v-html="item.icon"></p>
              </div>
              <div class="card-content-right">
                <p class="card-title">{{item.name}}</p>
                <p class="card-enTitle">{{item.enName}}</p>
              </div>
            </div>
            <p class="iconfont icon2" v-html="item.icon"></p>
            <div class="body-bottom"></div>
          </div>
        </div>
        <!-- <div class="card-div"  @click="wantTo2()">
          <div class="card-body">
            <div class="card-content">
              <div class="card-content-left">
                <p class="iconfont icon1">&#xe68c;</p>
              </div>
              <div class="card-content-right">
                <p class="card-title">企业招聘</p>
                <p class="card-enTitle">QI YE ZHAO PING</p>
              </div>
            </div>
            <p class="iconfont icon2">&#xe68c;</p>
            <div class="body-bottom"></div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Mock from "@/config/mock_data/home_menu.js";
// import articleList from "@/components/indexModules/articleList.vue";
import {
  HTTP_ROOT,
  HTTP_ROOT_ADMIN,
  SCHOOL_CODE,
  PRO_ID,
  HTTP_TEMPLATE
} from "@/config/http";
import axios from "axios";
// import { win32 } from 'path';
// todo 引入文件的绝对路径设置
export default {
    name:'home',
//   components: { articleList },
  data() {
    return {
      columnMock,
      picList: [
        require("@/assets/img/indexHome/home_pic_1.png"),
        require("@/assets/img/indexHome/home_pic_2.png")
      ],
      labelList: [
        {
          name: "网上调查",
          msgList: [
            {
              title: "1我校将落实“双一流建设”具体举措",
              body:
                "2018-09-01--- 设计,找准发展路径,尽早规划部对接...将作为我国月球探测后续任务科学载荷的备选方案.来校就重庆市支持学校加快 “双一流”建设对接..."
            },
            {
              title: "我校将落实“双一流建设”具体举措",
              body:
                "2018-09-01--- 设计,找准发展路径,尽早规划部对接...将作为我国月球探测后续任务科学载荷的备选方案.来校就重庆市支持学校加快 “双一流”建设对接..."
            }
          ],
        },
        {
          name: "学校制度",
          msgList: [
          ],
          options:{title:'bt',label:'content'},
        },
        {
          name: "通知公告",
          msgList: [
          ],
          options:{title:'bt',label:'content'},
        },
        {
          name: "数据预警",
          msgList: [
          ],
          options:{title:'jkd',label:'result'},
        },
        {
          name: "家校互动",
          msgList: [
            {
              title: "学生家长",
              body: "凌霄家长：张老师我家孩子最近还好吗？"
            },
            {
              title: "回复留言",
              body: "我：很好，学校成绩有进步。"
            }
          ]
        }
      ],
      options:{},
      carder: [],
      msg: [],
      indexLi: 0
    };
  },
  mounted() {
    this.msg = this.labelList[0].msgList;
    //获取carder
    this.carder = this.getMenuFlag("1");
    // this.fetchData();
  },
  methods: {
    handleRouter(item){
        let name = this.labelList[this.indexLi].name;
        if(name =='数据预警'){
          this.$router.push({ name: "notice", params: { id: "titleDetail",data:item,name} });
        }else{
          this.$router.push({name:'textDetail',params:{id:'titleDetail',data:item,name}})
        }
    },
    fetchData() {
      // 数据预警
      this.$HTTP.api({
        url: "api/baseInfo/warningRecord/query",
        method: "POST",
        params: {
          jszbh: localStorage.getItem("userId")
        },
        successCallback: function(result) {
          if(result.code == 0){
            this.labelList.forEach(item => {
                if(item.name === '数据预警'){
                  item.msgList=result.data;
                }
            });
          }
        }.bind(this)
      });
      // 通知公告
        this.$HTTP.api({
          url: "api/baseInfo/indexSjcjTzgg/list",
          method: "POST",
          params: {
              limt: 2,page:1,fbzt:'已发布'
          },
          successCallback: function(result) {
            if(result.code == 0){
              let data = this.transformData(result.data.list);
              this.labelList.forEach(item => {
                  if(item.name === '通知公告'){
                    item.msgList=data;
                  }
              });
            }
          }.bind(this)
        });

        // 学校制度
        this.$HTTP.api({
          url: "api/baseInfo/indexSjcjXxzd/list",
          method: "POST",
          params: {
              limt: 2,page:1,fbzt:'已发布'
          },
          successCallback: function(result) {
            if(result.code == 0){
              let data = this.transformData(result.data.list);
              this.labelList.forEach(item => {
                  if(item.name === '学校制度'){
                    item.msgList=data;
                  }
              });
            }
          }.bind(this)
        });

    },
    transformData(data){
      return data.map(item=>{
        let str = item.zw.substring(0,80);
        let date = new Date(item.fbrq).format('yyyy-MM-dd')
        return {
          ...item,
          content:date+'--'+str
        }
      })
    },
    watchMoreInfo() {
      this.$message("查看更多");
    },
    watchDetail() {
      let name = this.labelList[this.indexLi].name;
      if (name === "网上调查") {
        this.$router.push({
          name: "onlineSurvey",
          params: { id: "titleDetail" }
        });
      } else if (name === "家校互动") {
        this.$router.push({
          name: "schoolSystem",
          params: { id: "titleDetail" }
        });
      } else if (name === "数据预警") {
        this.$router.push({ name: "notice", params: { id: "titleDetail" } });
      }else if (name === "学校制度") {
        this.$router.push({
          name: "xxzdDetail",
          params: { name: "titleDetail" }
        });
      }else if (name === "通知公告") {
          this.$router.push({
              name: "tzggDetail",
              params: { name: "titleDetail" }
          });
      }else {
          this.$router.push({
              name: "dataDetail",
              params: { name: "titleDetail" }
          });
      }
    },
    mouseEnter(obj, i) {
      this.indexLi = i;
      this.msg = obj.msgList;
      this.options = obj.options;
    },
    handleMore() {
      this.$message("查看更多");
    },
    getMenuFlag(flag) {
      var menuArr = menuMock
        ? Mock
        : JSON.parse(localStorage.menuTrees);
      var cardArr = [];
      for (let i of menuArr) {
        if (i.menuFlag && i.menuFlag == flag) {
          cardArr.push(i);
        }
      }
      return cardArr;
    },
    wantTo(item) {
      let ob = {};
      for (let i of this.carder) {
        if (i.href == item.href) {
          ob.name = i.name;
          ob.href = i.href;
          ob.menuList = i.children;
          break;
        }
      }
      // window.localStorage.setItem("menuObj", JSON.stringify(ob));
      if (ob.menuList && ob.menuList.length) {
        this.$store.commit('UPDATE_ICON',true)
        this.$router.push({
          path: ob.menuList[0].href
            ? ob.menuList[0].href
            : ob.menuList[0].children[0].href
        });
      } else {
        this.$store.commit('UPDATE_ICON',false)
        this.$router.push({ path: ob.href });
      }
    },
    wantTo2(){
      window.open('https://www.baidu.com/')
    },
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/style/pages/home.scss";
.ul-body-el {
  cursor: pointer;
}
</style>