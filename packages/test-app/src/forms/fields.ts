import * as V from 'yup'

export const fields = ['login', 'password', 'notes']

export const fieldsConfig = {
  login: {
    label: 'Login',
    required: true,
    size: 6,
    defaultValue: '111',
    suffix: 'abc',
    controlChange: (form: any, value: any) =>
      value === '-' && form.setValue('notes', '---', true),
  },
  password: {
    label: 'Password',
    size: 6,
    defaultValue: '222',
    controlProps: (form: any) => ({
      disabled: !form.getValues().notes,
      required: Boolean(form.getValues().login),
    }),
  },
  notes: {
    label: 'Notes',
  },
}

export const validationSchema = V.object({
  login: V.string()
    .label('Login')
    .required(),
  password: V.string().when('login', (login: string, schema: any) =>
    login ? schema.required() : schema
  ),
})
