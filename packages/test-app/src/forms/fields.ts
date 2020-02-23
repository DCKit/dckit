import * as V from 'yup'
import { FieldsConfig, FormContext } from '@dckit/forms'

export const fields = [
  'login',
  'password',
  'radio',
  'nested.notes',
  'nested.check',
]

export const fieldsConfig: FieldsConfig = {
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
    label: 'Radio',
    type: 'radio',
    required: true,
    style: {
      marginTop: 24,
    },
    options: [
      { label: 'opt1', value: '1' },
      { label: 'opt2', value: '2' },
      { label: 'opt3', value: '3' },
    ],
    optionsConfig: {
      //direction: 'column',
      size: 6,
    },
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
    helperText: 'checkbox helper text',
  },
}

const label = (name: string): string => fieldsConfig[name]?.label || ''

export const validationSchema = V.object({
  login: V.string()
    .label(label('login'))
    .required(),
  radio: V.string()
    .label(label('radio'))
    .required(),
  password: V.string()
    .label(label('password'))
    .when('login', (value: string, schema: any) =>
      value ? schema.required() : schema
    ),
})
