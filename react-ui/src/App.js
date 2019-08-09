import React from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import RechartsDemo from "./components/RechartsDemo"

const App = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 2500, amt: 2400 },
    { name: "Page C", uv: 100, pv: 1600, amt: 2400 },
    { name: "Page D", uv: 350, pv: 2200, amt: 2400 },
    { name: "Page E", uv: 200, pv: 1800, amt: 2400 }
  ]
  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 50, right: 20, bottom: 5, left: 0 }}
      >
        <Line activeDot={{ r: 8 }} type='monotone' dataKey='uv' stroke='#ccc' />
        <CartesianGrid stroke='#ccc' strokeDasharray='10 10' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
      </LineChart>
      <RechartsDemo />
    </div>
  )
}
export default App
