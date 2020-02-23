import React from 'react'
import { Switch, FormControlLabel } from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { HelperText } from '../HelperText'
import { useStyles } from '../styles'

export const SwitchField = (props: MuiFieldProps) => {
  const classes = useStyles()
  const {
    label,
    disabled,
    type,
    error,
    helperText,
    value,
    ...restProps
  } = props

  return (
    <>
      <FormControlLabel
        classes={{
          root: classes.noselect,
        }}
        label={label}
        control={
          <Switch
            color="primary"
            {...restProps}
            checked={value ?? false}
            disabled={disabled}
          />
        }
        disabled={disabled}
      />
      {helperText && (
        <HelperText disabled={disabled} error={error}>
          {helperText}
        </HelperText>
      )}
    </>
  )
}
