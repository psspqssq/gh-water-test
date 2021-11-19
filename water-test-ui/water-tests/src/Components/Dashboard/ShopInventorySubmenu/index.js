import React, { useContext } from "react"
import { DashboardContext } from ".."
import "antd/dist/antd.css"
import { Layout, Menu } from "antd"
import { SearchOutlined, FileAddTwoTone } from "@ant-design/icons"
const { Sider } = Layout

export const ShopInventorySubmenu = () => {
  const { setSelectedMenu } = useContext(DashboardContext)

  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
        <Menu.Item key="subSearch" icon={<SearchOutlined />} title="Search" onClick={() => setSelectedMenu("SearchShop")}>
          Search
        </Menu.Item>
        <Menu.Item key="subRegister" icon={<FileAddTwoTone />} title="Register" onClick={() => setSelectedMenu("RegisterShop")}>
          Register
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default ShopInventorySubmenu
