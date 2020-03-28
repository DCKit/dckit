import { _get } from '../utils'

describe('utils', () => {
  it('_get props from object', () => {
    expect(_get({}, '')).toBeUndefined()
    expect(_get({ a: 1 }, 'a')).toEqual(1)
    expect(_get({ a: 1 }, 'b')).toBeUndefined()
    expect(_get({ a: { b: 1 } }, 'a.b')).toEqual(1)
    expect(_get({ a: { b: 1 } }, 'a.b.c', 2)).toBeUndefined()
  })
})
