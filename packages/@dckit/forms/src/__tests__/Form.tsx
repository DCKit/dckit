import React from 'react'
import { Paper, Button } from '@material-ui/core'
import { fields, fieldsConfig, validationSchema } from './fields'
import { FormWithDefaults } from '../FormWithDefaults'

const initialValues = {
  login: '@@@',
  nested: { notes: '###' },
  useDefaults: false,
  defaultValues: {
    login: 'default login',
    password: 'default password',
    radio: '2',
    select: { label: 'opt3', value: '3' },
    nested: {
      notes: 'default notes',
      check: true,
    },
  },
}

export const Form = () => {
  const renderActions = (form: any) => (
    <Button
      color="primary"
      variant="contained"
      disabled={form.isSubmitting || !form.dirty}
      onClick={form.submitForm}
    >
      submit
    </Button>
  )

  const handleSubmit = (data: any) => {}

  return (
    <Paper style={{ margin: 50, padding: 32, width: '70%' }}>
      <FormWithDefaults
        fields={fields}
        fieldsConfig={fieldsConfig}
        initialValues={initialValues}
        validationSchema={validationSchema}
        renderActions={renderActions}
        onSubmit={handleSubmit}
      />
    </Paper>
  )
}
