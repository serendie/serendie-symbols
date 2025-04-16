import type { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.74 3.85a1.658 1.658 0 1 0 0 3.317 1.658 1.658 0 0 0 0-3.317M12 3.756a2.858 2.858 0 1 0-4.055 3.975H4.9a.85.85 0 0 0-.85.85v3.64c0 .47.38.85.85.85h14.196c.47 0 .85-.38.85-.85V8.58a.85.85 0 0 0-.85-.85h-3.043a2.858 2.858 0 1 0-4.056-3.975m.461 3.975a3 3 0 0 1-.461-.47q-.203.261-.461.47zm.139-2.223a1.659 1.659 0 1 0 3.317 0 1.659 1.659 0 0 0-3.317 0M5.25 8.931v2.94h6.147V8.93zm7.347 0v2.94h6.149V8.93zM6.08 20.151v-5.859h-1.2V20.5c0 .47.38.85.85.85h12.54c.47 0 .85-.38.85-.85v-6.208h-1.2v5.858h-5.322v-5.858h-1.2v5.858z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGift;
