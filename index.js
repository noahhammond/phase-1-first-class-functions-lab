const returnFirstTwoDrivers = function(array) {return [...array.slice(0, 2)]};

const returnLastTwoDrivers = function(array) {return [...array.slice(2)]};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function() {
        return fare * 5
    }
};

const fareMultiplier = createFareMultiplier(2)

function fareDoubler(fareMultiplier) {
    return (fareMultiplier * 2) 
}

const fareTriple = createFareMultiplier(12);

function fareTripler(fareTripler) {
    return (fareTripler * 3)
}

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}