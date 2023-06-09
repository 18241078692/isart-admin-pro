// 表单中的组件类型
type ProFormType =
  | 'input'
  | 'password'
  | 'select'
  | 'mention'
  | 'datePicker'
  | 'dateRangePicker'
  | 'textArea'
  | 'textAreaEditor'
  | 'upload'
  | 'slot';

type Layout = 'horizontal' | 'vertical' | 'inline'; // 表单的布局方式，包括水平、垂直、多列
type Size = 'mini' | 'small' | 'medium' | 'large'; // 表单控件的尺寸

// 表单所需要的数据类型
// field：双向绑定关键字
// type：表单中组件的类型（通过type进行匹配：比如：input 是一个输入框，password则是密码框）
// label  标签名称
// rules 验证规则
// placeholder 提醒文字
// options  数据（比如select ）
// slotName 插槽名字
export interface ProFormItem {
  field: string;
  type: ProFormType;
  span?: number;
  label: string;
  rules?: any[];
  placeholder?: any;
  options?: any[];
  fieldNames?: any;
  slotName?: string;
  labelConfig?: any;
  wrapperConfig?: any;
  offset?: number;
}

// 表单的配置
export interface ProFormConfig {
  layout?: Layout;
  size?: Size;
  labelColProps?: any;
  wrapperColProps?: any;
  labelAlign?: any;
  disabled?: boolean;
  rules?: any;
  autoLabelWidth?: boolean;
  formModel: any; // 表单控件
  formItems: ProFormItem[]; // 表单项配置
  request?: any; // 请求方法
}

// 表单的配置
export interface SearchFormConfig extends ProFormConfig {
  formModel: any; // 表单控件
  formItems: ProFormItem[]; // 表单项配置
  request?: any; // 请求方法
}

// 模态表单的配置
export interface ModalFormConfig extends ProFormConfig {
  visible: boolean; // 弹框控件
  title?: string; // 弹框标题
  width?: string | number; // 弹框宽度
  top?: string | number; // 弹框距离页面顶部的距离 当alignCenter为false是生效
  alignCenter?: boolean; // 弹框是否居中显示 默认为true
  footer?: boolean; // 是否开启底部按钮
}

// 抽屉表单的配置
export interface DrawerFormConfig extends ProFormConfig {
  visible: boolean; // 抽屉控件
  title?: string; // 抽屉标题
  width?: string | number; // 抽屉宽度 仅在placement为right,left时可用）
  height?: string | number; // 抽屉高度 仅在placement为top,bottom时可用）
  placement?: string; // 抽屉放置的位置 'top' | 'right' | 'bottom' | 'left' 默认 'right'
  maskClosable?: boolean; // 点击遮罩层是否可以关闭
  footer?: boolean; // 是否展示底部内容
}
