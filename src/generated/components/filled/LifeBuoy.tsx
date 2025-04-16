import type { SVGProps } from "react";
const SvgLifeBuoy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.382 4.535a9.94 9.94 0 0 1 6.616-2.51c2.467 0 4.725.896 6.466 2.38L14.187 8.68a3.96 3.96 0 0 0-2.188-.656c-.882 0-1.696.287-2.355.772zm-.849.849A9.94 9.94 0 0 0 2.023 12c0 2.467.896 4.725 2.38 6.466l4.276-4.278A3.96 3.96 0 0 1 8.024 12c0-.88.286-1.695.771-2.354zm.7 13.947a9.94 9.94 0 0 0 6.765 2.644 9.94 9.94 0 0 0 6.617-2.51l-4.262-4.262a3.96 3.96 0 0 1-2.354.772 3.96 3.96 0 0 1-2.514-.895zm14.23-.714A9.94 9.94 0 0 0 21.974 12a9.94 9.94 0 0 0-2.644-6.764l-4.25 4.25c.559.686.894 1.56.894 2.514 0 .882-.286 1.696-.772 2.355zM9.224 12a2.775 2.775 0 1 1 5.55 0 2.775 2.775 0 0 1-5.55 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLifeBuoy;
