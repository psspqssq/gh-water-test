import React, { useContext } from "react"
import { DashboardContext } from ".."
import "antd/dist/antd.css"
import { Layout } from "antd"
const { Content } = Layout
export const DashboardContent = () => {
  const { selectedTab, selectedMenu } = useContext(DashboardContext)

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
      {selectedTab === 1 && selectedMenu === "SeekBoiler" && <h1>Boiler Seek Content </h1>}
      {selectedTab === 1 && selectedMenu === "RegisterBoiler" && <h1>Boiler Register Content </h1>}

      {selectedTab === 1 && selectedMenu === "SeekBlowmold" && <h1>Blowmold Seek Content </h1>}
      {selectedTab === 1 && selectedMenu === "RegisterBlowmold" && <h1>Blowmold Register Content </h1>}

      {selectedTab === 1 && selectedMenu === "SeekCoolingTower" && <h1>Cooling Towers Seek Content </h1>}
      {selectedTab === 1 && selectedMenu === "RegisterCoolingTower" && <h1>Cooling Towers Register Content </h1>}

      {selectedTab === 2 && selectedMenu === "SearchShop" && <h1>Shop Search</h1>}
      {selectedTab === 2 && selectedMenu === "RegisterShop" && <h1>Shop Register</h1>}

      {selectedTab === 3 && <h1>Account Content</h1>}
    </Content>
  )
}

export default DashboardContent
