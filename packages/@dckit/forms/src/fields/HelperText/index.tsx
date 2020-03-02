import React from 'react'
import { FormHelperText } from '@material-ui/core'
import { useStyles } from '../styles'

export const HelperText = React.memo(
  ({
    disabled,
    error,
    className,
    children,
  }: {
    disabled?: boolean
    error?: boolean
    className?: any
    children?: any
  }) => {
    const classes = useStyles()
    return (
      <FormHelperText
        component="div"
        disabled={disabled}
        error={error}
        classes={{
          root: className || classes.helperText,
        }}
      >
        {children}
      </FormHelperText>
    )
  }
)
