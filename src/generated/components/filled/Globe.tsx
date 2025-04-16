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
      d="M17.679 9.8h4.078a10.02 10.02 0 0 0-7.399-7.52l.195.486zm4.078 4.4H17.68l-3.13 7.044-.012.024-.232.465a10.02 10.02 0 0 0 7.452-7.533m-5.391 0H12.6v7.782q.124-.007.247-.017l.61-1.221zm-8.731 0H11.4v7.782q-.123-.007-.247-.017l-.61-1.221zM2.243 9.8h4.079l3.344-7.526A10.02 10.02 0 0 0 2.243 9.8m5.392 0H11.4V2.018a10 10 0 0 0-.317.023zm4.965 0V2.018q.187.01.373.029l.47 1.176.009.02L16.366 9.8zM2.243 14.2H6.32l3.13 7.044.012.024.233.465A10.02 10.02 0 0 1 2.243 14.2"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M2 12.6v-1.2h20v1.2z" />
  </svg>
);
export default SvgGlobe;
