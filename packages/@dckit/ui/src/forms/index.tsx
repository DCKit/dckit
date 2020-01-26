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
  const [useDefaults, setUseDefaults] = useState(
    initialValues?.useDefaults || false
  )
  const form = useForm({ validationSchema, mode: 'onBlur' })
  const { reset } = form

  useEffect(() => {
    const values = withDefaults ? initialValues?.defaultValues : initialValues
    withDefaults && setUseDefaults(initialValues?.useDefaults || false)
    reset(values)
  }, [reset, initialValues, withDefaults])

  return (
    <form>
      <Grid container spacing={4}>
        {fields.map((field: string) => {
          const config = fieldsConfig[field]
          const { type = FormFieldType.text }: { type: FormFieldType } = config
          const {
            size = 12,
            defaultValue = defaultByType[type],
            controlProps,
          } = config

          if (controlProps) form.watch(field, defaultValue)

          const fieldProps = {
            ...config,
            form,
            field,
          }

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
        })}
      </Grid>
      {withDefaults && (
        <Grid container>
          <Grid item>
            <Controller
              as={
                <FormField
                  form={form}
                  type={FormFieldType.switch}
                  field="useDefaults"
                  label="use defaults"
                  controlChange={(form: any, value: boolean) => {
                    value && form.reset(initialValues?.defaultValues)
                    setUseDefaults(value)
                  }}
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
      )}
      {!withDefaults && renderActions(form)}
    </form>
  )
}
