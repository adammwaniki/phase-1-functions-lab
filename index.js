// #1. 
//we start by giving the function a name
//the function only needs one parameter because all we're doing is checking the distance covered against our reference point i.e. HQ
//we have to use math.abs because some locations may be on a street with a lower value and we need it to return absolute values
const scuberHQ = 42
function distanceFromHqInBlocks(pickupLocation ) {
    return Math.abs(scuberHQ - pickupLocation);
}

//#2
//we'll use the function in #1 and make it return values converted to feet
//make an equation for conversion
//1 block = 264 feet
function distanceFromHqInFeet(pickupLocation) {
    return Math.abs (distanceFromHqInBlocks(pickupLocation) * 264);
}

//#3 
//calculates the distance in feet for a journey's between point a to point b
//point a is the pickupLocation and point b is the destination
function distanceTravelledInFeet(pickupLocation,destination) {
    return Math.abs ((pickupLocation - destination) * 264);
}

//#4
//calculates the fare price based om the distance travelled in feet
//returns if else statements like in the first lab about scuber but with some modifications
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start,destination) <= 400) {
        return 0;
      } else if ( distanceTravelledInFeet(start,destination) <= 2000) {
        return (((Math.abs(destination - start) *264)-400)*0.02);
      } else if (distanceTravelledInFeet(start,destination) <= 2500) {
        return 25;
      } else {
        return 'cannot travel that far';
      }
}
