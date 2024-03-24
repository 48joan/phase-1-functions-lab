// Code your solution in this file!
//using math.abs to make the distance value a positive number
function distanceFromHqInBlocks(blocks){
    const distance = Math.abs(blocks - 42)
    return distance
  }
  const dist1 = distanceFromHqInBlocks(43)
  const dist2 = distanceFromHqInBlocks(50)
  const dist3 = distanceFromHqInBlocks(34)
  console.log(dist1)
  console.log(dist2)
  console.log(dist3)

  
  function distanceFromHqInFeet(blocks) {
    //we convert each block to feet 
    // we take each block to be 264 feet
    const blockDistanceInFeet = (blocks - 42) * 264
    const distanceInFeet = Math.abs(blockDistanceInFeet)
    return distanceInFeet
}
const feet1 = distanceFromHqInFeet(43)
const feet2 = distanceFromHqInFeet(50)
const feet3 = distanceFromHqInFeet(34)
console.log(feet1)
console.log(feet2)
console.log(feet3)

function distanceTravelledInFeet(start, end) {
    const blockDistanceInFeet = Math.abs((end - start) * 264)
    return blockDistanceInFeet;
}
const distFeet1= distanceTravelledInFeet(43, 48)
const distFeet2= distanceTravelledInFeet(50, 60)
const distFeet3= distanceTravelledInFeet(34, 28)
console.log(distFeet1)
console.log(distFeet2)
console.log(distFeet3)

function calculatesFarePrice(startBlock, endBlock){
  const blockDistance = Math.abs(endBlock - startBlock);
  const feetTravelled = blockDistance * 264;
  if (feetTravelled > 2500) {
    return "cannot travel that far";
  }
  else if (feetTravelled <= 400) {
    return 0;
  }
  else if (feetTravelled > 400 && feetTravelled <= 2000) {
    return (feetTravelled - 400) * 0.02;
  }else{
  return 25;
}
}
const fare1 = calculatesFarePrice(43, 44)
const fare2 = calculatesFarePrice(34, 32)
const fare3 = calculatesFarePrice(50, 58)
const fare4 = calculatesFarePrice(34, 24)

console.log(fare1) //gives customer free ride
console.log(fare2) //charges 2 cents per foot
console.log(fare3) //charges 25 dollars
console.log(fare4) //cannot travel far
