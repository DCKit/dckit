import React, { useState, useEffect } from 'react'
import { Paper, Button } from '@material-ui/core'
import { fields, fieldsConfig, validationSchema } from './fields'
import { FormWithDefaults } from '../FormWithDefaults'

type InitialValues = {
  [key: string]: any
}

export const Form = () => {
  const [initialValues, setInitialValues] = useState({} as InitialValues)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialValues({
        login: 'initial login',
        nested: { notes: 'initial notes' },
        useDefaults: false,
        defaultValues: {
          login: 'default login',
          password: 'default password',
          radio: '2',
          select: '3',
          nested: {
            notes: 'default notes',
            check: true,
          },
        },
      })
    }, 100)
    return () => clearTimeout(timeout)
  }, [setInitialValues])

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
