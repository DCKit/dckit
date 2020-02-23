import React from 'react'
import { FormHelperText } from '@material-ui/core'
import { useStyles } from '../styles'

export const HelperText = React.memo(
  ({
    disabled,
    error,
    children,
  }: {
    disabled?: boolean
    error?: boolean
    children?: any
  }) => {
    const classes = useStyles()
    return (
      <FormHelperText
        disabled={disabled}
        error={error}
        classes={{ root: classes.helperText }}
      >
        {children}
      </FormHelperText>
    )
  }
)
