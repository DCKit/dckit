import React, { useState, useEffect } from 'react'
import { Grid, Paper, Button } from '@material-ui/core'
import { fields, fieldsConfig, validationSchema } from './fields'
import { Form } from '@dckit/ui'

export const DemoForm = () => {
  const [initialValues, setInitialValues] = useState({})
  useEffect(() => {
    setTimeout(() => {
      setInitialValues({
        notes: '######',
        defaultValues: {
          notes: 'default',
        },
        useDefaults: true,
      })
    }, 2000)
  }, [setInitialValues])

  const renderActions = (form: any) => {
    const onSubmit1 = form.handleSubmit((data: any) => {
      console.log('Submit 1', data)
    })
    const onSubmit2 = form.handleSubmit((data: any) => {
      console.log('Submit 2', data)
    })

    return (
      <Grid item container justify="flex-end">
        <Grid item>
          <Button color="secondary" variant="contained" onClick={onSubmit1}>
            submit1
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained" onClick={onSubmit2}>
            submit2
          </Button>
        </Grid>
      </Grid>
    )
  }

  return (
    <Paper style={{ margin: 50, padding: 32, width: '70%' }}>
      <Form
        withDefaults
        fields={fields}
        fieldsConfig={fieldsConfig}
        initialValues={initialValues}
        validationSchema={validationSchema}
        renderActions={renderActions}
      />
    </Paper>
  )
}
