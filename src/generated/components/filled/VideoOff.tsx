import type { SVGProps } from "react";
const SvgVideoOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3.02 3.938.849-.848 16.97 16.97-.848.849zM2.925 5.54a.85.85 0 0 0-.382.71v11.5c0 .469.38.85.85.85h11.5a.85.85 0 0 0 .71-.383z"
    />
    <path
      fill="currentColor"
      d="M15.743 14.964v1.697L4.481 5.399H6.18zM17.807 15.33l-1.036-1.035a.9.9 0 0 1-.03-.224V9.927a.85.85 0 0 1 .32-.664l3.02-2.409a.85.85 0 0 1 1.38.665v8.961a.85.85 0 0 1-1.38.665zM15.743 13.267 7.876 5.399h7.017c.47 0 .85.38.85.85z"
    />
  </svg>
);
export default SvgVideoOff;
