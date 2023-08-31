// app/calcs/damage_bonus.ts

export function calculateDamageBonusMultiplier(
    damageBonuses: Array<number>): number
{
    const INITIAL_MULTIPLIER = 1.0
    let dmgBonusMulti = damageBonuses.reduce((prev, multi) => prev + multi, INITIAL_MULTIPLIER)
    
    return dmgBonusMulti
}