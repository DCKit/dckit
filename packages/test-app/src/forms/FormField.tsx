import React from 'react'
import { GridSize, TextField } from '@material-ui/core'
import { _get } from '@dckit/store'

export enum FormFieldType {
  text = 'text',
}

export interface IFormField {
  field: string
  type?: FormFieldType
  size?: GridSize
  fullWidth?: boolean
  disabled?: boolean
  defaultValue?: any
  [propName: string]: any
}

export const FormField = (props: IFormField) => {
  const {
    form,
    field,
    type = FormFieldType.text,
    size,
    fullWidth = true,
    defaultValue,
    disabled: propDisabled,
    checkDisabled,
    onChange,
    checkChange,
    ...restProps
  } = props

  const disabled = Boolean(checkDisabled ? checkDisabled(form) : propDisabled)

  const handleChange = (e: any) => {
    checkChange && checkChange(form, e.target.value)
    onChange && onChange(e)
  }

  /*
  const trimSpaces = (e: any) => {
    const value = String(e.target.value || '')
    const trimValue = value.trim()

    if (value !== trimValue) {
      e.target.value = trimValue
      onChange && onChange(e)
    }
  }
  FormHelperTextProps={{
    classes: {
      root: classes.helperText,
      error: classes.helperTextError,
    },
  }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="start" className={classes.inputSuffix}>
        {inputSuffix}
      </InputAdornment>
    ),
  }}
*/

  const errorObj = _get(form.errors, field, {})
  const helperText = errorObj ? errorObj.message : undefined
  const error = Boolean(errorObj)

  const fieldProps = {
    fullWidth,
    disabled,
    ...restProps,
    onChange: handleChange,
    error,
    helperText,
  }

  return type === FormFieldType.text ? <TextField {...fieldProps} /> : null
}
