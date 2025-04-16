import type { SVGProps } from "react";
const SvgUsers = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.18 4.597a4.479 4.479 0 1 1 1.708 6.634c.233-.645.36-1.342.36-2.067 0-1.82-.8-3.454-2.068-4.567M21.75 18.9a5.606 5.606 0 0 0-9.513-3.764 7.38 7.38 0 0 1 2.99 4.014h6.28c.137 0 .25-.112.244-.25"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.172 4.685a4.479 4.479 0 1 0 0 8.957 4.479 4.479 0 0 0 0-8.957M2.25 21.034a5.606 5.606 0 0 1 11.201 0 .24.24 0 0 1-.244.25H2.495a.24.24 0 0 1-.245-.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUsers;
