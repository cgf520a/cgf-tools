import React from 'react';
import CustomIcon from '@cgf-tools/icons/CustomIcon';
import type { CustomIconProps } from '@cgf-tools/icons/CustomIcon';

interface IconProps extends CustomIconProps {}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <CustomIcon {...props}>
      <path
        d="M624 896H400c-79.392 0-144-66.992-144-149.328V277.328C256 194.992 320.608 128 400 128h224c79.408 0 144 66.992 144 149.328v469.328C768 829.008 703.408 896 624 896zM400 192c-44.112 0-80 38.288-80 85.328v469.328C320 793.712 355.888 832 400 832h224c44.112 0 80-38.288 80-85.328V277.328C704 230.288 668.112 192 624 192H400z"
        fill="currentColor"
        p-id="5637"
      ></path>
      <path d="M512 752m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="#231815" p-id="5638"></path>
    </CustomIcon>
  );
};

export default React.memo(Icon);
