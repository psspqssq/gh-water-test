import React, { useEffect, useState } from "react"
import useToken from "../../../../Middleware/useToken"

import axios from "axios"
import { Spin } from "antd"
export const SeekWaterRecord = (props) => {

  const { token } = useToken()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const boilerwater = [
    "boilerwater",
    "feedwater",
    "condensatewater",
    "rawwater",
    "softwater"
  ]
  const coolingtower = [
    "blowmoldglycolwater",
    "coolingtowerwater",
    "chilledglycolwater"
  ]

  switch(props.type){
    case "Boiler": 
                  var requests = boilerwater.map((url)=>{
                    return axios.get("http://localhost:8080/api/"+url,{params: {token}})
                  })
    break
  }
  useEffect(()=>{
    Promise.allSettled(requests).then((responses) => {
      setData(responses)
      
    }).finally(setLoading(false))
  })


  if (loading) {
    return <Spin delay="50" style={{ margin: "auto" }} />
  }
  if (data) {
    return (
      <h1>
        ID: {boilerwater._id} <br />
        Created: {boilerwater.createdAt} <br />
        PH: {boilerwater.ph} <br />
        Alkalinity: {boilerwater.alkalinity} <br />
        Conductivity: {boilerwater.conductivity} <br />
      </h1>
    )
  }
  else {
    <h1>error</h1>
  }
}

export default SeekWaterRecord
