// app/calcs/resistance.ts

import clamp from "../utils/clamp"

export function calculateEnemyResistanceMultiplier(
    resistance: number, 
    resistancePenetration: number)
{
    let enemyResMulti = 1.0 - (resistance - resistancePenetration)
    enemyResMulti = clamp(-1.0, enemyResMulti, 0.9)
    return enemyResMulti
}