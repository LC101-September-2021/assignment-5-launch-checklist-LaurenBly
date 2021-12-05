// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
      return "Empty";
    } else if (!isNaN(testInput)) {
      return "This is a number";
    } else {
      return "This is a not number";
    }
}

function validateFuelLevel(testInput) {
 if (testInput >= 10000) {
    return "true";
  } 
    return "false";
}

  function validateCargoMass(testInput){
    if (testInput <= 10000) {
       return "true";
     }
     return "false";
  }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();
  
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}
