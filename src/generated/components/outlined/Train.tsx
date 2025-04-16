import type { SVGProps } from "react";
const SvgTrain = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 3v.005A2.73 2.73 0 0 0 3.94 5.731h1.2A1.53 1.53 0 0 1 6.672 4.2h10.655a1.53 1.53 0 0 1 1.53 1.53h1.2A2.73 2.73 0 0 0 17.327 3zm4.899 7.255h-4.66v1.2h10.52v-1.2H12.6V5.777h-1.2zm-6.257 7.079V7.307h-1.2v10.377c0 .47.38.85.85.85h14.415c.47 0 .85-.38.85-.85V7.307h-1.2v10.027zm3.019-3.078a.465.465 0 1 0 0 .93.465.465 0 0 0 0-.93m-1.666.465a1.665 1.665 0 1 1 3.33 0 1.665 1.665 0 0 1-3.33 0m9.447-.465a.465.465 0 1 0 0 .93.465.465 0 0 0 0-.93m-1.666.465a1.665 1.665 0 1 1 3.331 0 1.665 1.665 0 0 1-3.33 0M6.46 19.757h11.08v1.2H6.46z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrain;
