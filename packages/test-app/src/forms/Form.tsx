import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as V from 'yup'
import { Grid } from '@material-ui/core'
import { FormField, IFormField } from './FormField'

export interface IFormProps {
  fieldsConfig: any
  renderActions: any
}

const validationSchema = V.object().shape({
  login: V.string().required(),
})

export const Form = ({ fieldsConfig, renderActions }: IFormProps) => {
  const form = useForm({ mode: 'onBlur', validationSchema })
  return (
    <form>
      <Grid container spacing={4}>
        {fieldsConfig.map((fieldConfig: IFormField) => {
          const {
            field,
            size = 12,
            defaultValue = '',
            checkDisabled,
          } = fieldConfig

          if (checkDisabled) form.watch(field)

          return (
            <Grid key={field} item xs={12} sm={size}>
              <Controller
                as={<FormField form={form} {...fieldConfig} />}
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
