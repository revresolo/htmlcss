function convertYear(year) {
    if (year === "Invalid") {
      return "Invalid";
    }
    var romanNumerals = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    };
    var result = 0;
    for (var i = 0; i < year.length; i++) {
      var currentChar = year[i];
      var currentValue = romanNumerals[currentChar];
      if (i + 1 < year.length && romanNumerals[year[i + 1]] > currentValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
    }
    return result;
  }
  
  function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
      return "No Data";
    }
    var longestDynasty = "";
    var longestDynastyYear = 0;
    for (var i = 0; i < dynastyReign.length; i++) {
      var currentDynasty = dynastyReign[i][0];
      var currentYear = convertYear(dynastyReign[i][1]);
      if (currentYear > longestDynastyYear) {
        longestDynastyYear = currentYear;
        longestDynasty = currentDynasty;
      }
    }
    return longestDynasty;
  }