import type { SVGProps } from "react";
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.548 2.551a.85.85 0 0 1 .9 0l7.868 4.917a.6.6 0 0 1 .282.51v7.86a.85.85 0 0 1-.4.721l-7.882 4.927a.6.6 0 0 1-.636 0l-7.882-4.927a.85.85 0 0 1-.4-.72V7.977a.6.6 0 0 1 .282-.509zm.45 1.134-1.867 1.167 6.867 4.293 1.868-1.168zm7.4 5.375-6.8 4.25v6.585l6.8-4.25zm-8 10.835V13.31l-6.8-4.25v6.585zM5.131 7.977l6.867 4.293 1.868-1.168L6.998 6.81zm3-1.875 6.867 4.293.868-.543L8.998 5.56z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPackage;
