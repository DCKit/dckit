import React, { useMemo } from 'react'
import { Formik, Form as FormWrapper, getIn, setIn } from 'formik'
import { FormField } from '../fields/FormField'
import {
  FormProps,
  FormContext,
  FormFieldTypes,
  FormFieldConfig,
  FieldTypeDict,
} from '../types'
import {
  DefaultFormContainer,
  DefaultFieldContainer,
  DefaultActionsContainer,
} from '../containers'

const defaultValues: FieldTypeDict = {
  [FormFieldTypes.text]: '',
  [FormFieldTypes.radio]: '',
  [FormFieldTypes.chips]: '',
  [FormFieldTypes.check]: false,
  [FormFieldTypes.switch]: false,
}

export const Form = (props: FormProps) => {
  const {
    fields,
    fieldsConfig,
    renderActions,
    initialValues,
    fieldsDisabled = false,
    validateOnChange = false,
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

  const renderField = (field: string) => {
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
      <FieldContainer key={field} size={size} style={style}>
        <FieldComponent {...formFieldProps} />
      </FieldContainer>
    )
  }

  return (
    <Formik
      {...formConfigProps}
      validateOnChange={validateOnChange}
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
  )
}
