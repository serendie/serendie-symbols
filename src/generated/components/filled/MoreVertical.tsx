import type { SVGProps } from "react";
const SvgMoreVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M12 18.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
    />
  </svg>
);
export default SvgMoreVertical;
