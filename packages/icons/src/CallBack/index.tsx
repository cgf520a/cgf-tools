import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { theme } from 'antd';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M821.497756 564.248976H201.50322c-11.588683 0-20.979512 6.493659-20.979513 14.485853v40.860098c0 7.992195 9.390829 14.485854 20.979513 14.485853h541.471219L600.513561 776.741463c-13.686634 13.686634-13.686634 35.765073 0 49.451708 13.686634 13.686634 35.765073 13.686634 49.451707 0L832.187317 643.87122c6.693463-6.693463 10.090146-15.285073 10.190049-24.076488v-41.059903c0.099902-7.992195-9.290927-14.485854-20.87961-14.485853zM821.497756 388.820293h-541.471219L422.587317 246.259512c13.686634-13.686634 13.686634-35.765073 0-49.451707-13.686634-13.686634-35.765073-13.686634-49.451707 0L190.813659 379.129756c-6.693463 6.693463-10.090146 15.285073-10.190049 24.076488v41.059902c0 7.992195 9.390829 14.485854 20.979512 14.485854h619.894634c11.588683 0 20.979512-6.493659 20.979512-14.485854v-40.860097c0-8.092098-9.390829-14.585756-20.979512-14.585756z"
      p-id="11020"
    ></path>
    <path
      d="M992.03122 378.130732c-19.281171 0-34.965854-15.684683-34.965854-34.965854V150.453073c0-44.356683-36.06478-80.521366-80.521366-80.521366H150.453073C105.996488 69.931707 69.931707 105.996488 69.931707 150.453073v190.813659c0 19.281171-15.684683 34.965854-34.965853 34.965853s-34.965854-15.684683-34.965854-34.965853v-190.813659C0 67.434146 67.434146 0 150.453073 0h726.190829c82.919024 0 150.453073 67.434146 150.453074 150.453073v192.711805c-0.099902 19.281171-15.784585 34.965854-35.065756 34.965854zM876.544 1024H150.453073C67.434146 1024 0 956.565854 0 873.546927v-190.813659c0-19.281171 15.684683-34.965854 34.965854-34.965853s34.965854 15.684683 34.965853 34.965853v190.813659c0 44.356683 36.06478 80.521366 80.521366 80.521366h726.190829c44.356683 0 80.521366-36.06478 80.521366-80.521366V680.835122c0-19.281171 15.684683-34.965854 34.965854-34.965854s34.965854 15.684683 34.965854 34.965854v192.711805c-0.099902 83.018927-67.534049 150.453073-150.552976 150.453073z"
      p-id="11021"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);