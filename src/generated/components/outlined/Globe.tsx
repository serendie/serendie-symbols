import type { SVGProps } from "react";
const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 11.4h20v1.2H2zm.268-1.6h1.235a8.8 8.8 0 0 1 5.509-6.053L6.322 9.8h1.313L10.5 3.353a9 9 0 0 1 .9-.107V9.8h1.2V3.246q.457.03.9.107L16.366 9.8h1.313l-2.69-6.053A8.8 8.8 0 0 1 20.497 9.8h1.235C20.73 5.35 16.753 2.025 12 2.025S3.27 5.35 2.268 9.8m19.464 4.4h-1.235a8.8 8.8 0 0 1-5.508 6.053l2.69-6.053h-1.313L13.5 20.648q-.444.076-.901.107V14.2h-1.2v6.555a9 9 0 0 1-.9-.107L7.635 14.2H6.32l2.69 6.053A8.8 8.8 0 0 1 3.503 14.2H2.268C3.27 18.65 7.247 21.975 12 21.975s8.73-3.324 9.732-7.775"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGlobe;
