<template>
  <div>
    <button @click="add">添加</button>
    <div id="main"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "app",
  data() {
    return {
      arr: [
        {
          id: "122",
          val: 300,
          text: "测试"
        },
        {
          id: "123",
          val: 400,
          text: "测试1"
        },
        {
          id: "456",
          val: 500,
          text: "测试2"
        }
      ]
    };
  },

  mounted() {
    // 创建一个在组件内的全局变量
    this.myChart = echarts.init(document.getElementById("main"));
    this.initChart(this.arr);
  },
  methods: {
    add() {
      console.log(1);
      this.arr.push({
        id: "890",
        val: 350,
        text: "测试3"
      });
      this.initChart(this.arr);
    },
    initChart(data) {
      const option = {
        tooltip: {
          extraCssText: "text-align: center;"
        },
        legend: {
          orient: "vertical",
          x: "right",
          y: "middle",
          data: data.map(item => item.text)
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["30%", "60%"],
            avoidLabelOverlap: false,
            data: data.map(item => {
              return {
                value: item.val,
                name: item.text
              };
            })
          }
        ],
        color: ["#f0f", "#2f4554", "#61a0a8", "#d48265", "#91c7ae"]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option);
    }
  }
};
</script>

<style>
#main {
  width: 7.5rem;
  height: 400px;
}
</style>
