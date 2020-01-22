import React from 'react'
import { TextField as MuiTextField, TextFieldProps } from '@material-ui/core'

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

export const TextField = (props: TextFieldProps) => {
  const handleBlur = (e: any) => {
    const { onBlur, onChange } = props
    const value = String(e.target.value || '')
    const trimValue = value.trim()

    if (value !== trimValue) {
      e.target.value = trimValue
      onChange && onChange(e)
    }
    onBlur && onBlur(e)
  }

  return <MuiTextField {...props} onBlur={handleBlur} />
}
