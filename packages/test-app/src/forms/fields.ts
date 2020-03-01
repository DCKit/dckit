import * as V from 'yup'
import { FieldsConfig, FormContext } from '@dckit/forms'

export const fields = [
  'login',
  'password',
  'radio',
  'toggle',
  'multicheck',
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
      small: true,
      //size: 6,
    },
    helperText: 'select options',
  },
  toggle: {
    label: 'Toggle',
    type: 'toggle',
    required: true,
    size: 8,
    options: [
      { label: 'opt1', value: '1' },
      { label: 'opt2', value: '2' },
      { label: 'opt3', value: '3' },
      { label: 'opt4', value: '4' },
      { label: 'opt5', value: '5' },
      { label: 'opt6', value: '6' },
    ],
    optionsConfig: {
      //direction: 'column',
      fullWidth: true,
      //small: true,
      size: 4,
    },
    helperText: 'toggle options',
  },
  multicheck: {
    label: 'Multi check',
    type: 'multicheck',
    required: true,
    size: 8,
    options: [
      { label: 'opt1', value: '1' },
      { label: 'opt2', value: '2' },
      { label: 'opt3', value: '3' },
      { label: 'opt4', value: '4' },
      { label: 'opt5', value: '5' },
      { label: 'opt6', value: '6' },
    ],
    optionsConfig: {
      //direction: 'column',
      //fullWidth: true,
      //small: true,
      size: 4,
    },
    helperText: 'multicheck options',
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
  toggle: V.string()
    .label(label('toggle'))
    .required(),
  multicheck: V.array()
    .label(label('multicheck'))
    .required(),
  password: V.string()
    .label(label('password'))
    .when('login', (value: string, schema: any) =>
      value ? schema.required() : schema
    ),
})
