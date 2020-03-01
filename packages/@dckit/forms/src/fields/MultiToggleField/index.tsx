import React from 'react'
import { MuiFieldProps } from '../../types'
import { MultiGenericField } from '../MultiGenericField'
import { MultiContainer } from './MultiContainer'
import { MultiToggle } from './MultiToggle'

export const MultiToggleField = (props: MuiFieldProps) => (
  <MultiGenericField
    {...props}
    Control={MultiToggle}
    ControlContainer={MultiContainer}
  />
)
