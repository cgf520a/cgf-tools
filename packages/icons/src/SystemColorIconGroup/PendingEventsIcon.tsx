import React from 'react';
import CustomIcon from '@cgf-tools/icons/CustomIcon';
import type { CustomIconProps } from '@cgf-tools/icons/CustomIcon';

interface IconProps extends CustomIconProps {}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <CustomIcon {...props}>
      <path
        d="M0 0m170.666667 0l682.666666 0q170.666667 0 170.666667 170.666667l0 682.666666q0 170.666667-170.666667 170.666667l-682.666666 0q-170.666667 0-170.666667-170.666667l0-682.666666q0-170.666667 170.666667-170.666667Z"
        fill="#1676FF"
        p-id="3632"
      ></path>
      <path
        d="M755.931429 170.666667a50.712381 50.712381 0 0 1 50.663619 50.712381V465.67619l-22.674286-24.210285A84.626286 84.626286 0 0 0 722.16381 414.47619c-23.064381 0-45.421714 9.752381-61.513143 26.892191l-12.068572 12.848762-3.754666 4.388571a90.89219 90.89219 0 0 0-20.065524 51.321905l-0.121905 2.80381-44.617143 47.664761h-249.173333a22.723048 22.723048 0 0 0-4.071619 45.056l4.047238 0.414477 175.445333-0.024381-7.801905 8.338285v4.412953A89.526857 89.526857 0 0 0 487.619048 661.382095l0.146285 5.339429H330.849524a22.723048 22.723048 0 0 0-4.047238 45.031619l4.047238 0.414476 172.129524 0.024381c2.194286 3.218286 4.632381 6.339048 7.314285 9.264762l72.777143 77.750857 3.291429 3.340191c-11.190857 1.706667-24.527238 3.096381-40.326095 4.071619H221.379048A50.712381 50.712381 0 0 1 170.666667 755.907048V221.379048A50.712381 50.712381 0 0 1 221.379048 170.666667h534.552381z m-115.297524 94.451809H562.712381l-4.705524 0.390095c-10.727619 1.974857-19.090286 10.361905-21.065143 21.065143l-0.438857 4.705524v2.852572l0.487619 3.85219c2.218667 10.142476 10.532571 17.822476 20.821334 19.260952l4.900571 0.219429h18.358857l-95.50019 117.662476-58.953143-57.660952-3.900953-3.169524a25.258667 25.258667 0 0 0-27.550476 0l-3.900952 3.169524-79.628191 77.945905-2.096762 4.461714a25.86819 25.86819 0 0 0 32.987429 32.987428l4.461714-2.048 1.121524 0.926477 60.14781-60.001524 60.001523 59.977143 3.047619 2.852571c4.36419 3.413333 9.801143 5.168762 15.33562 4.924952a19.772952 19.772952 0 0 0 16.335238-7.411809l2.023619-3.169524 109.568-130.267428v10.556952l0.097523 4.87619a26.185143 26.185143 0 0 0 52.077715 0l0.073143-4.87619v-77.921524l-0.316953-4.096a26.185143 26.185143 0 0 0-25.86819-22.064762z"
        fill="#FFFFFF"
        p-id="3633"
      ></path>
      <path
        d="M722.16381 463.238095c9.337905 0 18.895238 3.754667 26.160761 11.50781l72.313905 77.287619c6.656 7.728762 9.99619 17.481143 9.996191 26.989714 0 10.191238-3.559619 20.138667-10.825143 27.89181l-12.678095 13.507047c-7.070476 7.314286-16.213333 10.849524-25.356191 10.849524-4.36419 0-8.923429-0.877714-13.092571-2.657524l-7.68 8.192 128.219428 136.825905c8.508952 9.069714 12.873143 21.040762 12.873143 32.987429s-4.36419 23.893333-12.873143 32.987428a42.422857 42.422857 0 0 1-30.963809 13.726476c-11.215238 0-22.430476-4.632381-30.96381-13.726476l-128.219428-136.606476-8.094477 7.972571c1.657905 4.437333 2.486857 9.313524 2.486858 13.945905 0 9.97181-3.535238 20.163048-10.800762 27.89181l-12.678096 13.726476a35.035429 35.035429 0 0 1-51.321904-0.658286l-72.313905-77.263238A40.277333 40.277333 0 0 1 536.380952 661.382095c0-9.947429 3.535238-19.919238 10.800762-27.672381v-0.219428l12.044191-12.848762c7.070476-7.509333 16.62781-11.288381 26.185143-11.288381 4.388571 0 8.94781 0.902095 13.092571 2.681905l77.287619-82.602667a40.252952 40.252952 0 0 1-2.486857-13.945905c0-9.97181 3.754667-20.138667 10.825143-27.891809l12.04419-12.848762c7.070476-7.533714 16.62781-11.50781 25.965715-11.50781z"
        fill="#FFFFFF"
        p-id="3634"
      ></path>
    </CustomIcon>
  );
};

export default React.memo(Icon);