import React, { Component } from "react"
import echarts from "echarts"
class EchartsDemo extends Component {
  state = {
    data: [
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
  }
  componentDidMount() {
    this.myChart = echarts.init(document.getElementById("main"))
    // 绘制图表
    this.updateEcharts(this.state.data)
  }
  componentDidUpdate() {
    this.updateEcharts(this.state.data)
  }
  updateEcharts(data) {
    this.myChart.setOption({
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
            }
          })
        }
      ],
      color: ["#f0f", "#2f4554", "#61a0a8", "#d48265", "#91c7ae"]
    })
  }
  add = () => {
    this.setState({
      data: [
        ...this.state.data,
        {
          id: "4567",
          val: 300,
          text: "测试3"
        }
      ]
    })
  }
  render() {
    console.log(this.state.data)
    return (
      <div>
        <button onClick={this.add}>添一个数据</button>
        <div id='main' style={{ width: 400, height: 400 }} className='main' />
      </div>
    )
  }
}
export default EchartsDemo
