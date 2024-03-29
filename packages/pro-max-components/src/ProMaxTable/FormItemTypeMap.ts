import {
  ProFormText,
  ProFormCaptcha,
  ProFormTextArea,
  ProFormDigit,
  ProFormDigitRange,
  ProFormDatePicker,
  ProFormDateTimePicker,
  ProFormDateRangePicker,
  ProFormDateTimeRangePicker,
  ProFormTimePicker,
  ProFormSelect,
  ProFormTreeSelect,
  ProFormCheckbox,
  ProFormRadio,
  ProFormCascader,
  ProFormSwitch,
  ProFormRate,
  ProFormSlider,
  ProFormUploadDragger,
  ProFormUploadButton,
  ProFormMoney,
  ProFormSegmented,
} from '@ant-design/pro-components';
import PreComponent from '../PreComponent';

const { ProFormPhoneInput, ProFormEmailInput, ProFormIdCardInput, ProFormPasswordInput } =
  PreComponent;

const obj: any = {
  ProFormText,
  ProFormCaptcha,
  'ProFormText.Password': ProFormText.Password,
  ProFormTextArea,
  ProFormDigit,
  ProFormDigitRange,
  ProFormDatePicker,
  ProFormDateTimePicker,
  ProFormDateRangePicker,
  ProFormDateTimeRangePicker,
  ProFormTimePicker,
  ProFormSelect,
  ProFormTreeSelect,
  ProFormCheckbox,
  ProFormRadio: ProFormRadio.Group,
  ProFormCascader,
  ProFormSwitch,
  ProFormRate,
  ProFormSlider,
  ProFormUploadDragger,
  ProFormUploadButton,
  ProFormMoney,
  ProFormSegmented,
  'ProFormSelect.SearchSelect': ProFormSelect.SearchSelect,
  ProFormPhoneInput,
  ProFormEmailInput,
  ProFormIdCardInput,
  ProFormPasswordInput,
};

export default obj;
