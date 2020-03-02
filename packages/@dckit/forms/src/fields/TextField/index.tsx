import React from 'react'
import {
  TextField as MuiTextField,
  InputAdornment,
  InputProps,
  TextFieldProps,
} from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { useStyles } from '../styles'

const Adornment = React.memo(
  ({ position, adornment }: { position: 'start' | 'end'; adornment: any }) => (
    <InputAdornment position={position}>{adornment}</InputAdornment>
  )
)

export function TextField(props: MuiFieldProps) {
  const classes = useStyles()

  const { startAdornment, endAdornment, ...restProps } = props

  const fieldProps: TextFieldProps = {
    ...restProps,
    fullWidth: true,
    FormHelperTextProps: {
      component: 'div',
      classes: {
        root: classes.helperTextBottom,
      },
    },
  }

  const inputProps: Partial<InputProps> = { ...fieldProps.InputProps }

  if (startAdornment) {
    inputProps.startAdornment = (
      <Adornment position="start" adornment={startAdornment} />
    )
  }
  if (endAdornment) {
    inputProps.endAdornment = (
      <Adornment position="end" adornment={endAdornment} />
    )
  }
  fieldProps.InputProps = inputProps

  return <MuiTextField {...fieldProps} />
}
