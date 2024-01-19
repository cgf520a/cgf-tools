import React from 'react';
import CustomIcon from '@cgf-tools/icons/CustomIcon';
import type { CustomIconProps } from '@cgf-tools/icons/CustomIcon';

interface IconProps extends CustomIconProps {}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <CustomIcon {...props}>
      <path
        d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
        fill="#57B37A"
        p-id="4439"
      ></path>
      <path
        d="M541.696 206.607059l301.176471 301.17647h-150.588236v124.385883a21319.077647 21319.077647 0 0 1-71.589647 131.493647 124.687059 124.687059 0 0 0-15.028706 45.296941h-63.969882v-602.352941z m-120.470588 0v602.352941l-301.176471-301.176471h150.588235v-301.17647h150.588236z"
        fill="#FFFFFF"
        p-id="4440"
      ></path>
      <path
        d="M783.058824 611.689412a30.117647 30.117647 0 0 1 41.140705 11.023059l101.376 175.405176a30.117647 30.117647 0 0 1-26.051764 45.176471h-202.782118a30.117647 30.117647 0 0 1-26.081882-45.176471l101.376-175.405176a30.117647 30.117647 0 0 1 11.023059-10.992942z m15.058823 154.322823c-12.047059 0-21.925647 11.203765-21.925647 24.907294 0 13.703529 9.848471 24.907294 21.925647 24.907295 12.047059 0 21.955765-11.203765 21.955765-24.907295 0-13.703529-9.878588-24.907294-21.955765-24.907294z m0-110.953411c-9.276235 0-16.805647 8.553412-16.805647 19.094588v57.584941l0.090353 2.108235c0.903529 9.547294 8.041412 16.986353 16.715294 16.986353 9.306353 0 16.835765-8.553412 16.835765-19.094588v-57.584941l-0.120471-2.108236c-0.903529-9.547294-8.041412-16.986353-16.715294-16.986352z"
        fill="#FFFFFF"
        p-id="4441"
      ></path>
    </CustomIcon>
  );
};

export default React.memo(Icon);
