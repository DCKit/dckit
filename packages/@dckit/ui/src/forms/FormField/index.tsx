import React from 'react'
import { useField, useFormikContext } from 'formik'
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
  const {
    name,
    disabled,
    fieldsDisabled,
    hint,
    type,
    initialValue,
    onChange,
    ...restProps
  } = props

  const { isSubmitting } = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = (e: React.ChangeEvent<any>) => {
    onChange && onChange(e)
    field.onChange(e)
  }

  const fieldError = meta.error
  const error = meta.touched && !!fieldError

  const fieldProps = {
    ...restProps,
    ...field,
    onChange: handleChange,
    error,
    helperText: error ? fieldError : hint,
    disabled: (isSubmitting || disabled) ?? fieldsDisabled,
  }
  const Field = components[type]

  return Field ? <Field {...fieldProps} /> : null
}
