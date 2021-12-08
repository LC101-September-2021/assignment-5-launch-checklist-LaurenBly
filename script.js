// Write your JavaScript code here!

// const { validateInput } = require("./scriptHelper");

window.addEventListener("load", async function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        pickPlanet(listedPlanets);
    })

// Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   
    const formSubmitButton = document.getElementById("formSubmit");
    formSubmitButton.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilotName = document.getElementById("pilotName");
        let copilotName = document.getElementsByName("copilotName").item(0);
        let fuelLevel = document.querySelector("input[name=fuelLevel]"); // querySelector gives you more "fine control" on what you're selecting
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let errorMessage = 'All fields are required.';
        let shouldAlert = false;
       

        if (validateInput(pilotName.value) === "Empty"|| validateInput(fuelLevel.value) === "Empty"|| validateInput(cargoMass.value) === "Empty" || validateInput(copilotName.value) === "Empty") {
            shouldAlert = true; 
          } 
          if (validateInput(pilotName.value) === "This is a number"|| validateInput(copilotName.value) === "This is a number") {
              shouldAlert = true;
              errorMessage = 'Numbers are not allowed in this field, please type in a name';
          }
        
          if (validateInput(fuelLevel.value) === "This is a not number" || validateInput(cargoMass.value) === "This is a not number") {
            shouldAlert = true;
            errorMessage ='You must enter a number';
          }
                 
          //write a statement for if the value of the fuel is less than 1000 then set to false. 
        if (shouldAlert) {
            alert(errorMessage)
        }

        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let launchStatus = document.getElementById("launchStatus")

        document.getElementById('faultyItems').style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch!`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} is ready for launch!`;

        if (validateFuelLevel(fuelLevel.value) === "true") {
            fuelStatus.innerHTML = `${fuelLevel.value} L is high enough to launch`
            launchStatus.innerHTML = "<span style='color: green;'>Shuttle is ready for launch</span>";
         } else{
             fuelStatus.innerHTML = `You need at least 10,000 L to launch. ${fuelLevel.value} L is too low for launch`
             launchStatus.innerHTML = "<span style='color: red;'>Shuttle not ready for launch</span>";
         }
         if (validateCargoMass(cargoMass.value) === "false") {
             cargoStatus.innerHTML = `Your cargo mass of ${cargoMass.value} is too large. You can only carry up to 10,000 Kg of cargo`
             launchStatus.innerHTML = "<span style='color: red;'>Shuttle not ready for launch</span>";
         } else{
             cargoStatus.innerHTML = `${cargoMass.value} L is low enough to launch`;
             launchStatus.innerHTML = "<span style='color: green;'>Shuttle is ready for launch</span>";
         }
            
       
    });
    
});