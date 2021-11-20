import React, { createContext, useState } from "react"
import "antd/dist/antd.css"
import "./index.css"
import { Layout, Menu } from "antd"
import Logo from "../Logo"
import WaterTreatmentSubmenu from "./WaterTreatmentSubmenu"
import DashboardContent from "./DashboardContent"
import ShopInventorySubmenu from "./ShopInventorySubmenu"

const { Header } = Layout

export const DashboardContext = createContext(0)

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(1)
  const [selectedMenu, setSelectedMenu] = useState(1)
  return (
    <DashboardContext.Provider value={{ selectedTab, setSelectedTab, selectedMenu, setSelectedMenu }}>
      <Layout>
        <Header className="header">
          <div className="logo">
            <Logo />
          </div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={[selectedTab]}>
            <Menu.Item key="1" onClick={() => setSelectedTab(1)}>
              Water Treatment
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setSelectedTab(2)}>
              Shop Inventory
            </Menu.Item>
            <Menu.Item key="3" onClick={() => setSelectedTab(3)}>
              Account
            </Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ minHeight: "85vh", display: "flex" }}>
          {selectedTab === 1 && <WaterTreatmentSubmenu />}
          {selectedTab === 2 && <ShopInventorySubmenu />}
          <Layout style={{ padding: "0 24px 24px" }}>
            <DashboardContent />
          </Layout>
        </Layout>
      </Layout>
    </DashboardContext.Provider>
  )
}

export default Dashboard
