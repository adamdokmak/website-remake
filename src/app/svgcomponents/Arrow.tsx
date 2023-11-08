export default function Arrow({ fill }: { fill: string }) {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="transition" id="Frame" clipPath="url(#clip0_21_64)">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.626512 55.3738C0.235987 54.9832 0.235986 54.3501 0.626512 53.9596L53.9599 0.626207C54.3504 0.235681 54.9836 0.235681 55.3741 0.626207C55.7646 1.01673 55.7646 1.6499 55.3741 2.04042L2.04073 55.3738C1.65021 55.7643 1.01704 55.7643 0.626512 55.3738Z"
          fill={fill}
        />
        <path
          className="transition"
          id="Vector_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.667 55.6667C54.1147 55.6667 53.667 55.2189 53.667 54.6667V2.33331H1.33362C0.78133 2.33331 0.333618 1.88561 0.333618 1.33332C0.333618 0.78103 0.78133 0.333318 1.33362 0.333318L54.667 0.333313C55.2193 0.333313 55.667 0.781025 55.667 1.33332V54.6667C55.667 55.2189 55.2193 55.6667 54.667 55.6667Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}
