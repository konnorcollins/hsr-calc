import headSlotIcon from '../../assets/Relic_Head_Slot.webp'
import handsSlotIcon from '../../assets/Relic_Hands_Slot.webp'
import bodySlotIcon from '../../assets/Relic_Body_Slot.png'
import feetSlotIcon from '../../assets/Relic_Feet_Slot.webp'
import sphereSlotIcon from '../../assets/Relic_Sphere_Slot.png'
import ropeSlotIcon from '../../assets/Relic_Rope_Slot.webp'

import { RELIC_SLOT } from '../../common/relic_slots'


export function getRelicSlotIcon(slot: RELIC_SLOT) {
    switch(slot) {
        case(RELIC_SLOT.HEAD):
            return headSlotIcon
        case(RELIC_SLOT.HANDS):
            return handsSlotIcon
        case(RELIC_SLOT.BODY):
            return bodySlotIcon
        case(RELIC_SLOT.FEET):
            return feetSlotIcon
        case(RELIC_SLOT.SPHERE):
            return sphereSlotIcon
        case(RELIC_SLOT.ROPE):
            return ropeSlotIcon
    }
}