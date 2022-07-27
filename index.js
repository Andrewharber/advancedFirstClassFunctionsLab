const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2) 
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (a) { 
    return function fareMultiplier(fare)  {return fare * a}
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers,funct){
    /*if (funct === returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);}
    else /*if (funct === returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)}*/
    return funct(drivers)
}