import type { SVGProps } from "react";
const SvgCoffee = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.534 14.474a2 2 0 0 0 0-3.97c-.137-.016-.25.097-.25.236v3.5c0 .138.113.251.25.234"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.473 10.88a2 2 0 0 0-.939-.375c-.137-.017-.25.096-.25.234v3.5c0 .139.113.252.25.235a2 2 0 0 0 .95-.384 1.997 1.997 0 0 0 0-3.2z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M3.963 10.494a.85.85 0 0 0-.85.85v2.044a6.914 6.914 0 0 0 13.829 0v-2.044a.85.85 0 0 0-.85-.85z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.79 4.553a2.6 2.6 0 0 0 1.838 4.438v-1.2a1.4 1.4 0 0 1 0-2.8v-1.2a2.6 2.6 0 0 0-1.839.762M5.589 4.553A2.6 2.6 0 0 0 7.427 8.99v-1.2a1.4 1.4 0 1 1 0-2.8v-1.2a2.6 2.6 0 0 0-1.838.762M9.189 4.553a2.6 2.6 0 0 0 1.838 4.438v-1.2a1.4 1.4 0 0 1 0-2.8v-1.2a2.6 2.6 0 0 0-1.838.762"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCoffee;
