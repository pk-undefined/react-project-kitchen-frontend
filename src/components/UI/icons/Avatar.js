import React from 'react';

const Avatar = ({ className }) => {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='1' y='1' width='22' height='22' fill='#FF0000' stroke='#EBEBEB' stroke-width='2' />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6 5.40002H7.8V7.20003H6V5.40002ZM16.2 7.20003H14.4V9.00002H12.6H11.4H9.6V7.20003H7.8V9.00002H6V10.2H4.8V9.00002V7.20003H3V9.00002V10.2V12V13.8H4.8V15H6V16.8H4.8V18.6H6V16.8H7.8V15H9.6H11.4H12.6H14.4H16.2V16.8H18V18.6H19.2V16.8H18V15H19.2V13.8H21V12V10.2V9.00002V7.20003H19.2V9.00002V10.2H18V9.00002H16.2V7.20003ZM16.2 7.20003V5.40002H18V7.20003H16.2ZM16.2 12V10.2H14.4V12H16.2ZM9.6 10.2V12H7.8V10.2H9.6Z'
        fill='#EBEBEB'
      />
    </svg>
  );
};

export default Avatar;
