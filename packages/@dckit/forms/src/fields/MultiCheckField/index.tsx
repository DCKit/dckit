import React from 'react'
import {
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { HelperText } from '../HelperText'
import { useStyles } from '../styles'

export function MultiCheckField(props: MuiFieldProps) {
  const classes = useStyles()
  const {
    container,
    directionColumn,
    directionRow,
    noselect,
    smallLabel,
  } = classes
  const {
    label,
    disabled,
    required,
    error,
    helperText,
    options = [],
    optionsConfig = {},
    name,
    value: valuesArray = [],
    //onChange,
    //onBlur,
    //...restProps
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
      <Grid
        container
        className={direction === 'column' ? directionColumn : directionRow}
      >
        {options.map((option: any, index: number) => {
          const { label, value } = option
          return (
            <Grid key={`${name}${index}`} item xs={size}>
              <FormControlLabel
                control={
                  <Checkbox
                    name={name}
                    color="primary"
                    size={small ? 'small' : 'medium'}
                    checked={valuesArray.includes(value)}
                    value={value}
                    disabled={disabled}
                  />
                }
                label={label}
                disabled={disabled}
                classes={{ root: noselect, label: small ? smallLabel : '' }}
              />
            </Grid>
          )
        })}
      </Grid>
      <HelperText disabled={disabled} error={error}>
        {helperText}
      </HelperText>
    </FormControl>
  )
}
