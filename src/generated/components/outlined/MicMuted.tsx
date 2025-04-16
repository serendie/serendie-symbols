import type { SVGProps } from "react";
const SvgMicMuted = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.814 9.363v1.247h1.2v-.047zm7.662 5.964L8.015 8.865l-1.2-1.2L3.09 3.939l.848-.848 16.97 16.97-.848.849-1.482-1.482-.85-.85-2.398-2.398zm-1.084.613a3.982 3.982 0 0 1-5.377-3.733h-1.2a5.184 5.184 0 0 0 7.488 4.644zm3.382 3.382A8.568 8.568 0 0 1 3.43 12.207h-1.2a9.768 9.768 0 0 0 15.406 7.977zm3.37-1.722a9.77 9.77 0 0 0 1.623-5.393h-1.2a8.57 8.57 0 0 1-1.292 4.525zm-3.372-3.37c.269-.635.41-1.321.41-2.023h-1.2c0 .37-.05.734-.15 1.083zm-8.48-8.481a3.984 3.984 0 0 1 7.69 1.46v3.401h1.2v-3.4a5.184 5.184 0 0 0-9.796-2.367z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMicMuted;
