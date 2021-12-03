// Write your JavaScript code here!

// const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
    const formSubmitButton = document.getElementById("formSubmit");
    formSubmitButton.addEventListener("click", function(event) {
        event.preventDefault();

        let pilotName = document.getElementById("pilotName");
        let copilotName = document.getElementsByName("copilotName").item(0);
        let fuelLevel = document.querySelector("input[name=fuelLevel]"); // querySelector gives you more "fine control" on what you're selecting
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let errorMessage = 'All fields are required.';
        let shouldAlert = false;

        if (validateInput(pilotName.value) === "Empty") {
            shouldAlert = true; 
          } 
        if (validateInput(copilotName.value) === "Empty") {
            shouldAlert = true; 
          }
          if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(fuelLevel.value) === "Empty") {
            shouldAlert = true; 
          }
          if (validateInput(cargoMass.value) === "Not a Number"  || validateInput(cargoMass.value) === "Empty") {
            shouldAlert = true; 
          }
        alert(errorMessage)
    });
    
});