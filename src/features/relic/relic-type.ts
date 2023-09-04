import { RELIC_SLOT } from "../../common/relic_slots"
import { STAT_TYPE } from "../../common/stat_types"

export interface Relic {
    slot: RELIC_SLOT,
    set: string,
    main_stat: STAT_TYPE
    main_stat_value: number
}