import type { ProFormItemProps } from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-components';
import type { ButtonProps, TagProps } from 'antd';
import type { ActionProps } from './Action';
import type { ImportButtonProps } from './ImportButton';
import type { ExportButtonProps } from './ExportButton';
import type { ModalFormProps, DrawerFormProps } from '@ant-design/pro-components';
import type { ProTableProps } from '@ant-design/pro-components';

export type ProMaxColumns<T, ValueType = 'text'> = ProColumns<
  T,
  'numberInput' | 'link' | 'phone' | 'tags' | ValueType
> & {
  // 是否在展开行中隐藏
  hideInExpandable?: boolean;
  // 展开行中的渲染函数
  renderExpandableItem?: (text: any, record: T) => React.ReactNode;
  /**
   * 是否在新增表单中展示
   */
  showInAddForm?: boolean;
  /**
   * 是否在编辑表单中展示
   */
  showInEditForm?: boolean;
  /**
   * 编辑表单项类型
   */
  editFormItemType?: keyof typeof FormItemTypeMap;
  /**
   * 编辑表单项属性
   */
  editFormItemProps?: ProFormItemProps & {
    options?: any[];
  };
  /**
   * 编辑表单分组，不配置时不分组
   */
  editFormItemGroup?: string;
  /**
   * 编辑表单排序, 默认按数组顺序
   */
  editFormItemSort?: number;
  /**
   * 编辑表单联动配置,暂时不处理，可使用自定义渲染和ProFormDependency进行处理
   */
  /**
   * 自定义编辑表单项的渲染
   */
  renderEditFormItem?: (record: ProMaxColumns<T>) => React.ReactNode;
  fieldProps?: ProColumns<T>['fieldProps'] & {
    /**
     * valueType 为 link 时，可以传a标签的props
     */
    aProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    /**
     * valueType 为 phone 时，可以传icon标签的props
     */
    iconProps?: React.SVGProps<SVGSVGElement>;
    /**
     * valueType 为 tags 时，可以传tag的props
     */
    tagProps?: TagProps & {
      /**
       * tags是数组渲染，这里可以设置key的字段，默认是value
       */
      keyField?: string;
      /**
       * 标签显示的文本字段，默认是label
       */
      labelField?: string;
    };
  };
};

export interface ProMaxTableRef {
  refresh: () => void;
}

export interface ProMaxTableProps<T = any, U = any> extends ProTableProps<T, U> {
  columns: ProMaxColumns<T>[];
  /**
   * 是否关闭默认发送请求
   */
  manual?: boolean;
  /**
   * 是否开启可调整宽度，需要有一列不设置宽度，可设置一个隐藏字段，参考成本一次分摊明细表格
   */
  resizable?: boolean;
  /**
   * 可调整宽度配置项
   */
  resizeableProps?: {
    /**
     * 某一列不能拖动，设置该列的最小展示宽度，默认 120
     */
    defaultWidth?: number;
    /**
     * 拖动最小宽度 默认 60
     */
    minConstraints?: number;
    /**
     * 拖动最大宽度 默认无穷
     */
    maxConstraints?: number;
    /**
     * 是否缓存宽度，避免渲染重置拖拽宽度，默认为true
     */
    cache?: boolean;
    /**
     * 列状态的配置，可以用来操作列拖拽宽度
     */
    columnsState?: any;
    /**
     * 开始拖拽时触发
     */
    onResizeStart?: () => void;
    /**
     * 结束拖拽时触发
     */
    onResizeEnd?: () => void;
  };
  /**
   * 设置宽度保存在localStorage中的key，不设置不保存
   */
  resizablePersistenceKey?: string;
  /**
   * 使用新增功能,配置则开启新增功能
   */
  addButtonProps?: ButtonProps;
  /**
   * 更多按钮自定义
   */
  moreButton?: React.ReactNode[];
  /**
   * 使用导入功能,配置则开启导入功能
   */
  importButtonProps?: ImportButtonProps;
  /**
   * 使用导出功能,配置则开启导出功能
   */
  exportButtonProps?: ExportButtonProps;
  /**
   * 编辑表单类型
   */
  editFormType?: 'modal' | 'drawer';
  /**
   * 编辑表单Modal或Drawer Props
   */
  editFormContainerProps?: ModalFormProps | DrawerFormProps;
  useProMaxTableContainer?: boolean;
  /**
   * 编辑表单提交
   */
  onEditFormSubmit?: (formData: any, mode?: 'add' | 'edit') => Promise<boolean | void>;
  /**
   * 编辑表单提交验证失败
   */
  onEditFormSubmitFailed?: (errorInfo: any) => void;
  rowActionsProps?: ActionProps;
  /**
   * 关闭urlState, 默认开启
   */
  closeUrlState?: boolean;
}
