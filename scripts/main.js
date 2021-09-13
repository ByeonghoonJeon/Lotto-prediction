async function formOnSubmit(event) {
  const userDateDiv = document.querySelector("#userDate");
  const userDate = userDateDiv.value;

  const userTimeDiv = document.querySelector("#userTime");
  const userTime = userTimeDiv.value;
  console.log(userDate, userTime);

  const calcDiv = document.querySelector("#calcDiv");
  const numberDiv = document.querySelector("#numberDiv");

  calcDiv.classList.remove("collapse");

  const dateBox = document.querySelector("#date");

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  await sleep(1000);
  document.querySelector("#calc").innerHTML = "사주 팔자 분석중";
  await sleep(1000);
  document.querySelector("#calc").innerHTML = "편재운 분포 분석중";
  await sleep(1000);
  document.querySelector("#calc").innerHTML = "가장 가까운 편재운 날짜 계산중";
  await sleep(2000);
  document.querySelector("#calc").innerHTML =
    "사주 분석 결과를 바탕으로 아래의 날짜와 번호를 추천해 드립니다.";

  numberDiv.classList.remove("collapse");
  dateBox.innerHTML = "구매 일자: 9월 27일 오후 1시 30분 ~ 3시 30분 사이";

  const numArray = [];
  const numberBox = document.querySelector("#numberDiv");
  const numberSuggestion = document.querySelector("#number");

  function num() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const num1 = getRandomInt(46);
    while (num1 == 0) {
      num1 = getRandomInt(46);
    }
    numArray.push(num1);

    const num2 = getRandomInt(46);
    while (numArray.includes(num2)) {
      num2 = getRandomInt(46);
    }
    numArray.push(num2);

    const num3 = getRandomInt(46);
    while (numArray.includes(num3)) {
      num3 = getRandomInt(46);
    }
    numArray.push(num3);

    const num4 = getRandomInt(46);
    while (numArray.includes(num4)) {
      num4 = getRandomInt(46);
    }
    numArray.push(num4);

    const num5 = getRandomInt(46);
    while (numArray.includes(num5)) {
      num5 = getRandomInt(46);
    }
    numArray.push(num5);

    const num6 = getRandomInt(46);
    while (numArray.includes(num6)) {
      num6 = getRandomInt(46);
    }
    numArray.push(num6);

    const num7 = getRandomInt(46);
    while (numArray.includes(num7)) {
      num7 = getRandomInt(46);
    }
    numArray.push(num7);

    const num8 = getRandomInt(46);
    while (numArray.includes(num8)) {
      num8 = getRandomInt(46);
    }
    numArray.push(num8);

    numberBox.classList.remove("collapse");
    return (numberSuggestion.innerHTML = numArray.join(", "));
  }
  num();
}

window.onload = function () {
  const yearDropdown = document.querySelector("#year-dropdown");
  let currentYear = new Date().getFullYear();
  const earliestYear = 1910;
  console.log(currentYear);

  while (currentYear >= earliestYear) {
    const createOption = document.createElement("option");
    createOption.value = currentYear;
    createOption.text = currentYear;
    yearDropdown.add(createOption);
    currentYear -= 1;
  }

  // const bottomYear = 1910;
  // while (currentYear >= bottomYear) {
  //   const optionYears = document.createElement("option");
  //   optionYears.text = currentYear;
  //   optionYears.value = currentYear;
  //   yearDropdown = add(optionYears);
  //   currentYear -= 1;
  // }
};
//   //   set inner html of result-data div to weather data
//   const resultDataDiv = document.querySelector("#result-data");
//   resultDataDiv.innerHTML = `
//   <h3>-----</h3><h3>${query}</h3><h3 style="color: #293B5F;"><strong>${weatherDescription}</strong></h3><h3>-----</h3>
//   <h3>Temperature</h3><h3 style="color: #293B5F;"><strong>${temp} °C</strong></h3><h3>-----</h3>
//   `;

//   // remove the collapse class (show the div)
//   resultDataDiv.classList.remove("collapse");
