interface PropTypes {
  color: string
}

export const Triangle = ({ color, ...rest }: PropTypes) => {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_16_131)">
        <path
          d="M14.0691 18.2383C13.2698 19.0376 11.9072 18.6991 11.5748 17.6188L8.83316 8.70794C8.47906 7.55704 9.55704 6.47906 10.7079 6.83316L19.6187 9.57477C20.6991 9.90718 21.0376 11.2698 20.2383 12.0691L14.0691 18.2383Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_16_131"
          x="0.764671"
          y="0.764679"
          width="27.9137"
          height="27.9137"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0 0.101961 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_16_131"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0 0.101961 0 0 0 0.02 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_16_131"
            result="effect2_dropShadow_16_131"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_16_131"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
