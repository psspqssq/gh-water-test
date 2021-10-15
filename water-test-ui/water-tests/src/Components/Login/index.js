import React, { useState } from "react"
import { Button, Input, Space, Row, notification } from "antd"
import Logo from "../Logo"
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"
import PropTypes from "prop-types"

async function loginUser(credentials) {
  return fetch("http://192.168.1.4:8080/api/user/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json())
}
const openNotificationWithIcon = (type, tries) => {
  notification[type]({
    message: "Incorrect Credentials",
    description: "You have entered the wrong username or password, please try again",
  })
}
export default function Login({ setToken }) {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [loginTries, setLoginTries] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoginTries(loginTries + 1)
    const token = await loginUser({
      username,
      password,
    })
    if (token.success) {
      setToken(token)
    } else {
      openNotificationWithIcon("warning", "Incorrect Credentials")
    }
  }

  return (
    <div className="App">
      <Row type="flex" align="middle" justify="center" style={{ height: "100vh" }}>
        <Space direction="vertical" style={{ marginTop: "-40vh" }}>
          <Logo></Logo>
          <p>Log in to continue</p>
          <Input onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
          <Input.Password
            placeholder="Password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit}>Login</Button>
        </Space>
      </Row>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
}
