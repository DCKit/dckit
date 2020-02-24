import React from 'react'
import cn from 'clsx'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { HelperText } from '../HelperText'
import { useStyles } from '../styles'

export const CheckField = (props: MuiFieldProps) => {
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
          root: cn(classes.noselect, classes.fullWidth),
        }}
        label={label}
        control={
          <Checkbox
            color="primary"
            {...restProps}
            checked={value ?? false}
            value={value ?? false}
            disabled={disabled}
          />
        }
        disabled={disabled}
      />
      <HelperText disabled={disabled} error={error}>
        {helperText}
      </HelperText>
    </>
  )
}
