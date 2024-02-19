import React from 'react';
import { ModalForm, DrawerForm } from '@ant-design/pro-components';
import {
  useEditFormRef,
  useMode,
  useOpen,
  useFormOptions,
  useEditRecord,
} from './hooks';
import type {
  ModalFormProps,
  DrawerFormProps,
} from '@ant-design/pro-components';
import { useMemoizedFn } from 'ahooks';
import EditFormTypeMap from './FormItemTypeMap';
import type { ProMaxColumns } from './index';

const Item = React.memo(
  (
    props: ProMaxColumns<any> & {
      /**
       * 直接当组件用时，不用renderEditFormItem，因为其用在renderEditFormItem中，会导致死循环
       */
      useInProMaxEditFormItem?: boolean;
    },
  ) => {
    const { setFormOptions } = useFormOptions();

    const {
      editFormItemType = 'ProFormText',
      editFormItemGroup,
      editFormItemProps,
      useInProMaxEditFormItem = false,
      renderEditFormItem,
    } = props;

    const { options } = editFormItemProps || {};

    React.useEffect(() => {
      if (options) {
        setFormOptions(props.dataIndex as string, options);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options]);

    const FormItemComponent = EditFormTypeMap[editFormItemType];

    const handleOptionsChange = useMemoizedFn(
      (options: any[], key?: string) => {
        setFormOptions(key || (props.dataIndex as string), options);
      },
    );

    if (renderEditFormItem && !useInProMaxEditFormItem) {
      const node = renderEditFormItem(props);
      return React.isValidElement(node)
        ? React.cloneElement(node, {
            onOptionsChange: handleOptionsChange,
          } as any)
        : node;
    }

    return (
      <FormItemComponent
        label={props.title}
        name={props.dataIndex}
        onOptionsChange={handleOptionsChange}
        {...(editFormItemProps as any)}
      />
    );
  },
);

export const ProMaxEditFormItem = (props: ProMaxColumns<any>) => (
  <Item {...props} useInProMaxEditFormItem />
);

export interface EditFormProps {
  editFormType?: 'modal' | 'drawer';
  columns?: ProMaxColumns<any>[];
  onEditFormSubmit?: (
    formData: any,
    mode?: 'add' | 'edit',
  ) => Promise<boolean | void>;
  onEditFormSubmitFailed?: (errorInfo: any) => void;
  /**
   * 点击修改时转换record的值,返回值用于设置表单，不设置直接使用record
   */
  transformRecord?: (record: any, formOptions: any) => any;
  /**
   * 编辑按钮被点击，在transformRecord满足不了需求时使用，用来设置不是数据驱动的逻辑
   */
  onEditClick?: (record: any) => void;
}

const EditForm: React.FC<
  (ModalFormProps | DrawerFormProps) & EditFormProps
> = ({
  editFormType = 'modal',
  columns,
  onEditFormSubmit,
  onEditFormSubmitFailed,
  transformRecord,
  onEditClick,
  ...others
}: EditFormProps) => {
  const editFormRef = useEditFormRef();
  const { mode } = useMode();
  const { open, setOpen } = useOpen();
  const { editRecord } = useEditRecord();
  const { formOptions } = useFormOptions();

  const Container = React.useMemo(
    () => (editFormType === 'modal' ? ModalForm : DrawerForm),
    [editFormType],
  );

  const handleOpenChange = useMemoizedFn((visible: boolean) => {
    setOpen(visible);
  });

  const handleFinish = useMemoizedFn(async (values) => {
    const bool = await onEditFormSubmit?.(values, mode);
    if (bool) {
      setOpen(false);
    }
  });

  const handle = React.useCallback(() => {
    if (
      open &&
      mode === 'edit' &&
      editFormRef?.current &&
      editRecord &&
      formOptions
    ) {
      editFormRef?.current?.setFieldsValue(
        transformRecord ? transformRecord(editRecord, formOptions) : editRecord,
      );
    } else {
      if (!open) {
        editFormRef?.current?.resetFields();
      }
    }
  }, [editFormRef, editRecord, formOptions, mode, open, transformRecord]);

  React.useEffect(() => {
    handle();
  }, [handle]);

  React.useEffect(() => {
    if (open && mode === 'edit' && editRecord) {
      onEditClick?.(editRecord);
    }
  }, [editRecord, mode, onEditClick, open]);

  return (
    <Container
      open={open}
      onOpenChange={handleOpenChange}
      title={mode === 'add' ? '新增' : '编辑'}
      formRef={editFormRef}
      layout="horizontal"
      labelCol={{
        span: 4,
        offset: 2,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={handleFinish}
      onFinishFailed={onEditFormSubmitFailed}
      {...others}
    >
      {(columns || [])
        // 过滤出要在编辑表单里展示的表单
        .filter((_) =>
          mode === 'edit'
            ? _.showInEditForm === undefined
              ? _.showInAddForm
              : _.showInEditForm
            : _.showInAddForm,
        )
        // 排序
        .sort((a, b) => (a.editFormItemSort || 0) - (b.editFormItemSort || 0))
        .map((_) => (
          <Item key={_.dataIndex as string} {..._} />
        ))}
    </Container>
  );
};

export default React.memo(EditForm);
