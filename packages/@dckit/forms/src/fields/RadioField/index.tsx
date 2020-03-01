import React from 'react'
import cn from 'clsx'

import {
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core'

import { MuiFieldProps } from '../../types'
import { HelperText } from '../HelperText'
import { useStyles } from '../styles'

export function RadioField(props: MuiFieldProps) {
  const classes = useStyles()
  const {
    container,
    directionColumn,
    directionRow,
    noselect,
    marginRight,
    smallLabel,
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
    name,
    ...restProps
  } = props

  const { direction, size = 'auto', small } = optionsConfig
  const labelProps = { disabled, required, error }

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
          root: direction === 'column' ? directionColumn : directionRow,
        }}
      >
        {options.map((option: any, index: number) => {
          const { label, value } = option
          return (
            <Grid key={`${name}${index}`} item xs={size}>
              <FormControlLabel
                control={
                  <Radio color="primary" size={small ? 'small' : 'medium'} />
                }
                label={label}
                value={value}
                disabled={disabled}
                classes={{
                  root: cn(noselect, size === 'auto' ? marginRight : ''),
                  label: small ? smallLabel : '',
                }}
              />
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
