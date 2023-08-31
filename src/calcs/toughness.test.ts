// calcs/toughness.test.ts

import { expect, test } from 'vitest'

import { calculateToughnessMultiplier } from './toughness'

test('has toughness, multiplier is 0.9', () => {
    const HAS_TOUGHNESS = true
    const EXPECTED_MULTIPLIER = 0.9

    const result = calculateToughnessMultiplier(HAS_TOUGHNESS)
    expect(result).toEqual(EXPECTED_MULTIPLIER)
})

test('broken, multiplier is 1.0', () => {
    const HAS_TOUGHNESS = false
    const EXPECTED_MULTIPLIER = 1.0

    const result = calculateToughnessMultiplier(HAS_TOUGHNESS)

    expect(result).toEqual(EXPECTED_MULTIPLIER)
})


