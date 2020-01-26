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
    controlProps: (form: any) => {
      const hasValue = Boolean(form.getValues().login)
      return {
        disabled: !hasValue,
        required: hasValue,
      }
    },
  },
  notes: {
    label: 'Notes',
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
