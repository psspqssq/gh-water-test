import React from "react"
import ReactDOM from "react-dom"
import "antd/dist/antd.css"
import "./index.css"
import { Layout, Menu, Breadcrumb } from "antd"
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons"
import Logo from "../Logo"
import WaterTreatmentSubmenu from "../WaterTreatmentSubmenu"
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const Dashboard = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <Logo />
        </div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Water Treatment</Menu.Item>
          <Menu.Item key="2">Chemco Inventory</Menu.Item>
          <Menu.Item key="3">Account</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <WaterTreatmentSubmenu />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          ></Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Dashboard
