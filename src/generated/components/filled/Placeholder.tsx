import type { SVGProps } from "react";
const SvgPlaceholder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="placeholder_svg__a"
      width={20}
      height={20}
      x={2}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#D9D9D9"
        d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
      />
    </mask>
    <g
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      mask="url(#placeholder_svg__a)"
    >
      <path d="M24.56 5.38a9.4 9.4 0 0 0-13.242 1.16l-.92-.772c3.764-4.485 10.45-5.07 14.934-1.307zM-3.487 7.693A9.4 9.4 0 0 0 9.756 6.534l.92.771C6.911 11.79.225 12.375-4.26 8.612zM-4.951 2.229a9.4 9.4 0 0 0 13.243-1.16l.919.772C5.448 6.326-1.239 6.911-5.723 3.148zM27.49 16.309a9.4 9.4 0 0 0-13.244 1.159l-.92-.772c3.764-4.484 10.45-5.07 14.935-1.306zM-.559 18.62a9.4 9.4 0 0 0 13.243-1.158l.92.772C9.84 22.718 3.153 23.304-1.33 19.54zM28.954 21.773a9.4 9.4 0 0 0-13.244 1.159l-.919-.772c3.763-4.484 10.45-5.07 14.934-1.306zM26.025 10.845a9.4 9.4 0 0 0-13.243 1.158l-.92-.77c3.764-4.486 10.45-5.07 14.934-1.307zM-2.023 13.157a9.4 9.4 0 0 0 13.243-1.159l.92.772c-3.764 4.484-10.45 5.069-14.934 1.306z" />
    </g>
  </svg>
);
export default SvgPlaceholder;
