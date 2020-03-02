import React from 'react'
import { Switch } from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { CheckControl } from '../CheckField/CheckControl'

export const SwitchField = (props: MuiFieldProps) => (
  <CheckControl {...props} Control={Switch} />
)
