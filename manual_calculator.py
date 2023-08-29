# HSR damage calc script based off of the following sources:
#       Keqing Mains: https://srl.keqingmains.com/combat-mechanics/damage/damage-formula
#       Arkku's doc: https://docs.google.com/document/d/e/2PACX-1vQ9M7q5jLz9DKkTRlsGiB8RGYyPQyhShbuTbrVPQ7-Ke4_U787MfWzr2NjY-KrQo5Ota4Lj3JrFyge9/pub

# Change the values listed under 'STAT CONFIG' to your needs, then run the script


import functools

def clamp(minimum, x, maximum):
    return max(minimum, min(x, maximum))


def calc_stat(char_stat: int, lc_stat: int, percent_bonus: float, flat_bonus: int):
    final_stat = (char_stat + lc_stat) * (1.0 + percent_bonus) + flat_bonus

    final_stat = round(final_stat)

    return final_stat

def calc_base_damage(skill_multiplier: float, 
                     scaling_attribute: int, 
                     extra_multiplier: float = 0, 
                     extra_flat_damage: int = 0):
    '''Calculates the base DMG of a skill.

    Formula:
        Base DMG = (skill_multiplier + extra_multiplier) * scaling_attribute + extra_flat_damage

    Params:
        skill_multiplier (float): percentage value listed on the skill e.g. 'deal damage equal to 50%'
        scaling_attribute (int): attribute the skill scales with, such as ATK or DEF
        extra_multiplier (float): percentage granted by conditional effects, e.g. Dan Heng's ultimate
        extra_damage (int): additional flat damage
    '''

    base_damage = round((skill_multiplier + extra_multiplier) * scaling_attribute + extra_flat_damage)

    return base_damage


def calc_damage_percent_multiplier(multipliers: list[float]):
    '''

    Formula:
        DMG% Multiplier = 100% + Elemental DMG% + All Type DMG% + DoT DMG% + Other DMG%
    '''

    damage_percent_multiplier = functools.reduce(
        lambda a, b: a + b, 
        multipliers, 
        1.0)
    
    return damage_percent_multiplier

def calc_defense_multiplier(defense_value: int, 
                            attacker_level: int):
    '''

    Formula:
        DEF Multiplier = 100% - [DEF / (DEF + 200 + 10 * Attacker Level)]
    '''

    defense_multiplier = 1.0 - (defense_value / (defense_value + 200 + 10 * attacker_level))

    return defense_multiplier

def calc_defense_value(base_defense: int, 
                       defense_percentage: float = 0.0, 
                       defense_reduction: float = 0.0, 
                       defense_ignore: float = 0.0, 
                       extra_flat_defense: int = 0):
    '''

    Formula:
        DEF = Base DEF * (100% + DEF% - (DEF Reduction + DEF Ignore)) + Flat DEF
    '''

    defense = base_defense * (1.0 + defense_percentage - (defense_reduction + defense_ignore)) + extra_flat_defense
    if defense < 0:
        defense = 0
    return defense

def calc_resistance_multiplier(resistance_percentage: float, 
                               resistance_penetration_percent: float = 0.0):
    '''

    Formula:
        RES Multiplier = 100% - (RES% - RES PEN%)
        Cannot be less than -100%
        Cannot be greater than 90%
    '''

    resistance_multiplier = 1.0 - (resistance_percentage - resistance_penetration_percent)

    # clamp
    resistance_multiplier = clamp(-1.0, resistance_multiplier, 0.9)

    return resistance_multiplier

def calc_damage_taken_multiplier(elemental_damage_taken_percent: float = 0.0,
                                 all_type_damage_taken_percent: float = 0.0):
    '''

    Formula:
        DMG Taken Multiplier = 100% + Elemental DMG Taken% + All Type DMG Taken%
        Cannot be greater than 350%
    '''
    damage_taken_multiplier = 1.0 + elemental_damage_taken_percent + all_type_damage_taken_percent
    damage_taken_multiplier = clamp(0.0, damage_taken_multiplier, 3.5)
    return damage_taken_multiplier

