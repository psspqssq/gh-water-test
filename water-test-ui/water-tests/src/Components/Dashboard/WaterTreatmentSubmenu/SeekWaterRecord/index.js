import React from "react"

export const SeekWaterRecord = (props) => {
  if (props.data) {
    return (
      <h1>
        ID: {props.data._id} <br />
        Created: {props.data.createdAt} <br />
        PH: {props.data.ph} <br />
        Alkalinity: {props.data.alkalinity} <br />
        Conductivity: {props.data.conductivity} <br />
      </h1>
    )
  }
}

export default SeekWaterRecord
