import React, { useContext } from "react"
import { DashboardContext } from ".."
import "antd/dist/antd.css"
import { Layout } from "antd"
const { Content } = Layout
export const DashboardContent = () => {
  const { selectedTab } = useContext(DashboardContext)

  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        height: 300,
      }}
    >
      {selectedTab === 1 && <h1>Water Treatment Content</h1>}
      {selectedTab === 2 && <h1>Chemco Inventory Content</h1>}
      {selectedTab === 3 && <h1>Account chemco Content</h1>}
    </Content>
  )
}

export default DashboardContent
