import { FormFieldTypes, FieldTypeDict } from '../types'
import { TextField } from './TextField'
import { NumberField } from './NumberField'
import { PasswordField } from './PasswordField'
import { RadioField } from './RadioField'
import { CheckField } from './CheckField'
import { MultiCheckField } from './MultiCheckField'
import { SwitchField } from './SwitchField'
import { MultiSwitchField } from './MultiSwitchField'
import { ToggleField } from './ToggleField'
import { MultiToggleField } from './MultiToggleField'
import { SelectField } from './SelectField'
import { DateField } from './DateField'

export const components: FieldTypeDict = {
  [FormFieldTypes.text]: TextField,
  [FormFieldTypes.number]: NumberField,
  [FormFieldTypes.password]: PasswordField,
  [FormFieldTypes.radio]: RadioField,
  [FormFieldTypes.check]: CheckField,
  [FormFieldTypes.multiCheck]: MultiCheckField,
  [FormFieldTypes.switch]: SwitchField,
  [FormFieldTypes.multiSwitch]: MultiSwitchField,
  [FormFieldTypes.toggle]: ToggleField,
  [FormFieldTypes.multiToggle]: MultiToggleField,
  [FormFieldTypes.select]: SelectField,
  [FormFieldTypes.date]: DateField,
}

export const defaultValues: FieldTypeDict = {
  [FormFieldTypes.text]: '',
  [FormFieldTypes.number]: '',
  [FormFieldTypes.password]: '',
  [FormFieldTypes.radio]: '',
  [FormFieldTypes.check]: false,
  [FormFieldTypes.multiCheck]: [],
  [FormFieldTypes.switch]: false,
  [FormFieldTypes.multiSwitch]: [],
  [FormFieldTypes.toggle]: '',
  [FormFieldTypes.multiToggle]: [],
  [FormFieldTypes.select]: null,
  [FormFieldTypes.date]: null,
}
