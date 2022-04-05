function distanceFromHqInBlocks (streetNumber) {
    return Math.abs(streetNumber - 42);
}

function distanceFromHqInFeet (streetNumber) {
    const distance = distanceFromHqInBlocks(streetNumber) * 264;
    return distance;
}

function distanceTravelledInFeet (startBlock, endBlock) {
    return (Math.abs(endBlock - startBlock) * 264);
    
}


function calculatesFarePrice (startBlock, endBlock) {
    let distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
    if (distanceInFeet < 400) {
        return 0;
    } else if (distanceInFeet < 2000 ) {
        return (distanceInFeet - 400 ) / 50;
    } else if (distanceInFeet < 2500 ) {
        return 25;
    } else if (distanceInFeet > 2500 ) {
        return 'cannot travel that far';
    }
}