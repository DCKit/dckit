import { fireEvent } from '@testing-library/react'
import { testDispatcherHook } from './testHooks'
import * as crudHooks from '../crud/hooks'

import { TestItem } from './testData'

describe('crud dispatchers hooks', () => {
  const forTest = [
    [crudHooks.useLoadDispatcher, 'useLoadDispatcher'],
    [crudHooks.useAddDispatcher, 'useAddDispatcher'],
    [crudHooks.useUpdateDispatcher, 'useUpdateDispatcher'],
    [crudHooks.useDeleteDispatcher, 'useDeleteDispatcher'],
    [crudHooks.useImportDispatcher, 'useImportDispatcher'],
    [crudHooks.useExportDispatcher, 'useExportDispatcher'],
  ]
  forTest.forEach((hook: any[]) => {
    const [testHook, name] = hook
    it(`should successfully execute ${name}`, () => {
      const { getByTestId } = testDispatcherHook(() => testHook(TestItem))
      fireEvent.click(getByTestId('testid'))
      expect(getByTestId('clicked')).toBeDefined()
    })
  })
})
