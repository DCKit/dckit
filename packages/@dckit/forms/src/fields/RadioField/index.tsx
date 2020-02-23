import React from 'react'
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

export const RadioField = (props: MuiFieldProps) => {
  const classes = useStyles()
  const { fullWidth, directionColumn, directionRow, noselect } = classes
  const {
    label,
    disabled,
    required,
    type,
    error,
    helperText,
    options = [],
    optionsConfig = {},
    ...restProps
  } = props

  const labelProps = { disabled, required, error }
  const { direction, size = 'auto' } = optionsConfig

  return (
    <FormControl component="fieldset" classes={{ root: fullWidth }}>
      <FormLabel
        {...labelProps}
        component="legend"
        focused={false}
        classes={{ root: noselect }}
      >
        {label}
      </FormLabel>
      <RadioGroup
        {...restProps}
        classes={{
          root: direction === 'column' ? directionColumn : directionRow,
        }}
      >
        {options.map((option: any, index: number) => {
          const { label, value } = option
          return (
            <Grid key={`${index}-${label}`} item xs={size}>
              <FormControlLabel
                control={<Radio color="primary" />}
                label={label}
                value={value}
                disabled={disabled}
                classes={{ root: noselect }}
              />
            </Grid>
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
