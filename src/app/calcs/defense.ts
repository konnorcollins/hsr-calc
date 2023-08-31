// app/calcs/defense.ts

export function calculateEnemyDefenseMultiplier(characterLevel: number, enemyLevel: number)
{
    const defenseMultiplier = (characterLevel + 20) / ((enemyLevel + 20) + (characterLevel + 20))

    return defenseMultiplier
}