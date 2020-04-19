import React from 'react'
import { DesktopDatePicker } from '@material-ui/pickers'
import { useField } from 'formik'
import { MuiFieldProps } from '../../types'
import { useStyles } from '../styles'

export function DateField(props: MuiFieldProps) {
  const classes = useStyles()

  const { name, error, onBlur, controlProps = {}, ...restProps } = props
  const [, meta, helpers] = useField(name)

  const handleChange = (value: string) => {
    helpers.setValue(value?.toString()) //TODO: set formatted date value
  }

  const handleError = (error: any) => {
    if (error !== meta.error) {
      helpers.setError(error)
    }
  }

  const fieldProps = {
    variant: 'outlined',
    size: 'small',
    ...restProps,
    ...controlProps,
    onChange: handleChange,
    onError: handleError,
    fullWidth: true,
    FormHelperTextProps: {
      component: 'div',
      classes: {
        root: classes.helperTextDatePicker,
      },
    },
  }

  return <DesktopDatePicker {...fieldProps} />
}
