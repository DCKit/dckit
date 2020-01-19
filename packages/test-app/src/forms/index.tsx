import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Grid, Paper, Button } from '@material-ui/core'
import { FormField, IFormField } from './FormField'

const fields: IFormField[] = [
  { field: 'login', label: 'Login', size: 6, defaultValue: '111' },
  {
    field: 'password',
    label: 'Password',
    size: 6,
    defaultValue: '222',
    checkDisabled: (form: any) => !form.getValues().notes,
  },
  { field: 'notes', label: 'Notes' },
]

export const Form = () => {
  const form = useForm({})
  const [data, setData] = useState(null)

  const onSubmit1 = form.handleSubmit((data: any) => {
    console.log('Submit 1')
    setData(data)
  })
  const onSubmit2 = form.handleSubmit((data: any) => {
    console.log('Submit 2')
    setData(data)
  })

  console.log('render')

  return (
    <>
      <Paper style={{ margin: 50, padding: 32, width: '70%' }}>
        <form>
          <Grid container spacing={4}>
            {fields.map((fieldConfig: IFormField) => {
              const {
                field,
                size = 12,
                defaultValue = '',
                checkDisabled,
              } = fieldConfig

              if (checkDisabled) form.watch(field)

              return (
                <Grid key={field} item xs={12} sm={size}>
                  <Controller
                    as={<FormField form={form} {...fieldConfig} />}
                    name={field}
                    control={form.control}
                    defaultValue={defaultValue}
                  />
                </Grid>
              )
            })}
          </Grid>
          <Grid
            container
            justify="flex-end"
            spacing={4}
            style={{ paddingTop: 16 }}
          >
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
        </form>
      </Paper>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
