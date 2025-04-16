import type { SVGProps } from "react";
const SvgCloudOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.809 8.519q-.003.09-.003.181v1.904A5.6 5.6 0 0 0 7.63 21.5h8.75c.716 0 1.4-.134 2.03-.379l-6.298-6.298a4.4 4.4 0 0 0-.133 1.077h-1.2c0-.716.135-1.4.38-2.03zm7.03 4.768 7.01 7.01q.474-.374.858-.84l-7.03-7.03a4.4 4.4 0 0 0-.837.86m-.015-1.713a5.6 5.6 0 0 0-.84.857L6.166 6.613q.217-.606.55-1.147zm2.354.092a4.4 4.4 0 0 1 2.628.07l.39-1.135c-.57-.195-1.181-.301-1.816-.301-.759 0-1.483.151-2.143.425l-6.51-6.51A6.2 6.2 0 0 1 18.206 8.7v1.904a5.6 5.6 0 0 1 3.349 7.439z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="m3.091 3.54.849-.85 16.97 16.971-.848.849z" />
  </svg>
);
export default SvgCloudOff;
