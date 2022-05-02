import { Carousel } from "antd";
import React, { FC } from "react";
import { slidingsImages as Datas } from "../data";

interface SliderProps {}

const Slider: FC<SliderProps> = () => {
  return (
    <Carousel autoplay>
      {Datas.map((data) => (
        <div>
          <img
            src={data.path}
            alt={data.altDetails}
            height="612px"
            width="100%"
          />
        </div>
      ))}
    </Carousel>
  );
};
export default Slider;
