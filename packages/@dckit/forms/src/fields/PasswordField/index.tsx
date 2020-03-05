import React, { useState } from 'react'
import {
  TextField as MuiTextField,
  InputAdornment,
  IconButton,
  InputProps,
  TextFieldProps,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

import { MuiFieldProps } from '../../types'
import { useStyles } from '../styles'

export function PasswordField(props: MuiFieldProps) {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const { controlProps = {}, ...restProps } = props
  const { visibility = false, ...restControlProps } = controlProps

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

  const inputProps: Partial<InputProps> = { ...controlProps?.InputProps }

  if (visibility) {
    inputProps.endAdornment = (
      <InputAdornment position="end">
        <IconButton
          size="small"
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    )
  }
  fieldProps.InputProps = inputProps

  return (
    <MuiTextField {...fieldProps} type={showPassword ? 'text' : 'password'} />
  )
}
