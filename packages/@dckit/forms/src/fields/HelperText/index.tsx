import React from 'react'
import { FormHelperText } from '@material-ui/core'
import { useStyles } from '../styles'

export const HelperText = ({
  disabled,
  children,
}: {
  disabled?: boolean
  children?: any
}) => {
  const classes = useStyles()
  return (
    <FormHelperText disabled={disabled} classes={{ root: classes.helperText }}>
      {children}
    </FormHelperText>
  )
}
