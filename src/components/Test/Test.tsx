import React from "react";
import "./Test.scss";

export interface ButtonProps {
  label: string;
}

const Test = (props: ButtonProps) => {
  return <div className="test"><span>Hello Test</span></div>;
};

export default Test;
