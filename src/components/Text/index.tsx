import React from "react";
import { TextContent } from "./styles";

interface TextProps {
  children?: React.ReactChild;
  type: FontType;
}

export enum FontType {
  regular = "regular",
  semiBold = "semiBold",
  bold = "bold",
}

const Text = ({ children, type }: TextProps) => {
  return <TextContent fontType={type}>{children}</TextContent>;
};

export default Text;
