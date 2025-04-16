import type { SVGProps } from "react";
const SvgAttachment = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.082 5.413a2.427 2.427 0 1 1 3.433 3.433l.849.849a3.628 3.628 0 0 0-5.13-5.13zm-5.016 9.299a.914.914 0 0 0 1.276 1.308l6.043-6.043.848.848-6.026 6.027-.026.025-.099.1-.005-.006a2.11 2.11 0 0 1-1.777.46 2.113 2.113 0 0 1-1.202-3.439l-.005-.005.125-.124 6.026-6.027.849.849zm-2.996-.863c.2-.48.49-.915.855-1.279l-.849-.849a5.143 5.143 0 0 0 7.271 7.272l-.848-.849a3.942 3.942 0 0 1-6.429-4.295m1.14-3.261 4.893-4.893.848.848-4.893 4.894zm11.316 1.53-4.893 4.893.848.848 4.893-4.893z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAttachment;
