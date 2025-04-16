import type { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.298 2.914a5.3 5.3 0 0 0-5.302 5.302v.298h1.2v-.298a4.102 4.102 0 1 1 8.204 0v.298h1.2v-.298a4.102 4.102 0 0 1 8.204 0v.298H20.8 22v.03-.03h.004v-.298A5.302 5.302 0 0 0 12 5.764a5.3 5.3 0 0 0-4.702-2.85m14.502 7.2h-1.247a5.3 5.3 0 0 1-1.258 2.1L12 19.695l-7.483-7.67a4.65 4.65 0 0 1-1.125-1.91H2.151a5.85 5.85 0 0 0 1.507 2.747l7.795 7.992c.3.307.794.307 1.094 0l7.607-7.803a6.5 6.5 0 0 0 1.646-2.937"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeart;
