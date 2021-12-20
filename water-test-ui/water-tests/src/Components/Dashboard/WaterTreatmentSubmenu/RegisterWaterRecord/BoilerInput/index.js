import React, { Fragment, useContext } from "react"
import { RegisterWaterRecordContext } from ".."
import { Input, Button } from "antd"
const BoilerInput = () => {
    const {
        ...alkalinity
    } = useContext(RegisterWaterRecordContext)
    const {
        ...sulfites
    } = useContext(RegisterWaterRecordContext)
    const {
        ...conductivity
    } = useContext(RegisterWaterRecordContext)
    const {
        ...ph } = useContext(RegisterWaterRecordContext)
    const {
        ...blowdown
    } = useContext(RegisterWaterRecordContext)
    const {
        ...boilernumber } = useContext(RegisterWaterRecordContext)
    return (<Fragment>
        <Input addonBefore="Alkalinity" {...alkalinity}></Input>
        <Input addonBefore="Sulfites" {...sulfites}></Input>
        <Input addonBefore="Conductivity" {...conductivity}></Input>
        <Input addonBefore="PH" {...ph}></Input>
        <label>Boiler Blowdown?</label>
        <Button type={blowdown.value == 1 && "primary"} onClick={() => { blowdown.setValue(1) }}>Yes</Button>
        <Button type={blowdown.value == 0 && "primary"} onClick={() => { blowdown.setValue(0) }}>No</Button>
        <label>Boiler Number?</label>
        <Button type={boilernumber.value == 1 && "primary"} onClick={() => { boilernumber.setValue(1) }}>#1</Button>
        <Button type={boilernumber.value == 2 && "primary"} onClick={() => { boilernumber.setValue(2) }}>#2</Button>
    </Fragment >)
}

export default BoilerInput