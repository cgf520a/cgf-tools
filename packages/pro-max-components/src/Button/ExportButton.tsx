import React from 'react';
import { Button } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import { useMemoizedFn } from 'ahooks';
import axios from 'axios';
import type { Method } from 'axios';

export interface ExportButtonProps {
  buttonProps?: ButtonProps;
  text?: string;
  /**
   * 导出模式 window为新窗口直接打开下载，blob为二进制下载,outer为弹出事件外部处理
   */
  exportMode?: 'window' | 'blob' | 'outer';
  /**
   * 下载接口
   */
  exportUrl?: string;
  /**
   * 下载参数 为false时不传递参数
   */
  exportParams?: false | Record<string, any>;
  /**
   * 导出回调，为outer时不处理直接回调，其他模式先处理再回调
   */
  onExport?: (params?: Record<string, any>) => void;
  /**
   * 请求方法
   */
  method?: Method;
  fileName?: string;
}

const ExportButton: React.FC<ExportButtonProps> = ({
  buttonProps,
  text = '导出',
  onExport,
  exportMode = 'window',
  exportParams,
  exportUrl,
  method = 'post',
  fileName = '导出数据.xlsx',
}: ExportButtonProps) => {
  const handleClick = useMemoizedFn(() => {
    if (exportUrl) {
      if (exportMode === 'blob') {
        axios(exportUrl, {
          responseType: 'blob',
          method,
          params: exportParams === false ? undefined : exportParams,
        }).then((res) => {
          const blob = new Blob([res.data]);
          const urlObject = window.URL || window.webkitURL || window;
          const downloadElement = document.createElement('a');
          const href = urlObject.createObjectURL(blob); //创建下载的链接
          downloadElement.href = href;
          downloadElement.download = fileName; //下载后文件名
          document.body.appendChild(downloadElement);
          downloadElement.click(); //点击下载
          document.body.removeChild(downloadElement); //下载完成移除元素
          urlObject.revokeObjectURL(href); //释放掉blob对象
        });
      } else if (exportMode === 'window') {
        window.open(exportUrl);
      }
    }
    onExport?.(exportParams === false ? undefined : exportParams);
  });

  return (
    <Button icon={<ExportOutlined />} onClick={handleClick} {...buttonProps}>
      {text}
    </Button>
  );
};

export default React.memo(ExportButton);
