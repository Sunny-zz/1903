import React, { Component } from "react"
import { PieChart, Pie, Sector, Tooltip, Cell, Legend } from "recharts"

const data = [
  { name: "4k-6k", value: 10 },
  { name: "6k-8k", value: 30 },
  { name: "8k-10k", value: 50 },
  { name: "10k-20k", value: 10 }
]

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    percent,
    name
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + outerRadius * cos
  const sy = cy + outerRadius * sin
  const mx = cx + (outerRadius + 20) * cos
  const my = cy + (outerRadius + 20) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 20
  const ey = my
  const textAnchor = cos >= 0 ? "start" : "end"

  return (
    <g>
      {/* <text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
        {payload.name}
      </text> */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {/* <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      /> */}
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill='none'
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 8}
        y={ey + 5}
        textAnchor={textAnchor}
        fill='#333'
      >{`${name}`}</text>
    </g>
  )
}

export default class RechartsDemo extends Component {
  state = {
    activeIndex: 0
  }
  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    })
  }

  render() {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]
    return (
      <PieChart width={400} height={400}>
        <Pie
          // label
          // activeIndex={this.state.activeIndex}
          label={renderActiveShape}
          data={data}
          cx={200}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
          // onMouseEnter={this.onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        {/* <Tooltip /> */}
        <Legend align='right' layout='vertical' />
      </PieChart>
    )
  }
}
