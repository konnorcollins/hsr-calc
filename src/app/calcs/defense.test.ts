// app/calcs/defense.test.ts

import { expect, test } from 'vitest'

import { calculateEnemyDefenseMultiplier } from './defense'

test('same level, multiplier is 0.5', () => {
    const CHARACTER_LEVEL = 50
    const ENEMY_LEVEL = 50
    const EXPECTED_MULTIPLIER = 0.5

    const result = calculateEnemyDefenseMultiplier(CHARACTER_LEVEL, ENEMY_LEVEL)

    expect(result).toEqual(EXPECTED_MULTIPLIER)
})