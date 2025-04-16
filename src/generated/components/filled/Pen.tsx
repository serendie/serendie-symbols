import type { SVGProps } from "react";
const SvgPen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.946 10.083a2.1 2.1 0 0 0-2.484-.363L5.06 4.318l11.72 3.447a.85.85 0 0 1 .601.695l.515 3.603-5.94 5.94-3.603-.515a.85.85 0 0 1-.695-.601L4.211 5.166l5.403 5.403a2.1 2.1 0 1 0 3.332-.486m-.848.849a.9.9 0 1 0-1.273 1.272.9.9 0 0 0 1.273-1.272m2.298 8.662-1.167-1.167 5.091-5.091 1.167 1.167a.85.85 0 0 1 0 1.202l-3.89 3.889a.85.85 0 0 1-1.201 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPen;
