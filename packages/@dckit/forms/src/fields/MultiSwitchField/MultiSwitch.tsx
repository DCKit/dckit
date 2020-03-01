import React from 'react'
import { Switch } from '@material-ui/core'

import {
  MultiControl,
  MultiControlProps,
} from '../MultiGenericField/MultiControl'

export const MultiSwitch = (props: MultiControlProps) => (
  <MultiControl {...props} Control={Switch} />
)
