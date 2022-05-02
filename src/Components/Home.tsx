import React, { FunctionComponent } from "react";
import { Row, Col } from "antd";
import Slider from "./Slider";
import Cards from "./Cards";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <Row>
        <Col>
          <Slider />
        </Col>
      </Row>
      <Cards />
    </div>
  );
};

export default Home;
