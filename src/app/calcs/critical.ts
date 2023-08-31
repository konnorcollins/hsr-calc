// app/calcs/critical.ts
// formulas sourced from https://srl.keqingmains.com/combat-mechanics/damage/damage-formula

import clamp from "../utils/clamp";

export function calculateAverageCrit(critRate: number, critDamageMulti: number): number
{
    const averageCrit = 1.0 + clamp(0.0, critRate, 1.0) * critDamageMulti
    return averageCrit
}

export function calculateCritMultiplier(isCrit: boolean, critDamageMulti: number): number
{
    if (!(isCrit))
    {
        return 1.0
    }

    return 1.0 + critDamageMulti
}