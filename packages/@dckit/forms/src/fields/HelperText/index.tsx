import React from 'react'
import { FormHelperText } from '@material-ui/core'
import { useStyles } from '../styles'

export const HelperText = ({ children }: { children: any }) => {
  const classes = useStyles()
  return (
    <FormHelperText classes={{ root: classes.helperText }}>
      {children}
    </FormHelperText>
  )
}
