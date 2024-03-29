interface Props extends React.HTMLAttributes<HTMLElement> {
  size: number;
  stroke?: string;
  fill?: string;
  className?: string;
}

export const MenuIcon: React.FC<Props> = ({
  size,
  stroke,
  fill,
  className,
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
    >
      <line
        x1="26.7"
        x2="486.25"
        y1="105.643"
        y2="105.643"
        fill={fill || "none"}
        stroke={stroke || "#FFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="2.613"
        strokeWidth="13.417"
      />
      <line
        x1="26.7"
        x2="486.25"
        y1="256.511"
        y2="256.511"
        fill={fill || "none"}
        stroke={stroke || "#FFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="2.613"
        strokeWidth="13.417"
      />
      <line
        x1="26.7"
        x2="486.25"
        y1="407.312"
        y2="407.312"
        fill={fill || "none"}
        stroke={stroke || "#FFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="2.613"
        strokeWidth="13.417"
      />
    </svg>
  );
};
