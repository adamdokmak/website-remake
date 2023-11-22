export default function Edge({ rotate }: { rotate: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 9 10.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        rotate: rotate,
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 10C10 4.47715 5.52285 0 0 0H10V10Z"
        fill="#222222"
      />
    </svg>
  );
}
