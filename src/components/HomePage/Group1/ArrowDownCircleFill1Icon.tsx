import { memo, SVGProps } from 'react';

const ArrowDownCircleFill1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_5_167)'>
      <path
        d='M10 1.66667C14.6 1.66667 18.3333 5.4 18.3333 10C18.3333 14.6 14.6 18.3333 10 18.3333C5.4 18.3333 1.66666 14.6 1.66666 10C1.66666 5.4 5.4 1.66667 10 1.66667ZM10.8333 10V6.66667H9.16666V10H6.66666L10 13.3333L13.3333 10H10.8333Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_5_167'>
        <rect width={20} height={20} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(ArrowDownCircleFill1Icon);
export { Memo as ArrowDownCircleFill1Icon };
