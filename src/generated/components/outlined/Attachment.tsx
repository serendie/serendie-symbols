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
      d="M13.899 3.68a3.627 3.627 0 0 1 3.953 5.917l-.849-.849a2.428 2.428 0 0 0-3.433-3.433l-.848-.848a3.6 3.6 0 0 1 1.177-.787m-7.201 6.81 4.893-4.893.849.849-4.894 4.893zm7.034-2.751.849.848-6.026 6.027a.915.915 0 0 0 1.274 1.31l6.044-6.045.849.849-6.027 6.026-.027.027-.097.098-.005-.005a2.113 2.113 0 0 1-2.98-2.98l-.005-.004zm-7.319 4.734a3.941 3.941 0 1 0 5.574 5.574l.848.848a5.14 5.14 0 0 1-7.27 0 5.14 5.14 0 0 1 0-7.271zm6.708 4.44 4.893-4.893.848.848-4.893 4.894z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAttachment;
