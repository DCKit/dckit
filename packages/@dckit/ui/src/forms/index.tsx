import React, { useMemo } from 'react'
import { Formik, Form as FormWrapper, FormikProps } from 'formik'
import { FormField } from './FormField'
import { FormFieldTypes, FormFieldConfig, FieldTypeDict } from './types'
import { DefaultFormContainer, DefaultFieldContainer } from './containers'

const defaultValues: FieldTypeDict = {
  [FormFieldTypes.text]: '',
  [FormFieldTypes.check]: false,
  [FormFieldTypes.switch]: false,
}

export interface FormProps {
  fields: string[]
  fieldsConfig: any
  renderActions: any
  onSubmit?: any
  initialValues?: any
  validationSchema?: any
  FormContainer?: any
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
  } = props

  const normalizedValues = useMemo(() => {
    const values: any = {}
    fields.forEach((field: string) => {
      const config: FormFieldConfig = fieldsConfig[field]
      const { type = FormFieldTypes.text, initialValue } = config
      values[field] =
        initialValues[field] ?? initialValue ?? defaultValues[type]
    })
    return values
  }, [fields, fieldsConfig, initialValues])

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
      initialValues={normalizedValues}
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
