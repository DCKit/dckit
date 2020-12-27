import { Chip } from '@material-ui/core'
import { useDraftStyles, useLiveStyles, useTemplateStyles } from './styles'

export function Status(props: any) {
  const { variant, style = {} } = props
  const clsDraft = useDraftStyles()
  const clsLive = useLiveStyles()
  const clsTemplate = useTemplateStyles()

  if (!variant) return null

  const variants: any = {
    DRAFT: {
      classes: clsDraft,
      label: 'Draft',
    },
    LIVE: {
      classes: clsLive,
      label: 'Active',
    },
    TEMPLATE: {
      classes: clsTemplate,
      label: 'Template',
      shape: 'outlined',
    },
  }

  const cls: any = variants[variant]?.classes || {}
  const label = variants[variant]?.label || 'Draft'
  const shape = variants[variant]?.shape || 'default'

  return (
    <Chip
      size="small"
      variant={shape}
      classes={{ root: cls.chip }}
      style={style}
      label={
        <span style={{ display: 'flex', height: 16, alignItems: 'center' }}>
          <span
            className={cls.dot}
            style={{ fontSize: 7, lineHeight: 7, marginRight: 4 }}
          >{`\u2B24`}</span>
          <span
            style={{ fontSize: 12, lineHeight: 12, marginRight: 4 }}
            className={cls.label}
          >
            {label}
          </span>
        </span>
      }
    />
  )
}
