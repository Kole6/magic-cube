<template>
  <div class="student_list">
    <li v-for="(item,index) in data" :key="index">
      <div class="icons" :class="classMap[index]">
        <i class="iconfont" v-html="item.icon"></i>
      </div>
      <div class="student_name">
        <span class="name">{{item.name}}</span>
        <span class="core">{{item.core}}</span>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  name: "cardList",
  props: {
    data: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      classMap: [
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
        "formal",
        "kq",
        "error",
        "person",
        "horny",
        "formal"
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>


<style lang="scss" scoped>

.student_list {
  font-size: 0;
  padding: 10px 10px;
  margin: 20px auto;
  li {
    display: inline-block;
    width: 245px;
    height: 80px;
    margin-right: 8px;
    font-size: 0;
    vertical-align: top;
    background: #f3f3f3;
    margin-bottom: 20px;
    .icons,
    .student_name {
      font-size: 15px;
      display: inline-block;
      height: 80px;
      vertical-align: top;
    }

    .icons {
      width: 80px;
      padding: 13px 0 0 13px;
      box-sizing: border-box;

      .iconfont {
        color: #fff;
        font-size: 50px;
      }
    }

    .kq {
      background: #00bcd4;
    }

    .error {
      background: #8bc34a;
    }

    .person {
      background: #ffa31c;
    }

    .horny {
      background: #ba68c8;
    }

    .formal {
      background: #ef5350;
    }

    .student_name {
      width: 52%;
      vertical-align: top;
      padding: 10px 0 0 10px;
      box-sizing: border-box;

      .name {
        // color: #333;
        color:#606266;
        font-size: 12px;
        display: block;
        height: 30px;
        width: 100%;
      }

      .core {
        display: block;
        font-size: 25px;
        color: #00bcd4;
        margin-left: 25%;
        width: 100%;
      }
    }

    .student_name1 {
      width: 50%;
      background: #fff;
      height: 80px;
      padding: 10px 0 0 10px;
      box-sizing: border-box;
      display: inline-block;
      //
      text-align: center;

      .rise {
        color: #8fca4c;
        font-size: 25px;
        font-weight: 600;
      }

      .down {
        color: #f05350;
        font-size: 25px;
        font-weight: 600;
      }

      .name {
        color: #333;
        font-size: 12px;
        display: block;
      }

      .core {
        display: block;
        font-size: 30px;
        color: #00bcd4;
        margin-top: 10px;
      }
    }

    .student_name1:nth-child(1) {
      border-right: 1px solid #f3f5f9;
    }
  }

  // li:nth-child(5n) {
  //   margin-right: 0;
  // }
}
</style>