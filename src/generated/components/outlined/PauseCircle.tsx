import type { SVGProps } from "react";
const SvgPauseCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.798 3.261V2.057c5.135.407 9.175 4.703 9.175 9.943s-4.04 9.536-9.175 9.943V20.74a8.776 8.776 0 0 0 0-17.478m-1.6 17.478a8.776 8.776 0 0 1 0-17.478V2.057C6.063 2.464 2.023 6.76 2.023 12s4.04 9.536 9.175 9.943zM8.023 8.836a.81.81 0 0 1 .811-.811h1.828c.448 0 .811.363.811.811v6.328c0 .448-.363.811-.81.811H8.833a.81.81 0 0 1-.811-.81zm1.2.389v5.55h1.05v-5.55zm3.3-.389a.81.81 0 0 1 .811-.811h1.828c.448 0 .811.363.811.811v6.328c0 .448-.363.811-.81.811h-1.829a.81.81 0 0 1-.81-.81zm1.2.389v5.55h1.05v-5.55z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPauseCircle;
