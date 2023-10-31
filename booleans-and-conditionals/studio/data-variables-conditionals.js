// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = "760000";
let shuttleMassKg =74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Crew Ready");
  } else {
    console.log("Crew Over Capacity");
  }
// add logic below to verify all astronauts are ready
if (astronautStatus === ready) {
    console.log("Crew Ready");
  } else {
    console.log("Crew Not Ready");
  }
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log("Crew Ready");
  } else {
    console.log("Crew Not Ready");
  }
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > minimumFuelTemp || fuelTempCelsius < maximumFuelTemp) {
    console.log("Fuel Good");
  } else {
    console.log("Fuel Temp Too High/Low");
  }
// add logic below to verify the fuel level is at 100%
if (fuelLevel === 100%) {
    console.log("Fuel Level Good");
  } else {
    console.log("Low Fuel");
  }
// add logic below to verify the weather status is clear
if (weatherStatus === clear) {
    console.log("Weather Clear");
  } else {
    console.log("Weather NOT Clear");
  }
// Verify shuttle launch can proceed based on above conditions
