import { testSelectorHook, testDispatcherHook } from './testHooks'
import * as itemsHooks from '../items/hooks'
import { fireEvent } from '@testing-library/react'
import { TestItem } from './testData'

// selectors hooks

describe('items selectors hooks', () => {
  it('should successfully execute useItems', () => {
    const { getByText } = testSelectorHook(() => itemsHooks.useItems(TestItem))
    expect(
      getByText('[{"id":"1","data":"data1"},{"id":"2","data":"data2"}]')
    ).toBeDefined()
  })

  it('should successfully execute useItem', () => {
    const { getByText } = testSelectorHook(() =>
      itemsHooks.useItem(TestItem, 1)
    )
    expect(getByText('{"id":"1","data":"data1"}')).toBeDefined()
  })

  it('should successfully execute useOptedItemId', () => {
    const { getByText } = testSelectorHook(() =>
      itemsHooks.useOptedItemId(TestItem)
    )
    expect(getByText('2')).toBeDefined()
  })

  it('should successfully execute useOptedItem', () => {
    const { getByText } = testSelectorHook(() =>
      itemsHooks.useOptedItem(TestItem)
    )
    expect(getByText('{"id":"2","data":"data2"}')).toBeDefined()
  })
})

// dispatchers hooks

describe('items dispatchers hooks', () => {
  it('should successfully execute useSetDispatcher', () => {
    const { getByTestId } = testDispatcherHook(
      () => itemsHooks.useSetDispatcher(TestItem),
      []
    )
    fireEvent.click(getByTestId('testid'))
    expect(getByTestId('clicked')).toBeDefined()
  })

  it('should successfully execute useSetOneDispatcher', () => {
    const { getByTestId } = testDispatcherHook(
      () => itemsHooks.useSetOneDispatcher(TestItem),
      1,
      { id: 1 }
    )
    fireEvent.click(getByTestId('testid'))

    expect(getByTestId('clicked')).toBeDefined()
  })

  it('should successfully execute useRemoveOneDispatcher', () => {
    const { getByTestId } = testDispatcherHook(
      () => itemsHooks.useRemoveOneDispatcher(TestItem),
      1
    )
    fireEvent.click(getByTestId('testid'))
    expect(getByTestId('clicked')).toBeDefined()
  })

  it('should successfully execute useOptDispatcher', () => {
    const { getByTestId } = testDispatcherHook(
      () => itemsHooks.useOptDispatcher(TestItem),
      1
    )
    fireEvent.click(getByTestId('testid'))
    expect(getByTestId('clicked')).toBeDefined()
  })

  it('should successfully execute useOptOutDispatcher', () => {
    const { getByTestId } = testDispatcherHook(() =>
      itemsHooks.useOptOutDispatcher(TestItem)
    )
    fireEvent.click(getByTestId('testid'))
    expect(getByTestId('clicked')).toBeDefined()
  })

  it('should successfully execute useSelectDispatcher', () => {
    const { getByTestId } = testDispatcherHook(
      () => itemsHooks.useSelectDispatcher(TestItem),
      true
    )
    fireEvent.click(getByTestId('testid'))
    expect(getByTestId('clicked')).toBeDefined()
  })
})
