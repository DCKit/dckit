import React from 'react'
import { Formik, Form as FormWrapper } from 'formik'
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
  onSubmit?: any
  withDefaults?: boolean
  validationSchema?: any
}

export const Form = ({
  fields,
  fieldsConfig,
  renderActions,
  initialValues,
  onSubmit,
  validationSchema,
}: IFormProps) => {
  function renderField(field: string, form: any) {
    const config = fieldsConfig[field]
    const { type = FormFieldType.text }: { type: FormFieldType } = config
    const { size = 12, defaultValue = defaultByType[type] } = config

    const fieldProps = {
      ...config,
      type,
      defaultValue,
      name: field,
      form,
    }

    return (
      <Grid key={field} container item xs={12} sm={size}>
        <FormField {...fieldProps} />
      </Grid>
    )
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {form => (
        <FormWrapper>
          <Grid container spacing={4}>
            {fields.map(field => renderField(field, form))}
          </Grid>
          {renderActions(form)}
        </FormWrapper>
      )}
    </Formik>
  )
}
