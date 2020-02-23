import React from 'react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Chip as MuiChip,
} from '@material-ui/core'
import { useField } from 'formik'
import { MuiFieldProps } from '../../types'
import { HelperText } from '../HelperText'
import { useStyles } from '../styles'

type RadioChipProps = {
  name: string
  label?: string
  disabled?: boolean
  value?: any
}

const RadioChip = React.memo((props: RadioChipProps) => {
  const { name, label, disabled, value } = props
  const classes = useStyles()
  const [field, , helpers] = useField(name)
  const selected = field.value === value

  const handleClick = () => helpers.setValue(value)

  return (
    <MuiChip
      label={label}
      role="input"
      //component="input"
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
              key={`${index}-${label}`}
              name={name}
              label={label}
              value={value}
              disabled={disabled}
            />
          )
        })}
      </RadioGroup>
      {helperText && (
        <HelperText disabled={disabled} error={error}>
          {helperText}
        </HelperText>
      )}
    </FormControl>
  )
}
