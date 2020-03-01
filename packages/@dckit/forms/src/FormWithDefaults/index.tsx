import React, { useState, useEffect, useMemo } from 'react'
import { Grid } from '@material-ui/core'
import { Form } from '../Form'
import { FormField } from '../fields/FormField'
import { FormFieldTypes, FormProps, FormContext } from '../types'
import { EmptyContainer } from '../containers'

export function FormWithDefaults(props: FormProps) {
  const {
    renderActions,
    initialValues,
    fieldsDisabled = false,
    ...formConfigProps
  } = props

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
    <Grid container style={{ paddingTop: 32 }}>
      <Grid item>
        <FormField
          type={FormFieldTypes.switch}
          label="Use defaults"
          name="useDefaults"
          disabled={fieldsDisabled}
          onChange={handleUseDefaultsChange}
        />
      </Grid>
      <Grid
        item
        style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}
      >
        {renderActions(form, props)}
      </Grid>
    </Grid>
  )

  return (
    <Form
      {...formConfigProps}
      initialValues={defaultValues}
      renderActions={renderUseDefaults}
      ActionsContainer={EmptyContainer}
      fieldsDisabled={fieldsDisabled || useDefaults}
    />
  )
}
