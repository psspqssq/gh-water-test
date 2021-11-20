import React, { useContext, useEffect, useState } from "react"
import { DashboardContext } from ".."
import "antd/dist/antd.css"
import { Layout, Spin } from "antd"
import AccountContent from "../AccountContent"
import SeekWaterRecord from "../WaterTreatmentSubmenu/SeekWaterRecord"
import RegisterWaterRecord from "../WaterTreatmentSubmenu/RegisterWaterRecord"
import SearchShop from "../ShopInventorySubmenu/SearchShop"
import RegisterShop from "../ShopInventorySubmenu/RegisterShop"
import axios from "axios"
import useToken from "../../../Middleware/useToken"

const { Content } = Layout
export const DashboardContent = () => {
  const { selectedTab, selectedMenu } = useContext(DashboardContext)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { token, setToken } = useToken()

  useEffect(() => {
    axios("http://localhost:8080/api/boilerwater", { params: { token } })
      .then((response) => {
        setData(response.data)
        console.log(response)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [token])

  if (loading) {
    return <Spin delay="50" style={{ margin: "auto" }} />
  }
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        height: "100vh",
      }}
    >
      {selectedTab === 1 && selectedMenu === "SeekBoiler" && <SeekWaterRecord type="Boiler" data={data} error={error} />}
      {selectedTab === 1 && selectedMenu === "RegisterBoiler" && <RegisterWaterRecord type="Boiler" />}

      {selectedTab === 1 && selectedMenu === "SeekBlowmold" && <SeekWaterRecord type="Blowmold" />}
      {selectedTab === 1 && selectedMenu === "RegisterBlowmold" && <RegisterWaterRecord type="Blowmold" />}

      {selectedTab === 1 && selectedMenu === "SeekCoolingTower" && <SeekWaterRecord type="Cooling Tower" />}
      {selectedTab === 1 && selectedMenu === "RegisterCoolingTower" && <RegisterWaterRecord type="Cooling Tower" />}

      {selectedTab === 2 && selectedMenu === "SearchShop" && <SearchShop />}
      {selectedTab === 2 && selectedMenu === "RegisterShop" && <RegisterShop />}

      {selectedTab === 3 && <AccountContent />}
    </Content>
  )
}

export default DashboardContent
