import type { SVGProps } from "react";
const SvgUsers = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.185 10.749a6 6 0 0 1-.3 1.198 4.479 4.479 0 1 0-1.708-6.634q.466.41.841.905a3.279 3.279 0 1 1 1.166 4.53m1.642 4.71a4.55 4.55 0 0 0-2.825.977 7.4 7.4 0 0 0-.997-.73 5.772 5.772 0 0 1 9.594 4.325h-1.2a4.57 4.57 0 0 0-4.572-4.571M8.17 6.602a3.279 3.279 0 1 0 0 6.557 3.279 3.279 0 0 0 0-6.557M3.691 9.88a4.479 4.479 0 1 1 8.958 0 4.479 4.479 0 0 1-8.958 0m4.48 7.549A4.57 4.57 0 0 0 3.597 22h-1.2a5.772 5.772 0 0 1 11.544 0h-1.2A4.57 4.57 0 0 0 8.17 17.43"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUsers;
