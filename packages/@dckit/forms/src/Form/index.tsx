import React, { useMemo } from 'react'
import { Formik, Form as FormWrapper, getIn, setIn } from 'formik'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import dateUtils from '@date-io/date-fns'

import { FormField } from '../fields/FormField'
import {
  FormProps,
  FormContext,
  FormFieldTypes,
  FormFieldConfig,
} from '../types'
import {
  DefaultFormContainer,
  DefaultFieldContainer,
  DefaultActionsContainer,
} from '../containers'
import { defaultValues } from '../fields'

export function Form(props: FormProps) {
  const {
    fields,
    fieldsConfig,
    renderActions,
    initialValues,
    fieldsDisabled = false,
    FormContainer = DefaultFormContainer,
    FieldContainer = DefaultFieldContainer,
    ActionsContainer = DefaultActionsContainer,
    ...formConfigProps
  } = props

  const normalizedInitialValues = useMemo(() => {
    let values = initialValues
    fields.forEach((field: string) => {
      const config: FormFieldConfig = fieldsConfig[field]
      const { type = FormFieldTypes.text, initialValue } = config
      values = setIn(
        values,
        field,
        getIn(initialValues, field, initialValue ?? defaultValues[type])
      )
    })
    return values
  }, [initialValues, fields, fieldsConfig])

  const renderField = (field: string, index: number) => {
    const config: FormFieldConfig = fieldsConfig[field]
    const {
      name = field,
      type = FormFieldTypes.text,
      size = 12,
      style,
      component: Component,
      ...restProps
    } = config

    const formFieldProps = {
      ...restProps,
      fieldsDisabled,
      name,
      type,
    }

    const FieldComponent = Component || FormField

    return (
      <FieldContainer key={`${field}${index}`} size={size} style={style}>
        <FieldComponent {...formFieldProps} />
      </FieldContainer>
    )
  }

  return (
    <MuiPickersUtilsProvider utils={dateUtils}>
      <Formik
        {...formConfigProps}
        initialValues={normalizedInitialValues}
        enableReinitialize={true}
      >
        {(form: FormContext) => (
          <FormWrapper>
            <FormContainer>{fields.map(renderField)}</FormContainer>
            <ActionsContainer>{renderActions(form, props)}</ActionsContainer>
          </FormWrapper>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  )
}
