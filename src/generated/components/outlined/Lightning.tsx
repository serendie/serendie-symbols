import type { SVGProps } from "react";
const SvgLightning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.068 2.345c.483-.664 1.533-.322 1.533.499v6.18c0 .375.141.724.396.979.26.26.611.405.978.405h3.48a.848.848 0 0 1 .686 1.347l-7.206 9.9c-.484.663-1.534.322-1.534-.5v-6.18c0-.372-.142-.723-.398-.978a1.38 1.38 0 0 0-.978-.405h-3.48a.848.848 0 0 1-.686-1.348zl.485.354zm.333 1.58-6.164 8.467h2.788c.685 0 1.342.272 1.826.756.489.489.75 1.148.75 1.827v5.099l6.163-8.466h-2.789a2.58 2.58 0 0 1-1.826-.757 2.58 2.58 0 0 1-.748-1.827z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLightning;
