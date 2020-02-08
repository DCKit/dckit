import React from 'react'
import { _get } from '@dckit/store'
import { TextField } from '../TextField'
import { CheckField } from '../CheckField'
import { SwitchField } from '../SwitchField'
import { IFormField, FormFieldType, FieldTypeDict } from '../types'

const components: FieldTypeDict = {
  [FormFieldType.text]: TextField,
  [FormFieldType.check]: CheckField,
  [FormFieldType.switch]: SwitchField,
}

export const FormField = (props: IFormField) => {
  const {
    form,
    field,
    type = FormFieldType.text,
    size,
    defaultValue,
    useDefaults,
    formDisabled,
    hint,
    controlProps,
    controlChange,
    onChange,
    ...restProps
  } = props

  function handleChange(e: any, value?: boolean) {
    const newValue =
      type === FormFieldType.check || type === FormFieldType.switch
        ? value
        : e.target.value
    controlChange && controlChange(form, newValue)
    onChange && onChange(e)
  }

  const errorObj = _get(form.errors, field, {})
  const helperText = errorObj ? errorObj.message : hint
  const error = Boolean(errorObj)

  const injectedProps = controlProps ? controlProps(form) : {}
  if (formDisabled || useDefaults) {
    injectedProps.disabled = true
  }

  const fieldProps = {
    ...restProps,
    ...injectedProps,
    onChange: handleChange,
    error,
    helperText,
  }

  const Field = components[type]

  return Field ? <Field {...fieldProps} /> : null
}
