import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Grid, Switch, FormControlLabel } from '@material-ui/core'
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
  const form = useForm({ validationSchema, mode: 'onBlur' })
  const { reset } = form

  useEffect(() => {
    const values =
      withDefaults && initialValues
        ? initialValues.defaultValues
        : initialValues
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
            <FormControlLabel
              control={<Switch color="primary" />}
              label="use defaults"
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
