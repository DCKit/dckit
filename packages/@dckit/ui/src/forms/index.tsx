import React from 'react'
import { Formik, Form as FormWrapper } from 'formik'
import { FormField } from './FormField'
import { FormFieldType } from './types'
import { DefaultFormContainer, DefaultFieldContainer } from './containers'

export interface IFormProps {
  fields: any
  fieldsConfig: any
  renderActions: any
  onSubmit?: any
  initialValues?: any
  validationSchema?: any
  FormContainer?: any
  FieldContainer?: any
}

export const Form = (props: IFormProps) => {
  const {
    fields,
    fieldsConfig,
    renderActions,
    initialValues,
    validationSchema,
    onSubmit,
    FormContainer = DefaultFormContainer,
    FieldContainer = DefaultFieldContainer,
  } = props

  function renderField(field: string, form: any) {
    const config = fieldsConfig[field]
    const { type = FormFieldType.text }: { type: FormFieldType } = config
    const { size = 12 } = config

    const fieldProps = {
      ...config,
      name: field,
      type,
      form,
    }

    return (
      <FieldContainer key={field} size={size}>
        <FormField {...fieldProps} />
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
      {form => (
        <FormWrapper>
          <FormContainer>
            {fields.map((field: string) => renderField(field, form))}
          </FormContainer>
          {renderActions(form)}
        </FormWrapper>
      )}
    </Formik>
  )
}
