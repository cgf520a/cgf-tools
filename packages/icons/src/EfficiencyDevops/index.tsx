import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M765.305263 172.463158l-91.621052-7.185965c-5.389474 0-8.982456 7.185965-5.389474 10.778947l19.761403 23.354386-116.771929 100.603509-104.196492-116.77193-197.614035 172.463158c-14.37193 12.575439-16.168421 35.929825-3.592982 52.098246 12.575439 14.37193 35.929825 16.168421 52.098245 3.592982l141.922807-123.957895 100.603509 113.178948 172.463158-149.108772 19.761404 23.354386c3.592982 3.592982 10.778947 1.796491 10.778947-3.592983l7.185965-91.621052c1.796491-1.796491-1.796491-7.185965-5.389474-7.185965z"
      fill="currentColor"
      p-id="35843"
    ></path>
    <path
      d="M512 558.708772C265.880702 558.708772 3.592982 463.494737 3.592982 289.235088s262.287719-269.473684 508.407018-269.473684c246.119298 0 508.407018 95.214035 508.407018 269.473684s-262.287719 269.473684-508.407018 269.473684z m0-440.140351C249.712281 118.568421 89.824561 217.375439 89.824561 289.235088s161.684211 172.463158 422.175439 172.463158c262.287719 0 422.175439-100.603509 422.175439-172.463158 1.796491-71.859649-159.887719-170.666667-422.175439-170.666667z"
      fill="currentColor"
      p-id="35844"
    ></path>
    <path
      d="M512 779.677193C265.880702 779.677193 3.592982 684.463158 3.592982 510.203509c0-26.947368 19.761404-48.505263 43.11579-48.505263 23.354386 0 43.115789 21.557895 43.115789 48.505263 0 71.859649 161.684211 172.463158 422.175439 172.463158C774.287719 682.666667 934.175439 582.063158 934.175439 510.203509c0-26.947368 19.761404-48.505263 43.115789-48.505263s43.115789 21.557895 43.11579 48.505263c0 174.259649-262.287719 269.473684-508.407018 269.473684z"
      fill="currentColor"
      p-id="35845"
    ></path>
    <path
      d="M512 1004.238596C265.880702 1004.238596 3.592982 909.024561 3.592982 734.764912c0-26.947368 19.761404-48.505263 43.11579-48.505263 23.354386 0 43.115789 21.557895 43.115789 48.505263 0 71.859649 161.684211 172.463158 422.175439 172.463158 262.287719 0 422.175439-100.603509 422.175439-172.463158 0-26.947368 19.761404-48.505263 43.115789-48.505263s43.115789 21.557895 43.11579 48.505263c0 174.259649-262.287719 269.473684-508.407018 269.473684z"
      fill="currentColor"
      p-id="35846"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);