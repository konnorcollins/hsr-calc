// features/relic/relic-generator.ts

import { RELIC_SET } from "../../common/relic_sets";
import { RELIC_SLOT } from "../../common/relic_slots";
import { STAT_TYPE } from "../../common/stat_types";
import { Relic } from "./relic-type";

export function generateBasicRelic(slot: RELIC_SLOT, set: RELIC_SET, main_stat: STAT_TYPE, main_stat_value: number): Relic
{
    const relic: Relic = {
        slot: slot,
        set: set,
        main_stat: main_stat,
        main_stat_value: main_stat_value
    }

    return relic
}

