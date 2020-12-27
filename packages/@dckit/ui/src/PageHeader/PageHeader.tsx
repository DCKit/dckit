import { AppBarHead, AppBarNav } from 'ui/ports'

export function PageHeader(props: any) {
  const { renderTitle, renderNavigation } = props
  return (
    <>
      {renderTitle && (
        <AppBarHead.Provider>{renderTitle()}</AppBarHead.Provider>
      )}
      {renderNavigation && (
        <AppBarNav.Provider>{renderNavigation()}</AppBarNav.Provider>
      )}
    </>
  )
}
