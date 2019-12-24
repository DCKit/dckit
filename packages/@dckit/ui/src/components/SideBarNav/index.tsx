import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'
import { SideBarItem } from '../SideBarItem'
import { SupportButton } from '../SupportButton'
import { Loading } from '../Loading'

import { styles } from './styles'

class SideBarNavComponent extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    onClick: PropTypes.func,
    items: PropTypes.array,
    signOut: PropTypes.object,
    support: PropTypes.object,
    open: PropTypes.bool,
    loading: PropTypes.bool,
  }

  render() {
    const {
      classes,
      items,
      loading,
      signOut,
      support,
      open,
      onClick,
    } = this.props
    return (
      <List className={classes.navigation}>
        {loading && (
          <div className={classes.loading}>
            <Loading />
          </div>
        )}
        {!loading &&
          items &&
          items.map((item, index) => (
            <SideBarItem
              key={index}
              open={open}
              id={item.id || item.acl}
              onClick={onClick}
              {...item}
            />
          ))}
        {support && <SupportButton {...this.props} open={open} />}
        {signOut && <SideBarItem id="sign_out" open={open} {...signOut} />}
      </List>
    )
  }
}

export const SideBarNav = withStyles(styles)(SideBarNavComponent)
