import React, { useMemo } from 'react'
import { useField } from 'formik'
import { TextField, TextFieldProps } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { MuiFieldProps } from '../../types'
import { splitOptions } from '../utils'
import { defaultTextFieldProps } from '../utils'
import { useStyles } from '../styles'

export function SelectField(props: MuiFieldProps) {
  const {
    options = [],
    controlProps = {},
    name,
    type,
    error,
    required,
    helperText,
    onChange,
    value,
    ...restProps
  } = props

  const classes = useStyles()
  const [, , helpers] = useField(name)
  const [optionValues, optionLabels] = useMemo(() => splitOptions(options), [
    options,
  ])

  const getOptionLabel =
    controlProps.getOptionLabel || ((optValue: any) => optionLabels[optValue])

  const getOptionSelected =
    controlProps.getOptionSelected || ((optValue: any) => value === optValue)

  const handleChange = (e: any, value: any) => {
    e.target.name = name
    onChange && onChange(e, value)
    helpers.setValue(value)
  }

  const fieldProps = {
    ...restProps,
    value,
    className: classes.container,
    options: controlProps.options || optionValues,
    onChange: handleChange,
    getOptionLabel,
    getOptionSelected,
  }

  const textProps: TextFieldProps = {
    name,
    error,
    helperText,
    required,
    label: props.label,
    ...defaultTextFieldProps(classes),
  }

  return (
    <Autocomplete
      {...fieldProps}
      renderInput={props => <TextField {...props} {...textProps} />}
    />
  )
}
