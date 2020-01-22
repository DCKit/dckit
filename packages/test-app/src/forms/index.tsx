import React from 'react'
import { Grid, Paper, Button } from '@material-ui/core'
import { fieldsConfig, validationSchema } from './fields'
import { Form } from './Form'

export const DemoForm = () => {
  const renderActions = (form: any) => {
    const onSubmit1 = form.handleSubmit((data: any) => {
      console.log('Submit 1', data)
    })
    const onSubmit2 = form.handleSubmit((data: any) => {
      console.log('Submit 2', data)
    })

    return (
      <Grid container justify="flex-end" spacing={4} style={{ paddingTop: 16 }}>
        <Grid item>
          <Button
            color="secondary"
            variant="contained"
            style={{ marginLeft: -16 }}
            onClick={onSubmit1}
          >
            submit1
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            style={{ marginLeft: -16 }}
            onClick={onSubmit2}
          >
            submit2
          </Button>
        </Grid>
      </Grid>
    )
  }

  return (
    <Paper style={{ margin: 50, padding: 32, width: '70%' }}>
      <Form
        fieldsConfig={fieldsConfig}
        validationSchema={validationSchema}
        renderActions={renderActions}
      />
    </Paper>
  )
}
