import React, { useContext } from "react";
import { DashboardContext } from "..";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { FireTwoTone, CloudTwoTone, AppstoreTwoTone } from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;

export const WaterTreatmentSubmenu = () => {
  const { setSelectedMenu } = useContext(DashboardContext);

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={[1]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="subBoiler" icon={<FireTwoTone />} title="Boiler">
          <Menu.Item onClick={() => setSelectedMenu("SeekBoiler")}>
            Seek Records
          </Menu.Item>
          <Menu.Item onClick={() => setSelectedMenu("RegisterBoiler")}>
            New Entry
          </Menu.Item>
        </SubMenu>
        <SubMenu key="subBlowmold" icon={<AppstoreTwoTone />} title="Blowmold">
          <Menu.Item onClick={() => setSelectedMenu("SeekBlowmold")}>
            Seek Records
          </Menu.Item>
          <Menu.Item onClick={() => setSelectedMenu("RegisterBlowmold")}>
            New Entry
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="subCoolingTowers"
          icon={<CloudTwoTone />}
          title="Cooling Towers"
        >
          <Menu.Item onClick={() => setSelectedMenu("SeekCoolingTower")}>
            Seek Records
          </Menu.Item>
          <Menu.Item onClick={() => setSelectedMenu("RegisterCoolingTower")}>
            {" "}
            New Entry
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default WaterTreatmentSubmenu;
