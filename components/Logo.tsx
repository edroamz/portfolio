export default function Logo(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 22 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_220_2030)">
        <path
          className="stroke-current"
          d="M20 6C20.1667 9.33333 12 18 2 18"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="stroke-current"
          d="M15 2C12.3333 2.33333 7 5.2 7 14C7 22.8 15 25.6667 19 26"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_220_2030">
          <rect width="22" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
