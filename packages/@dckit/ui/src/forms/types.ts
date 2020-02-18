import { GridSize } from '@material-ui/core'
import { FormikConfig, FormikValues, FormikProps } from 'formik'

export const enum FormFieldTypes {
  text = 'text',
  check = 'check',
  switch = 'switch',
  component = 'component',
}

export type FormFieldType = keyof typeof FormFieldTypes

export type FieldTypeDict = {
  [key in FormFieldType]?: any
}

export type FormContext = FormikProps<any>

declare function checkProps(form: FormContext): boolean

export type DynamicProp = boolean | typeof checkProps | undefined

export type FormFieldConfig = {
  name?: string
  label?: string
  type?: FormFieldType
  size?: GridSize
  required?: DynamicProp
  disabled?: DynamicProp
  hint?: string
  initialValue?: any
  suffix?: any
  component?: any
}

export type FormFieldProps = Omit<FormFieldConfig, 'size' | 'type'> & {
  fieldsDisabled?: boolean
  name: string
  type: FormFieldType
  value?: any
  onChange?: any
  error?: any
  helperText?: any
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
