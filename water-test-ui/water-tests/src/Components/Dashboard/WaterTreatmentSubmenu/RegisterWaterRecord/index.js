import React, { useState, useContext, createContext } from "react";
import { Progress, Button, Input, Carousel, Form, Select } from "antd";

import BoilerInput from "./BoilerInput";
import CondensateInput from "./CondensateInput"
import FeedWaterInput from "./FeedWaterInput"
import RawWaterInput from "./RawWaterInput"
import SoftWaterInput from "./SoftWaterInput"

const { Option } = Select;

export const RegisterWaterRecordContext = createContext(0);

export const RegisterWaterRecord = (props) => {
  const contentStyle = {
    lineHeight: "160px",
  };

  const [recordType, setRecordType] = useState("BoilerRecord")

  const handleRecordTypeChange = (value) => {
    setRecordType(value);
  }
  return (
    <Form>
      <h1>Register new water record</h1>
      <label>Record Type: </label>
      <Select defaultValue="BoilerRecord" onChange={handleRecordTypeChange}>
        <Option value="BoilerRecord">Boiler Record</Option>
        <Option value="CondensateRecord">Condensate Record</Option>
        <Option value="FeedWaterRecord">Feed Water Record</Option>
        <Option value="RawWaterRecord">Raw Water Record</Option>
        <Option value="SoftWaterRecord">Soft Water Record</Option>
      </Select>
      <br />
      <br />
      {recordType == "BoilerRecord" && <BoilerInput></BoilerInput>}
      {recordType == "CondensateRecord" && <CondensateInput></CondensateInput>}
      {recordType == "FeedWaterRecord" && <FeedWaterInput></FeedWaterInput>}
      {recordType == "RawWaterRecord" && <RawWaterInput></RawWaterInput>}
      {recordType == "SoftWaterRecord" && <SoftWaterInput></SoftWaterInput>}
      <br />
      <h1>...</h1>
    </Form>
  );
};

export default RegisterWaterRecord;
