import React from 'react';
import CustomIcon from '@cgf-tools/icons/CustomIcon';
import type { CustomIconProps } from '@cgf-tools/icons/CustomIcon';

interface IconProps extends CustomIconProps {}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <CustomIcon {...props}>
      <path
        d="M10.752 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
        fill="#FF6000"
        p-id="6215"
      ></path>
      <path
        d="M648.041412 761.524706a29.515294 29.515294 0 0 1 23.732706 11.89647l1.927529 2.921412 1.716706 3.523765a29.635765 29.635765 0 0 1 0 22.497882l-1.716706 3.523765-1.927529 2.921412a29.605647 29.605647 0 0 1-20.208942 11.685647l-3.493647 0.210823h-272.143058a29.515294 29.515294 0 0 1-23.702589-11.89647l-1.927529-2.921412-1.716706-3.523765a29.635765 29.635765 0 0 1 0-22.497882l1.716706-3.523765 1.927529-2.921412a29.605647 29.605647 0 0 1 20.208942-11.685647l3.493647-0.210823h272.143058zM791.521882 240.941176c27.136 0 49.332706 20.781176 51.621647 47.314824l0.180706 4.487529v369.724236c0 27.105882-20.841412 49.332706-47.344941 51.591529l-4.457412 0.210824H232.508235a51.802353 51.802353 0 0 1-51.621647-47.344942l-0.180706-4.457411V292.743529c0-27.136 20.841412-49.362824 47.314824-51.621647L232.508235 240.941176h558.98353z m-415.894588 112.760471l101.436235 250.910118a21.744941 21.744941 0 0 0 39.152942 2.409411l41.231058-74.179764 89.298824 89.298823a18.070588 18.070588 0 1 0 25.6-25.6l-89.298824-89.328941 74.209883-41.200941a21.744941 21.744941 0 0 0-2.409412-39.152941l-250.940235-101.466353a21.744941 21.744941 0 0 0-28.280471 28.310588z"
        fill="#FFFFFF"
        p-id="6216"
      ></path>
    </CustomIcon>
  );
};

export default React.memo(Icon);
