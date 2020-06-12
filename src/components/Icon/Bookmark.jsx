import React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const BookmarkIcon = props => (
  <Svg width={41} height={41} {...props}>
    <G stroke="#8CC631" fill="none" fillRule="evenodd">
      <Circle cx={20.5} cy={20.5} r={20} />
      <Path
        d="M15.8 12h9.9a1.8 1.8 0 0 1 1.8 1.8v14.61a.9.9 0 0 1-1.363.772l-4.46-2.676a1.8 1.8 0 0 0-1.853 0l-4.461 2.676A.9.9 0 0 1 14 28.41V13.8a1.8 1.8 0 0 1 1.8-1.8z"
        strokeWidth={0.9}
      />
    </G>
  </Svg>
);

export default BookmarkIcon;
