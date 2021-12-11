// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  document.getElementById("missionTarget").innerHTML = `
                 <h2>Mission Destination</h2>
              <ol>
                  <li>Name: ${name}</li>
                  <li>Diameter: ${diameter}</li>
                  <li>Star: ${star}</li>
                  <li>Distance from Earth: ${distance}</li>
                  <li>Number of Moons: ${moons}</li>
              </ol>
              <img src="${imageUrl}">`;

}

function validateInput(testInput) {
 if (testInput === "" || testInput === null) {
  return "Empty";
  }
 
 if (isNaN(testInput)) { 
  return "Not a Number";    
 } else {
  return "Is a Number"; 
 }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
 console.log("form submission");
 console.log(list);
 list.style
 list.style.visibility = "visible";
 let launchStatus = document.getElementById("launchStatus");
 let issue = false;

// this is the condition for the fuel level check
if (fuelLevel.value < 10000) {
  issue = true;
  list.querySelector("#fuelStatus").innerHTML = `Fuel level too low for launch`;
  fuelStatus.style.color = "red";
} else {
  list.querySelector("#fuelStatus").innerHTML = `There is enough fuel for the journey`; 
  fuelStatus.style.color = "green";
}

// this is the condition for the cargo level check
if (cargoLevel.value > 10000) {
  issue = true;
  list.querySelector("#cargoStatus").innerHTML = `Cargo mass too high for launch`;
  cargoStatus.style.color = "red";
} else {
  list.querySelector("#cargoStatus").innerHTML = `Cargo mass low enough for launch`; 
  cargoStatus.style.color = "green";
}

if (issue === true) {
  launchStatus.innerHTML = `Shuttle not ready for launch`
  launchStatus.style.color = "red";       
} else {
  launchStatus.innerHTML = `Shuttle is ready for launch`
  launchStatus.style.color = "green";  

}
  pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
   
}
  
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
  return response.json();
      });

  return planetsReturned;
}

function pickPlanet(planets) {
  let randomPlanet = Math.floor(Math.random() * planets.length);
  return planets[randomPlanet];
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
