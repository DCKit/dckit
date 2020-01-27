import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Grid } from '@material-ui/core'
import { FormField } from './FormField'
import { FormFieldType } from './types'

const defaultByType = {
  [FormFieldType.text]: '',
  [FormFieldType.checkbox]: false,
  [FormFieldType.switch]: false,
}

export interface IFormProps {
  fields: string[]
  fieldsConfig: any
  renderActions: any
  initialValues?: any
  withDefaults?: boolean
  validationSchema?: any
}

export const Form = ({
  fields,
  fieldsConfig,
  renderActions,
  initialValues,
  withDefaults = false,
  validationSchema,
}: IFormProps) => {
  const [useDefaults, setUseDefaults] = useState(getUseDefaults())
  const form = useForm({ validationSchema, mode: 'onBlur' })

  useEffect(updateValues, [initialValues])

  function getDefaultValues() {
    return initialValues?.defaultValues || {}
  }

  function getUseDefaults() {
    return initialValues?.useDefaults || false
  }

  function updateValues() {
    const { reset } = form
    if (withDefaults) {
      const values = getDefaultValues()
      values.useDefaults = getUseDefaults()
      setUseDefaults(values.useDefaults)
      reset(values)
    } else {
      reset(initialValues)
    }
  }

  function resetDefaults(form: any, value: boolean) {
    value && form.reset(getDefaultValues())
    setUseDefaults(value)
  }

  function renderField(field: string) {
    const config = fieldsConfig[field]
    const { type = FormFieldType.text }: { type: FormFieldType } = config
    const {
      size = 12,
      defaultValue = defaultByType[type],
      controlProps,
    } = config

    const fieldProps = {
      ...config,
      form,
      field,
      useDefaults,
    }

    if (controlProps) form.watch(field, defaultValue)

    return (
      <Grid key={field} container item xs={12} sm={size}>
        <Controller
          as={<FormField {...fieldProps} />}
          name={field}
          control={form.control}
          defaultValue={defaultValue}
        />
      </Grid>
    )
  }

  function renderUseDefaults() {
    return (
      <Grid container>
        <Grid item>
          <Controller
            as={
              <FormField
                form={form}
                type={FormFieldType.switch}
                field="useDefaults"
                label="use defaults"
                controlChange={resetDefaults}
              />
            }
            name="useDefaults"
            control={form.control}
            defaultValue={false}
          />
        </Grid>
        <Grid item container>
          {renderActions(form)}
        </Grid>
      </Grid>
    )
  }

  return (
    <form>
      <Grid container spacing={4}>
        {fields.map(renderField)}
      </Grid>
      {withDefaults && renderUseDefaults()}
      {!withDefaults && renderActions(form)}
    </form>
  )
}
