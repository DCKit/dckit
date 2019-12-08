import React from 'react'
import cn from 'clsx'
import { Drawer } from '@material-ui/core'
import { useIsMobile, renderEmpty } from '../utils'
import { TRenderProp, TCallback } from '../types'
import { useStyles } from './styles'

interface ISideBarProps {
  sideBarOpen: boolean
  onClose: TCallback
  renderSideBar?: TRenderProp
}

const SideBarMobile = ({
  sideBarOpen,
  onClose,
  renderSideBar = renderEmpty,
}: ISideBarProps) => {
  const classes = useStyles()
  return (
    <Drawer
      PaperProps={{ elevation: 8 }}
      classes={{
        paper: classes.drawerPaperMobile,
      }}
      open={sideBarOpen}
      onBackdropClick={onClose}
    >
      {renderSideBar({ sideBarOpen })}
    </Drawer>
  )
}

const SideBarDesktop = ({
  sideBarOpen,
  renderSideBar = renderEmpty,
}: ISideBarProps) => {
  const classes = useStyles()
  return (
    <div className={classes.sideBarContainer}>
      <Drawer
        variant="permanent"
        PaperProps={{ elevation: sideBarOpen ? 8 : 5 }}
        classes={{
          paper: cn(
            classes.drawerPaper,
            !sideBarOpen && classes.drawerPaperCollapsed
          ),
        }}
        open={sideBarOpen}
      >
        {renderSideBar({ sideBarOpen })}
      </Drawer>
    </div>
  )
}

export const SideBar = (props: ISideBarProps) => {
  const isMobile = useIsMobile()
  return isMobile ? <SideBarMobile {...props} /> : <SideBarDesktop {...props} />
}

/*
class SideBarComponent extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    width: PropTypes.string,
    open: PropTypes.bool,
    userInfo: PropTypes.object,
    NavProps: PropTypes.object,
    logo: PropTypes.string,
    LogoProps: PropTypes.object,
    SupportComponent: PropTypes.node,
    onClose: PropTypes.func,
    children: PropTypes.any,
  }

  renderDesktop = () => {
    const {
      classes,
      open,
      userInfo,
      NavProps,
      LogoProps,
      children,
      logo,
    } = this.props
    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          PaperProps={{ elevation: open ? 8 : 5 }}
          classes={{
            paper: cn(classes.drawerPaper, !open && classes.collapsed),
          }}
          open={open}
        >
          {open && <AppBarLogo logo={logo} />}
          <UserInfo
            userInfo={userInfo}
            open={open}
            className={cn(classes.header, !open && classes.collapsed)}
          />
          {open && <Divider className={classes.divider} />}
          <SideBarNav {...NavProps} />
          <SideBarLogo open={open} {...LogoProps} />
          {open && children}
        </Drawer>
      </div>
    )
  }

  renderMobile = () => {
    const {
      classes,
      open,
      userInfo,
      NavProps,
      LogoProps,
      logo,
      onClose,
    } = this.props

    return (
      <Drawer
        PaperProps={{ elevation: 8 }}
        classes={{
          paper: classes.drawerPaperMobile,
        }}
        open={open}
        onBackdropClick={onClose}
      >
        <AppBarLogo logo={logo} />
        <UserInfo
          userInfo={userInfo}
          open={open}
          className={classes.headerMobile}
          onClick={onClose}
        />
        <Divider className={classes.divider} />
        <SideBarNav {...NavProps} onClick={onClose} />
        <SideBarLogo open={open} {...LogoProps} />
      </Drawer>
    )
  }

  render() {
    return isMobile(this) ? this.renderMobile() : this.renderDesktop()
  }
}

export const SideBar = compose(
  withStyles(styles),
  withWidth()
)(SideBarComponent)
*/
