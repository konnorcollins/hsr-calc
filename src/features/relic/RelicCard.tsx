// features/relic/RelicCard.tsx

import { Relic } from './relic-type'

import tempImage from '../../assets/Relic_Space_Sealing_Station.webp'

function RelicCard(relic: Relic) {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="" src={tempImage}></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-gray-100 mb-2">Relic</div>
                <p className="text-gray-400 text-base">
                    {relic.slot} : {relic.set}
                </p>
            </div>
        </div>    
    )
}


export default RelicCard