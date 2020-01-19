import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Grid, Paper, Button } from '@material-ui/core'
import { FormField, IFormField } from './FormField'

const fields: IFormField[] = [
  { field: 'login', label: 'Login', size: 6, defaultValue: '111' },
  { field: 'password', label: 'Password', size: 6, defaultValue: '222' },
  { field: 'notes', label: 'Notes' },
]

export const Form = () => {
  const { handleSubmit, control } = useForm({})
  const [data, setData] = useState(null)

  const onSubmit1 = handleSubmit((data: any) => {
    console.log('Submit 1')
    setData(data)
  })
  const onSubmit2 = handleSubmit((data: any) => {
    console.log('Submit 2')
    setData(data)
  })

  return (
    <>
      <Paper style={{ margin: 50, padding: 16, width: 500 }}>
        <form>
          <Grid container spacing={4}>
            {fields.map((fieldConfig: IFormField) => {
              const { field, size = 12, defaultValue = '' } = fieldConfig
              return (
                <Grid key={field} item xs={size}>
                  <Controller
                    as={<FormField {...fieldConfig} />}
                    name={field}
                    control={control}
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
