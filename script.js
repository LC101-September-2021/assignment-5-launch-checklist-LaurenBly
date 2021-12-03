// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
    const formSubmitButton = document.getElementById("formSubmit");
    formSubmitButton.addEventListener("click", function(event) {
        event.preventDefault();

        let pilotName = document.getElementsById("pilotName");
        let copilotName = document.getElementsByName("copilotName").item(0);
        let fuelLevel = document.querySelector("input[name=fuelLevel]"); // querySelector gives you more "fine control" on what you're selecting
        let cargoMass = document.querySelector("input[name=cargoMass]");

        if (!pilotName.value.length) {
            alert("You forgot to enter the pilot's name");
        } if (!copilotName.value.length) {
            alert("Don't forget about the co-pilot!");
        } if (!fuelLevel.value.length) {
            alert("You're gonna need some fuel to fly!");
        } if(!cargoMass.value.length) {
            alert("What's the cargo mass?");
        }
    });
    
});