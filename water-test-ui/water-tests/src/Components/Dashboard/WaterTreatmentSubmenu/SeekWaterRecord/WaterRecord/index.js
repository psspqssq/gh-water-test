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
      {props.alkalinity && <p>Alkalinity: {props.alkalinity}</p>}
      {props.sulfites && <p>Sulfites: {props.sulfites}</p>}
      {props.conductivity && <p>Conductivity: {props.conductivity}</p>}
      {props.ph && <p>PH: {props.ph}</p>}
      {props.blowdown && <p>Blowdown: {props.blowdown === 0 ? "No" : "Yes"}</p>}
      {props.boilernumber && <p>Boiler Number: {props.boilernumber}</p>}
      {props.glycol && <p>Glycol %: {props.glycol}%</p>}
      {props.hardness && <p>Hardness: {props.hardness} ppm</p>}
      {props.ptsa && <p>PTSA: {props.ptsa}</p>}
      {props.freechlorine && <p>Free Chlorine: {props.freechlorine}</p>}
      {props.location && (
        <p>Location: {props.location === 0 ? "North" : "South"}</p>
      )}
      {props.temperature && <p>Temperature: {props.temperature} deg F</p>}
    </Card>
  );
};

export default WaterRecord;
