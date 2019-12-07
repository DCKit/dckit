# dck-store

[![build](https://github.com/ambroseus/dck-store/workflows/build/badge.svg)](https://github.com/ambroseus/dck-store/actions?query=workflow%3Abuild)
[![coverage](https://codecov.io/gh/ambroseus/dck-store/branch/master/graph/badge.svg)](https://codecov.io/gh/ambroseus/dck-store/branch/master)
[![DeepScan grade](https://deepscan.io/api/teams/6331/projects/8291/branches/95993/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=6331&pid=8291&bid=95993)&nbsp;&nbsp;&nbsp;&nbsp;
[![publish](https://github.com/ambroseus/dck-store/workflows/publish/badge.svg)](https://github.com/ambroseus/dck-store/actions?query=workflow%3Apublish)
[![npm latest](https://img.shields.io/npm/v/@dckit/store/latest?label=npm&style=flat)](https://www.npmjs.com/package/@dckit/store)
[![npm downloads](https://img.shields.io/npm/dm/@dckit/store.svg)](https://www.npmjs.com/package/@dckit/store)

[![dependencies](https://david-dm.org/ambroseus/dck-store/status.svg)](https://david-dm.org/ambroseus/dck-store)
[![devDependencies](https://david-dm.org/ambroseus/dck-store/dev-status.svg)](https://david-dm.org/ambroseus/dck-store?type=dev)

Redux-based framework to get rid of CRUD-related boilerplate

inspired by [DCK (**D**ashboard **C**onstruction **K**it)](https://agilevisioncompany.github.io/dck/)

### toolset

- TypeScript 3.7 [(with optional chaining & nullish coalescing)](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html)
- [`redux`](https://redux.js.org) [`redux-toolkit`](https://redux-toolkit.js.org) [`react-redux hooks`](https://react-redux.js.org/next/api/hooks) [`immer`](https://immerjs.github.io/immer) [`redux-saga`](https://redux-saga.js.org) [`redux-saga-tester`](https://github.com/wix/redux-saga-tester) [`tsdx`](https://github.com/jaredpalmer/tsdx)
- CI: [github actions](https://github.com/features/actions)

### complementary projects

[`dck-ui`](https://github.com/ambroseus/dck-ui) [`dck-test-app`](https://github.com/ambroseus/dck-test-app)

### usage example

#### demo

[codesandbox](https://codesandbox.io/s/test-dck-store-fr3ym)

#### component

```tsx
import React from 'react'
import {
  useItems,
  useOptedItem,
  useLoading,
  useLoadItems,
  useSetItems,
} from '@dckit/store'

import { TestItem } from '../items'

export const Items: React.FC = () => {
  const items: any[] = useItems(TestItem)
  const loading = useLoading(TestItem)
  const load = useLoadItems(TestItem)
  const setItems = useSetItems(TestItem)
  const optedItem = useOptedItem(TestItem)

  return (
    <>
      <button onClick={() => load({ optedItemId: 3 })} disabled={loading}>
        {loading ? 'loading...' : 'load items'}
      </button>{' '}
      <button onClick={() => setItems([])}>clear items</button>
      <pre>items: {JSON.stringify(items, null, 2)}</pre>
      <pre>opted item: {JSON.stringify(optedItem, null, 2)}</pre>
    </>
  )
}
```

#### saga

```ts
import { all, takeLatest } from 'redux-saga/effects'
import { Process, isAction } from '@dckit/store'
import { testLoadFetcher } from '../fetchers'
import { TestItem } from '../items'

export function* rootSaga() {
  yield all([takeLatest(isAction.Load(TestItem), loadItemsSaga)])
}

function* loadItemsSaga(action: any) {
  const proc = new Process.Load(TestItem)
  yield proc.start()
  try {
    yield proc.fetch()
    yield proc.setItems(proc.data)
    yield proc.optItem(action.meta.options.optedItemId)
    yield proc.stop()
  } catch (e) {
    yield proc.fail(e)
  }
}
```

#### store

```ts
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { dckReducer } from '@dckit/store'
import { rootSaga } from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
const reducer = combineReducers({ dck: dckReducer })

export const store = configureStore({
  reducer,
  middleware,
  preloadedState: {},
})

sagaMiddleware.run(rootSaga)
```
