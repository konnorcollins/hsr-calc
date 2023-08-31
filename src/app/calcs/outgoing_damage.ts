// app/calcs/outgoing_damage.ts

export function calculateOutgoingDamage(
    baseDamage: number, 
    critMultiplier: number = 1.0, 
    damageBonusMultiplier: number = 1.0,
    defenseMultiplier: number,
    resistanceMultiplier: number,
    damageTakenMultiplier: number,
    toughnessMultiplier: number)
{
    const outgoingDamage = baseDamage * critMultiplier * damageBonusMultiplier * defenseMultiplier * resistanceMultiplier * damageTakenMultiplier * toughnessMultiplier
    return outgoingDamage
}