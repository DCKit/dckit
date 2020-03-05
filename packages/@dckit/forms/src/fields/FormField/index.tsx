import React from 'react'
import { useField, useFormikContext } from 'formik'
import { FormFieldProps, DynamicProp } from '../../types'
import { components } from '..'

export function FormField(props: FormFieldProps) {
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
  const error = meta.touched && Boolean(fieldError)

  const checkProp = (prop: DynamicProp) => {
    return typeof prop === 'function' ? prop(field.value, form) : prop
  }

  const handleChange = (e: React.ChangeEvent<any>, value: any) => {
    onChange && onChange(value, form)
    field.onChange(e)
  }

  const fieldProps = {
    ...restProps,
    ...field,
    onChange: handleChange,
    error,
    helperText: error ? fieldError : checkProp(helperText),
    required: checkProp(required),
    disabled: (form.isSubmitting || checkProp(disabled)) ?? fieldsDisabled,
  }
  const Field = components[type]

  return Field ? <Field {...fieldProps} /> : null
}
