// common/state_types.ts

// These are 'stat' definitions you would see on a lightcone, or relic.

export enum STAT_TYPES {
    HP_FLAT,
    HP_PERCENT,
    
    ATK_FLAT,
    ATK_PERCENT,

    DEF_FLAT,
    DEF_PERCENT,

    SPD_FLAT,

    CRIT_RATE_PERCENT,
    CRIT_DMG_PERCENT,

    OUTGOING_HEALING_BOOST_PERCENT,

    EFFECT_HIT_RATE_PERCENT,
    EFFECT_RES_PERCENT,
    BREAK_EFFECT_PERCENT,

    ENERGY_REGEN_RATE_PERCENT,

    PHYSICAL_DMG_BOOST_PERCENT,
    FIRE_DMG_BOOST_PERCENT,
    WIND_DMG_BOOST_PERCENT,
    ICE_DMG_BOOST_PERCENT,
    LIGHTNING_DMG_BOOST_PERCENT,
    QUANTUM_DMG_BOOST_PERCENT,
    IMAGINARY_DMG_BOOST_PERCENT,
}