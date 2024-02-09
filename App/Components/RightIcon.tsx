import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const RightIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10 8 4 4-4 4"
    />
  </Svg>
);
export default RightIcon;
