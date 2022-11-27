const { AssertionError } = require("chai");

// Code your solution in this file!
function returnFirstTwoDrivers(arr)
  {
    let newArray = arr.slice(0,2);
    return newArray;
  };
  function returnLastTwoDrivers(arr)
  {
      let length =arr.length;
      let newArray = arr.slice(length-2,length);
      return newArray;
    };
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num)
{
    function fareCalculator(fare)
    {
        return fare*num;
    }
}

function fareDoubler()
{

}
function fareTripler()
{

}
function selectDifferentDrivers()
{

}