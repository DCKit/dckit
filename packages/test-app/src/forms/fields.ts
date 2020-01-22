import { IFormField } from './FormField'

export const fieldsConfig: IFormField[] = [
  {
    field: 'login',
    label: 'Login',
    required: true,
    size: 6,
    defaultValue: '111',
    suffix: 'abc',
    checkChange: (form: any, value: any) =>
      value === '-' && form.setValue('notes', '---', true),
  },
  {
    field: 'password',
    label: 'Password',
    size: 6,
    defaultValue: '222',
    checkDisabled: (form: any) => !form.getValues().notes,
  },
  {
    field: 'notes',
    label: 'Notes',
  },
]
