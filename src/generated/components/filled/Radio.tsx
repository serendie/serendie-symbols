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
      d="M18.428 9.595a3.403 3.403 0 0 1-2.406 5.808v-1.2a2.202 2.202 0 1 0 0-4.405v-1.2c.902 0 1.768.359 2.406.997"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.245 7.778a5.971 5.971 0 0 1-4.223 10.194v-1.2a4.771 4.771 0 0 0 0-9.543v-1.2c1.584 0 3.103.63 4.223 1.75M5.593 9.595A3.402 3.402 0 0 0 8 15.403v-1.2a2.202 2.202 0 1 1 0-4.405v-1.2c-.902 0-1.768.359-2.406.997"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.776 7.778a5.971 5.971 0 0 0 4.222 10.194v-1.2a4.771 4.771 0 0 1 0-9.543v-1.2c-1.583 0-3.102.63-4.222 1.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M11.999 9.4a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2"
    />
  </svg>
);
export default SvgRadio;
