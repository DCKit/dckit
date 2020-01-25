import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Grid } from '@material-ui/core'
import { FormField } from './FormField'
import { IFormField } from './types'

export interface IFormProps {
  fieldsConfig: any
  renderActions: any
  validationSchema?: any
}

export const Form = ({
  fieldsConfig,
  renderActions,
  validationSchema,
}: IFormProps) => {
  const form = useForm({ mode: 'onBlur', validationSchema })
  return (
    <form>
      <Grid container spacing={4}>
        {fieldsConfig.map((fieldConfig: IFormField) => {
          const {
            field,
            size = 12,
            initialValue = '',
            controlProps,
          } = fieldConfig

          if (controlProps) form.watch(field)

          return (
            <Grid key={field} item xs={12} sm={size}>
              <Controller
                as={<FormField form={form} {...fieldConfig} />}
                name={field}
                control={form.control}
                defaultValue={initialValue}
              />
            </Grid>
          )
        })}
      </Grid>
      {renderActions(form)}
    </form>
  )
}
