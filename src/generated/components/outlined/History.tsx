import type { SVGProps } from "react";
const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.799 3.261V2.057a9.98 9.98 0 0 1 7.308 4.132 9.975 9.975 0 0 1-7.308 15.753v-1.204a8.775 8.775 0 0 0 0-17.477m-1.6 17.477A8.775 8.775 0 0 1 3.223 12h-1.2a9.975 9.975 0 0 0 9.176 9.942zm0-18.681V3.26A8.78 8.78 0 0 0 4.526 7.4h2.723v1.2h-3.75a.85.85 0 0 1-.85-.85V4h1.2v2.248a9.97 9.97 0 0 1 7.35-4.191m.2 9.839V6h1.2v5.751l3.824 3.824-.849.849-3.926-3.927a.85.85 0 0 1-.25-.601"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHistory;
