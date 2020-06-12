import React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const LikeIcon = props => (
  <Svg width={41} height={41} {...props}>
    <G stroke="#8CC631" fill="none" fillRule="evenodd">
      <Circle cx={20.5} cy={20.5} r={20} />
      <Path
        d="M28.601 13.528a5.217 5.217 0 0 0-8.036.806 5.217 5.217 0 1 0-8.037 6.572l8.036 8.038 8.037-8.038a5.217 5.217 0 0 0 0-7.378z"
        strokeWidth={1.2}
        strokeLinecap="square"
      />
    </G>
  </Svg>
);

export default LikeIcon;
