import React, { useMemo } from 'react'
import { useField } from 'formik'
import { TextField, TextFieldProps } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

import { MuiFieldProps } from '../../types'
import { splitOptions } from '../util'
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
    value,
    ...restProps
  } = props

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
    className: container,
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
