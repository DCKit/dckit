import { fireEvent } from '@testing-library/react'
import { testSelectorHook, testOnProcessStateHook } from './testHooks'
import * as procHooks from '../processes/hooks'
import { Acts } from '../types'
import { TestItem } from './testData'

describe('processes selectors hooks', () => {
  describe('useProcess', () => {
    it('should successfully execute', () => {
      const { getByText } = testSelectorHook(() =>
        procHooks.useProcess(TestItem, Acts.Load)
      )
      expect(
        getByText(
          '{"running":false,"error":true,"finished":true,"response":{"message":"error"}}'
        )
      ).toBeDefined()
    })
  })

  describe('useResponse', () => {
    it('should successfully execute', () => {
      const { getByText } = testSelectorHook(() =>
        procHooks.useResponse(TestItem, Acts.Load)
      )
      expect(getByText('{"message":"error"}')).toBeDefined()
    })
  })

  describe('use<running>', () => {
    const forTest = [
      [procHooks.useLoading, 'useLoading'],
      [procHooks.useAdding, 'useAdding'],
      [procHooks.useUpdating, 'useUpdating'],
      [procHooks.useDeleting, 'useDeleting'],
      [procHooks.useImporting, 'useImporting'],
      [procHooks.useExporting, 'useExporting'],
    ]
    forTest.forEach((hooks: any[]) => {
      const [hook, name] = hooks
      it(`should successfully execute ${name}`, () => {
        const { getByText } = testSelectorHook(() => hook(TestItem))
        expect(getByText('false')).toBeDefined()
      })
    })
  })

  describe('use<failed>', () => {
    const forTest = [
      [procHooks.useLoadFailed, 'useLoadFailed'],
      [procHooks.useAddFailed, 'useAddFailed'],
      [procHooks.useUpdateFailed, 'useUpdateFailed'],
      [procHooks.useDeleteFailed, 'useDeleteFailed'],
      [procHooks.useImportFailed, 'useImportFailed'],
      [procHooks.useExportFailed, 'useExportFailed'],
    ]
    forTest.forEach((hooks: any[]) => {
      const [hook, name] = hooks
      it(`should successfully execute ${name}`, () => {
        const { getByText } = testSelectorHook(() => hook(TestItem))
        expect(getByText('true')).toBeDefined()
      })
    })
  })

  describe('useOn<process>Success', () => {
    const forTest = [
      [procHooks.useOnLoadSuccess, procHooks.useLoadStop, 'useOnLoadSuccess'],
      [procHooks.useOnAddSuccess, procHooks.useAddStop, 'useOnAddSuccess'],
      [
        procHooks.useOnUpdateSuccess,
        procHooks.useUpdateStop,
        'useOnUpdateSuccess',
      ],
      [
        procHooks.useOnDeleteSuccess,
        procHooks.useDeleteStop,
        'useOnDeleteSuccess',
      ],
      [
        procHooks.useOnImportSuccess,
        procHooks.useImportStop,
        'useOnImportSuccess',
      ],
      [
        procHooks.useOnExportSuccess,
        procHooks.useExportStop,
        'useOnExportSuccess',
      ],
    ]
    forTest.forEach((hooks: any[]) => {
      const [hook, dispatcher, name] = hooks
      it(`should successfully execute ${name}`, async () => {
        const { getByTestId, queryByText } = testOnProcessStateHook(
          name,
          (callback: any) => hook(TestItem, callback),
          () => dispatcher(TestItem)
        )
        const elBefore = queryByText(name)
        expect(elBefore).toBeNull()

        fireEvent.click(getByTestId('testid'))
        const el = await queryByText(name)
        expect(el).not.toBeNull()
      })
    })
  })
})
