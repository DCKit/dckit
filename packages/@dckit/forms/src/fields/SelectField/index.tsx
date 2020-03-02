import React from 'react'
import { TextField as MuiTextField, TextFieldProps } from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { useStyles } from '../styles'

export function SelectField(props: MuiFieldProps) {
  const classes = useStyles()
  const fieldProps: TextFieldProps = {
    ...props,
    fullWidth: true,
    FormHelperTextProps: {
      component: 'div',
      classes: {
        root: classes.helperTextInput,
      },
    },
  }

  return <MuiTextField {...fieldProps} />
}
