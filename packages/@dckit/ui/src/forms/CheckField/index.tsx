import React from 'react'
import { Checkbox, Switch, FormControlLabel } from '@material-ui/core'
import { IFormField, FormFieldType, FieldTypeDict } from '../types'
import { useStyles } from './styles'

const components: FieldTypeDict = {
  [FormFieldType.check]: Checkbox,
  [FormFieldType.switch]: Switch,
}

export const CheckField = (props: IFormField) => {
  const classes = useStyles()
  const {
    label,
    type = FormFieldType.check,
    disabled,
    size,
    helperText,
    error,
    LabelProps,
    ...restProps
  } = props

  const Field = components[type]
  if (!Field) return null

  return (
    <FormControlLabel
      classes={{
        root: classes.noselect,
      }}
      label={label}
      {...LabelProps}
      control={<Field color="primary" {...restProps} disabled={disabled} />}
      disabled={disabled}
    />
  )
}
