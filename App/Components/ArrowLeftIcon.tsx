import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowLeftIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 12H4m0 0 6-6m-6 6 6 6"
    />
  </Svg>
)
export default ArrowLeftIcon
