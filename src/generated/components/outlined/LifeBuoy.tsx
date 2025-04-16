import type { SVGProps } from "react";
const SvgLifeBuoy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.023 12c0-5.24 4.04-9.536 9.175-9.943V3.26a8.74 8.74 0 0 0-4.966 2.124l3.412 3.412a3.96 3.96 0 0 1 2.354-.772c.809 0 1.56.241 2.189.656l3.425-3.426a8.74 8.74 0 0 0-4.814-1.994V2.057c5.135.407 9.175 4.703 9.175 9.943s-4.04 9.536-9.175 9.943V20.74a8.74 8.74 0 0 0 4.967-2.124l-3.412-3.412a3.96 3.96 0 0 1-2.355.772 3.96 3.96 0 0 1-2.513-.895l-3.402 3.402a8.74 8.74 0 0 0 5.115 2.257v1.204C6.063 21.536 2.023 17.24 2.023 12m3.36-5.766A8.74 8.74 0 0 0 3.224 12a8.74 8.74 0 0 0 2.03 5.614l3.426-3.426A3.96 3.96 0 0 1 8.023 12c0-.881.287-1.695.772-2.354zm13.097-.15-3.402 3.403c.56.684.895 1.56.895 2.513 0 .881-.286 1.695-.772 2.355l3.412 3.411A8.74 8.74 0 0 0 20.773 12c0-2.28-.869-4.355-2.293-5.915m-6.482 3.141a2.775 2.775 0 1 0 0 5.55 2.775 2.775 0 0 0 0-5.55"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLifeBuoy;
