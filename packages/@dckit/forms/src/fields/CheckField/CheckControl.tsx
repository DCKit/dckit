import React from 'react'
import cn from 'clsx'
import { FormControlLabel } from '@material-ui/core'
import { MuiFieldProps } from '../../types'
import { HelperText } from '../HelperText'
import { useStyles } from '../styles'

type CheckControlProps = MuiFieldProps & {
  Control: any
}

export function CheckControl(props: CheckControlProps) {
  const classes = useStyles()

  const {
    noselect,
    container,
    marginRight,
    flexGrow,
    smallLabel,
    marginZero,
  } = classes

  const {
    label,
    disabled,
    type,
    error,
    optionsConfig = {},
    helperText,
    value,
    Control = <div />,
    ...restProps
  } = props

  const { fullWidth = false, size = 'auto', small = false } = optionsConfig

  return (
    <>
      <FormControlLabel
        label={label}
        control={
          <Control
            {...restProps}
            color="primary"
            size={small ? 'small' : 'medium'}
            checked={value ?? false}
            value={value ?? false}
            disabled={disabled}
          />
        }
        disabled={disabled}
        labelPlacement={fullWidth ? 'start' : 'end'}
        classes={{
          root: cn(
            noselect,
            container,
            size === 'auto' && marginRight,
            fullWidth && flexGrow
          ),
          label: cn(small ? smallLabel : '', fullWidth && flexGrow),
          labelPlacementStart: cn(fullWidth ? marginZero : ''),
        }}
      />
      <HelperText disabled={disabled} error={error}>
        {helperText}
      </HelperText>
    </>
  )
}
