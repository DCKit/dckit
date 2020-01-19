import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Grid, Paper, TextField, Button } from '@material-ui/core'
const defaultValues = {
  login: '111',
  password: '222',
  notes: '333',
}
export const Form = () => {
  const { handleSubmit, reset, control } = useForm({ defaultValues })
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
      <Paper
        style={{ margin: 50, padding: 32, width: 500, background: '#f7f7f7' }}
      >
        <form>
          <Grid container spacing={4} style={{ background: '#fff' }}>
            <Grid item xs={6}>
              <Controller
                as={<TextField fullWidth />}
                name="login"
                control={control}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                as={<TextField fullWidth />}
                name="password"
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={<TextField fullWidth />}
                name="notes"
                control={control}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justify="flex-end"
            style={{
              margin: -16,
              background: '#f0f0f0',
            }}
          >
            <Button
              style={{ margin: 8 }}
              color="secondary"
              variant="contained"
              onClick={onSubmit1}
            >
              submit1
            </Button>
            <Button
              style={{ margin: 8 }}
              color="primary"
              variant="contained"
              onClick={onSubmit2}
            >
              submit2
            </Button>
          </Grid>
        </form>
      </Paper>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
