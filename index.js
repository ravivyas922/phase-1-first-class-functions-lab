// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    const newArray = [arr[0],arr[1]];
    return newArray;
};

const returnLastTwoDrivers = function(arr){
    const newArray = [arr[arr.length-2],arr[arr.length-1]];
    return newArray;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(fare)
    {
        return fare*num;
    }
}

const fareDoubler = createFareMultiplier(2); 
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arr);
}


