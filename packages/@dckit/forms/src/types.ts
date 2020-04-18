import { GridSize } from '@material-ui/core'
import { FormikConfig, FormikValues, FormikProps } from 'formik'

export enum FormFieldTypes {
  text = 'text',
  number = 'number',
  password = 'password',
  radio = 'radio',
  check = 'check',
  multiCheck = 'multiCheck',
  switch = 'switch',
  multiSwitch = 'multiSwitch',
  toggle = 'toggle',
  multiToggle = 'multiToggle',
  select = 'select',
  date = 'date',
  component = 'component',
}

export type FormFieldType = keyof typeof FormFieldTypes

export type FieldTypeDict = {
  [key in FormFieldType]?: any
}

export type FormContext = FormikProps<any>

declare function checkProps(value?: any, form?: FormContext): any

export type DynamicProp =
  | typeof checkProps
  | string
  | number
  | boolean
  | undefined

export type OptionsConfig = {
  direction?: 'column' | 'row'
  size?: GridSize
  fullWidth?: boolean
  small?: boolean
}

export type FormFieldConfig = {
  name?: string
  label?: string
  type?: FormFieldType
  size?: GridSize
  style?: any
  initialValue?: any
  component?: any
  required?: DynamicProp
  disabled?: DynamicProp
  helperText?: DynamicProp
  onChange?: any
  controlProps?: any
  options?: any[]
  optionsConfig?: OptionsConfig
}

export type FieldsConfig = { [name: string]: FormFieldConfig }

export type FormFieldProps = Omit<FormFieldConfig, 'size' | 'type'> & {
  fieldsDisabled?: boolean
  name: string
  type: FormFieldType
  value?: any
  onBlur?: any
  error?: any
}

export type MuiFieldProps = Omit<FormFieldProps, 'disabled' | 'required'> & {
  disabled?: boolean
  required?: boolean
}

export type FormProps = FormikConfig<FormikValues> & {
  fields: string[]
  fieldsConfig: any
  renderActions: any
  fieldsDisabled?: boolean
  FormContainer?: any
  FieldContainer?: any
  ActionsContainer?: any
}
