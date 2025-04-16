import type { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.29 5.141a2.25 2.25 0 1 1 3.182 3.182l-.13.13-.848-.849.13-.13.423.425-.424-.424a1.05 1.05 0 0 0-1.485-1.485l-.13.13-.848-.849zl.424.425zM6.039 15.09l7.84-7.84-.848-.85-7.94 7.94a.85.85 0 0 0-.248.579l-.055 2.034a.85.85 0 0 0 .873.873l2.034-.055a.85.85 0 0 0 .579-.249l7.94-7.94-.85-.848-7.84 7.841-1.526.041zm13.746 5.11h-15V19h15z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEdit;
