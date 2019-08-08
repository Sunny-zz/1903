import React from "react"
import { Button, ConfigProvider, DatePicker, Pagination, Skeleton } from "antd"
import zhCN from "antd/es/locale/zh_CN"

function App() {
  // 设置的是所有 antd 组件的配置
  const myConfig = {
    autoInsertSpaceInButton: false,
    locale: zhCN
  }
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  const changePage = (page, pageSize) => {
    console.log(page, pageSize)
  }
  return (
    <ConfigProvider {...myConfig}>
      <div className='App'>
        <h1>React UI</h1>
        <Button type='primary' ghost>
          按钮
        </Button>
        <Button
          onClick={() => console.log("搜索")}
          type='primary'
          shape='circle'
          icon='search'
        />
        <DatePicker onChange={onChange} />
        <Pagination
          onChange={changePage}
          showSizeChanger
          defaultCurrent={1}
          total={100}
          hideOnSinglePage
          pageSizeOptions={["10", "50", "100"]}
        />
        <Skeleton
          title={false}
          avatar
          loading={true}
          active
          paragraph={{
            rows: 10,
            width: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
          }}
        />
      </div>
    </ConfigProvider>
  )
}
export default App
