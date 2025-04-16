import type { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.175 4.138H12.82v13.128a3.8 3.8 0 0 1-3.024 3.72v-1.239a2.6 2.6 0 0 0 0-4.963v-1.238c.697.144 1.324.48 1.824.949V3.788c0-.47.38-.85.85-.85h5.705zm-9.98 9.419a3.8 3.8 0 0 0 0 7.417V19.73a2.6 2.6 0 0 1 0-4.93z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMusic;
