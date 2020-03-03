import React, { useState, useEffect } from 'react'
import { Paper, Button } from '@material-ui/core'
import { fields, fieldsConfig, validationSchema } from './fields'
import { FormWithDefaults } from '@dckit/forms'

type InitialValues = {
  [key: string]: any
}

export const DemoForm = () => {
  const [initialValues, setInitialValues] = useState({} as InitialValues)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialValues({
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
      })
    }, 1000)
    return () => clearTimeout(timeout)
  }, [setInitialValues])

  const renderActions = (form: any) => {
    const onSubmit1 = () => {
      form.submitForm()
    }
    const onSubmit2 = () => {
      form.submitForm()
    }

    return (
      <>
        <Button
          color="secondary"
          variant="contained"
          disabled={form.isSubmitting}
          onClick={onSubmit1}
          style={{ marginRight: 16 }}
        >
          submit1
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={form.isSubmitting || !form.dirty}
          onClick={onSubmit2}
        >
          submit2
        </Button>
      </>
    )
  }

  const handleSubmit = (data: any) => console.log(data)

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
