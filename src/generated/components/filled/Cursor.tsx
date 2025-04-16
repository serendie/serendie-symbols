import type { SVGProps } from "react";
const SvgCursor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.785 4.716A.819.819 0 0 0 4.729 5.77l4.868 13.038c.259.692 1.23.715 1.52.036l2.058-4.802 3.962 3.962.849-.849-3.962-3.962 4.804-2.059c.678-.29.656-1.259-.034-1.518z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCursor;
