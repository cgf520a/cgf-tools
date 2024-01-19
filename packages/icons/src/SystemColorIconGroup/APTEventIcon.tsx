import React from 'react';
import CustomIcon from '@cgf-tools/icons/CustomIcon';
import type { CustomIconProps } from '@cgf-tools/icons/CustomIcon';

interface IconProps extends CustomIconProps {}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <CustomIcon {...props}>
      <path
        d="M187.343238 0h682.666667a170.666667 170.666667 0 0 1 170.666666 170.666667v682.666666a170.666667 170.666667 0 0 1-170.666666 170.666667h-682.666667a170.666667 170.666667 0 0 1-170.666667-170.666667V170.666667a170.666667 170.666667 0 0 1 170.666667-170.666667z"
        fill="#57B37A"
        p-id="4277"
      ></path>
      <path
        d="M834.218667 195.047619a48.761905 48.761905 0 0 1 48.761904 48.761905v397.263238l60.294096 130.535619a48.761905 48.761905 0 0 1-44.27581 69.193143H175.079619a48.761905 48.761905 0 0 1-44.275809-69.193143l60.294095-130.535619V243.809524a48.761905 48.761905 0 0 1 48.761905-48.761905h594.358857z m-209.749334 507.367619H449.828571a7.314286 7.314286 0 0 0-6.826666 4.729905l-16.188953 42.666667a7.314286 7.314286 0 0 0 6.826667 9.898666h208.993524a7.314286 7.314286 0 0 0 6.729143-10.166857l-18.16381-42.666667a7.314286 7.314286 0 0 0-6.729143-4.437333z m141.897143-415.110095H307.712a24.380952 24.380952 0 0 0-24.234667 21.528381l-0.146285 2.852571v297.179429a24.380952 24.380952 0 0 0 21.528381 24.210286l2.852571 0.170666h458.605714a24.380952 24.380952 0 0 0 24.234667-21.528381l0.146286-2.852571v-297.20381a24.380952 24.380952 0 0 0-24.380953-24.380952z"
        fill="#FFFFFF"
        p-id="4278"
      ></path>
      <path
        d="M709.510095 421.449143c-8.557714-69.656381-65.097143-123.270095-133.363809-123.270095a130.974476 130.974476 0 0 0-104.155429 52.150857l-96.353524 102.497524a46.275048 46.275048 0 0 0 0 62.659047 41.545143 41.545143 0 0 0 60.952381 0l13.750857-14.628571v193.29219c0 23.82019 18.529524 43.544381 41.667048 43.544381 23.113143 0 41.642667-19.72419 41.642667-43.544381v-53.028571c5.241905 2.511238 11.093333 3.900952 17.261714 3.900952 17.749333 0 32.768-11.580952 38.814476-27.721143 5.948952 3.462095 12.8 5.436952 20.114286 5.436953 22.162286 0 40.082286-18.090667 41.545143-40.545524 5.290667 2.535619 11.166476 3.974095 17.383619 3.974095 22.991238 0 41.545143-19.626667 41.910857-43.446857v-121.270857H709.485714z"
        fill="#FFFFFF"
        p-id="4279"
      ></path>
    </CustomIcon>
  );
};

export default React.memo(Icon);
