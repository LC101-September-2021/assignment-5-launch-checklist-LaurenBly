// Write your JavaScript code here!

// const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    let launchStatus = document.getElementById("launchStatus");      
    let faultyItems = document.getElementById("faultyItems");
    let pilot = form.querySelector("input[name=pilotName]");
    let copilot = form.querySelector("input[name=copilotName]");
    let fuelLevel = form.querySelector("input[name=fuelLevel]");
    let cargoLevelMass = form.querySelector("input[name=cargoMass]");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevelMass.value) === "Empty") {
            alert("All fields are required");   

          
    } else {
        if (validateInput(pilot.value) === "Not a Number" && validateInput(copilot.value) === "Not a Number" && validateInput(fuelLevel.value) === "Is a Number" && validateInput(cargoLevelMass.value) === "Is a Number") {
        formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevelMass);
        } else {
            alert("Make sure to enter valid information for each field!");
    }  
    
    }
});    
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
      
    }).then(function () {
      
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let outputPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(document, outputPlanet.name, outputPlanet.diameter, outputPlanet.star, outputPlanet.distance, outputPlanet.moons, outputPlanet.image);


    })
   
});
