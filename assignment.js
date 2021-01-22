// kilometer to meter:
function kilometerToMeter(km) {
  if (km > 0) {
    var meter = km * 1000;
    return meter;
  } else {
    return "number is invalid";
  }
}
var meterIs = kilometerToMeter(4);
console.log(meterIs);

// A budget calculator:

function budgetCalculator(watch, phone, laptop) {
  if (watch > 0 && phone > 0 && laptop > 0) {
    totalAmount = watch * 50 + phone * 100 + laptop * 500;
    return totalAmount;
  } else {
    return "your input is invalid";
  }
}
totalAmountIs = budgetCalculator(2, 8, 2);
console.log(totalAmountIs);

// hotel cost count

function hotelCost(day) {
  var totalCost = 0;
  if (day <= 10) {
    totalCost = day * 100;
    return totalCost;
  } else if (day <= 20) {
    var firstTenDays = 100 * 10;
    var remainingDay = day - 10;
    var remainingDayCost = remainingDay * 80;
    totalCost = firstTenDays + remainingDayCost;
    return totalCost;
  } else {
    var firstTenDays = 100 * 10;
    var secondTenDays = 80 * 10;
    var remainingDay = day - 20;
    var remainingDayCost = remainingDay * 50;
    totalCost = firstTenDays + secondTenDays + remainingDayCost;
    return totalCost;
  }
}
var totalMoney = hotelCost(34);
console.log(totalMoney);

// mega friend string length

function megaFriend(array) {
  var nameOfFriend = array;
  if (array == "") {
    return "error name.";
  }
  var maxName = nameOfFriend[0];
  for (i = 0; i < nameOfFriend.length; i++) {
    var element = nameOfFriend[i];
    if (element.length > maxName.length) {
      maxName = element;
    }
  }
  return maxName;
}
var largestName = megaFriend();
console.log(largestName);
