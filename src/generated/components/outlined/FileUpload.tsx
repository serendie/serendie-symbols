import type { SVGProps } from "react";
const SvgFileUpload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 3.65a.85.85 0 0 1 .602-.25h8.646c.47 0 .85.38.85.85v15.5c0 .47-.38.85-.85.85h-13.5a.85.85 0 0 1-.85-.85V9.104a.85.85 0 0 1 .25-.601zm.747.95L5.598 9.25V19.4h12.8V4.6zm-4.75 4.751h-.001l-.248-.247.248.247m4.852-4.853-.247-.248zm1.048 4.255a.85.85 0 0 1 1.202 0l2.64 2.64-.849.848-1.792-1.792V15h-1.2v-4.552l-1.794 1.794-.848-.849z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFileUpload;
