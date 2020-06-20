import React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
const EatIcon = props => (
  <Svg width={41} height={41} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        d="M22.15 22.75v6.751l-.688 1.29c-.148.279-.476.279-.624 0l-.688-1.29v-6.75c.66.166 1.34.166 2 0zM20.85 11c3.23 0 5.85 2.518 5.85 5.625s-2.62 5.625-5.85 5.625c-3.23 0-5.85-2.518-5.85-5.625S17.62 11 20.85 11zm-3.25 5.313c0-1.551 1.312-2.813 2.925-2.813.18 0 .325-.14.325-.313a.319.319 0 0 0-.325-.312c-1.971 0-3.575 1.542-3.575 3.438 0 .172.146.312.325.312.18 0 .325-.14.325-.313z"
        fill="#ACD45E"
        fillRule="nonzero"
      />
      <Circle stroke="#8CC631" cx={20.5} cy={20.5} r={20} />
    </G>
  </Svg>
);

export default EatIcon;
