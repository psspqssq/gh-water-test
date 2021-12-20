import React, { Fragment, useContext, useEffect } from "react";
import { DashboardContext } from "../../../";
import { Input, Button, Form } from "antd";
import axios from "axios";
import useToken from "../../../../../Middleware/useToken";
const { Item } = Form;
const BoilerInput = () => {
  const { alkalinity, sulfites, conductivity, ph, blowdown, boilernumber } = useContext(DashboardContext);

  const formatting = { whiteSpace: "normal" };
  const buttonFormatting = {
    margin: "0 10px",
    width: "100px",
  };
  const { token } = useToken();
  const handleSubmit = () => {
    if (alkalinity.value && sulfites.value && conductivity.value && ph.value && blowdown.value && boilernumber.value) {
      const baseurl = "http://localhost:8080/api/";
      const postData = async () => {
        const responseRegisterBoilerWater = await axios.post(
          baseurl + "boilerwater", { alkalinity: alkalinity.value, sulfites: sulfites.value, conductivity: conductivity.value, ph: ph.value, blowdown: blowdown.value, boilernumber: boilernumber.value }, { params: { token } }
        )
      }
      postData()
    } else {
      console.log("something's missing");
    }
  };

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
      <Item label="Alkalinity">
        <Input {...alkalinity} style={formatting}></Input>
      </Item>
      <Item label="Sulfites">
        <Input {...sulfites} style={formatting}></Input>
      </Item>
      <Item label="Conductivity">
        <Input {...conductivity} style={formatting}></Input>
      </Item>
      <Item label="PH">
        <Input {...ph} style={formatting}></Input>
      </Item>
      <Item label="Boiler blowdown?">
        <Button
          type={blowdown.value === 1 && "primary"}
          style={buttonFormatting}
          onClick={() => {
            blowdown.setValue(1);
          }}
        >
          Yes
        </Button>
        <Button
          type={blowdown.value === 0 && "primary"}
          style={buttonFormatting}
          onClick={() => {
            blowdown.setValue(0);
          }}
        >
          No
        </Button>
      </Item>
      <Item label="Boiler Number?">
        <Button
          type={boilernumber.value === 1 && "primary"}
          style={buttonFormatting}
          onClick={() => {
            boilernumber.setValue(1);
          }}
        >
          #1
        </Button>

        <Button
          type={boilernumber.value === 2 && "primary"}
          style={buttonFormatting}
          onClick={() => {
            boilernumber.setValue(2);
          }}
        >
          #2
        </Button>
      </Item>
      <br />
      <Item wrapperCol={{ offset: 1, span: 20 }}>
        <Button type="primary" style={buttonFormatting} onClick={handleSubmit}>
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default BoilerInput;
