import styled from "styled-components/native";
import { FontType } from ".";

interface TextProps {
  fontType: FontType;
}

const handleOnSelectFontType = (fontType: FontType) => {
  switch (fontType) {
    case FontType.regular:
      return "OpenSans_400Regular";
    case FontType.semiBold:
      return "OpenSans_600SemiBold";
    case FontType.bold:
      return "OpenSans_700Bold";
  }
};

export const TextContent = styled.Text<TextProps>`
  font-family: ${(props) => handleOnSelectFontType(props.fontType)};
`;
