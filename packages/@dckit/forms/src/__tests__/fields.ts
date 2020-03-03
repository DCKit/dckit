import * as V from 'yup'
import { FieldsConfig, FormContext } from '../types'

export const fields = [
  'login',
  'password',
  'radio',
  'select',
  'toggle',
  'multicheck',
  'multitoggle',
  'multiswitch',
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
    size: 8,
    style: {
      marginTop: 24,
    },
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
      small: true,
      //size: 6,
    },
    helperText: 'radio options',
  },
  select: {
    label: 'Select',
    type: 'select',
    required: true,
    size: 4,
    initialValue: { label: 'opt5', value: '5' },
    options: [
      { label: 'opt1', value: '1' },
      { label: 'opt2', value: '2' },
      { label: 'opt3', value: '3' },
      { label: 'opt4', value: '4' },
      { label: 'opt5', value: '5' },
      { label: 'opt6', value: '6' },
    ],
    helperText: 'select options',
    onChange: (e: any, value: any, form: FormContext) =>
      form.setFieldValue('toggle', value?.value || ''),
  },
  toggle: {
    label: 'Toggle',
    type: 'toggle',
    required: true,
    size: 6,
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
    type: 'multiCheck',
    required: true,
    size: 6,
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
      small: true,
      size: 4,
    },
    helperText: 'multicheck options',
  },
  multiswitch: {
    label: 'Multi switch',
    type: 'multiSwitch',
    required: true,
    size: 6,
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
      size: 12,
    },
    helperText: 'multiswitch options',
  },
  multitoggle: {
    label: 'Multi toggle',
    type: 'multiToggle',
    required: true,
    size: 6,
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
      small: true,
      size: 6,
    },
    helperText: 'multitoggle options',
  },
  'nested.notes': {
    label: 'Notes',
    size: 8,
  },
  'nested.check': {
    label: 'Check',
    type: 'check',
    size: 4,
    optionsConfig: {
      //fullWidth: true,
      small: true,
    },
    helperText: 'checkbox helper text',
  },
}

const label = (name: string): string => fieldsConfig[name]?.label || ''

const msg = `REQUIRED. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`

export const validationSchema = V.object({
  login: V.string()
    .label(label('login'))
    .required(msg),
  radio: V.string()
    .label(label('radio'))
    .required(msg),
  select: V.string()
    .label(label('select'))
    .required(msg)
    .nullable(),
  toggle: V.string()
    .label(label('toggle'))
    .required(msg),
  multicheck: V.array()
    .label(label('multicheck'))
    .required(msg),
  multiswitch: V.array()
    .label(label('multiswitch'))
    .required(msg),
  multitoggle: V.array()
    .label(label('multitoggle'))
    .required(msg),
  password: V.string()
    .label(label('password'))
    .when('login', (value: string, schema: any) =>
      value ? schema.required(msg) : schema
    ),
})
