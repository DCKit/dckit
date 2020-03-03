import React from 'react'
import { useField } from 'formik'
import { TextField, TextFieldProps } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

import { MuiFieldProps } from '../../types'
import { useStyles } from '../styles'

export function SelectField(props: MuiFieldProps) {
  const classes = useStyles()
  const { container, helperTextInput } = classes

  const {
    options = [],
    controlProps = {},
    name,
    type,
    error,
    required,
    helperText,
    onChange,
    ...restProps
  } = props

  const [, , helpers] = useField(name)

  const getLabel = controlProps.getOptionLabel || ((opt: any) => opt?.label)

  const getValue =
    controlProps.getOptionSelected ||
    ((opt: any) => props.value?.value === opt?.value)

  const handleChange = (e: any, value: any) => {
    e.target.name = name
    onChange && onChange(e, value)
    helpers.setValue(value)
  }

  const fieldProps = {
    ...restProps,
    className: container,
    options: controlProps.options || options,
    onChange: handleChange,
    getOptionLabel: getLabel,
    getOptionSelected: getValue,
  }

  const textProps: TextFieldProps = {
    name,
    error,
    helperText,
    required,
    label: props.label,
    fullWidth: true,
    FormHelperTextProps: {
      component: 'div',
      classes: { root: helperTextInput },
    },
  }

  return (
    <Autocomplete
      {...fieldProps}
      renderInput={props => <TextField {...props} {...textProps} />}
    />
  )
}
