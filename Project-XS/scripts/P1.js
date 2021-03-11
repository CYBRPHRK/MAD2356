/*
    Authors: Shivam Singla (Group Leader) - 160 lines
             Mohammad Qureshi - 165 lines
             Nickieda Johnson - 0 lines
             Saransh Singh - 75 lines

    The purpose of this file is to provide the behaviours for 
    dropdown menus, canvases, sliders and readouts used in the HTML file.
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

// global Building Height constant
const BUILDING_HEIGHT = 132;

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
const SPRAYFOAM = "SprayFoam";

/*
    The purpose of this function is to initiate the objects and 
    context variables for plan and elevation view,
    start anonymous functions for sliders onchange,
    hiding eveything for insulation initially.
*/
function setup(){
    // plan view canvas setup
    planSetup();

    // elevaton view canvas setup
    elevationSetup();

    // Opaque Thickness Slider change function
    $("#opaqueThicknessSld").on("change", function () {
        thickness = $(this).val() / 2;

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
    everythingHidden();
}

// Function that does the initial elevation canvas setup
function elevationSetup(){
  // function to setup the elevation canvas

  elevationObj = document.getElementById("elevation");
  elevationCon = elevationObj.getContext("2d");
  $("#windowAreaReadout").val(0);
  createDoor();
}

//Function that makes the elevation view canvas
function doElevation() {
  createDoor();

  if (windowArea > 1){
    // Elevation window frame
    elevationCon.fillStyle = "black";
    elevationCon.fillRect(
      80 * SCL - windowArea * SCL,
      25 * SCL,
      2 * windowArea * SCL + Number(6),
      Number((3 * windowArea / 2) * SCL) + Number(4)
    );
    elevationCon.fillStyle = "#a3bcfd";
    elevationCon.fillRect(
      81 * SCL - windowArea * SCL,
      26 * SCL,
      2 * windowArea * SCL + Number(3),
      Number(((3 * windowArea) / 2) * SCL) + Number(1)
    );
    // elevation window
    elevationCon.fillStyle = "black";
    elevationCon.fillRect(
      82 * SCL - windowArea * SCL,
      27 * SCL,
      2 * windowArea * SCL,
      Number(((3 * windowArea) / 2) * SCL) - 2
    );
    elevationCon.fillStyle = "#a3bcfd";
    elevationCon.fillRect(
      83 * SCL - windowArea * SCL,
      28 * SCL,
      2 * windowArea * SCL - 2,
      Number(((3 * windowArea) / 2) * SCL) - 4
    );
  }
}

//Function that clears and creates a door in the elevation canvas
function createDoor(){
  // function to create door
  elevationCon.clearRect(0, 0, elevationObj.width, elevationObj.height);

  elevationCon.fillStyle = "#a3bcfd"; // blue 
  elevationCon.fillRect(0, 0, elevationObj.width, elevationObj.height);
  // door Frame
  elevationCon.fillStyle = "black";
  elevationCon.fillRect(158 * SCL, 25 * SCL, 40 * SCL, 84 * SCL);
  
  elevationCon.fillStyle = "#a3bcfd";
  elevationCon.fillRect(159 * SCL, 26 * SCL, 38 * SCL, 82 * SCL);   
  
  // door 
  elevationCon.fillStyle = "black";
  elevationCon.fillRect(160 * SCL, 27 * SCL, 36 * SCL, 80 * SCL);
  
  elevationCon.fillStyle = "#a3bcfd";
  elevationCon.fillRect(161 * SCL, 28 * SCL, 34 * SCL, 78 * SCL);

  // door handle
  elevationCon.strokeStyle = "black"; 
  elevationCon.lineWidth = 1;
  elevationCon.beginPath();
  elevationCon.arc(255, 90, 3, 0, 2 * Math.PI);
  elevationCon.stroke();

}

// Function that does the initial elevation canvas setup
function planSetup(){
    planObj = document.getElementById("plan");
    planCon = planObj.getContext("2d");
    
    $("#thicknessReadout").val(2);
}

//Function that makes the plan view canvas
function doPlan() {
  planCon.clearRect(0, 0, planObj.width, planObj.height);
  
  // slab
  planCon.fillStyle = "#d2cbcd"; // concrete porch
  planCon.fillRect(0, 0, planObj.width, planObj.height);
  // outer skin
  planCon.fillStyle = "#3104fb"; // blue
  planCon.fillRect(0, 0, planObj.width, BUILDING_HEIGHT);
  
  // planObj interior wall changing the color based on insulation selected 
  let choice = $("#opaqueConstructionMenu").find(":selected").val();
  
  if (choice === CELLULOSE){
    planCon.fillStyle = "#e8e5e4"; // white
     
  }else if (choice === FIBERGLASS){
     planCon.fillStyle = "#fec7d4"; // pink
     
  }else if (choice === SPRAYFOAM ){
    planCon.fillStyle = "#fdfaaa"; // yellow
     
  }else{
    planCon.fillStyle = "#d2cbcd"; // concrete
  }

  planCon.fillRect(1, 1, planObj.width - 2, BUILDING_HEIGHT - 2);
  
  // inner skin
  planCon.fillStyle = "#3104fb";
  planCon.fillRect(
    thickness * SCL + Number(2),
    thickness * SCL + Number(2),
    planObj.width - 2 * thickness * SCL - 4,
    BUILDING_HEIGHT - 2 * thickness * SCL - 4
  );
  // interior floor
  planCon.fillStyle = "#d2cbcd"; // concrete
  planCon.fillRect(
    thickness * SCL + Number(3),
    thickness * SCL + Number(3),
    planObj.width - 2 * thickness * SCL - 6,
    BUILDING_HEIGHT - 2 * thickness * SCL - 6
  );

  planCon.fillStyle = "#d2cbcd"; // concrete
  planCon.fillRect(
    100 * SCL - windowArea * SCL,
    planObj.height - thickness * SCL - 2 * SCL,
    2 * windowArea * SCL,
    thickness * SCL + Number(2 * SCL)
  );
  
  //plan door block
  planCon.fillStyle="#d2cbcd"; //concrete
  planCon.fillRect(160*SCL,128,36*SCL,4);
  
  //plan door entrance dot line
  planCon.beginPath();
  planCon.strokeStyle="#000000";  //black
  planCon.setLineDash([3,3]);
  planCon.moveTo(160*SCL,132);
  planCon.lineTo(196*SCL,132);
  planCon.stroke();
 
  planCon.fillStyle="#000000";  //black
  planCon.fillRect(160*SCL,132,4,37*SCL);
  
  //plan door swing dotted line
  planCon.beginPath();
  planCon.strokeStyle="#000000";  //black
  planCon.setLineDash([3,3]);
  planCon.arc(160*SCL, 132,36*SCL,0, Math.PI / 2);
  planCon.stroke();
  
  //plan inner door opening clear
  planCon.fillStyle="#d2cbcd";  //concrete
  planCon.fillRect(160*SCL, 70, 50, 45*SCL);
  
  //plan inner door door entrance
  planCon.beginPath();
  planCon.strokeStyle="#000000";  //black
  planCon.moveTo(160*SCL, BUILDING_HEIGHT -1 * thickness * SCL - 4);
  planCon.lineTo(196*SCL, BUILDING_HEIGHT -1 * thickness * SCL - 4);
  planCon.stroke();
  
  // plan window
  planCon.fillStyle = "#07ebf8"; // glass
  planCon.fillRect(
    75 * SCL - windowArea * SCL,
    planObj.height - thickness * SCL - 2 * SCL -46,
    2 * windowArea * SCL,
    thickness * SCL + Number(2 * SCL)
  );

  // plan window inner threshold
  planCon.setLineDash([4, 3]);
  planCon.beginPath();
  planCon.moveTo(
    75 * SCL - windowArea * SCL,
    planObj.height - thickness * SCL - 2 * SCL -46
  );
  planCon.lineTo(
    75 * SCL + Number(windowArea * SCL),
    planObj.height - thickness * SCL - 2 * SCL -46
  );
  planCon.stroke();
  // plan window outer threshold
  planCon.beginPath();
  planCon.moveTo(75 * SCL - windowArea * SCL, planObj.height -46 );
  planCon.lineTo(75 * SCL + Number(windowArea * SCL), planObj.height -46);
  planCon.stroke();
}

/*
  The purpose of this function is to:
  - display Opaque Thickness in the Opaque Thickness Readout
  - change the Plan View canvas according to the values from the Opaque Thickness slider
*/
function changeThickness(){
  $("#thicknessReadout").val(thickness);

  // Code to change the Window area in both the canvases.
  doPlan();
  doElevation();
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
  $("#windowAreaReadout").val(windowArea * 2);

  // Code to change the Window area in both the canvases.
  doPlan();
  doElevation();
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