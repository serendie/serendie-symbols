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
      d="M12.449 2.686a.85.85 0 0 0-.901 0L9.042 4.252l7.935 5.014.021.014 2.692-1.683.315-.189zm2.423 7.922L6.93 5.572l-2.9 1.813.308.232 7.66 4.787zM3.398 15.973V8.412l.24.18.042.029 7.718 4.823v8l-7.6-4.75a.85.85 0 0 1-.4-.72m16.8.721-7.6 4.75v-8l7.714-4.82.286-.172v7.521a.85.85 0 0 1-.4.721"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPackage;
