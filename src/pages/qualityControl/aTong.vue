<!--注：通用页面  业务逻辑不要在这里写 -->
<template>
  <div class="eval">
    <div class="tong">
      <!----------- left menu ----------->
      <div class="tabs-left">
        <div
          class="left-el"
          v-for="(item,i) of tongNav"
          :key="i"
          :class="{'tabSelect':navSelect == i}"
          @click="selectNav(item,i)"
        >{{item.name}}</div>
      </div>

      <!----------- right picture ----------->
      <div class="tabs-right">
        <div v-for="(res,i) of resposeList" :key="i">
          <div class="right-title">
            <span>{{res.title}}</span>
            <span class="unit">{{res.unit?`（${res.unit}）`:''}}</span>
          </div>
          <div class="tong-chart">
            <chart-im
              :xData="res.xData"
              :yData="res.yData"
              :chartType="res.type"
              :markLine="res.markLine?res.markLine:[]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import chartIm from "@/components/echart/chartIm2";
export default {
  props: {
    tongNav: [Array],
    resposeList: [Array]
  },
  components: {
    chartIm
  },
  data() {
    return {
      navSelect: 0
    };
  },
  mounted() {},
  methods: {
    selectNav(tab, i) {
      this.navSelect = i;
      this.$emit("emitTab", tab);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/style/pages/tong.scss";
</style>