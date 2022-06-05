import React, { useState, useContext, createContext } from "react";
import { Progress, Button, Input, Carousel, Form, Select } from "antd";

import BoilerInput from "./BoilerInput";
import CondensateInput from "./CondensateInput";
import FeedWaterInput from "./FeedWaterInput";
import RawWaterInput from "./RawWaterInput";
import SoftWaterInput from "./SoftWaterInput";
import BlowmoldGlycolLoopInput from "./BlowmoldGlycolLoopInput";

const { Option } = Select;

export const RegisterWaterRecordContext = createContext(0);

export const RegisterWaterRecord = (props) => {
  const contentStyle = {
    lineHeight: "160px",
  };

  const [recordType, setRecordType] = useState("BoilerRecord");

  const handleRecordTypeChange = (value) => {
    setRecordType(value);
  };

  const selectFormatting = {
    minWidth: "200px",
    margin: "15px",
  };
  const divStyle = {
    borderStyle: "dashed",
    borderRadius: "15px",
    maxWidth: "400px",
    margin: "0 auto",
  };
  return (
    <Form>
      <h2>Register new water record</h2>
      <br />
      <div style={divStyle}>
        <label>
          <b>Record Type:</b>{" "}
        </label>
        <Select
          defaultValue="BoilerRecord"
          style={selectFormatting}
          onChange={handleRecordTypeChange}
        >
          <Option value="BoilerRecord">Boiler Record</Option>
          <Option value="CondensateRecord">Condensate Record</Option>
          <Option value="FeedWaterRecord">Feed Water Record</Option>
          <Option value="RawWaterRecord">Raw Water Record</Option>
          <Option value="SoftWaterRecord">Soft Water Record</Option>
          <Option value="PlantGlycolWaterRecord">Plant Glycol Loop</Option>
        </Select>
      </div>
      <br />
      <br />
      <br />
      {recordType == "BoilerRecord" && <BoilerInput></BoilerInput>}
      {recordType == "CondensateRecord" && <CondensateInput></CondensateInput>}
      {recordType == "FeedWaterRecord" && <FeedWaterInput></FeedWaterInput>}
      {recordType == "RawWaterRecord" && <RawWaterInput></RawWaterInput>}
      {recordType == "SoftWaterRecord" && <SoftWaterInput></SoftWaterInput>}
      {recordType == "PlantGlycolWaterRecord" && (
        <BlowmoldGlycolLoopInput></BlowmoldGlycolLoopInput>
      )}
    </Form>
  );
};

export default RegisterWaterRecord;
