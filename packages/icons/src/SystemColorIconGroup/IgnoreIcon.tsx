import React from 'react';
import CustomIcon from '@cgf-tools/icons/CustomIcon';
import type { CustomIconProps } from '@cgf-tools/icons/CustomIcon';

interface IconProps extends CustomIconProps {}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <CustomIcon {...props}>
      <path
        d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
        fill="#10C7C1"
        p-id="1211"
      ></path>
      <path
        d="M513.807059 358.701176c83.215059 0 150.618353 73.908706 150.618353 164.833883 0 9.758118-0.993882 19.184941-2.469647 28.852706l101.014588 108.935529c69.12-68.005647 112.248471-138.059294 112.248471-138.059294s-161.882353-263.529412-361.411765-263.529412c-35.599059 0-69.601882 8.282353-102.008471 22.287059l73.788236 79.811765a138.842353 138.842353 0 0 1 28.220235-3.102118z m0 329.396706c-83.245176 0-150.648471-73.908706-150.648471-164.833882 0-9.667765 0.993882-19.154824 2.409412-28.912941l-101.014588-109.116235c-69.12 67.915294-112.158118 138.029176-112.158118 138.029176s161.852235 263.800471 361.411765 263.800471c35.478588 0 69.571765-8.523294 101.978353-22.287059l-73.818353-79.781647a138.691765 138.691765 0 0 1-28.16 3.102117z m60.054588-164.562823c0-36.442353-27.045647-65.776941-60.355765-65.776941-2.680471 0-5.360941 0.481882-8.041411 0.963764l-70.083765-75.535058-71.017412-76.8-77.94447-84.028236-52.10353 56.079059 67.433412 72.944941 152.094118 164.321883c-0.481882 2.620235-0.692706 5.421176-0.692706 8.041411 0 36.472471 26.985412 65.867294 60.355764 65.867294 2.710588 0 5.360941-0.481882 8.041412-0.963764l70.324706 75.294117 71.077647 76.67953 77.643294 84.058353 52.10353-56.109177-219.557647-236.995764c0.512-2.620235 0.722824-5.421176 0.722823-8.041412z"
        fill="#FFFFFF"
        p-id="1212"
      ></path>
    </CustomIcon>
  );
};

export default React.memo(Icon);