import React from 'react';
import CustomIcon from '@cgf-tools/icons/CustomIcon';
import type { CustomIconProps } from '@cgf-tools/icons/CustomIcon';

interface IconProps extends CustomIconProps {}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <CustomIcon {...props}>
      <path
        d="M27.979294 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
        fill="#1676FF"
        p-id="6376"
      ></path>
      <path
        d="M415.021176 210.823529l97.370353 132.216471 382.795295-0.030118v407.913412a60.235294 60.235294 0 0 1-60.235295 60.235294h-572.235294a60.235294 60.235294 0 0 1-60.235294-60.235294V271.058824a60.235294 60.235294 0 0 1 60.235294-60.235295h152.304941z m138.420706 176.850824c-57.976471 0-105.411765 46.471529-105.411764 104.387765l-0.331294 58.940235h-9.035295c-19.968 0-36.141176 16.474353-36.141176 36.803765l-0.301177 130.921411c0 20.329412 16.173176 36.803765 36.141177 36.803765h228.894118c19.937882 0 36.141176-16.474353 36.141176-36.803765l0.301177-130.921411c0-20.329412-16.203294-36.803765-36.141177-36.803765h-159.623529l0.301176-58.940235c0-23.491765 19.968-43.068235 45.176471-43.068236 25.238588 0 45.176471 19.576471 45.17647 43.068236v2.258823a30.418824 30.418824 0 0 0 30.117647 30.659765c16.655059 0 30.117647-13.733647 30.117647-30.659765v-2.258823c0-57.916235-47.405176-104.387765-105.411764-104.387765zM834.921412 210.823529a60.235294 60.235294 0 0 1 60.235294 60.235295v47.194352H524.920471L445.711059 210.823529h389.180235z m-151.341177 29.003295a24.726588 24.726588 0 1 0 0 49.483294 24.726588 24.726588 0 0 0 0-49.483294z m74.209883 0a24.726588 24.726588 0 1 0 0 49.483294 24.726588 24.726588 0 0 0 0-49.483294z m74.24 0a24.726588 24.726588 0 1 0 0 49.483294 24.726588 24.726588 0 0 0 0-49.483294z"
        fill="#FFFFFF"
        p-id="6377"
      ></path>
    </CustomIcon>
  );
};

export default React.memo(Icon);
