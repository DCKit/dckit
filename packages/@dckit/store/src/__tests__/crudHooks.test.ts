import { testDispatcherHook } from './testHooks'
import * as crudHooks from '../crud/hooks'
import { cleanup, waitForElement, fireEvent } from '@testing-library/react'
import { TestItem } from './testData'

afterEach(cleanup)

describe('crud dispatchers hooks', () => {
  describe('useLoadItems', () => {
    it('should successfully execute', async () => {
      const { getByTestId } = testDispatcherHook(() =>
        crudHooks.useLoadItems(TestItem)
      )
      fireEvent.click(getByTestId('testid'))
      const el = await waitForElement(() => getByTestId('clicked'))
      expect(el).toBeDefined()
    })
  })

  describe('useAddItem', () => {
    it('should successfully execute', async () => {
      const { getByTestId } = testDispatcherHook(() =>
        crudHooks.useAddItem(TestItem)
      )
      fireEvent.click(getByTestId('testid'))
      const el = await waitForElement(() => getByTestId('clicked'))
      expect(el).toBeDefined()
    })
  })

  describe('useUpdateItem', () => {
    it('should successfully execute', async () => {
      const { getByTestId } = testDispatcherHook(() =>
        crudHooks.useUpdateItem(TestItem)
      )
      fireEvent.click(getByTestId('testid'))
      const el = await waitForElement(() => getByTestId('clicked'))
      expect(el).toBeDefined()
    })
  })

  describe('useDeleteItem', () => {
    it('should successfully execute', async () => {
      const { getByTestId } = testDispatcherHook(() =>
        crudHooks.useDeleteItem(TestItem)
      )
      fireEvent.click(getByTestId('testid'))
      const el = await waitForElement(() => getByTestId('clicked'))
      expect(el).toBeDefined()
    })
  })

  describe('useImportItems', () => {
    it('should successfully execute', async () => {
      const { getByTestId } = testDispatcherHook(() =>
        crudHooks.useImportItems(TestItem)
      )
      fireEvent.click(getByTestId('testid'))
      const el = await waitForElement(() => getByTestId('clicked'))
      expect(el).toBeDefined()
    })
  })

  describe('useExportItems', () => {
    it('should successfully execute', async () => {
      const { getByTestId } = testDispatcherHook(() =>
        crudHooks.useExportItems(TestItem)
      )
      fireEvent.click(getByTestId('testid'))
      const el = await waitForElement(() => getByTestId('clicked'))
      expect(el).toBeDefined()
    })
  })
})
