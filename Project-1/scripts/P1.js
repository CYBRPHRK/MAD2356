/*
    Author: Shivam Singla (A#) (Group Leader)
            Mohammad Qureshi (A#)
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

/*    global variables for the canvas   */
// Plan View
var planObj, planCon;
// Elevation view
var elevationObj, elevationCon;


// global scaling constant
const SCL = 1.35;

// global hidden and visible contants
const HIDDEN = "hidden";
const VISIBLE = "visible";

/*    dropdown menu constants     */
//View Chapters Menu
const VIEWCHAPETERS = "ViewChapters";
const INSULATION =  "Insulation";

//Opaque Construction Menu
const OPAQUECONSTRUCTION = "OpaqueConstruction";
const CONTAINER = "Container";
const UNINSULATED = "Uninsulated";
const CELLULOSE = "Cellulose";
const FIBERGLASS = "Fiberglass";
const SPRAYFORM = "SprayFoam";

/*
    The purpose of this function is to:
*/
function setup(){
    planObj = document.getElementById("plan");
    planCon = planObj.getContext("2d");  
    
    elevationObj = document.getElementById("elevation");
    elevationCon = elevationObj.getContext("2d");

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

    // To hide eveything initially
    everythingHidden()
}

function doElevation() {
    //TEMPORARY CANVAS FOR TESTING
    elevationCon.clearRect(0, 0, elevationObj.width, elevationObj.height);
  
    // filled box
    elevationCon.fillStyle = "#6d7590"; //purple
    elevationCon.fillRect(0, 0, 530, 180);
}

function doPlan() {
    planCon.clearRect(0, 0, planObj.width, planObj.height);
  
    // slab
    planCon.fillStyle = "#d2cbcd"; // concrete porch
    planCon.fillRect(0, 0, planObj.width, planObj.height);

    /*   ******   outer skin with interior of the wall   ******   */
    // starting from 1 * SCL to allow the stroke to show with linewidth 1 * SCL
    // All further calculations are based on this difference and will have those 
    // adjustments accordingly to achieve the required design
    planCon.rect(1 * SCL, 1 * SCL, planObj.width - (2 * SCL), 96 * SCL);  // 8 feet wide (8 x 12 = 96)

    // interior of the wall
    let choice = $("#opaqueConstructionMenu").find(":selected").val();

    if (choice === CELLULOSE){
      planCon.fillStyle = "#e8e5e4"; // given in Requirements document
    }
    else if (choice === FIBERGLASS){
      planCon.fillStyle = "#fec7d4"; // given in Requirements document
    }
    else if (choice === SPRAYFORM){
      planCon.fillStyle = "#fdfaaa"; // given in Requirements document
    }
    else{
      planCon.fillStyle = "#d2cbcd"; // concrete
    }
    
    planCon.fill();

    //outer skin
    planCon.lineWidth = 1 * SCL;
    planCon.strokeStyle = "#3104fb"; // blue
    planCon.stroke();

    /*   ******   inner skin with interior floor   ******   */
    planCon.rect(
      (3 * SCL),
      (3 * SCL),
      planObj.width - (6 * SCL),
      92 * SCL      // 8 feet wide (8 x 12 = 96) - 4 inches for the border (96 - 4 = 92)
    );
    
    // interior floor
    planCon.fillStyle = "#d2cbcd"; // concrete
    planCon.fill();

    //inner skin
    planCon.lineWidth = 1 * SCL;
    planCon.strokeStyle = "#3104fb"; // blue
    planCon.stroke();

    // door spacing
    /*planCon.rect(
      160 * SCL,
      94 * SCL,
      5 * SCL,
      2 * SCL
    );
    planCon.fillStyle = "#d2cbcd"; // concrete
    planCon.fill();
    planCon.strokeStyle = "#d2cbcd"; // concrete
    planCon.stroke();*/

    // door outer threshold
    planCon.strokeStyle = "#000000"; // black
    planCon.setLineDash([4, 3]);    // [ dashes px, spaces px]
    planCon.beginPath();
    planCon.moveTo(160 * SCL, 97 * SCL);
    planCon.lineTo(196 * SCL, 97 * SCL);
    planCon.stroke();

    // opened door
    planCon.strokeStyle = "#000000"; // black
    planCon.lineWidth = 3 * SCL;
    planCon.setLineDash([]); // no dashes
    planCon.beginPath();
    planCon.moveTo(160 * SCL, 97 * SCL);
    planCon.lineTo(160 * SCL, 132 * SCL);
    planCon.stroke();
}

