import * as V from 'yup'

export const fields = ['login', 'password', 'notes', 'check']

export const fieldsConfig = {
  login: {
    label: 'Login',
    required: true,
    size: 6,
    suffix: 'abc',
  },
  password: {
    label: 'Password',
    size: 6,
    hint: 'use at least 6 symbols',
  },
  notes: {
    label: 'Notes',
    size: 8,
  },
  check: {
    label: 'Check',
    type: 'check',
    size: 4,
  },
}

export const validationSchema = V.object({
  login: V.string()
    .label(fieldsConfig.login.label)
    .required(),
  password: V.string()
    .label(fieldsConfig.password.label)
    .when('login', (value: string, schema: any) =>
      value ? schema.required() : schema
    ),
})
