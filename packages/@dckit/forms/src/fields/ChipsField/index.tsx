import React from 'react'
import cn from 'clsx'
import {
  Grid,
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
  small?: boolean
  fullWidth?: boolean
  value?: any
}

const RadioChip = React.memo((props: RadioChipProps) => {
  const {
    name,
    label,
    disabled,
    small = false,
    fullWidth = false,
    value,
  } = props
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
      size={small ? 'small' : 'medium'}
      clickable={true}
      disabled={disabled}
      onClick={handleClick}
      classes={{ root: fullWidth ? classes.fullWidth : '' }}
    />
  )
})

export const ChipsField = (props: MuiFieldProps) => {
  const classes = useStyles()
  const {
    container,
    directionColumn,
    directionRow,
    noselect,
    chipsMargin,
    chipPadding,
  } = classes

  const {
    label,
    disabled,
    required,
    type,
    error,
    helperText,
    options = [],
    optionsConfig = {},
    onBlur,
    name,
    ...restProps
  } = props

  const {
    direction,
    small = false,
    size = 'auto',
    fullWidth = false,
  } = optionsConfig

  const labelProps = { disabled, required, error }
  const chipProps = {
    name,
    disabled,
    small,
    fullWidth,
  }

  return (
    <FormControl component="fieldset" classes={{ root: container }}>
      <FormLabel
        {...labelProps}
        component="legend"
        classes={{ root: noselect }}
      >
        {label}
      </FormLabel>
      <RadioGroup
        {...restProps}
        name={name}
        classes={{
          root: cn(
            chipsMargin,
            direction === 'column' ? directionColumn : directionRow
          ),
        }}
      >
        {options.map((option: any, index: number) => {
          const { label, value } = option
          return (
            <Grid
              key={`${name}${index}`}
              item
              xs={size}
              className={chipPadding}
            >
              <RadioChip {...chipProps} label={label} value={value} />
            </Grid>
          )
        })}
      </RadioGroup>
      <HelperText disabled={disabled} error={error}>
        {helperText}
      </HelperText>
    </FormControl>
  )
}
