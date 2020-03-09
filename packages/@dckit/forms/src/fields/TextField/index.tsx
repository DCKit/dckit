import React from 'react'
import {
  TextField as MuiTextField,
  InputAdornment,
  InputProps as InputPropsType,
  TextFieldProps,
} from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { defaultTextFieldProps } from '../utils'
import { useStyles } from '../styles'

const Adornment = React.memo(
  ({ position, adornment }: { position: 'start' | 'end'; adornment: any }) => {
    const classes = useStyles()
    return (
      <InputAdornment position={position} classes={{ root: classes.noselect }}>
        {adornment}
      </InputAdornment>
    )
  }
)

export function TextField(props: MuiFieldProps) {
  const classes = useStyles()

  const { controlProps = {}, ...restProps } = props
  const { startAdornment, endAdornment, ...restControlProps } = controlProps

  const fieldProps: TextFieldProps = {
    ...restProps,
    ...restControlProps,
    ...defaultTextFieldProps(classes),
  }

  const InputProps: Partial<InputPropsType> = { ...controlProps?.InputProps }

  if (startAdornment) {
    InputProps.startAdornment = (
      <Adornment position="start" adornment={startAdornment} />
    )
  }
  if (endAdornment) {
    InputProps.endAdornment = (
      <Adornment position="end" adornment={endAdornment} />
    )
  }
  fieldProps.InputProps = InputProps

  return <MuiTextField {...fieldProps} />
}
