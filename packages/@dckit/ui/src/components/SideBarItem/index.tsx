import React from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'
import { withRouter } from 'react-router'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import { withAcl } from '../../../acl'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './styles'

const propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  divider: PropTypes.bool,
  open: PropTypes.bool,
  router: PropTypes.object,
  icon: PropTypes.node,
  title: PropTypes.string,
  acl: PropTypes.string,
  path: PropTypes.string,
  id: PropTypes.string,
}

class SideBarItemComponent extends React.PureComponent {
  static propTypes = propTypes
  onClick = () => {
    const { router, path, onClick } = this.props
    onClick && onClick()
    path && router.push(path)
  }
  render() {
    const { divider, router, classes, path, icon, title, id, open } = this.props
    const selected = !divider && path && router && router.isActive(path)
    return divider ? (
      <Divider className={classes.divider} />
    ) : (
      <ListItem
        id={`sidebar-${id}`}
        data-testid="sidebar-item"
        button
        dense
        disableRipple
        selected={selected}
        className={cn(
          classes.root,
          selected && '-selected',
          !open && classes.collapsed
        )}
        onClick={this.onClick}
      >
        <ListItemIcon className={cn(classes.icon, selected && '-selected')}>
          {icon}
        </ListItemIcon>
        <span className={cn(classes.listItemText, selected && '-selected')}>
          {title}
        </span>
      </ListItem>
    )
  }
}

const AclSideBarItemComponent = withAcl(SideBarItemComponent)

class Item extends React.PureComponent {
  static propTypes = propTypes
  render() {
    return this.props.acl ? (
      <AclSideBarItemComponent {...this.props} />
    ) : (
      <SideBarItemComponent {...this.props} />
    )
  }
}

export const SideBarItem = withRouter(withStyles(styles)(Item))
