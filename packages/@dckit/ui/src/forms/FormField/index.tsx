import React from 'react'
import { useField } from 'formik'
import { TextField } from '../TextField'
import { CheckField } from '../CheckField'
import { SwitchField } from '../SwitchField'
import { FormFieldProps, FormFieldTypes, FieldTypeDict } from '../types'

const components: FieldTypeDict = {
  [FormFieldTypes.text]: TextField,
  [FormFieldTypes.check]: CheckField,
  [FormFieldTypes.switch]: SwitchField,
}

export const FormField = (props: FormFieldProps) => {
  const { form, name, disabled, hint, type, initialValue, ...restProps } = props
  const { isSubmitting } = form
  const [field, meta] = useField(name)

  const fieldError = meta.error
  const error = meta.touched && !!fieldError

  const fieldProps = {
    ...restProps,
    ...field,
    error,
    helperText: error ? fieldError : hint,
    disabled: disabled ?? isSubmitting,
  }
  const Field = components[type]

  return Field ? <Field {...fieldProps} /> : null
}
