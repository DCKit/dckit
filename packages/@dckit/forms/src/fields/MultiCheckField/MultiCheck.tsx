import React from 'react'
import { Checkbox, useFormControl } from '@material-ui/core'
import { useField } from 'formik'

type MultiCheckProps = {
  name: string
  disabled?: boolean
  small?: boolean
  valuesArray?: any[]
  options?: any[]
  value?: any
}

export function MultiCheck(props: MultiCheckProps) {
  const { name, disabled, small, valuesArray = [], options = [], value } = props

  const formControl = useFormControl()
  const [, , helpers] = useField(name)

  const handleChange = (value: any) => {
    const valuesSet = new Set(valuesArray)
    const checked = valuesSet.has(value)

    valuesSet[checked ? 'delete' : 'add'](value)

    const values = options.filter((el: any) => valuesSet.has(el))

    formControl.onFocus()
    helpers.setValue(values)
  }

  return (
    <Checkbox
      color="primary"
      size={small ? 'small' : 'medium'}
      checked={valuesArray.includes(value)}
      value={value}
      disabled={disabled}
      onChange={() => handleChange(value)}
    />
  )
}
