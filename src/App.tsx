import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { PageHeader, Row, Col } from "antd";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contacts";
import Products from "./Components/Products";

const App: FC = () => { 
  const image = (
    <img
      className="icon"
      src={require("./images/icon.png")}
      alt="icon"
      height="50px"
    />
  );
  return (
    <div className="App">
      <Row gutter={24}>
        <Col span={24}>
          <PageHeader
            style={{
              border: "5px solid rgb(235, 237, 240)"
            }}
            title={image}
          />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Col>
      </Row>

      <Row>
        <Footer />{" "}
      </Row>
    </div>
  );
};

export default App;
