import React from 'react';
import CustomIcon from '@cgf-tools/icons/CustomIcon';
import type { CustomIconProps } from '@cgf-tools/icons/CustomIcon';

interface IconProps extends CustomIconProps {}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <CustomIcon {...props}>
      <path
        d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
        fill="#FF6000"
        p-id="1533"
      ></path>
      <path
        d="M785.377882 562.055529h-102.279529c-22.678588 0-43.158588-13.251765-52.013177-33.671529l-35.026823-80.685176a29.184 29.184 0 0 1 7.860706-33.641412 131.915294 131.915294 0 0 0 42.345412-128.512c-10.902588-50.477176-52.675765-91.256471-104.32753-101.797647-88.545882-18.100706-166.550588 47.495529-166.550588 130.891294 0 40.176941 18.221176 75.986824 46.893176 100.47247a29.304471 29.304471 0 0 1 8.342589 34.032942l-34.394353 79.239529a56.560941 56.560941 0 0 1-52.013177 33.671529H238.622118a27.467294 27.467294 0 0 0-27.798589 27.166118v106.435765c0 14.998588 12.438588 27.166118 27.798589 27.166117h546.755764c15.36 0 27.798588-12.167529 27.798589-27.166117v-106.405647a27.467294 27.467294 0 0 0-27.798589-27.196236zM769.355294 783.058824H254.644706c-7.559529 0-13.703529 6.806588-13.70353 15.209411v29.816471c0 8.402824 6.144 15.209412 13.70353 15.209412h514.710588c7.559529 0 13.703529-6.806588 13.70353-15.209412v-29.816471c0-8.402824-6.144-15.209412-13.70353-15.209411z"
        fill="#FFFFFF"
        p-id="1534"
      ></path>
    </CustomIcon>
  );
};

export default React.memo(Icon);
