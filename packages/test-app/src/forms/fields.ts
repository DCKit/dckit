import * as V from 'yup'
import { FormContext } from '@dckit/forms'

export const fields = [
  'login',
  'password',
  'radio',
  'nested.notes',
  'nested.check',
]

export const fieldsConfig = {
  login: {
    label: 'Login',
    required: true,
    size: 6,
    endAdornment: 'abc',
    helperText: 'Login helper text',
  },
  password: {
    label: 'Password',
    required: (form: FormContext) => Boolean(form.values.login),
    size: 6,
    helperText: 'use at least 6 symbols',
  },
  radio: {
    //label: 'Radio',
    type: 'radio',
    initialValue: '1',
    //direction: 'column',
    options: [
      { label: 'opt1', value: '1' },
      { label: 'opt2', value: '2', disabled: true },
      { label: 'opt3', value: '3' },
    ],
    helperText: 'select options',
  },
  'nested.notes': {
    label: 'Notes',
    size: 8,
  },
  'nested.check': {
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
