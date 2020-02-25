import { FormFieldTypes, FieldTypeDict } from '../types'
import { TextField } from './TextField'
import { CheckField } from './CheckField'
import { MultiCheckField } from './MultiCheckField'
import { SwitchField } from './SwitchField'
import { RadioField } from './RadioField'
import { ToggleField } from './ToggleField'

export const components: FieldTypeDict = {
  [FormFieldTypes.text]: TextField,
  [FormFieldTypes.check]: CheckField,
  [FormFieldTypes.switch]: SwitchField,
  [FormFieldTypes.radio]: RadioField,
  [FormFieldTypes.toggle]: ToggleField,
  [FormFieldTypes.multicheck]: MultiCheckField,
}

export const defaultValues: FieldTypeDict = {
  [FormFieldTypes.text]: '',
  [FormFieldTypes.radio]: '',
  [FormFieldTypes.toggle]: '',
  [FormFieldTypes.check]: false,
  [FormFieldTypes.switch]: false,
  [FormFieldTypes.multicheck]: [],
}
