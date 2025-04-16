import type { SVGProps } from "react";
const SvgHeadphone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.945 5.633a9.975 9.975 0 0 1 14.107 0 9.94 9.94 0 0 1 2.921 7.038v5.27c0 1.85-1.5 3.35-3.35 3.35h-.6v-6.7h.6c.819 0 1.569.293 2.15.78v-2.7a8.74 8.74 0 0 0-2.57-6.19 8.775 8.775 0 0 0-12.41 0 8.74 8.74 0 0 0-2.57 6.19v2.7a3.34 3.34 0 0 1 2.15-.78h.6v6.7h-.6a3.35 3.35 0 0 1-3.35-3.35v-5.27a9.94 9.94 0 0 1 2.922-7.038"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.979 21.29v-6.699h1.2v6.7zM16.029 21.29v-6.699h1.2v6.7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeadphone;
