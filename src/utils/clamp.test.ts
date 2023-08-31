// utils/clamp.test.ts

import { expect, test } from 'vitest'

import clamp  from './clamp'

test('value below min, returns min', () => {
    const MAX = 1.0
    const MIN = -1.0
    const VALUE = -2.0

    const result = clamp(MIN, VALUE, MAX)

    expect(result).toEqual(MIN)
})

test('value above max, returns max', () => {
    const MAX = 1.0
    const MIN = -1.0
    const VALUE = 2.0

    const result = clamp(MIN, VALUE, MAX)

    expect(result).toEqual(MAX)
})

test('value between min and max, returns value', () => {
    const MAX = 1.0
    const MIN = -1.0
    const VALUE = 0.0

    const result = clamp(MIN, VALUE, MAX)

    expect(result).toEqual(VALUE)
})