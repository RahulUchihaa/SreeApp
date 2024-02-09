import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LogoutIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 7.636V4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-3.136M10 12h11m0 0-3-3.5m3 3.5-3 3.5"
    />
  </Svg>
);
export default LogoutIcon;
