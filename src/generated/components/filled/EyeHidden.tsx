import type { SVGProps } from "react";
const SvgEyeHidden = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.63 7.742a9.94 9.94 0 0 0-2.606 6.716l-.004.004q.063.087.13.173a12.37 12.37 0 0 0 9.849 4.874c1.327 0 2.605-.21 3.803-.595l-3.84-3.84a3.075 3.075 0 0 1-3.037-3.038zM8.307 5.196 19.83 16.719a12.5 12.5 0 0 0 2.148-2.257l-.005-.003q0-.1-.002-.201C21.862 8.844 17.44 4.49 12 4.49c-1.304 0-2.55.25-3.692.706M3.09 3.938l.848-.848 16.97 16.97-.848.849z"
    />
  </svg>
);
export default SvgEyeHidden;
