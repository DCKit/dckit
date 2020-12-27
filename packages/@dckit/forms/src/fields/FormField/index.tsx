import { useField, useFormikContext } from 'formik'
import { FormFieldProps, DynamicProp } from '../../types'
import { components } from '..'

export function FormField(props: FormFieldProps) {
  const {
    name,
    initialValue,
    required,
    disabled,
    fieldsDisabled,
    helperText,
    hideErrorText = false,
    type,
    onChange,
    formatValue,
    ...restProps
  } = props

  const form = useFormikContext()
  const [field, meta] = useField(name)
  const fieldError = meta.error
  const error = meta.touched && Boolean(fieldError)

  const checkProp = (prop: DynamicProp) => {
    return typeof prop === 'function' ? prop(field.value, form) : prop
  }

  const handleChange = (e: React.ChangeEvent<any>, value: any) => {
    onChange && onChange(value, form)
    field.onChange(e)
  }

  const handleBlur = (e: React.ChangeEvent<any>) => {
    if (formatValue) {
      e.target.value = formatValue(e.target.value)
      field.onChange(e)
    }
    field.onBlur(e)
  }

  const fieldProps = {
    ...restProps,
    ...field,
    onChange: handleChange,
    onBlur: handleBlur,
    error,
    helperText: error && !hideErrorText ? fieldError : checkProp(helperText),
    required: checkProp(required),
    disabled: (form.isSubmitting || checkProp(disabled)) ?? fieldsDisabled,
  }
  const Field = components[type]

  return Field ? <Field {...fieldProps} /> : null
}
