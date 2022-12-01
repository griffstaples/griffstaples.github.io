interface Props {
  size: number;
  fill?: string;
}

export const DownArrowIcon: React.FC<Props> = ({ size, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
    >
      <path
        fill={fill || "#FFF"}
        d="M256.372,456.118c-2.303,0-4.605-0.878-6.363-2.635L20.418,223.967c-3.516-3.515-3.517-9.213-0.002-12.729
				c3.513-3.516,9.212-3.516,12.728-0.002l223.227,223.155l223.148-223.154c3.516-3.514,9.213-3.514,12.729,0
				c3.515,3.515,3.515,9.213,0,12.729L262.735,453.482C260.979,455.239,258.675,456.118,256.372,456.118z"
      />
      <path
        fill={fill || "#FFF"}
        d="M256.372,302.882c-2.303,0-4.605-0.878-6.363-2.635L20.418,70.73c-3.516-3.514-3.517-9.212-0.002-12.728
				c3.513-3.516,9.212-3.516,12.728-0.002l223.227,223.154L479.519,58.002c3.516-3.515,9.213-3.516,12.729,0
				c3.515,3.515,3.515,9.213,0,12.728L262.735,300.246C260.979,302.003,258.675,302.882,256.372,302.882z"
      />
    </svg>
  );
};
