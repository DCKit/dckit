import { setItems, setItem, optItem, selectItem } from '../items/actions'
import { itemsReducer } from '../items/reducer'
import { TState } from '../types'

describe('itemsReducer', () => {
  it('should handle initial state', () => {
    const action = { type: '' }
    expect(itemsReducer(void 0, action)).toEqual({})
  })

  describe('for action [setItems]', () => {
    it('should immutable update state', () => {
      const stateBefore: TState = {
        item: {},
        testItem: { items: [] },
      }
      const stateAfter: TState = {
        item: {},
        testItem: {
          items: [
            { id: '1', data: 'testData' },
            { field: 'testField', data: 'testFieldData' },
          ],
          itemIndex: { '1': 0, testField: 1 },
          selectedItems: {},
        },
      }

      const state: TState = itemsReducer(
        stateBefore,
        setItems('testItem', [
          { id: '1', data: 'testData' },
          { field: 'testField', data: 'testFieldData' },
        ])
      )
      expect(state).toEqual(stateAfter)
      expect(state).not.toBe(stateBefore)
      expect(state.item).toBe(stateBefore.item)
      expect(state.testItem).not.toBe(stateBefore.testItem)
      expect(state.testItem.items).not.toBe(stateBefore.testItem.items)
    })
  })

  describe('for action [optItem]', () => {
    it('should immutable update state', () => {
      const stateBefore: TState = {
        item: {},
        testItem: {
          items: [{ id: '1', data: 'testData' }],
        },
      }
      const stateAfter: TState = {
        item: {},
        testItem: {
          optedItemId: '1',
          items: [{ id: '1', data: 'testData' }],
        },
      }

      let state: TState = itemsReducer(stateBefore, optItem('testItem', '1'))
      expect(state).toEqual(stateAfter)
      expect(state).not.toBe(stateBefore)
      expect(state.item).toBe(stateBefore.item)
      expect(state.testItem).not.toBe(stateBefore.testItem)
      expect(state.testItem.items).toBe(stateBefore.testItem.items)

      state = itemsReducer(stateBefore, optItem('testItem', void 0))
      expect(state.testItem.optedItemId).toEqual(void 0)
    })
  })

  describe('for action [setItem]', () => {
    it('should immutable update state', () => {
      const stateBefore: TState = {
        item: {},
        testItem: {
          items: [
            { id: 0, data: {} },
            { id: '1', data: 'testData' },
            { field: 'testField', data: 'testFieldData' },
          ],
          itemIndex: { '0': 0, '1': 1, testField: 2 },
        },
      }
      const stateAfter: TState = {
        item: {},
        testItem: {
          items: [
            { id: 0, data: {} },
            { id: '1', data: 'updated1' },
            { field: 'testField', data: 'updated2' },
          ],
          itemIndex: { '0': 0, '1': 1, testField: 2 },
        },
      }

      let state: TState = itemsReducer(
        stateBefore,
        setItem('testItem', '1', { id: '1', data: 'updated1' })
      )
      state = itemsReducer(
        state,
        setItem('testItem', 'testField', {
          field: 'testField',
          data: 'updated2',
        })
      )
      expect(state).toEqual(stateAfter)
      expect(state).not.toBe(stateBefore)
      expect(state.item).toBe(stateBefore.item)
      expect(state.testItem).not.toBe(stateBefore.testItem)
      expect(state.testItem.items).not.toBe(stateBefore.testItem.items)
      expect(state.testItem.itemIndex).toBe(stateBefore.testItem.itemIndex)
      expect(state.testItem.items[0]).toBe(stateBefore.testItem.items[0])
    })

    it('should append item if item not found', () => {
      let stateBefore: TState = {}
      let stateAfter: TState = {
        testItem: {
          items: [{ id: '1', data: 'testData' }],
          itemIndex: { '1': 0 },
        },
      }
      let state: TState = itemsReducer(
        stateBefore,
        setItem('testItem', '1', { id: '1', data: 'testData' })
      )
      expect(state).toEqual(stateAfter)
      expect(state).not.toBe(stateBefore)

      stateBefore = stateAfter
      stateAfter = {
        testItem: {
          items: [
            { id: '1', data: 'testData' },
            { field: 'testField', data: 'testFieldData' },
          ],
          itemIndex: { '1': 0, testField: 1 },
        },
      }
      state = itemsReducer(
        stateBefore,
        setItem('testItem', 'testField', {
          field: 'testField',
          data: 'testFieldData',
        })
      )
      expect(state).toEqual(stateAfter)
      expect(state).not.toBe(stateBefore)
    })
  })

  describe('for action [selectItem]', () => {
    it('should select item', () => {
      const stateBefore: TState = {
        testItem: {
          items: [
            { id: 0, data: {} },
            { id: '1', data: 'testData' },
            { field: 'testField', data: 'testFieldData' },
          ],
          itemIndex: { '0': 0, '1': 1, testField: 2 },
          selectedItems: {},
        },
      }
      const stateAfter: TState = {
        testItem: {
          items: [
            { id: 0, data: {} },
            { id: '1', data: 'testData' },
            { field: 'testField', data: 'testFieldData' },
          ],
          itemIndex: { '0': 0, '1': 1, testField: 2 },
          selectedItems: { '1': 1, testField: 2 },
        },
      }

      let state: TState = itemsReducer(
        stateBefore,
        selectItem('testItem', '1', true)
      )
      state = itemsReducer(state, selectItem('testItem', 'testField', true))
      expect(state).toEqual(stateAfter)
      expect(state).not.toBe(stateBefore)

      state = itemsReducer(state, selectItem('testItem', '1', false))
      state = itemsReducer(state, selectItem('testItem', 'testField', false))
      expect(state).toEqual(stateBefore)
      expect(state).not.toBe(stateBefore)
      expect(state.testItem.selectedItems).toEqual({})
      expect(state.item).toBe(stateBefore.item)
      expect(state.testItem).not.toBe(stateBefore.testItem)
      expect(state.testItem.items).toBe(stateBefore.testItem.items)
      expect(state.testItem.itemIndex).toBe(stateBefore.testItem.itemIndex)
    })
  })
})
