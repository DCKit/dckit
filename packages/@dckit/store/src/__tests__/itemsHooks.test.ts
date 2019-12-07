import { testSelectorHook, testDispatcherHook } from './testHooks'
import * as itemsHooks from '../items/hooks'
import { cleanup, waitForElement, fireEvent } from '@testing-library/react'
import { TestItem } from './testData'

afterEach(cleanup)

// selectors hooks

describe('items selectors hooks', () => {
  describe('useItems', () => {
    it('should successfully execute', () => {
      const { getByText } = testSelectorHook(() =>
        itemsHooks.useItems(TestItem)
      )
      expect(
        getByText('[{"id":"1","data":"data1"},{"id":"2","data":"data2"}]')
      ).toBeDefined()
    })
  })

  describe('useItem', () => {
    it('should successfully execute', () => {
      const { getByText } = testSelectorHook(() =>
        itemsHooks.useItem(TestItem, 1)
      )
      expect(getByText('{"id":"1","data":"data1"}')).toBeDefined()
    })
  })

  describe('useOptedItemId', () => {
    it('should successfully execute', () => {
      const { getByText } = testSelectorHook(() =>
        itemsHooks.useOptedItemId(TestItem)
      )
      expect(getByText('2')).toBeDefined()
    })
  })

  describe('useOptedItem', () => {
    it('should successfully execute', () => {
      const { getByText } = testSelectorHook(() =>
        itemsHooks.useOptedItem(TestItem)
      )
      expect(getByText('{"id":"2","data":"data2"}')).toBeDefined()
    })
  })
})

// dispatchers hooks

describe('items dispatchers hooks', () => {
  describe('useSetItems', () => {
    it('should successfully execute', async () => {
      const { getByTestId } = testDispatcherHook(() =>
        itemsHooks.useSetItems(TestItem)
      )
      fireEvent.click(getByTestId('testid'))
      const el = await waitForElement(() => getByTestId('clicked'))
      expect(el).toBeDefined()
    })
  })

  describe('useSetItem', () => {
    it('should successfully execute', async () => {
      const { getByTestId } = testDispatcherHook(() =>
        itemsHooks.useSetItem(TestItem)
      )
      fireEvent.click(getByTestId('testid'))
      const el = await waitForElement(() => getByTestId('clicked'))
      expect(el).toBeDefined()
    })
  })

  describe('useRemoveItem', () => {
    it('should successfully execute', async () => {
      const { getByTestId } = testDispatcherHook(() =>
        itemsHooks.useRemoveItem(TestItem)
      )
      fireEvent.click(getByTestId('testid'))
      const el = await waitForElement(() => getByTestId('clicked'))
      expect(el).toBeDefined()
    })
  })

  describe('useOptItem', () => {
    it('should successfully execute', async () => {
      const { getByTestId } = testDispatcherHook(() =>
        itemsHooks.useOptItem(TestItem)
      )
      fireEvent.click(getByTestId('testid'))
      const el = await waitForElement(() => getByTestId('clicked'))
      expect(el).toBeDefined()
    })
  })

  describe('useSelectItem', () => {
    it('should successfully execute', async () => {
      const { getByTestId } = testDispatcherHook(() =>
        itemsHooks.useSelectItem(TestItem)
      )
      fireEvent.click(getByTestId('testid'))
      const el = await waitForElement(() => getByTestId('clicked'))
      expect(el).toBeDefined()
    })
  })
})
