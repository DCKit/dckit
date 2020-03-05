import { FormFieldTypes, FieldTypeDict } from '../types'
import { TextField } from './TextField'
import { PasswordField } from './PasswordField'
import { RadioField } from './RadioField'
import { CheckField } from './CheckField'
import { MultiCheckField } from './MultiCheckField'
import { SwitchField } from './SwitchField'
import { MultiSwitchField } from './MultiSwitchField'
import { ToggleField } from './ToggleField'
import { MultiToggleField } from './MultiToggleField'
import { SelectField } from './SelectField'

export const components: FieldTypeDict = {
  [FormFieldTypes.text]: TextField,
  [FormFieldTypes.password]: PasswordField,
  [FormFieldTypes.radio]: RadioField,
  [FormFieldTypes.check]: CheckField,
  [FormFieldTypes.multiCheck]: MultiCheckField,
  [FormFieldTypes.switch]: SwitchField,
  [FormFieldTypes.multiSwitch]: MultiSwitchField,
  [FormFieldTypes.toggle]: ToggleField,
  [FormFieldTypes.multiToggle]: MultiToggleField,
  [FormFieldTypes.select]: SelectField,
}

export const defaultValues: FieldTypeDict = {
  [FormFieldTypes.text]: '',
  [FormFieldTypes.password]: '',
  [FormFieldTypes.radio]: '',
  [FormFieldTypes.check]: false,
  [FormFieldTypes.multiCheck]: [],
  [FormFieldTypes.switch]: false,
  [FormFieldTypes.multiSwitch]: [],
  [FormFieldTypes.toggle]: '',
  [FormFieldTypes.multiToggle]: [],
  [FormFieldTypes.select]: null,
}
