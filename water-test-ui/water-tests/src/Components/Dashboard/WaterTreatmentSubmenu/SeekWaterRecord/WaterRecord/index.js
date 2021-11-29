import React from "react"
import {Card} from "antd"
export const WaterRecord = (props) => {
    return (<Card title={props.type + " Water Record " + (new Date(props.createdAt)).toLocaleString('en-US')} >
       {
           props.alkalinity && <p>Alkalinity: {props.alkalinity}</p>
       }
       {
           props.sulfites && <p>Sulfites: {props.sulfites}</p>}
        {
           props.conductivity && <p>Conductivity: {props.conductivity}</p>}
           {
           props.ph && <p>PH: {props.ph}</p>}
           {
           props.blowdown && <p>Blowdown: {props.blowdown === 0 ? "No":"Yes"}</p>}
           {
           props.boilernumber && <p>Boiler Number: {props.boilernumber}</p>}
    </Card>)
}

export default WaterRecord