import React from 'react'
import cn from 'clsx'

import {
  Grid,
  Chip as MuiChip,
  useFormControl,
  GridSize,
} from '@material-ui/core'

import { useField } from 'formik'
import { useStyles } from '../styles'
import { toggle, FocusDiv } from '../util'

type MultiToggleProps = {
  name: string
  label?: string
  disabled?: boolean
  size?: GridSize
  small?: boolean
  fullWidth?: boolean
  value?: any
  values?: any[]
  optionValues?: any[]
}

export const MultiToggle = React.memo(function MultiToggle(
  props: MultiToggleProps
) {
  const {
    name,
    label,
    disabled,
    size = 'auto',
    small = false,
    fullWidth = false,
    value,
    values = [],
    optionValues = [],
  } = props

  const classes = useStyles()
  const { togglesPadding, container, raised } = classes
  const formControl = useFormControl()
  const [, , helpers] = useField(name)
  const selected = values.includes(value)

  const handleClick = () => {
    formControl.onFocus()
    helpers.setValue(toggle(optionValues, values, value))
  }

  return (
    <Grid item xs={size} className={togglesPadding}>
      <MuiChip
        component={FocusDiv}
        label={label}
        color={selected ? 'primary' : 'default'}
        size={small ? 'small' : 'medium'}
        clickable={true}
        disabled={disabled}
        onClick={handleClick}
        classes={{ root: cn(fullWidth && container, !selected && raised) }}
      />
    </Grid>
  )
})
