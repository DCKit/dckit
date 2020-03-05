import React from 'react'
import {
  TextField as MuiTextField,
  //InputAdornment,
  //InputProps,
  TextFieldProps,
} from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { useStyles } from '../styles'

/* const Adornment = React.memo(
  ({ position, adornment }: { position: 'start' | 'end'; adornment: any }) => (
    <InputAdornment position={position}>{adornment}</InputAdornment>
  )
)
 */
export function PasswordField(props: MuiFieldProps) {
  const classes = useStyles()

  const { controlProps = {}, ...restProps } = props
  const { startAdornment, endAdornment, ...restControlProps } = controlProps

  const fieldProps: TextFieldProps = {
    ...restProps,
    ...restControlProps,
    fullWidth: true,
    FormHelperTextProps: {
      component: 'div',
      classes: {
        root: classes.helperTextInput,
      },
    },
  }

  /*   const inputProps: Partial<InputProps> = { ...controlProps?.InputProps }

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
  fieldProps.InputProps = inputProps */

  return <MuiTextField {...fieldProps} type="password" />
}
