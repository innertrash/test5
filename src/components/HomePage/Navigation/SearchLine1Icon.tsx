import { memo, SVGProps } from 'react';

const SearchLine1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_5_148)'>
      <path
        d='M15.0258 13.8475L18.595 17.4158L17.4158 18.595L13.8475 15.0258C12.5198 16.0902 10.8683 16.6691 9.16667 16.6667C5.02667 16.6667 1.66667 13.3067 1.66667 9.16667C1.66667 5.02667 5.02667 1.66667 9.16667 1.66667C13.3067 1.66667 16.6667 5.02667 16.6667 9.16667C16.6691 10.8683 16.0902 12.5198 15.0258 13.8475ZM13.3542 13.2292C14.4118 12.1416 15.0024 10.6837 15 9.16667C15 5.94333 12.3892 3.33333 9.16667 3.33333C5.94333 3.33333 3.33333 5.94333 3.33333 9.16667C3.33333 12.3892 5.94333 15 9.16667 15C10.6837 15.0024 12.1416 14.4118 13.2292 13.3542L13.3542 13.2292V13.2292Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_5_148'>
        <rect width={20} height={20} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SearchLine1Icon);
export { Memo as SearchLine1Icon };
