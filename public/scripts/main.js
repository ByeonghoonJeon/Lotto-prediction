async function formOnSubmit(event) {
  const userDateDiv = document.querySelector("#userDate");
  const userDate = userDateDiv.value;

  const userTimeDiv = document.querySelector("#userTime");
  const userTime = userTimeDiv.value;
  console.log(userDate, userTime);

  //   //   set inner html of result-data div to weather data
  //   const resultDataDiv = document.querySelector("#result-data");
  //   resultDataDiv.innerHTML = `
  //   <h3>-----</h3><h3>${query}</h3><h3 style="color: #293B5F;"><strong>${weatherDescription}</strong></h3><h3>-----</h3>
  //   <h3>Temperature</h3><h3 style="color: #293B5F;"><strong>${temp} °C</strong></h3><h3>-----</h3>
  //   `;

  //   // remove the collapse class (show the div)
  //   resultDataDiv.classList.remove("collapse");
}
