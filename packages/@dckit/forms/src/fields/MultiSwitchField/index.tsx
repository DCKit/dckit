import React from 'react'
import { MuiFieldProps } from '../../types'
import { MultiGenericField } from '../MultiGenericField'
import { MultiSwitch } from './MultiSwitch'

export const MultiSwitchField = (props: MuiFieldProps) => (
  <MultiGenericField {...props} Control={MultiSwitch} />
)
