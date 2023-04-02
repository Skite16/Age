const inputDay = document.querySelector(".inputDay");
const inputMonth = document.querySelector(".inputMonth");
const inputYear = document.querySelector(".inputYear");
const oDay = document.querySelector(".outputDay");
const oMonth = document.querySelector(".outputMonth");
const oYear = document.querySelector(".outputYear");
const arrow = document.querySelector(".circle");

let getAge = (dobDate, dobMonth, dobYear) => {
  let now = new Date();
  let nowYear = now.getFullYear();
  let nowMonth = now.getMonth() + 1;
  let nowDate = now.getDate();
  let ageDate;
  let ageMonth;
  let ageYear;

  ageYear = nowYear - dobYear;

  // ROUGHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
  // const diff = (now, dob, age, add, parent) => {
  //   age = now >= dob ? now - dob : add + now - dob;
  //   parent = now >= dob ? parent : (parent -= 1);
  //   return [age, parent];
  // };

  // [ageDate, ageMonth] = diff(nowDate, dobDate, ageDate, 31, ageMonth);
  // [ageMonth, ageYear] = diff(nowMonth, dobMonth, ageMonth, 12, ageYear);

  // const diff = (now, dob, age, add, parent) => {
  //   now >= dob ? (age = now - dob) : ((age = add + now - dob), parent--);
  //   console.log(age);
  // };

  // diff(nowMonth, dobMonth, ageMonth, 12, ageYear);

  // diff(nowDate, dobDate, ageDate, 31, ageMonth);
  // CORRRRRRRRRRRRECTTTTTTTTTTTTTTTTTTTT

  nowMonth >= dobMonth
    ? (ageMonth = nowMonth - dobMonth)
    : ((ageMonth = 12 + nowMonth - dobMonth), ageYear--);

  nowDate >= dobDate
    ? (ageDate = nowDate - dobDate)
    : ((ageDate = 31 + nowDate - dobDate), ageMonth--);

  const output = {
    day: ageDate,
    month: ageMonth,
    year: ageYear,
  };
  return output;
};

const setOutput = () => {
  const getUserAge = getAge(inputDay.value, inputMonth.value, inputYear.value);
  const outputText = () => {
    oDay.textContent = getUserAge.day;
    oMonth.textContent = getUserAge.month;
    oYear.textContent = getUserAge.year;
  };
  outputText();
};

arrow.addEventListener("click", setOutput);
// const getUserAge = getAge(inputDay.value, inputMonth.value, inputYear.value);

// console.log(getUserAge);
// const day = () => {
//   console.log(getUserAge.day);
// };

// for (const key of Object.keys(getUserAge)) {
//   let cat = getUserAge[key];
//   console.log(cat);
// }

// arrow.addEventListener("click", day);
