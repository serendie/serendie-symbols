import type { SVGProps } from "react";
const SvgPhoneOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19.494 5.353-.848-.848L4.503 18.647l.849.849z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m11.065 12.086.848.849-2.528 2.528-.848-.849zm-1.132-1.131L8.71 9.73l1.697-1.697a.85.85 0 0 0 0-1.202L7.577 4.003a.85.85 0 0 0-1.202 0L4.961 5.417a3.975 3.975 0 0 0 0 5.622l2.444 2.444zm.584 5.639 2.4 2.4a3.975 3.975 0 0 0 5.62 0l1.415-1.415a.85.85 0 0 0 0-1.202l-2.829-2.828a.85.85 0 0 0-1.202 0l-1.697 1.697-1.18-1.18z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPhoneOff;
