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
    type,
    error,
    helperText,
    options = [],
    direction,
    ...restProps
  } = props

  return (
    <FormControl component="fieldset" classes={{ root: fullWidth }}>
      <FormLabel
        component="legend"
        classes={{ root: noselect }}
        disabled={disabled}
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
          const { label, value, size = 'auto' } = option
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
      {helperText && <HelperText disabled={disabled}>{helperText}</HelperText>}
    </FormControl>
  )
}
