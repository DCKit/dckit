import { IFormField } from './types'
import * as V from 'yup'

export const fieldsConfig: IFormField[] = [
  {
    field: 'login',
    label: 'Login',
    required: true,
    size: 6,
    initialValue: '111',
    suffix: 'abc',
    checkChange: (form: any, value: any) =>
      value === '-' && form.setValue('notes', '---', true),
  },
  {
    field: 'password',
    label: 'Password',
    size: 6,
    initialValue: '222',
    checkDisabled: (form: any) => !form.getValues().notes,
  },
  {
    field: 'notes',
    label: 'Notes',
  },
]

export const validationSchema = V.object().shape({
  login: V.string().required(),
})
