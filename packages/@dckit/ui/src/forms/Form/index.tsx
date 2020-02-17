import React, { useMemo } from 'react'
import {
  Formik,
  Form as FormWrapper,
  FormikConfig,
  FormikValues,
  FormikProps,
  getIn,
  setIn,
} from 'formik'
import { FormField } from '../FormField'
import { FormFieldTypes, FormFieldConfig, FieldTypeDict } from '../types'
import {
  DefaultFormContainer,
  DefaultFieldContainer,
  DefaultActionsContainer,
} from '../containers'

const defaultValues: FieldTypeDict = {
  [FormFieldTypes.text]: '',
  [FormFieldTypes.check]: false,
  [FormFieldTypes.switch]: false,
}

export type FormProps = FormikConfig<FormikValues> & {
  fields: string[]
  fieldsConfig: any
  renderActions: any
  fieldsDisabled?: boolean
  FormContainer?: any
  FieldContainer?: any
  ActionsContainer?: any
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

  function renderField(field: string) {
    const config: FormFieldConfig = fieldsConfig[field]
    const {
      name = field,
      type = FormFieldTypes.text,
      size = 12,
      ...restProps
    } = config

    const formFieldProps = {
      ...restProps,
      fieldsDisabled,
      name,
      type,
    }

    return (
      <FieldContainer key={field} size={size}>
        <FormField {...formFieldProps} />
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
      {(form: FormikProps<unknown>) => (
        <FormWrapper>
          <FormContainer>{fields.map(renderField)}</FormContainer>
          <ActionsContainer>{renderActions(form, props)}</ActionsContainer>
        </FormWrapper>
      )}
    </Formik>
  )
}
