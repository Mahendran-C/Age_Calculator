// steps to calculate age
// 1. First, calculate the number of full years by subtracting the birth year from the current year.(ex 2024 - 2002 = 22)
// 2. Next, calculate the number of full months by subtracting the birth month from the current month. If the current month is less than the birth month, then subtract 1 from the number of full years and add 12 to the current month to compensate. Then do something (current month - birth month) ex (current month feb(2) birth month(5) then 22 -1 = 21,  full months 2 + 12 =14 months 14-5 = 9 )
// 3. Just as in Step 2, we calculate the number of days as well using the current date - birth date. But here, if current date < birth date, then subtract 1 from the number of full months and add 30/31/28/29 to the current date depending upon the number of days present in the previous month of the current month.
// 4.  Finally, the age calculator expresses the age in years, months and days.


const ageCalculator = () => {
  let year = document.getElementById('year')
  let month = document.getElementById('month')
  let day = document.getElementById('day')
  
  var userInput = document.getElementById("dob").value;
  var dateArr = userInput.split("-");
  var errMsg = document.getElementById("errMsg");
  // console.log(dateArr)
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth() + 1;
  var currentDay = currentDate.getDate();

  // console.log(currentMonth, typeof currentMonth);

  let birthYear = Number(dateArr[0]);
  let birthMonth = Number(dateArr[1]);
  let birthDay = Number(dateArr[2]);
  // console.log(birthYear, birthMonth, birthDay);

  function inValidDate() {
    errMsg.style.display = "inline-block";
    errMsg.innerHTML = "Error: Invalid date";
    errMsg.style.color = "darkred";

    year.innerHTML = '--';
    month.innerHTML = '--';
    day.innerHTML = '--';
  }

  if(dateArr[0] === ''){
    inValidDate()
  }else{
    if (birthYear > currentYear ) {
      inValidDate();
    } else if (birthYear == currentYear && birthMonth > currentMonth) {
      inValidDate();
    } else if (
      birthYear == currentYear &&
      birthMonth == currentMonth &&
      birthDay > currentDay
    ) {
      inValidDate();
    } else {
      errMsg.style.display = "none";
      // console.log('valid')
      var fullYear = currentYear - birthYear;
      var fullMonth;
      var fullDay;
      if (currentMonth < birthMonth) {
        fullYear -= 1;
        fullMonth = currentMonth + 12;
        fullMonth = fullMonth - birthMonth;
        // console.log(fullYear, fullMonth);
      } else {
        fullMonth = currentMonth - birthMonth;
        // console.log(fullYear, fullMonth);
      }
      if (currentDay < birthDay) {
        if (currentMonth === birthMonth) {
          fullMonth = 11;
          fullYear -= 1;
        } else {
          fullMonth -= 1;
        }
        // console.log("it works", currentMonth);
        if (
          currentMonth - 1 === 1 ||
          currentMonth - 1 === 3 ||
          currentMonth - 1 === 5 ||
          currentMonth - 1 === 7 ||
          currentMonth - 1 === 8 ||
          currentMonth - 1 === 10 ||
          currentMonth - 1 === 12
        ) {
          currentDay += 31;
          fullDay = currentDay - birthDay;
          // console.log("2.it works", currentMonth);
        } else if (
          currentMonth - 1 === 4 ||
          currentMonth - 1 === 6 ||
          currentMonth - 1 === 9 ||
          currentMonth - 1 === 11
        ) {
          currentDay += 30;
          fullDay = currentDay - birthDay;
          // console.log("3.it works");
        } else if (currentMonth - 1 === 2) {
          if (birthYear % 4 == 0) {
            currentDay += 29;
            fullDay = currentDay - birthDay;
            // console.log("4.it works");
          } else {
            currentDay += 28;
            fullDay = currentDay - birthDay;
            // console.log("5.it works");
          }
        }
      } else {
        fullDay = currentDay - birthDay;
        // console.log("6.it works");
      }
      year.innerHTML = fullYear;
      month.innerHTML = fullMonth;
      day.innerHTML = fullDay;
      // console.log(fullYear, fullMonth, fullDay);
    }
  }

};
