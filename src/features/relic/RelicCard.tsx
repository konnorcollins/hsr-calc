// features/relic/RelicCard.tsx

import { Relic } from './relic-type'

import tempImage from '../../assets/Relic_Space_Sealing_Station.webp'
import { getRelicSlotIcon } from './relic-image'

function RelicCard(relic: Relic) {

    const slotIcon = getRelicSlotIcon(relic.slot)

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="" src={tempImage}></img>
            <div className="px-6 py-4">
                <img className="" src={slotIcon}></img>
                <div className="font-bold text-xl text-gray-100 mb-2">{relic.set}</div>
                <p className="text-gray-400 text-base">
                </p>
            </div>
        </div>    
    )
}


export default RelicCard