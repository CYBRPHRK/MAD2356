/*
    Authors: Shivam Singla (Group Leader)
             Mohammad Qureshi
             Nickieda Johnson

    The purpose of this file is to create an express server,
    listen to the port for any method calls to the server and
    return the conceptsInfo JSON object when get method is called.
*/

// Import the express framework into the program
var express = require("express");

// Start the express applicaton by calling express() and assign it to the variable server
var server = express();

// Set port variable
var port = 3300;

// Enable recognition of incoming data as JSON
server.use(express.json());
// Enable incoming values in name:value pairs to be either:
// - string or array (false)
// - any type (true)
server.use(express.urlencoded({ extended: true }));

// Set up allowance characteristics for cross-origin resource sharing (CORS)
// The default is the original domain is the sole source, but CORS allows
// mutilple domains to be a source in a secure manner.
var allowCrossDomain = function (req, res, next) {
  // allows all domains to be a source
  res.header("Access-Control-Allow-Origin", "*");
  // allows all 4 methods to be used, rather than just GET and POST
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  // only allow headers with "Content-Type" in the JSON name field
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // pass control to the next middleware function, else request is left hanging
  next();
};
server.use(allowCrossDomain);

/* *************************************************************************************** */

// A JSON Object storing all the text for each option in the CONCEPTS select menu
var conceptsInfo = {
  localConditions:
    "<br><br>Local Conditions:" +
    "<br><br>Heating demand is given in heating degree-days. " +
    "The length of a Canadian heating system is the number of days below 18°C. " +
    "Coldness is the difference between a desired indoor temperature of 20°C " +
    "and the average outdoor temperature on those days." +
    "<br><br>Humidity and especially windiness of a location " +
    "also add to heating demand but are discussed elsewhere." +
    "<br><br>Warmer climates imply a cooling load: also a subject for other chapters." +
    "<br><br>Please note that to reflect the Canadian experience, this App mixes units: " +
    "Celsius for temperature , for example, but inches and feet for dimensions.",
  budget:
    "<br><br>Annual Energy Budget" +
    "<br><br>Envelope heat loss is only part of an energy budget. " +
    "Lights, hot water appliances and electronics also consume energy. " +
    "In this chapter those other loads are fixed, on the assumption " +
    "that use of the building remains constant in all locations." +
    "<br><br>Envelope heat loss has at least two components: " +
    "the effectively conductive losses that can be reduced by insulation, and losses " +
    "due to ventilation and drafts. Both are proportional to heating demand. Looking at the " +
    "Energy Budget graph, you will see that changing the insulation levels changes the conductive " +
    "or insulation losses but not those due to air movement.",
  draftsVentilation:
    "<br><br>Drafts and Ventilation" +
    "<br><br>Realistically, a larger window would admit more drafts,especially at the lower end of the " +
    "quality scale, but that effect is ignored in the insulation chapter." +
    "<br><br>The Drafts and Ventilation chapter explains how energy losses due to infiltration " +
    "are controlled by membranes, sealants, joint design, and meticulous quality control. " +
    "It shows how ventilation losses can be managed through heat exchange, flow controls, " +
    "and careful use of operable windows and vents.",
  insulationHeatLoss:
    "<br><br>Insulation and Heat loss" +
    "<br><br>In North America, thermal resistance is measured in R-Values. " +
    "The resistance of a material barrier is a product of its resistivity. " +
    "In R/inch, and the inches of thickness. The actual effectiveness of insulation " +
    "depends on installation and other factors, but this app gives drywall an R/inch of 1, " +
    "fiberglass and cellulose insulation of R/inch of 3, and urethane spray foam an R/inch of 6." +
    "<br><br>In thin and poorly insulating assemblies, air films become significant. " +
    "This is how painted sheet steel ends up with a nominal R of 1. " +
    "When assemblies are layered, R values can simply be totalled.",
  materialsInsulation:
    "<br><br>Materials and Insulation" +
    "<br><br>Heat flow is inversely related to thermal resistance. " +
    "The conduction of heat through a material is given as a U value, which is equal to 1/R. " +
    "Add layers into a single R value before finding their U value." +
    "<br><br>Heat loss is a product of thermal demand and conductive liability. " +
    "Thermal demand consolidates temperature difference and time, as in degree days. " +
    "Thermal liability is a product of surface area and conductance." +
    "<br><br>The total thermal liability of an envelope is a sum of the liability of its portions. " +
    "Average conductance divides the total liability by the total area. " +
    "The effctive R-value of an envelope is the inverse of average conductance." +
    "<br><br>Note that high R- value portions of an envelope have a smaller effect on " +
    "the effective R-value than might be supposed. Conversely, low R-value portions of an envelope " +
    "such as windows have a larger effect on overall heat loss than their small area may suggest.",
  environmentalImpact:
    "<br><br>Environmental Impact" +
    "<br><br>The environmental impact of construction depends not only on the energy consumed in " +
    "operating a building, but in the energy consumed or 'embodied' in the material through sourcing, " +
    "manufacture, transport, and assembly. Additionally, toxins and other ecological and social " +
    "injuries need to be accounted for. The exact calculations are complicated and debatable, " +
    "but that's no reason to ignore them. They are the subject of several other chapters.",
};

// This is the route that the jquery $.get in the client side will take.
// It is an HTTP GET request (coming from the client).
// -"/P3ServerID" is the id (identification) used
// - function (request, response) { ... } is a callback function that is
//   executed when the client does an http GET operation with the route (/myroute)
//   The server.get() function is always waiting for such an event.
server.get("/P3ServerID", function (request, response) {
  // set the status to OK and send the JSON object
  return response.status(200).send(conceptsInfo);
});

// listen for activity at port 3300
server.listen(port, function () {
  console.log("Project XS app listening on port 3300");
});
