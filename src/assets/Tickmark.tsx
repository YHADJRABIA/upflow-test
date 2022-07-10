interface PropTypes {
  color?: string
  strokeWidth?: number
}

export const Tickmark = ({ color, strokeWidth, ...rest }: PropTypes) => {
  return (
    <svg
      width="16"
      height="11"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 1.5L6 12.5L1 7.5"
        stroke={color ?? "var(--primary-black-color)"}
        stroke-width={strokeWidth ?? "2"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
