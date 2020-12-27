import * as React from 'react'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStyles } from './styles'

export function SubTitle(props: any) {
  const { children } = props
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        color: '#777',
        fontSize: '0.8rem',
        fontWeight: 500,
        textTransform: 'uppercase',
      }}
    >
      {children}
    </div>
  )
}

export function Panel(props: any) {
  const {
    style = {},
    headerStyle = {},
    title = '',
    defaultExpanded = true,
    children,
  } = props
  const [expanded, setExpanded] = React.useState(defaultExpanded)
  const cls = useStyles()

  return (
    <Accordion
      expanded={expanded}
      onChange={(e: any, expanded: boolean) => setExpanded(expanded)}
      elevation={1}
      classes={{ root: cls.accordion, expanded: cls.accordionExpanded }}
      style={style}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: '#0288d1' }} />}
        classes={{
          root: cls.header,
          content: cls.headerContent,
          expanded: cls.headerExpanded,
          expandIcon: cls.expandIcon,
        }}
      >
        <span
          style={{
            textTransform: 'uppercase',
            fontWeight: 500,
            marginLeft: 24,
            marginTop: 14,
            color: '#0288d1',
            ...headerStyle,
          }}
        >
          {title}
        </span>
      </AccordionSummary>
      <AccordionDetails
        style={{
          flexWrap: 'wrap',
          width: '100%',
          padding: '8px 24px 24px 24px',
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  )
}
