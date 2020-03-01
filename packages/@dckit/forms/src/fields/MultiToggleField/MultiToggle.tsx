import React from 'react'
import cn from 'clsx'
import { useFormControl, Chip as MuiChip } from '@material-ui/core'
import { useField } from 'formik'
import { useStyles } from '../styles'
import { toggleValues, FocusDiv } from '../index'

type MultiToggleProps = {
  name: string
  label?: string
  disabled?: boolean
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
    small = false,
    fullWidth = false,
    value,
    values = [],
    optionValues = [],
  } = props

  const classes = useStyles()
  const { container, raised } = classes
  const formControl = useFormControl()
  const [, , helpers] = useField(name)
  const selected = values.includes(value)

  const handleClick = () => {
    formControl.onFocus()
    helpers.setValue(toggleValues(optionValues, values, value))
  }

  return (
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
  )
})
