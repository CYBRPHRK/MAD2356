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
// global hidden and visible variables
const HIDDEN = "hidden";
const VISIBLE = "visible";

// dropdown menu variables
const INSULATION =  "Insulation" 


/*
    The purpose of this function is to:
*/
function setup(){
    let drawPlanObj = document.getElementById("plan");
    let drawPlanCon = drawPlanObj.getContext("2d");  
    doPlan(drawPlanObj, drawPlanCon);
    
    let drawElevationObj = document.getElementById("elevation");
    let drawElevationCon = drawElevationObj.getContext("2d");
    doElevation(drawElevationObj, drawElevationCon);

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

function doElevation(obj, context) {
    //TEMPORARY CANVAS FOR TESTING
    context.clearRect(0, 0, obj.width, obj.height);
  
    // filled box
    context.fillStyle = "#6d7590"; //purple
    context.fillRect(0, 0, 530, 180);
}

function doPlan(obj, context) {
    //TEMPORARY CANVAS FOR TESTING
    context.clearRect(0, 0, obj.width, obj.height);
  
    // filled box
    context.fillStyle = "#FF0000"; //red
    context.fillRect(0, 0, 530, 180);
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

//Function that changes visbility on selecting insulation.
function onSelect() {
    // onSelect added in html file. Function name might need to be changed when
    // more selection functions are implemented
    let choice = $("#viewChaptersMenu").find(":selected").val();
    if (choice === INSULATION) {
      everythingVisble();
    } 
  }

function everythingVisble(){
//Making everything visible once insulation is selected
    document.getElementById("plan").style.visibility = VISIBLE;
    document.getElementById("elevation").style.visibility = VISIBLE;
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