import React from "react";
import { Card } from "antd";
export const WaterRecord = (props) => {
  return (
    <Card
      title={
        props.type +
        " Water Record |" +
        " Latest Test: " +
        new Date(props.createdAt).toLocaleString("en-US")
      }
    >
      {props.boilernumber != undefined && (
        <p>Boiler Number: {props.boilernumber}</p>
      )}
      {props.hardness != undefined && <p>Hardness: {props.hardness} ppm</p>}
      {props.alkalinity != undefined && (
        <p>Alkalinity: {props.alkalinity} ppm</p>
      )}
      {props.sulfites != undefined && <p>Sulfites: {props.sulfites} ppm</p>}
      {props.conductivity != undefined && (
        <p>Conductivity: {props.conductivity} µS</p>
      )}
      {props.ph != undefined && <p>PH: {props.ph}</p>}
      {props.blowdown != undefined && (
        <p>Blowdown: {props.blowdown === 0 ? "No" : "Yes"}</p>
      )}
      {props.glycol != undefined && <p>Glycol: {props.glycol}%</p>}
      {props.ptsa != undefined && <p>PTSA: {props.ptsa} ppb</p>}
      {props.freechlorine != undefined && (
        <p>Free Chlorine: {props.freechlorine}</p>
      )}
      {props.location != undefined && (
        <p>Location: {props.location === 0 ? "North" : "South"}</p>
      )}
      {props.temperature != undefined && (
        <p>Temperature: {props.temperature} deg F</p>
      )}
    </Card>
  );
};

export default WaterRecord;
