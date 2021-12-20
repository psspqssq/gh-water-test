import React, { createContext, useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import Logo from "../Logo";
import WaterTreatmentSubmenu from "./WaterTreatmentSubmenu";
import DashboardContent from "./DashboardContent";
import ShopInventorySubmenu from "./ShopInventorySubmenu";
import { useWaterRecordInput } from "../../Hooks/useWaterRecordInput";

const { Header } = Layout;
const { SubMenu } = Menu;

export const DashboardContext = createContext(0);

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState(1);
  const { ...alkalinity } = useWaterRecordInput("alkalinity");
  const { ...sulfites } = useWaterRecordInput("sulfites");
  const { ...conductivity } = useWaterRecordInput("conductivity");
  const { ...ph } = useWaterRecordInput("ph");
  const { ...blowdown } = useWaterRecordInput("blowdown");
  const { ...boilernumber } = useWaterRecordInput("boilernumber");
  const { ...glycol } = useWaterRecordInput("glycol");
  const { ...hardness } = useWaterRecordInput("hardness");
  const { ...ptsa } = useWaterRecordInput("ptsa");
  const { ...freechlorine } = useWaterRecordInput("freechlorine");
  const { ...location } = useWaterRecordInput("location");
  const { ...temperature } = useWaterRecordInput("temperature");
  return (
    <DashboardContext.Provider
      value={{
        selectedTab, setSelectedTab, selectedMenu, setSelectedMenu,
        ...alkalinity,
        ...sulfites,
        ...conductivity,
        ...ph,
        ...blowdown,
        ...boilernumber,
        ...glycol,
        ...hardness,
        ...ptsa,
        ...freechlorine,
        ...location,
        ...temperature
      }}
    >
      <Layout>
        <Header className="header">
          <div className="logo">
            <Logo />
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[selectedTab]}
          >
            <Menu.Item key="1" onClick={() => setSelectedTab(1)}>
              Water Treatment
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setSelectedTab(2)}>
              Shop Inventory
            </Menu.Item>
            <SubMenu key="3" title="My Account" style={{ marginLeft: "auto" }}>
              <Menu.Item
                onClick={() => {
                  setSelectedTab(3);
                }}
              >
                Settings
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  localStorage.clear();
                  window.location.reload(false);
                }}
              >
                Log Out
              </Menu.Item>
            </SubMenu>
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
  );
};

export default Dashboard;
