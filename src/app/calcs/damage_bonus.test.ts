// app/calcs/damage_bonus.test.ts

import { expect, test } from 'vitest'

import { calculateDamageBonusMultiplier } from './damage_bonus'

test('no bonuses, multiplier is 1.0', () => {
    const BONUSES: Array<number> = []
    const EXPECTED_MULTIPLIER = 1.0

    const result = calculateDamageBonusMultiplier(BONUSES)

    expect(result).toEqual(EXPECTED_MULTIPLIER)
})

test('bonus 20%, multiplier is 1.2', () => {
    const BONUSES: Array<number> = [0.2]
    const EXPECTED_MULTIPLIER = 1.2

    const result = calculateDamageBonusMultiplier(BONUSES)

    expect(result).toEqual(EXPECTED_MULTIPLIER)
})