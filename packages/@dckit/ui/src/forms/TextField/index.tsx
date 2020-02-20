import React from 'react'
import {
  TextField as MuiTextField,
  InputAdornment,
  StandardTextFieldProps,
} from '@material-ui/core'
import { MuiFieldProps } from '../types'
import { useStyles } from './styles'

const Adornment = React.memo(
  ({ position, adornment }: { position: 'start' | 'end'; adornment: any }) => (
    <InputAdornment position={position}>{adornment}</InputAdornment>
  )
)

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
      <Adornment position="start" adornment={startAdornment} />
    )
  }
  if (endAdornment) {
    inputProps.endAdornment = (
      <Adornment position="end" adornment={endAdornment} />
    )
  }
  fieldProps.InputProps = inputProps

  return <MuiTextField {...fieldProps} fullWidth={true} />
}
