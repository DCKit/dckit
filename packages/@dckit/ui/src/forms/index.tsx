import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Grid } from '@material-ui/core'
import { FormField } from './FormField'

export interface IFormProps {
  fields: string[]
  fieldsConfig: any
  renderActions: any
  validationSchema?: any
}

export const Form = ({
  fields,
  fieldsConfig,
  renderActions,
  validationSchema,
}: IFormProps) => {
  const form = useForm({ validationSchema, mode: 'onBlur' })
  return (
    <form>
      <Grid container spacing={4}>
        {fields.map((field: string) => {
          const fieldConfig = fieldsConfig[field]
          const { size = 12, defaultValue = '', controlProps } = fieldConfig

          if (controlProps) form.watch(field, defaultValue)

          return (
            <Grid key={field} item xs={12} sm={size}>
              <Controller
                as={<FormField form={form} field={field} {...fieldConfig} />}
                name={field}
                control={form.control}
                defaultValue={defaultValue}
              />
            </Grid>
          )
        })}
      </Grid>
      {renderActions(form)}
    </form>
  )
}
