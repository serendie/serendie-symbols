import type { SVGProps } from "react";
const SvgFilm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.559 3.375c0-.452.366-.818.818-.818h17.25c.451 0 .818.366.818.818v17.25a.82.82 0 0 1-.818.818H3.377a.82.82 0 0 1-.818-.818zM3.695 8.1v3.3h2.707V8.1zm0 4.5h2.707v2.8H3.695zm0 4h2.707v3.707H3.695zm0-12.907h2.707V6.9H3.695zm16.614 16.614h-2.707V16.6h2.707zm0-4.907h-2.707v-2.8h2.707zm0-4h-2.707V8.1h2.707zm0-4.5h-2.707V3.693h2.707zM6.404 12.6h11.195v-1.2H6.404z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilm;
