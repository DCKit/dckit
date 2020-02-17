import React, { useState, useEffect } from 'react'
import { Grid, Paper, Button } from '@material-ui/core'
import { fields, fieldsConfig, validationSchema } from './fields'
import { FormWithDefaults } from '@dckit/ui'

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
        useDefaults: true,
        defaultValues: {
          login: 'default login',
          password: 'default password',
          nested: {
            notes: 'default notes',
            check: true,
          },
        },
      })
    }, 5000)
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
      <Grid item container justify="flex-end">
        <Grid item>
          <Button
            color="secondary"
            variant="contained"
            disabled={form.isSubmitting}
            onClick={onSubmit1}
          >
            submit1
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            disabled={form.isSubmitting}
            onClick={onSubmit2}
          >
            submit2
          </Button>
        </Grid>
      </Grid>
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