def calc_universal_damage_reduction_multiplier(damage_reduction_percentage: list[float]):
    '''

    Formula:
        Universal DMG Reduction Multiplier = 100% * (1 - DMG Reduction_1) * (1 - DMG Reduction_2) * ...
    '''

    universal_damage_reduction_multiplier = functools.reduce(
        lambda a, b: a * (1.0 - b), 
        damage_reduction_percentage, 
        1.0)
    
    return universal_damage_reduction_multiplier

def calc_weaken_multiplier(weaken_percent: float = 0.0):
    '''

    Formula:
        Weaken Multiplier = 100% - Weaken%
    '''

    weaken_multiplier = 1.0 - weaken_percent

    return weaken_multiplier

def calc_outgoing_damage(base_damage: int, multipliers: list[float]):
    '''
    Formula:
        Outgoing DMG = Base DMG * DMG% Multiplier * DEF Multiplier * RES Multiplier * DMG Taken Multiplier * Universal DMG Reduction Multiplier * Weaken Multiplier
    '''

    outgoing_damage = functools.reduce(
        lambda a, b: a * b,
        multipliers,
        base_damage
    )

    # handle floating point error
    outgoing_damage = round(outgoing_damage)

    return outgoing_damage
    

if __name__ == "__main__":
    # STAT CONFIG
    # character move
    atk_multi = 0.6

    # character stat
    atk_attrib = 1062

    # literally anything
    lightning_dmg_boost = 0.258
    musket_4p = 0.1
    dmg_increase_multis = [lightning_dmg_boost, musket_4p]

    # enemy basetype?
    base_def = 700

    # character stat
    attacker_level = 50

    # base enemy res (neither weak nor resistant)
    # can be 0 if weak or .4 if resistant
    res_perc = 0.2

    # toughness (break bar) is active
    # broken is 0.0
    # unbroken is 0.1
    not_broken_reduction = 0.1

    # base damage
    base_dmg = calc_base_damage(skill_multiplier=atk_multi, scaling_attribute=atk_attrib)
    print(f'BASE DMG\natk: {atk_attrib}, multi: {atk_multi}\nresult: {base_dmg}\n')

    # damage percent multiplier

    dmg_perc_multi = calc_damage_percent_multiplier(dmg_increase_multis)
    print(f'DMG INCREASE MULTIPLIER\n4p musketeer +10%, lightning dmg boost +25.8%\nresult: {dmg_perc_multi: .2%}\n')

    # defense multiplier
    def_value = calc_defense_value(base_def)
    def_multi = calc_defense_multiplier(def_value, attacker_level)
    print(f'DEF MULTIPLIER\nresult: {def_multi: .2%}\n')

    # resistance multiplier
    res_multi = calc_resistance_multiplier(res_perc)
    print(f'RES MULTIPLIER\nres%: {res_perc}\nresult: {res_multi: .2%}\n')

    # damage taken multiplier
        # nah assume regular case
    dmg_taken_multi = calc_damage_taken_multiplier()
    print(f'DMG TAKEN MULTIPLIER\ndefault\nresult: {dmg_taken_multi: .2%}\n')

    # universal dmg reduction multiplier
    universal_dmg_red_multi = calc_universal_damage_reduction_multiplier([not_broken_reduction])
    print(f'UNIVERSAL DAMAGE REDUCTION MULTIPLIER\nnot broken: {not_broken_reduction: 0.2%}\nresult: {universal_dmg_red_multi: 0.2%}\n')

    # weaken multiplier
        # assume no weaken effects
    weaken_multi = calc_weaken_multiplier()
    print(f'WEAKEN MULTIPLIER\ndefault\nresult: {weaken_multi: .2%}\n')

    # find outgoing damage
    # 0.5 is the def_multi, which is currently busted
    outgoing_damage = calc_outgoing_damage(base_dmg, [dmg_perc_multi, def_multi, res_multi, dmg_taken_multi, universal_dmg_red_multi, weaken_multi])
    print(f'OUTGOING DAMAGE: {outgoing_damage}')