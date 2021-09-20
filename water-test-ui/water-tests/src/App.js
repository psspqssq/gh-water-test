import React from "react"
import { Button, Input, Space, Row } from "antd"
import Logo from "./Components/Logo"
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"
import "./App.css"

const App = () => (
  <div className="App">
    <Row type="flex" align="middle" justify="center" style={{ height: "100vh" }}>
      <Space direction="vertical" style={{ marginTop: "-40vh" }}>
        <Logo></Logo>
        <p>Log in to continue</p>
        <Input placeholder="Username" />
        <Input.Password placeholder="Password" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
        <Button>Login</Button>
      </Space>
    </Row>
  </div>
)

export default App
