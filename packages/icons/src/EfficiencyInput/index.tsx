import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M836.07 432.574L423.001 845.642l-6.322 50.843a42.083 42.083 0 0 0 9.03 34.95 32.24 32.24 0 0 0 25.468 9.03h9.482l50.843-6.321 413.068-413.068z"
      p-id="32638"
    ></path>
    <path
      d="M337.21 877.34H200.573a36.123 36.123 0 0 1-38.02-34.949V181.519a36.123 36.123 0 0 1 38.11-34.95H759.85a36.123 36.123 0 0 1 38.11 34.95v155.69a31.788 31.788 0 1 0 63.215 0V181.52A99.339 99.339 0 0 0 759.85 83.083H200.574A99.339 99.339 0 0 0 99.339 181.52V842.39a99.339 99.339 0 0 0 101.686 98.526H337.21a31.788 31.788 0 0 0 0-63.216z"
      p-id="32639"
    ></path>
    <path
      d="M702.595 273.723a32.601 32.601 0 0 0-34.95-31.788H292.778a31.879 31.879 0 1 0 0 63.215h374.867a32.601 32.601 0 0 0 34.95-31.427z m-349.492 381.28h-63.215a31.788 31.788 0 0 0 0 63.215h63.215a31.788 31.788 0 1 0 0-63.216z m-60.325-222.429a31.879 31.879 0 1 0 0 63.216h279.954a31.879 31.879 0 1 0 0-63.216z"
      p-id="32640"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
