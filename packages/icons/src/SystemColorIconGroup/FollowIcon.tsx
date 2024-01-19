import React from 'react';
import CustomIcon from '@cgf-tools/icons/CustomIcon';
import type { CustomIconProps } from '@cgf-tools/icons/CustomIcon';

interface IconProps extends CustomIconProps {}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <CustomIcon {...props}>
      <path
        d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
        fill="#FF4848"
        p-id="1050"
      ></path>
      <path
        d="M503.326118 357.285647c-20.781176-31.954824-68.848941-92.400941-136.041412-92.400941-96.376471 0-174.802824 86.738824-174.802824 193.355294 0 49.814588 33.852235 121.283765 74.992942 158.659765 56.832 72.944941 216.726588 204.257882 236.423529 204.257882 20.118588 0 176.549647-128.752941 234.435765-203.384471 41.833412-38.038588 75.866353-109.598118 75.866353-159.563294 0-106.616471-78.426353-193.325176-174.832942-193.325176-67.162353 0-115.290353 60.446118-136.041411 92.400941z"
        fill="#FFFFFF"
        p-id="1051"
      ></path>
    </CustomIcon>
  );
};

export default React.memo(Icon);