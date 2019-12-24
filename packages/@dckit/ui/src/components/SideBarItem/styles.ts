export const styles = theme => ({
  divider: {
    margin: "6px 0 !important",
    backgroundColor: "rgba(0, 0, 0, 0.08)"
  },
  root: {
    color: theme.mixins.sideBar.item.color,
    fontSize: 14,
    height: 44,
    paddingLeft: 24,
    "&.-selected": {
      fontWeight: "bold",
      color: theme.mixins.sideBar.selected.color,
      backgroundColor: theme.mixins.sideBar.selected.background
    },
    "&:hover": {
      color: theme.mixins.sideBar.item.color,
      backgroundColor: theme.mixins.sideBar.selected.background,
      "& *": {
        color: theme.mixins.sideBar.item.color
      }
    }
  },
  icon: {
    color: theme.mixins.sideBar.item.color,
    marginRight: 24,
    "&.-selected": {
      color: theme.mixins.sideBar.selected.color
    },
    "&:hover": {
      color: theme.mixins.sideBar.item.color
    },
    "& svg": {
      fontSize: 20
    }
  },
  collapsed: {
    paddingLeft: 16
  }
});
