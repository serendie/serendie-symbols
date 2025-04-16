import type { SVGProps } from "react";
const SvgChatCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.198 2.684-.054.004a9.35 9.35 0 0 0-7.356 13.785l-.707 3.46a.833.833 0 0 0 .984.984l3.46-.707a9.35 9.35 0 0 0 3.673 1.105V20.11A8.15 8.15 0 0 1 7.995 19.1a.84.84 0 0 0-.578-.092l-3.049.623.623-3.048a.84.84 0 0 0-.092-.579A8.15 8.15 0 0 1 11.2 3.89zm1.6 17.426q.397-.039.79-.117a8.15 8.15 0 0 0-.79-16.104V2.684l.049.004a9.35 9.35 0 0 1-.049 18.628z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatCircle;
