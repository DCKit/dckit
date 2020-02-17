import React, { useState, useEffect, useMemo } from 'react'
import { Grid } from '@material-ui/core'
import { Form } from '../Form'
import { FormField } from '../FormField'
import { FormFieldTypes, FormProps, FormContext } from '../types'

export const FormWithDefaults = (props: FormProps) => {
  const { renderActions, initialValues, ...formConfigProps } = props
  const initialUseDefaults = initialValues?.useDefaults ?? false
  const [useDefaults, setUseDefaults] = useState(initialUseDefaults)

  useEffect(() => setUseDefaults(initialUseDefaults), [initialUseDefaults])

  const defaultValues = useMemo(() => {
    const values = useDefaults ? initialValues?.defaultValues : initialValues
    return {
      ...values,
      defaultValues: initialValues?.defaultValues,
      useDefaults,
    }
  }, [useDefaults, initialValues])

  const handleUseDefaultsChange = (e: React.ChangeEvent<any>) => {
    setUseDefaults(e.target.checked)
  }

  const renderUseDefaults = (form: FormContext, props: FormProps) => (
    <Grid container>
      <Grid item>
        <FormField
          type={FormFieldTypes.switch}
          label="Use defaults"
          name="useDefaults"
          disabled={false}
          onChange={handleUseDefaultsChange}
        />
      </Grid>
      <Grid item>{renderActions(form, props)}</Grid>
    </Grid>
  )

  return (
    <Form
      {...formConfigProps}
      initialValues={defaultValues}
      renderActions={renderUseDefaults}
      fieldsDisabled={useDefaults}
    />
  )
}
