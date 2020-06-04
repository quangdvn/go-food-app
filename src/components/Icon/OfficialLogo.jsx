import React from "react";
import Svg, { G, Rect, Text, TSpan } from "react-native-svg";

const OfficialLogo = props => (
  <Svg width={90} height={30} {...props}>
    <G fill="none" fillRule="evenodd">
      <Rect fill="#39B54A" width={90} height={30} rx={15} />
      <Text
        fill="#44566C"
        fontFamily="Verdana"
        fontSize={11}
        fontWeight={500}
      >
        <TSpan x={19} y={18}>
          {`Official`}
        </TSpan>
      </Text>
    </G>
  </Svg>
);

export default OfficialLogo;

