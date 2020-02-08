import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Grid } from '@material-ui/core'
import { FormField } from './FormField'
import { FormFieldType, FieldTypeDict } from './types'
import { DefaultFormContainer, DefaultFieldContainer } from './containers'

const defaultByType: FieldTypeDict = {
  [FormFieldType.text]: '',
  [FormFieldType.check]: false,
}

export interface IFormProps {
  fields: any
  fieldsConfig: any
  renderActions: any
  initialValues?: any
  disabled?: boolean
  withDefaults?: boolean
  UseDefaultsProps?: FormFieldType
  validationSchema?: any
  FormContainer?: any
  FieldContainer?: any
}

export const Form = (props: IFormProps) => {
  const {
    fields,
    fieldsConfig,
    renderActions,
    initialValues,
    withDefaults = false,
    UseDefaultsProps,
    disabled: formDisabled = false,
    validationSchema,
    FormContainer = DefaultFormContainer,
    FieldContainer = DefaultFieldContainer,
  } = props

  const [useDefaults, setUseDefaults] = useState(getUseDefaults())
  const form = useForm({ validationSchema, mode: 'onBlur' })

  useEffect(updateValues, [initialValues, withDefaults, form.reset])

  function getDefaultValues() {
    return initialValues?.defaultValues ?? {}
  }

  function getUseDefaults() {
    return initialValues?.useDefaults ?? false
  }

  function updateValues() {
    const { reset } = form
    const useDefaults = withDefaults && getUseDefaults()
    if (useDefaults) {
      const defaultValues = getDefaultValues()
      reset({ ...defaultValues, useDefaults })
      setUseDefaults(true)
    } else {
      reset(initialValues)
    }
  }

  function renderField(field: string) {
    const config = fieldsConfig[field]
    const { type = FormFieldType.text }: { type: FormFieldType } = config
    const {
      size = 12,
      defaultValue = defaultByType[type],
      controlProps,
    } = config

    const formFieldProps = {
      ...config,
      form,
      field,
      formDisabled,
      useDefaults,
    }

    if (controlProps) form.watch(field, defaultValue)

    return (
      <FieldContainer key={field} size={size}>
        <Controller
          as={<FormField {...formFieldProps} />}
          name={field}
          control={form.control}
          defaultValue={defaultValue}
        />
      </FieldContainer>
    )
  }

  function resetDefaults(form: any, value: boolean) {
    value && form.reset(getDefaultValues())
    setUseDefaults(value)
  }

  function renderUseDefaults() {
    return (
      <Grid container style={{ paddingTop: 32 }}>
        <Grid item>
          <Controller
            as={
              <FormField
                label="use defaults"
                type={FormFieldType.switch}
                {...UseDefaultsProps}
                field="useDefaults"
                form={form}
                formDisabled={formDisabled}
                controlChange={resetDefaults}
              />
            }
            name="useDefaults"
            control={form.control}
            defaultValue={false}
          />
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          {renderActions(form)}
        </Grid>
      </Grid>
    )
  }

  return (
    <form>
      <FormContainer>
        {fields.map(renderField)}
        {withDefaults && renderUseDefaults()}
        {!withDefaults && renderActions(form)}
      </FormContainer>
    </form>
  )
}
