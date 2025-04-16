import type { SVGProps } from "react";
const SvgBus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.057 5.774a2.73 2.73 0 0 0-2.731-2.731H6.67a2.73 2.73 0 0 0-2.73 2.727v1.6H2.92a.85.85 0 0 0-.85.85v3.16h1.2V8.57h.67v11.538c0 .47.38.85.85.85h2.056c.47 0 .85-.38.85-.85V18.56h4.301V18v.56H16.3v1.547c0 .469.38.85.85.85h2.057c.47 0 .85-.381.85-.85V8.57h.67v2.81h1.2V8.22a.85.85 0 0 0-.85-.85h-1.02V5.774M6.458 12.168h11.08v-1.2H6.457zm1.702 1.23a1.365 1.365 0 1 0 0 2.731 1.365 1.365 0 0 0 0-2.73m7.78 0a1.365 1.365 0 1 0 0 2.731 1.365 1.365 0 0 0 0-2.73"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBus;
