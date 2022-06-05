import React, { useEffect, useState, useContext } from "react";
import useToken from "../../../../Middleware/useToken";
import { Row, Col } from "antd";
import { DashboardContext } from "../..";

import axios from "axios";
import { Spin } from "antd";
import WaterRecord from "./WaterRecord";
export const SeekWaterRecord = (props) => {
  const { token } = useToken();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { selectedMenu } = useContext(DashboardContext);
  useEffect(() => {
    const baseurl = "http://localhost:8080/api/";
    const fetchData = async () => {
      const responseBoilerWater = await axios(baseurl + "boilerwater", {
        params: { token },
      }).catch((error) => {
        setError(error);
      });
      const responseCondensateWater = await axios(baseurl + "condensatewater", {
        params: { token },
      }).catch((error) => {
        setError(error);
      });
      const responseFeedWater = await axios(baseurl + "feedwater", {
        params: { token },
      }).catch((error) => {
        setError(error);
      });
      const responseRawWater = await axios(baseurl + "rawwater", {
        params: { token },
      }).catch((error) => {
        setError(error);
      });
      const responseSoftWater = await axios(baseurl + "softwater", {
        params: { token },
      }).catch((error) => {
        setError(error);
      });
      const responseBlowmoldGlycolWater = await axios(
        baseurl + "blowmoldglycolwater",
        {
          params: { token },
        }
      ).catch((error) => {
        setError(error);
      });

      setData({
        boiler: responseBoilerWater,
        condensate: responseCondensateWater,
        feed: responseFeedWater,
        raw: responseRawWater,
        soft: responseSoftWater,
        blowmoldglycol: responseBlowmoldGlycolWater,
      });
    };
    try {
      fetchData().then(() => {
        setLoading(false);
      });
    } catch (error) {
      setError(error);
    }
  }, [token]);

  if (error) {
    {
      localStorage.clear();
      window.location.reload(false);
      return <h1>Error loading... refresh to continue.</h1>;
    }
  }

  if (loading) {
    return <Spin delay="50" size="large" style={{ margin: "auto" }} />;
  }

  if (data) {
    console.log(data);
    return (
      <Row gutter={[16, 16]} justify="center" align="middle">
        {selectedMenu == "SeekBoiler" && (
          <Col>
            <WaterRecord type="Boiler" {...data.boiler.data} />
          </Col>
        )}
        {selectedMenu == "SeekBoiler" && (
          <Col>
            <WaterRecord type="Condensate" {...data.condensate.data} />
          </Col>
        )}
        {selectedMenu == "SeekBoiler" && (
          <Col>
            <WaterRecord type="Feed" {...data.feed.data} />
          </Col>
        )}
        {selectedMenu == "SeekCoolingTower" && (
          <Col>
            <WaterRecord type="Raw" {...data.raw.data} />
          </Col>
        )}

        {selectedMenu == "SeekCoolingTower" && (
          <Col>
            <WaterRecord type="BlowmoldGlycol" {...data.blowmoldglycol.data} />
          </Col>
        )}

        {selectedMenu == "SeekBoiler" && (
          <Col>
            <WaterRecord type="Soft" {...data.soft.data} />
          </Col>
        )}
      </Row>
    );
  } else {
    <h1>error</h1>;
  }
};

export default SeekWaterRecord;
