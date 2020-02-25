import { FormFieldTypes, FieldTypeDict } from '../types'
import { TextField } from './TextField'
import { CheckField } from './CheckField'
import { MultiCheckField } from './MultiCheckField'
import { SwitchField } from './SwitchField'
import { RadioField } from './RadioField'
import { ChipsField } from './ChipsField'

export const components: FieldTypeDict = {
  [FormFieldTypes.text]: TextField,
  [FormFieldTypes.check]: CheckField,
  [FormFieldTypes.switch]: SwitchField,
  [FormFieldTypes.radio]: RadioField,
  [FormFieldTypes.chips]: ChipsField,
  [FormFieldTypes.multicheck]: MultiCheckField,
}

export const defaultValues: FieldTypeDict = {
  [FormFieldTypes.text]: '',
  [FormFieldTypes.radio]: '',
  [FormFieldTypes.chips]: '',
  [FormFieldTypes.check]: false,
  [FormFieldTypes.switch]: false,
  [FormFieldTypes.multicheck]: [],
}
