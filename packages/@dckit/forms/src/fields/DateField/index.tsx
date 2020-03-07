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
    //console.log(typeof value)
    helpers.setValue(value.toString()) //TODO: set formatted date value
  }

  const fieldProps: KeyboardDatePickerProps = {
    placeholder: 'yyyy-mm-dd',
    format: 'yyyy-MM-dd',
    variant: 'inline',
    ...restProps,
    ...controlProps,
    onChange: handleChange,
    fullWidth: true,
  }

  return <KeyboardDatePicker {...fieldProps} />
}
