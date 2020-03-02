import React from 'react'
import { Checkbox } from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { CheckControl } from './CheckControl'

export const CheckField = (props: MuiFieldProps) => (
  <CheckControl {...props} Control={Checkbox} />
)
