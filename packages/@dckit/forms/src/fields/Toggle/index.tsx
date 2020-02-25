import React from 'react'
import cn from 'clsx'
import { useFormControl, Chip as MuiChip } from '@material-ui/core'
import { useField } from 'formik'
import { useStyles } from '../styles'

const FocusDiv = React.forwardRef((props: any, ref: any) => {
  const formControl = useFormControl()
  return <div {...props} tabIndex={0} onBlur={formControl.onBlur} ref={ref} />
})

type ToggleProps = {
  radio?: boolean
  name: string
  label?: string
  disabled?: boolean
  small?: boolean
  fullWidth?: boolean
  value?: any
}

export const Toggle = React.memo((props: ToggleProps) => {
  const {
    name,
    label,
    disabled,
    small = false,
    fullWidth = false,
    value,
  } = props
  const classes = useStyles()
  const { container, raised } = classes
  const formControl = useFormControl()
  const [field, , helpers] = useField(name)
  const selected = field.value === value

  const handleClick = () => {
    formControl.onFocus()
    !selected && helpers.setValue(value)
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