/*
  The purpose of this function is to:
  - display Opaque Thickness in the Opaque Thickness Readout
  - change the Plan View canvas according to the values from the Opaque Thickness slider
*/
function changeThickness(){
  $("#thicknessReadout").val(thickness);

  doPlan();
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

//Function that changes visbility on selecting insulation.
function onSelectViewChapters() {
    // onSelect added in html file. Function name might need to be changed when
    // more selection functions are implemented
    let choice = $("#viewChaptersMenu").find(":selected").val();
    if (choice === VIEWCHAPETERS){
      everythingHidden();
    } 
    else if (choice === INSULATION) {
      everythingVisble();
    }
}

function onSelectOpaqueConstructionMenu() {
  doPlan();
}

function everythingVisble(){
    //Making everything visible once insulation is selected
    document.getElementById("plan").style.visibility = VISIBLE;
    document.getElementById("elevation").style.visibility = VISIBLE;

    // drawing canvases
    doPlan();
    doElevation();

    // Places with degree-days
    $('#degreeDaysMenu').parent().show();

    // Opaque Construction With R
    $('#opaqueConstructionMenu').parent().show();

    $("#opaqueThicknessSld").parent().show();
    $("#thicknessReadout").parent().show();
    $("#thicknessLbl").parent().show();

    $("#otResReadout").parent().show();
    $("#otResistanceLbl").parent().show();

    $("#dtResistanceSld").parent().show()
    $("#dtResReadout").parent().show();
    $("#dtResistanceLbl").parent().show();

    $("#wtResistanceSld").parent().show();
    $("#wtResReadout").parent().show();
    $("#wtResistanceLbl").parent().show();

    $("#windowAreaSld").parent().show();
    $("#windowAreaReadout").parent().show();
    $("#windowAreaLbl").parent().show();

    $("#eotResReadout").parent().show();
    $("#eotResistanceLbl").parent().show();

    $("#annualEnergyReadout").parent().show();
    $("#annualEnergyLbl").parent().show();

    $("#graphsMenu").parent().show();

    $("#readoutsMenu").parent().show();

    $("#conceptsMenu").parent().show();
}

function everythingHidden(){
// Making everything hidden onload
    
    document.getElementById("plan").style.visibility = HIDDEN;
    document.getElementById("elevation").style.visibility = HIDDEN;
    
    $('#degreeDaysMenu').parent().hide();

    $('#opaqueConstructionMenu').parent().hide();
      
    $("#opaqueThicknessSld").parent().hide();
    $("#thicknessReadout").parent().hide();
    $("#thicknessLbl").parent().hide();

    $("#otResReadout").parent().hide();
    $("#otResistanceLbl").parent().hide();

    $("#dtResistanceSld").parent().hide();
    $("#dtResReadout").parent().hide();
    $("#dtResistanceLbl").parent().hide();

    $("#wtResistanceSld").parent().hide();
    $("#wtResReadout").parent().hide();
    $("#wtResistanceLbl").parent().hide();

    $("#windowAreaSld").parent().hide();
    $("#windowAreaReadout").parent().hide();
    $("#windowAreaLbl").parent().hide();

    $("#eotResReadout").parent().hide();
    $("#eotResistanceLbl").parent().hide();

    $("#annualEnergyReadout").parent().hide();
    $("#annualEnergyLbl").parent().hide();

    $("#graphsMenu").parent().hide();

    $("#readoutsMenu").parent().hide();

    $("#conceptsMenu").parent().hide();
}