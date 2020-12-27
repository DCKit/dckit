import * as React from 'react'
import { Formik, Form as FormikForm, getIn, setIn } from 'formik'

import {
  FormProps,
  FormContext,
  FormFieldTypes,
  FormFieldConfig,
} from '../types'

import { DefaultContainer, DefaultActionsContainer } from '../containers'
import { defaultValues } from '../fields'
import { RenderFields } from './RenderFields'

export function Form(props: FormProps) {
  const {
    fields = [],
    groups = [],
    fieldsConfig = {},
    renderActions,
    initialValues,
    fieldsDisabled = false,
    FormWrapper = FormikForm,
    FormContainer = DefaultContainer,
    FieldContainer = DefaultContainer,
    GroupContainer = DefaultContainer,
    ActionsContainer = DefaultActionsContainer,
    ...formConfigProps
  } = props

  const normalizedInitialValues = React.useMemo(() => {
    let values = initialValues

    const flattenFields = () => Object.keys(fieldsConfig)

    flattenFields().forEach((field: string) => {
      const config: FormFieldConfig = fieldsConfig[field]
      const { type = FormFieldTypes.text, initialValue } = config
      values = setIn(
        values,
        field,
        getIn(initialValues, field, initialValue ?? defaultValues[type])
      )
    })
    return values
  }, [initialValues, fieldsConfig])

  return (
    <Formik
      {...formConfigProps}
      initialValues={normalizedInitialValues}
      enableReinitialize={true}
    >
      {(form: FormContext) => (
        <FormWrapper>
          <RenderFields
            fields={fields}
            groups={groups}
            fieldsConfig={fieldsConfig}
            fieldsDisabled={fieldsDisabled}
            FormContainer={FormContainer}
            FieldContainer={FieldContainer}
            GroupContainer={GroupContainer}
          />
          <ActionsContainer>{renderActions(form, props)}</ActionsContainer>
        </FormWrapper>
      )}
    </Formik>
  )
}
