import type { SVGProps } from "react";
const SvgWifiOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.503 5.352.848-.848 14.142 14.142-.848.849z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.418 8.53c-.63.433-1.244.945-1.844 1.545l.849.848a11.7 11.7 0 0 1 1.86-1.527zm3.098 3.099a7.9 7.9 0 0 0-1.942 1.446l.849.848c.637-.637 1.297-1.091 1.993-1.395zm2.84 2.839 2.176 2.177a1.663 1.663 0 1 1-2.177-2.177m5.448-.774-2.516-2.517a7.7 7.7 0 0 1 3.135 1.898zm-5.866-5.866a13 13 0 0 1 1.06-.043c2.842 0 5.567 1.13 7.576 3.138l.849-.848a11.91 11.91 0 0 0-8.424-3.49q-1.099-.002-2.138.166z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWifiOff;
