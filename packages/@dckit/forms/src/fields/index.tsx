import React from 'react'
import { useFormControl } from '@material-ui/core'
import { FormFieldTypes, FieldTypeDict } from '../types'
import { TextField } from './TextField'
import { CheckField } from './CheckField'
import { MultiCheckField } from './MultiCheckField'
import { SwitchField } from './SwitchField'
import { MultiSwitchField } from './MultiSwitchField'
import { RadioField } from './RadioField'
import { ToggleField } from './ToggleField'
import { MultiToggleField } from './MultiToggleField'

export const components: FieldTypeDict = {
  [FormFieldTypes.text]: TextField,
  [FormFieldTypes.radio]: RadioField,
  [FormFieldTypes.check]: CheckField,
  [FormFieldTypes.multiCheck]: MultiCheckField,
  [FormFieldTypes.switch]: SwitchField,
  [FormFieldTypes.multiSwitch]: MultiSwitchField,
  [FormFieldTypes.toggle]: ToggleField,
  [FormFieldTypes.multiToggle]: MultiToggleField,
}

export const defaultValues: FieldTypeDict = {
  [FormFieldTypes.text]: '',
  [FormFieldTypes.radio]: '',
  [FormFieldTypes.check]: false,
  [FormFieldTypes.multiCheck]: [],
  [FormFieldTypes.switch]: false,
  [FormFieldTypes.multiSwitch]: [],
  [FormFieldTypes.toggle]: '',
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
