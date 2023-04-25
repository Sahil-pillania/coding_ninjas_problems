import React from "react";
import { Button1 } from "./ButtonVariants.styled";

const ButtonView = ({ color, bg, filled, data }) => {
  return (
    <Button1 color={color} bg={bg} filled={filled}>
      {data}
    </Button1>
  );
};

export default ButtonView;
