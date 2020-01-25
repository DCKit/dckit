import { IFormField } from '@dckit/ui'
import * as V from 'yup'

export const fieldsConfig: IFormField[] = [
  {
    field: 'login',
    label: 'Login',
    required: true,
    size: 6,
    initialValue: '111',
    suffix: 'abc',
    controlChange: (form: any, value: any) =>
      value === '-' && form.setValue('notes', '---', true),
  },
  {
    field: 'password',
    label: 'Password',
    size: 6,
    initialValue: '222',
    controlProps: (form: any) => ({
      disabled: !form.getValues().notes,
      required: Boolean(form.getValues().login),
    }),
  },
  {
    field: 'notes',
    label: 'Notes',
  },
]

export const validationSchema = V.object().shape({
  login: V.string()
    .label('Login')
    .required(),
})
