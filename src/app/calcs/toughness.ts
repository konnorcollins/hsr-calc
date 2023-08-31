// app/calcs/toughness.ts

export function calculateToughnessMultiplier(hasToughness: boolean)
{
    let toughnessMultiplier = 1.0 - (hasToughness ? 0.1 : 0.0)
    return toughnessMultiplier
}