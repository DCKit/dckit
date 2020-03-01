import React from 'react'
import { MuiFieldProps } from '../../types'
import { MultiGenericField } from '../MultiGenericField'
import { MultiCheck } from './MultiCheck'

export const MultiCheckField = (props: MuiFieldProps) => (
  <MultiGenericField {...props} Control={MultiCheck} />
)
