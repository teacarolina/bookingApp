import React from 'react';

function TreatmentInfo({name, price}) {
    return (
        <div className="mt-2">
            <p className="text-sm text-gray-500">{name}</p>
            <p className="text-sm text-gray-500">{price}
                SEK</p>
        </div>
    )
}

export default TreatmentInfo;