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
