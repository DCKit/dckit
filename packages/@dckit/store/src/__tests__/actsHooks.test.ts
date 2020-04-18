import { fireEvent } from '@testing-library/react'
import { testDispatcherHook } from './testHooks'
import * as actsHooks from '../acts/hooks'

import { TestItem } from './testData'

describe('acts dispatchers hooks', () => {
  const forTest = [
    [actsHooks.useLoadDispatcher, 'useLoadDispatcher'],
    [actsHooks.useAddDispatcher, 'useAddDispatcher'],
    [actsHooks.useUpdateDispatcher, 'useUpdateDispatcher'],
    [actsHooks.useDeleteDispatcher, 'useDeleteDispatcher'],
    [actsHooks.useImportDispatcher, 'useImportDispatcher'],
    [actsHooks.useExportDispatcher, 'useExportDispatcher'],
    [actsHooks.useGenerateDispatcher, 'useGenerateDispatcher'],
    [actsHooks.useSubmitDispatcher, 'useSubmitDispatcher'],
    [actsHooks.useValidateDispatcher, 'useValidateDispatcher'],
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
