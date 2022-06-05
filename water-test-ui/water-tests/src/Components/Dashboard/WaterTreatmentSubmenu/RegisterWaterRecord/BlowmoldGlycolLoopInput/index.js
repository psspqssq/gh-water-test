import React, { useContext } from "react";
import { DashboardContext } from "../../../";
import { Input, Button, Form } from "antd";
import axios from "axios";
import useToken from "../../../../../Middleware/useToken";
const { Item } = Form;
const BlowmoldGlycolLoopInput = () => {
  const { conductivity, ph, glycol } = useContext(DashboardContext);

  const formatting = { whiteSpace: "normal" };
  const buttonFormatting = {
    margin: "0 10px",
    width: "100px",
  };
  const { token } = useToken();
  const handleSubmit = () => {
    if (conductivity.value && ph.value && glycol.value) {
      const baseurl = "http://localhost:8080/api/";
      const postData = async () => {
        const responseRegisterCondensateWater = await axios.post(
          baseurl + "blowmoldglycolwater",
          {
            conductivity: conductivity.value,
            ph: ph.value,
            glycol: glycol.value,
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
      <Item label="Conductivity">
        <Input {...conductivity} style={formatting}></Input>
      </Item>
      <Item label="PH">
        <Input {...ph} style={formatting}></Input>
      </Item>
      <Item label="Glycol">
        <Input {...glycol} style={formatting}></Input>
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

export default BlowmoldGlycolLoopInput;
