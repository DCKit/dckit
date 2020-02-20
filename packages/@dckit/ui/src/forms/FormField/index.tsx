import React from 'react'
import { useField, useFormikContext } from 'formik'
import { TextField } from '../TextField'
import { CheckField } from '../CheckField'
import { SwitchField } from '../SwitchField'
import {
  FormFieldProps,
  FormFieldTypes,
  FieldTypeDict,
  DynamicProp,
} from '../types'

const components: FieldTypeDict = {
  [FormFieldTypes.text]: TextField,
  [FormFieldTypes.check]: CheckField,
  [FormFieldTypes.switch]: SwitchField,
}

export const FormField = (props: FormFieldProps) => {
  const {
    name,
    required,
    disabled,
    fieldsDisabled,
    helperText,
    type,
    initialValue,
    onChange,
    ...restProps
  } = props

  const form = useFormikContext()
  const [field, meta] = useField(name)
  const fieldError = meta.error
  const error = meta.touched && !!fieldError

  const checkProp = (prop: DynamicProp) => {
    return typeof prop === 'function' ? prop(form) : prop
  }

  const handleChange = (e: React.ChangeEvent<any>) => {
    onChange && onChange(e, form)
    field.onChange(e)
  }

  const fieldProps = {
    ...restProps,
    ...field,
    onChange: handleChange,
    error,
    helperText: error ? fieldError : helperText,
    required: checkProp(required),
    disabled: (form.isSubmitting || checkProp(disabled)) ?? fieldsDisabled,
  }
  const Field = components[type]

  return Field ? <Field {...fieldProps} /> : null
}
