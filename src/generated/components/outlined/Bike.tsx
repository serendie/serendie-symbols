import type { SVGProps } from "react";
const SvgBike = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.48 2.25h3.25c.47 0 .85.38.85.85v1.15h1.8v1.2h-1.8v2.8h1.615a.85.85 0 0 1 .813.601l2.447 8a.85.85 0 0 1-.813 1.099H3.268a.85.85 0 0 1-.841-.97l.928-6.5a.85.85 0 0 1 .842-.73h4.65a.85.85 0 0 1 .706.379l1.748 2.621h3.079v-9.3h-2.9zm4.1 7.2v3.65c0 .47-.38.85-.85.85h-3.616a.85.85 0 0 1-.708-.378L8.66 10.95H4.5l-.828 5.8h15.497l-2.233-7.3zm3.4-5.2a2.6 2.6 0 0 1 0 5.2v-1.2a1.4 1.4 0 1 0 0-2.8zM4.83 19.15a1.4 1.4 0 1 0 2.8 0h1.2a2.6 2.6 0 0 1-5.2 0zm10 0a1.4 1.4 0 1 0 2.8 0h1.2a2.6 2.6 0 0 1-5.2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBike;
