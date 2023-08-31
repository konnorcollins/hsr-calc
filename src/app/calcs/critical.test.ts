// app/calcs/critical.test.ts

import { expect, test,  } from 'vitest'

import { calculateCritMultiplier } from './critical'


test('non-crit, multiplier is 1.0', () => {
    const HAS_CRIT = false
    const CRIT_DAMAGE = 0.2
    const EXPECTED_MULTIPLIER = 1.0

    const result = calculateCritMultiplier(HAS_CRIT, CRIT_DAMAGE)

    expect(result).toEqual(EXPECTED_MULTIPLIER)
})

test('crit, 0.2 crit dmg, total multiplier is 1.2', () => {
    const HAS_CRIT = true
    const CRIT_DAMAGE = 0.2
    const EXPECTED_MULTIPLIER = 1.2

    const result = calculateCritMultiplier(HAS_CRIT, CRIT_DAMAGE)
    
    expect(result).toEqual(EXPECTED_MULTIPLIER)
})