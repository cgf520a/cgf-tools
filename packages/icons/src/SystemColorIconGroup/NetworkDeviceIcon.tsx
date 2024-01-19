import React from 'react';
import CustomIcon from '@cgf-tools/icons/CustomIcon';
import type { CustomIconProps } from '@cgf-tools/icons/CustomIcon';

interface IconProps extends CustomIconProps {}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <CustomIcon {...props}>
      <path
        d="M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z"
        fill="#31A6FF"
        p-id="2177"
      ></path>
      <path
        d="M642.499765 547.177412H590.305882v-129.867294a24.335059 24.335059 0 0 1 24.094118-24.576h3.584c13.552941 0 24.545882 10.752 24.666353 24.094117v130.349177h-0.150588zM176.399059 544.225882h662.588235a30.117647 30.117647 0 0 1 30.117647 30.117647v210.82353a30.117647 30.117647 0 0 1-30.117647 30.117647h-662.588235a30.117647 30.117647 0 0 1-30.117647-30.117647v-210.82353a30.117647 30.117647 0 0 1 30.117647-30.117647z m661.925647-138.691764c2.228706-120.771765-95.322353-220.461176-217.901177-222.659765-122.578824-2.198588-223.744 93.936941-225.972705 214.738823a215.552 215.552 0 0 0 0 7.920942c0 14.215529 11.715765 25.750588 26.142117 25.750588 14.456471 0 26.142118-11.535059 26.142118-25.750588 0-92.340706 75.986824-167.213176 169.682823-167.213177 93.726118 0 169.712941 74.842353 169.712942 167.213177a25.901176 25.901176 0 0 0 24.69647 27.075764 25.991529 25.991529 0 0 0 27.497412-27.105882z m-104.387765 0c0-63.939765-52.615529-115.802353-117.519059-115.802353-64.873412 0-117.458824 51.862588-117.458823 115.802353a25.901176 25.901176 0 0 0 24.69647 27.105882 25.991529 25.991529 0 0 0 27.467295-27.105882c-1.204706-35.538824 27.045647-65.295059 63.09647-66.469647 36.020706-1.204706 66.258824 26.624 67.46353 62.162823v4.306824c0 14.215529 11.685647 25.750588 26.112 25.750588 14.456471 0 26.142118-11.535059 26.142117-25.750588z m-456.975059 295.755294a25.991529 25.991529 0 0 0 27.497412-24.335059 25.901176 25.901176 0 0 0-27.497412-27.105882 26.654118 26.654118 0 0 0-18.462117 7.228235 25.479529 25.479529 0 0 0 0.090353 36.442353c4.879059 4.788706 11.474824 7.469176 18.371764 7.499294v0.301176z m208.926118 0c14.456471 0 26.142118-11.504941 26.142118-25.750588a25.961412 25.961412 0 0 0-26.142118-25.750589 25.961412 25.961412 0 0 0-26.112 25.750589v0.090352c0 14.155294 11.655529 25.690353 26.051765 25.690353h0.060235z m-104.448 0c14.426353 0 26.142118-11.504941 26.142118-25.750588a25.961412 25.961412 0 0 0-26.142118-25.750589 25.961412 25.961412 0 0 0-26.142118 25.750589v0.090352c0.030118 14.185412 11.745882 25.690353 26.142118 25.690353z"
        fill="#FFFFFF"
        p-id="2178"
      ></path>
    </CustomIcon>
  );
};

export default React.memo(Icon);
