import React, { useState } from "react";
import { Progress, Button, Input, Carousel } from "antd";
import { useWaterRecordInput } from "../../../../Hooks/useWaterRecordInput";

export const RegisterWaterRecord = (props) => {
  const defaultValues = {};
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
  const contentStyle = {
    lineHeight: "160px",
  };

  return (
    <Carousel effect="fade">
      <div>
        <h1 style={contentStyle}>Uno</h1>
      </div>
      <div>
        <h1 style={contentStyle}>Dos</h1>
      </div>
      <div>
        <h1 style={contentStyle}>Tres</h1>
      </div>
    </Carousel>
  );
};

export default RegisterWaterRecord;
