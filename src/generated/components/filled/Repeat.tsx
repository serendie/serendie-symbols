import type { SVGProps } from "react";
const SvgRepeat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.767 3.824a.85.85 0 0 1 1.36.68V9.23a.85.85 0 0 1-1.345.691L2.555 7.616a.85.85 0 0 1-.016-1.372zm8.282 2.517H8.73v1.2h5.318a3.97 3.97 0 0 1 3.969 3.97v.804h1.2v-.805a5.17 5.17 0 0 0-5.17-5.169m-4.57 11.48h5.792v-1.2H9.479a3.97 3.97 0 0 1-3.969-3.968v-.97h-1.2v.97a5.17 5.17 0 0 0 5.17 5.169m8.757 2.355a.85.85 0 0 1-1.36-.68V14.77a.85.85 0 0 1 1.344-.691l3.227 2.305a.85.85 0 0 1 .016 1.372z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRepeat;
