import { fireEvent } from '@testing-library/react'
import { testSelectorHook, testOnProcessStopHook } from './testHooks'
import * as procHooks from '../processes/hooks'
import { Acts } from '../types'
import { TestItem } from './testData'

describe('process hooks', () => {
  it('should successfully execute useProcess', () => {
    const { getByText } = testSelectorHook(() =>
      procHooks.useProcess(TestItem, Acts.Load)
    )
    expect(
      getByText(
        '{"running":false,"error":true,"finished":true,"response":{"message":"error"}}'
      )
    ).toBeDefined()
  })

  it('should successfully execute useResponse', () => {
    const { getByText } = testSelectorHook(() =>
      procHooks.useResponse(TestItem, Acts.Load)
    )
    expect(getByText('{"message":"error"}')).toBeDefined()
  })

  describe('use<running>', () => {
    const forTest = [
      [procHooks.useLoadingStatus, 'useLoadingStatus'],
      [procHooks.useAddingStatus, 'useAddingStatus'],
      [procHooks.useUpdatingStatus, 'useUpdatingStatus'],
      [procHooks.useDeletingStatus, 'useDeletingStatus'],
      [procHooks.useImportingStatus, 'useImportingStatus'],
      [procHooks.useExportingStatus, 'useExportingStatus'],
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
      [
        procHooks.useOnLoadSuccess,
        procHooks.useLoadStop,
        procHooks.useLoadReset,
        'useOnLoadSuccess',
      ],
      [
        procHooks.useOnAddSuccess,
        procHooks.useAddStop,
        procHooks.useAddReset,
        'useOnAddSuccess',
      ],
      [
        procHooks.useOnUpdateSuccess,
        procHooks.useUpdateStop,
        procHooks.useUpdateReset,
        'useOnUpdateSuccess',
      ],
      [
        procHooks.useOnDeleteSuccess,
        procHooks.useDeleteStop,
        procHooks.useDeleteReset,
        'useOnDeleteSuccess',
      ],
      [
        procHooks.useOnImportSuccess,
        procHooks.useImportStop,
        procHooks.useImportReset,
        'useOnImportSuccess',
      ],
      [
        procHooks.useOnExportSuccess,
        procHooks.useExportStop,
        procHooks.useExportReset,
        'useOnExportSuccess',
      ],
    ]
    forTest.forEach((hooks: any[]) => {
      const [hook, dispatcher, resetter, name] = hooks
      it(`should successfully execute ${name}`, async () => {
        const { getByTestId, queryByText } = testOnProcessStopHook(
          name,
          (callback: any) => hook(TestItem, callback),
          () => dispatcher(TestItem),
          () => resetter(TestItem)
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
