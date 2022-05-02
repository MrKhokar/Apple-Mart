import React, { FunctionComponent } from "react";
import { Card, Row, Col } from "antd";
import { cardsData } from "../data";
import Button from "antd/es/button";

interface CardsProps {}

const Cards: FunctionComponent<CardsProps> = () => {
  const { Meta } = Card;
  return (
    <div style={{ padding: "30px" }}>
      <h1
        style={{
          border: "5px solid rgb(235, 237, 240)",
          fontFamily: "fantasy"
        }}>
        Our Products
      </h1>
      <hr />
      <br />
      <Row gutter={16}>
        {cardsData.map((card) => (
          <Col span={6}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: 10,
                marginBottom: 20,
                border: "none"
              }}
              cover={
                <img
                  alt="example"
                  src={card.image}
                  height="500px"
                  width="500px"
                />
              }>
              <Meta title={card.model} description={card.price} />
              <hr />
              <Button type="danger">Buy</Button>
              <hr />
            </Card>
          </Col>
        ))}
      </Row>
      <br />
      <hr />
    </div>
  );
};

export default Cards;
