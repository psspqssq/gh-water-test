import React, { useContext } from "react"
import { DashboardContext } from ".."
import "antd/dist/antd.css"
import { Layout, Menu } from "antd"
import { FireTwoTone, SearchOutlined, FileAddTwoTone } from "@ant-design/icons"
const { Sider } = Layout

export const AccountSubmenu = () => {
  const { setSelectedTab } = useContext(DashboardContext)

  return <h1>Account stuff</h1>
}

export default AccountSubmenu
