import { FormField } from '../fields/FormField'
import { FormFieldTypes, FormFieldConfig } from '../types'
import { DefaultContainer } from '../containers'
import { FormGroup } from '../types'

interface RenderFieldsProps {
  fields?: string[]
  groups?: FormGroup[]
  fieldsConfig: any
  fieldsDisabled?: boolean
  FormContainer?: any
  FieldContainer?: any
  GroupContainer?: any
}

export function RenderFields(props: RenderFieldsProps) {
  const {
    fields = [],
    groups = [],
    fieldsConfig = {},
    fieldsDisabled = false,
    FormContainer = DefaultContainer,
    FieldContainer = DefaultContainer,
    GroupContainer = DefaultContainer,
  } = props

  const renderField = (field: string, index: number) => {
    if (process.env.NODE_ENV === 'development') {
      if (!fieldsConfig[field]) {
        console.warn(`SubForm > renderField: no config for field '${field}'`)
        return null
      }
    }
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

  const renderGroup = (group: FormGroup, index: number) => {
    const {
      id,
      container,
      fields,
      size = 12,
      spacing = 4,
      label = null,
      style = {},
      ...rest
    } = group

    const Container = container || GroupContainer

    return (
      <Container
        {...rest}
        style={{
          alignContent: 'flex-start',
          ...style,
        }}
        key={id || index}
        size={size}
        spacing={spacing}
      >
        {label}
        {fields.map(renderField)}
      </Container>
    )
  }

  const withGroups = groups.length > 0

  return (
    <FormContainer spacing={withGroups ? 4 : 0}>
      {withGroups ? groups.map(renderGroup) : fields.map(renderField)}
    </FormContainer>
  )
}
