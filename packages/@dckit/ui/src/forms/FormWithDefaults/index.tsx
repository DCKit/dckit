import React, { useState } from 'react'
import { FormikProps } from 'formik'
import { Form, FormProps } from '../Form'
import { FormField } from '../FormField'
import { FormFieldTypes } from '../types'
import { Grid } from '@material-ui/core'

export type FormWithDefaultsProps = {
  fields: string[]
  fieldsConfig: any
  renderActions: any
  onSubmit?: any
  initialValues?: any
  validationSchema?: any
  disabled?: boolean
  FormContainer?: any
  FieldContainer?: any
  ActionsContainer?: any
}

export const FormWithDefaults = (props: FormWithDefaultsProps) => {
  const { renderActions, initialValues, ...restProps } = props

  const [useDefaults, setUseDefaults] = useState(
    initialValues?.useDefaults ?? false
  )

  const handleUseDefaultsChange = (e: React.ChangeEvent<any>) => {
    setUseDefaults(e.target.checked)
  }

  const renderUseDefaults = (form: FormikProps<unknown>, props: FormProps) => (
    <Grid container>
      <Grid item>
        <FormField
          type={FormFieldTypes.switch}
          label="Use defaults"
          name="useDefaults"
          onChange={handleUseDefaultsChange}
        />
      </Grid>
      <Grid item>{renderActions(form, props)}</Grid>
    </Grid>
  )

  return (
    <Form
      {...restProps}
      initialValues={useDefaults ? initialValues?.defaultValues : initialValues}
      renderActions={renderUseDefaults}
      fieldsDisabled={useDefaults}
    />
  )
}
