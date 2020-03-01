import { GridSize } from '@material-ui/core'
import { FormikConfig, FormikValues, FormikProps } from 'formik'

export const enum FormFieldTypes {
  text = 'text',
  check = 'check',
  multiCheck = 'multiCheck',
  switch = 'switch',
  radio = 'radio',
  toggle = 'toggle',
  multiToggle = 'multiToggle',
  component = 'component',
}

export type FormFieldType = keyof typeof FormFieldTypes

export type FieldTypeDict = {
  [key in FormFieldType]?: any
}

export type FormContext = FormikProps<any>

declare function checkProps(form: FormContext): boolean

export type DynamicProp = boolean | typeof checkProps | undefined

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
  required?: DynamicProp
  disabled?: DynamicProp
  options?: any[]
  optionsConfig?: OptionsConfig
  helperText?: string
  initialValue?: any
  startAdornment?: any
  endAdornment?: any
  component?: any
}

export type FieldsConfig = { [name: string]: FormFieldConfig }

export type FormFieldProps = Omit<FormFieldConfig, 'size' | 'type'> & {
  fieldsDisabled?: boolean
  name: string
  type: FormFieldType
  value?: any
  onChange?: any
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
