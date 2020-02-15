import React from 'react'
import {
  TextField as MuiTextField,
  InputAdornment,
  StandardTextFieldProps,
} from '@material-ui/core'
import { FormFieldProps } from '../types'
import { useStyles } from './styles'

export const TextField = (props: FormFieldProps) => {
  const classes = useStyles()

  const { suffix, ...restProps } = props

  const fieldProps: StandardTextFieldProps = {
    ...restProps,
    FormHelperTextProps: {
      classes: {
        root: classes.helperText,
      },
    },
  }

  if (suffix) {
    fieldProps.InputProps = {
      endAdornment: <InputAdornment position="end">{suffix}</InputAdornment>,
    }
  }

  return <MuiTextField {...fieldProps} fullWidth={true} />
}
