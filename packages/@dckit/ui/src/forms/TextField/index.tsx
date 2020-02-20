import React from 'react'
import {
  TextField as MuiTextField,
  InputAdornment,
  StandardTextFieldProps,
} from '@material-ui/core'
import { MuiFieldProps } from '../types'
import { useStyles } from './styles'

export const TextField = (props: MuiFieldProps) => {
  const classes = useStyles()

  const { startAdornment, endAdornment, ...restProps } = props

  const fieldProps: StandardTextFieldProps = {
    ...restProps,
    FormHelperTextProps: {
      classes: {
        root: classes.helperText,
      },
    },
  }

  const inputProps = fieldProps.InputProps || {}

  if (startAdornment) {
    inputProps.startAdornment = (
      <InputAdornment position="start">{startAdornment}</InputAdornment>
    )
  }
  if (endAdornment) {
    inputProps.endAdornment = (
      <InputAdornment position="end">{endAdornment}</InputAdornment>
    )
  }
  fieldProps.InputProps = inputProps

  return <MuiTextField {...fieldProps} fullWidth={true} />
}
