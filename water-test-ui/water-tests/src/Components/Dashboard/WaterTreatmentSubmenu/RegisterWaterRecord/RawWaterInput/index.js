import React, { useContext } from "react";
import { DashboardContext } from "../../../";
import { Input, Button, Form } from "antd";
import axios from "axios";
import useToken from "../../../../../Middleware/useToken";
const { Item } = Form;
const RawWaterInput = () => {
  const { hardness, conductivity, ph } = useContext(DashboardContext);

  const formatting = { whiteSpace: "normal" };
  const buttonFormatting = {
    margin: "0 10px",
    width: "100px",
  };
  const { token } = useToken();
  const handleSubmit = () => {
    if (hardness.value && conductivity.value && ph.value) {
      const baseurl = "http://localhost:8080/api/";
      const postData = async () => {
        const responseRegisterRawWater = await axios.post(
          baseurl + "rawwater",
          {
            hardness: hardness.value,
            conductivity: conductivity.value,
            ph: ph.value,
          },
          { params: { token } }
        );
      };
      postData();
    } else {
      console.log("something's missing");
    }
  };

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
      <Item label="Hardness">
        <Input {...hardness} style={formatting}></Input>
      </Item>
      <Item label="Conductivity">
        <Input {...conductivity} style={formatting}></Input>
      </Item>
      <Item label="PH">
        <Input {...ph} style={formatting}></Input>
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

export default RawWaterInput;
