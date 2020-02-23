import React from 'react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  useFormControl,
  Chip as MuiChip,
} from '@material-ui/core'
import { useField } from 'formik'
import { MuiFieldProps } from '../../types'
import { HelperText } from '../HelperText'
import { useStyles } from '../styles'

const FocusDiv = React.forwardRef((props: any, ref: any) => {
  const formControl = useFormControl()
  return <div {...props} tabIndex={0} onBlur={formControl.onBlur} ref={ref} />
})

type RadioChipProps = {
  name: string
  label?: string
  disabled?: boolean
  value?: any
}

const RadioChip = React.memo((props: RadioChipProps) => {
  const { name, label, disabled, value } = props
  const classes = useStyles()
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
      clickable={true}
      disabled={disabled}
      onClick={handleClick}
      className={classes.chipMargin}
    />
  )
})

export const ChipsField = (props: MuiFieldProps) => {
  const classes = useStyles()
  const { fullWidth, directionRow, noselect } = classes
  const {
    label,
    disabled,
    required,
    type,
    error,
    helperText,
    options = [],
    onBlur,
    name,
    ...restProps
  } = props

  const labelProps = { disabled, required, error }

  return (
    <FormControl component="fieldset" classes={{ root: fullWidth }}>
      <FormLabel
        {...labelProps}
        component="legend"
        classes={{ root: noselect }}
      >
        {label}
      </FormLabel>
      <RadioGroup {...restProps} classes={{ root: directionRow }}>
        {options.map((option: any, index: number) => {
          const { label, value } = option
          return (
            <RadioChip
              key={`${name}${index}`}
              name={name}
              label={label}
              value={value}
              disabled={disabled}
            />
          )
        })}
      </RadioGroup>
      <HelperText disabled={disabled} error={error}>
        {helperText}
      </HelperText>
    </FormControl>
  )
}
