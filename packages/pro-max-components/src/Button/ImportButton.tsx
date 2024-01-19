import React from 'react';
import { ModalForm, ProFormUploadDragger } from '@ant-design/pro-components';
import { ImportOutlined } from '@ant-design/icons';
import { Button, App, Typography, Alert, Tooltip } from 'antd';
import { useMemoizedFn } from 'ahooks';
import type { ButtonProps } from 'antd';

const fieldProps = {
  maxCount: 1,
  multiple: false,
  beforeUpload: () => false,
};

const DownLoadTemplate = ({ url }: { url: string }) => {
  const ref = React.useRef<HTMLAnchorElement>(null);

  return (
    <Tooltip
      placement="top"
      title="点击下载模板文件"
      showArrow
      defaultOpen
      getTooltipContainer={() => ref.current?.parentNode as HTMLElement}
    >
      <span ref={ref}>
        <Typography.Link href={url} target="__blank">
          下载模板
        </Typography.Link>
      </span>
    </Tooltip>
  );
};

export interface ImportButtonProps {
  buttonProps?: ButtonProps;
  text?: string;
  /**
   * 导入模板下载地址
   */
  importTemplateUrl?: string;
  onImport?: (formData: FormData) => Promise<boolean>;
}

const ImportButton: React.FC<ImportButtonProps> = ({
  buttonProps,
  text = '导入',
  importTemplateUrl,
  onImport,
}: ImportButtonProps) => {
  const { message } = App.useApp();

  const handleFinish = useMemoizedFn(async values => {
    const { file } = values;
    if (file?.length > 0) {
      const formData = new FormData();
      formData.append('file', file[0].originFileObj);
      const bool = await onImport?.(formData);
      if (bool) {
        message.success('导入成功');
      } else {
        message.error('导入失败');
      }
      return bool;
    }
    return false;
  });

  return (
    <ModalForm<{
      file: any;
    }>
      title="导入"
      trigger={
        <Button type="primary" icon={<ImportOutlined />} {...buttonProps}>
          {text}
        </Button>
      }
      autoFocusFirstInput
      width={500}
      submitTimeout={2000}
      onFinish={handleFinish}
    >
      {importTemplateUrl && (
        <Alert
          css={{ marginBottom: 10 }}
          message={
            <>
              导入前请先
              <DownLoadTemplate url={importTemplateUrl} />
              ，按照模板格式填写数据，然后导入。
            </>
          }
          type="info"
          showIcon
        />
      )}
      <ProFormUploadDragger
        name="file"
        description="单次仅支持一个文件上传"
        fieldProps={fieldProps}
      />
    </ModalForm>
  );
};

export default React.memo(ImportButton);
