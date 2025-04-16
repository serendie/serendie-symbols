import type { SVGProps } from "react";
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.799 3.261V2.057c5.134.407 9.174 4.703 9.174 9.943s-4.04 9.536-9.174 9.943V20.74a8.776 8.776 0 0 0 0-17.478m-1.6 17.478a8.776 8.776 0 0 1 0-17.478V2.057C6.062 2.464 2.022 6.76 2.022 12s4.04 9.536 9.176 9.943zm3.574-12.526c.708-.294 1.413.426 1.103 1.128l-1.868 4.237a.85.85 0 0 1-.442.438l-4.291 1.842c-.706.303-1.42-.41-1.116-1.116l1.84-4.288a.85.85 0 0 1 .456-.45zm-.347 1.443-3.38 1.402-1.439 3.352 3.359-1.442z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCompass;
