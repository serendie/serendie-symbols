import type { SVGProps } from "react";
const SvgRun = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.333 2.875a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2M8.623 12.965a3.9 3.9 0 0 1 4.177-2.87l-.677 2.368h-.003l-1.14 4a3.4 3.4 0 0 1-4.204 2.33l-.33 1.153a4.6 4.6 0 0 0 5.531-2.697 3.897 3.897 0 0 1 3.477 3.874h1.2a5.1 5.1 0 0 0-4.318-5.037l1.205-4.216a4.6 4.6 0 0 0 4.014 2.355v-1.2a3.4 3.4 0 0 1-3.398-3.383.6.6 0 0 0-.435-.592l-.012-.004a5.1 5.1 0 0 0-6.246 3.609z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRun;
