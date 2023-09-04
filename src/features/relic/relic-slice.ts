import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RELIC_SLOT } from '../../common/relic_slots'
import { STAT_TYPE } from '../../common/stat_types'

import { Relic } from './relic-type'


interface RelicState {
    inventory: { [id: number]: Relic }
}

const initialState: RelicState = {
    inventory: [],
}

const dummyRelic: Relic = {
    slot: RELIC_SLOT.SPHERE,
    set: "Sealing Space Station",
    main_stat: STAT_TYPE.QUANTUM_DMG_BOOST_PERCENT,
    main_stat_value: 0.48
}

// TODO: find a way to generate a random hash/id for each relic
const relicSlice = createSlice({
    name: 'relics',
    initialState,
    reducers: {
        insertDummy(state) {
            state.inventory[0] = dummyRelic
        },

        insertRelic(state, action: PayloadAction<Relic>) {
            state.inventory[0] = action.payload
        },

        removeRelic(state, action: PayloadAction<number>) {
            if (state.inventory[action.payload])
            {
                delete state.inventory[action.payload]
            }
        }
    }

})

export const { insertDummy, insertRelic, removeRelic } = relicSlice.actions;
export default relicSlice.reducer; 