// Code your solution in this file!
const returnFirstTwoDrivers =
function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = 
function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ] 

function createFareMultiplier(multiplier) {
    return function(fare){
        return fare * multiplier;
    };
}

const fareDoubler =  
    createFareMultiplier(2);

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, selectionfunction){
    return selectionfunction(drivers);
}