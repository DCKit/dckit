import React from 'react'
import { Checkbox } from '@material-ui/core'

import {
  MultiControl,
  MultiControlProps,
} from '../MultiGenericField/MultiControl'

export const MultiCheck = (props: MultiControlProps) => (
  <MultiControl {...props} Control={Checkbox} />
)
