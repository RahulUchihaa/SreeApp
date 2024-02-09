import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const UserIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Circle cx={12} cy={6} r={4} stroke={props.stroke} strokeWidth={1.5} />
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.997 18c.003-.164.003-.331.003-.5 0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437"
    />
  </Svg>
);
export default UserIcon;
