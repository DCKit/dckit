import React from 'react'
import { Formik, Form as FormikFormWrapper, FormikProps } from 'formik'
import { FormField } from './FormField'
import { FormFieldTypes, FormFieldConfig } from './types'
import { DefaultFormContainer, DefaultFieldContainer } from './containers'

export interface FormProps {
  fields: string[]
  fieldsConfig: any
  renderActions: any
  onSubmit?: any
  initialValues?: any
  validationSchema?: any
  FormContainer?: any
  FormWrapper?: any
  FieldContainer?: any
}

export const Form = (props: FormProps) => {
  const {
    fields,
    fieldsConfig,
    renderActions,
    initialValues,
    validationSchema,
    onSubmit,
    FormContainer = DefaultFormContainer,
    FieldContainer = DefaultFieldContainer,
    FormWrapper = FormikFormWrapper,
  } = props

  function renderField(field: string, form: FormikProps<unknown>) {
    const config: FormFieldConfig = fieldsConfig[field]
    const {
      name = field,
      type = FormFieldTypes.text,
      size = 12,
      ...restProps
    } = config

    const formFieldProps = {
      ...restProps,
      form,
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
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(form: FormikProps<unknown>) => (
        <FormWrapper>
          <FormContainer>
            {fields.map(field => renderField(field, form))}
          </FormContainer>
          {renderActions(form)}
        </FormWrapper>
      )}
    </Formik>
  )
}
