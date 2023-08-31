// app/calcs/resistance.test.ts

import { expect, test } from 'vitest'

import { calculateEnemyResistanceMultiplier } from './resistance'


test('resistance multiplier can be no less than -100%', () => {
    const RESISTANCE = 5.0
    const RESISTANCE_PENETRATION = 0.0
    const EXPECTED_MULTIPLIER = -1.0

    const result = calculateEnemyResistanceMultiplier(RESISTANCE, RESISTANCE_PENETRATION)

    expect(result).toEqual(EXPECTED_MULTIPLIER)
})

test('resistance multiplier can be no greater 90%', () => {
    const RESISTANCE = 0.0
    const RESISTANCE_PENETRATION = 0.0
    const EXPECTED_MULTIPLIER = 0.9

    const result = calculateEnemyResistanceMultiplier(RESISTANCE, RESISTANCE_PENETRATION)

    expect(result).toEqual(EXPECTED_MULTIPLIER)
})

test('20% RES, multiplier is 0.8', () => {
    const RESISTANCE = 0.2
    const RESISTANCE_PENETRATION = 0.0
    const EXPECTED_MULTIPLIER = 0.8

    const result = calculateEnemyResistanceMultiplier(RESISTANCE, RESISTANCE_PENETRATION)

    expect(result).toEqual(EXPECTED_MULTIPLIER)
})