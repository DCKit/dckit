import React from 'react'
import { useFormControl } from '@material-ui/core'
import { FormFieldTypes, FieldTypeDict } from '../types'
import { TextField } from './TextField'
import { CheckField } from './CheckField'
import { MultiCheckField } from './MultiCheckField'
import { SwitchField } from './SwitchField'
import { RadioField } from './RadioField'
import { ToggleField } from './ToggleField'
import { MultiToggleField } from './MultiToggleField'

export const components: FieldTypeDict = {
  [FormFieldTypes.text]: TextField,
  [FormFieldTypes.check]: CheckField,
  [FormFieldTypes.switch]: SwitchField,
  [FormFieldTypes.radio]: RadioField,
  [FormFieldTypes.toggle]: ToggleField,
  [FormFieldTypes.multiCheck]: MultiCheckField,
  [FormFieldTypes.multiToggle]: MultiToggleField,
}

export const defaultValues: FieldTypeDict = {
  [FormFieldTypes.text]: '',
  [FormFieldTypes.radio]: '',
  [FormFieldTypes.toggle]: '',
  [FormFieldTypes.check]: false,
  [FormFieldTypes.switch]: false,
  [FormFieldTypes.multiCheck]: [],
  [FormFieldTypes.multiToggle]: [],
}

export const FocusDiv = React.forwardRef(function FocusDiv(
  props: any,
  ref: any
) {
  const formControl = useFormControl()
  return <div {...props} tabIndex={0} onBlur={formControl.onBlur} ref={ref} />
})

export function toggle(options: any[], selected: any[], value: any) {
  const set = new Set(selected)
  set.has(value) ? set.delete(value) : set.add(value)
  return options.filter((el: any) => set.has(el))
}
