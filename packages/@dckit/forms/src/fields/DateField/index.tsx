import React from 'react'
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from '@material-ui/pickers'
import { useField } from 'formik'
import { MuiFieldProps } from '../../types'
//import { useStyles } from '../styles'

export function DateField(props: MuiFieldProps) {
  //const classes = useStyles()

  const { name, onBlur, controlProps = {}, ...restProps } = props
  const [, , helpers] = useField(name)

  const handleChange = (value: string) => {
    helpers.setValue(value)
  }

  const fieldProps: KeyboardDatePickerProps = {
    placeholder: '',
    //    format: 'MM/dd/yyyy',
    clearable: true,
    ...restProps,
    ...controlProps,
    name,
    onChange: handleChange,
    fullWidth: true,
  }

  return <KeyboardDatePicker {...fieldProps} />
}
