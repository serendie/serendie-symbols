import type { SVGProps } from "react";
const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.998 7.23a4.771 4.771 0 1 0 0 9.542v1.2a5.971 5.971 0 0 1 0-11.943zm8.024-1.2a5.971 5.971 0 1 1 0 11.942v-1.2a4.771 4.771 0 0 0 0-9.543zM8 9.797a2.202 2.202 0 1 0 0 4.405v1.2a3.402 3.402 0 1 1 0-6.805zm8.023-1.2a3.402 3.402 0 0 1 0 6.805v-1.2a2.202 2.202 0 1 0 0-4.405zM11.999 10.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8m-2.6 1.4a2.6 2.6 0 1 1 5.2 0 2.6 2.6 0 0 1-5.2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRadio;
