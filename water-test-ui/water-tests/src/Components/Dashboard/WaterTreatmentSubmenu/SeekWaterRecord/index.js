import React, { useEffect, useState } from "react";
import useToken from "../../../../Middleware/useToken";
import { Row, Col } from "antd";

import axios from "axios";
import { Spin } from "antd";
import WaterRecord from "./WaterRecord";
export const SeekWaterRecord = (props) => {
  const { token } = useToken();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

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

      setData({
        boiler: responseBoilerWater,
        condensate: responseCondensateWater,
        feed: responseFeedWater,
        raw: responseRawWater,
        soft: responseSoftWater,
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
    }
  }

  if (loading) {
    return <Spin delay="50" style={{ margin: "auto" }} />;
  }

  if (data) {
    console.log(data);
    return (
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col>
          <WaterRecord type="Boiler" {...data.boiler.data} />
        </Col>
        <Col>
          <WaterRecord type="Condensate" {...data.condensate.data} />
        </Col>
        <Col>
          <WaterRecord type="Feed" {...data.feed.data} />
        </Col>
        <Col>
          <WaterRecord type="Raw" {...data.raw.data} />
        </Col>
        <Col>
          <WaterRecord type="Soft" {...data.soft.data} />
        </Col>
      </Row>
    );
  } else {
    <h1>error</h1>;
  }
};

export default SeekWaterRecord;
