import React from "react";
import Svg, { G, Rect, Text, TSpan } from "react-native-svg";

const UnClaimLogo = props => (
  <Svg width={90} height={30} {...props}>
    <G fill="none" fillRule="evenodd">
      <Rect fill="#B0BBC7" width={90} height={30} rx={15} />
      <Text
        fill="#44566C"
        fontFamily="Verdana"
        fontSize={11}
        fontWeight={500}
      >
        <TSpan x={14} y={18}>
          {`Unclaimed`}
        </TSpan>
      </Text>
    </G>
  </Svg>
);

export default UnClaimLogo;

