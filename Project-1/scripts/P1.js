/*
    Author: Shivam Singla (A#) (Group Leader)
            Mohammad (A#)
            Nickieda Johnson (A#)
            Saransh Singh (A#)

    The purpose of the file is to: ...
*/

// global variable for Opaque Thickness
var thickness = 0;
// global variable for Door Thermal Resistance
var dtResistance = 0;
// global variable for Window Thermal Resistance
var wtResistance = 0;
// global variable for Window Area
var windowArea = 0;

/*
    The purpose of this function is to:
    - create a function that is called every time the Opaque Thickness Slider is moved
    - create a function that is called every time the Door Thermal Resistance Slider is moved
    - create a function that is called every time the Window Thermal Slider is moved
    - create a function that is called every time the Window Area Slider is moved
*/
function setup(){
    // Opaque Thickness Slider change function
    $("#opaqueThicknessSld").on("change", function () {
        thickness = $(this).val();

        changeThickness();
    });

    // Door Thermal Resistance Slider change function
    $("#dtResistanceSld").on("change", function () {
        dtResistance = $(this).val();

        changeDTResistance();
    });

    // Window Thermal Resistance Slider change function
    $("#wtResistanceSld").on("change", function () {
        wtResistance = $(this).val();

        changeWTResistance();
    });

    // Window Area Slider change function
    $("#windowAreaSld").on("change", function () {
        windowArea = $(this).val();

        changeWindowArea();
    });
}

/*
    The purpose of this function is to:
    - display Opaque Thickness in the Opaque Thickness Readout
    - change the Plan View canvas according to the values from the Opaque Thickness slider
*/
function changeThickness(){
    $("#thicknessReadout").val(thickness);

    // Code to change the thickness of the walls in the Plan View canvas.
}

/*
    The purpose of this function is to:
    - display Door Thermal Resistance in the Door Thermal Resistance Readout
*/
function changeDTResistance(){
    $("#dtResReadout").val(dtResistance);
}

/*
    The purpose of this function is to:
    - display Window Thermal Resistance in the Window Thermal Resistance Readout
*/
function changeWTResistance(){
    $("#wtResReadout").val(wtResistance);
}

/*
    The purpose of this function is to:
    - display Window Area in the Window Area Readout
    - change both the canvases according to the values from the Window Area slider
*/
function changeWindowArea(){
    $("#windowAreaReadout").val(windowArea);

    // Code to change the Window area in both the canvases.
}

/*
    The purpose of this function is to:
    -show the corresponding information when selected from the dropdown menus
*/

//contant variables declared
const VIEW_CHAPTERS = "ViewChapters"
const VENTILATION_DRAFTS = "VentilationDrafts";
const INSULATION = "Insulation";
const SIZE_PROPORTION = "SizeProportion";
const IMMEDIATE_CONTEXT = "ImmediateContext";
const CONSTRUCTION_DETAILS = "ConstructionDetails";
const ENERGY_SOURCES = "EnergySources";
const REFRIGERATION_CYCLE = "RefrigerationCycle";
const PSYCHROMETICS = "Psychrometrics";
const ENVIRONMENTAL_IMPACTS = "EnvironmentalImpacts";
const RADIATION_GLAZING = "RadiationGlazing";

function onSelectViewChapters() {
    let choice = $("#viewChaptersMenu").find(":selected").val();
    if (choice === VIEW_CHAPTERS) {
        everythingHidden();
    }
    else if(choice === INSULATION) {
        everythingVisible();
    }
}

const HIDDEN="hidden";
const VISIBLE="visible";
//The purpose of this function is to show everything when Insulation is selected
function everythingVisible() {
    document.getElementById("Plan").style.visibility= VISIBLE;
}
//The purpose of this function is to hide everything otherwise
function everythingHidden() {
    document.getElementById("Plan").style.visibility=HIDDEN;
}

/*
The purpose of this function is to..
*/
function onSelectDegreeDaysMenu() {
    //do
}

/*
The purpose of this function is to..
*/
function onSelectopaqueConstructionMenu() {
    //do
}

/*
The purpose of this function is to..
*/
function onSelectGraphsMenu() {
    //do
}

/*
The purpose of this function is to..
*/
function onSelectReadoutsMenu() {
    //do
}

/*
The purpose of this function is to..
*/
function onSelectConceptsMenu() {
    //do
}

