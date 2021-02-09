const CLEAR = "Clear";
const SHOW_ELEVATION = "Show Elevation";
const SHOW_PLAN = "Show Plan";
const SHOW_BOTH = "Show Both";

var elevationObj, elevationCon, planObj, planCon;

function setup(){
    elevationObj = document.getElementById("elevation");
    elevationCon = elevationObj.getContext("2d");

    planObj = document.getElementById("plan");
    planCon = planObj.getContext("2d");
}

function show(){
    let choice = $("#selection").find(":selected").text();

    if (choice === CLEAR){
        clear();
    }
    else if (choice === SHOW_ELEVATION){
        clear();
        showElevation();
    }
    else if (choice === SHOW_PLAN){
        clear();
        showPlan();
    }
    else if (choice === SHOW_BOTH){
        showElevation();
        showPlan();
    }
}

function clear(){
    elevationCon.clearRect(0, 0, elevationObj.width, elevationObj.height);
    planCon.clearRect(0, 0, planObj.width, planObj.height);
}

function showElevation(){
    elevationCon.clearRect(0, 0, elevationObj.width, elevationObj.height);
    
    elevationCon.fillStyle = "#ffffff";     // White
    elevationCon.fillRect(0, 0, elevationObj.width, elevationObj.height);

    elevationCon.fillStyle = "#8a5543";     // Brown
    elevationCon.fillRect(15, 15, 420, 80);

    elevationCon.fillStyle = "#000000";     //Black
    elevationCon.fillRect(15, 95, 420, 45);

    elevationCon.fillStyle = "#6c7592";     // Blue Grey
    elevationCon.fillRect(15, 15, 320, 70);

    elevationCon.fillStyle = "#f3d281";     // Light Yellow
    elevationCon.fillRect(65, 25, 50, 60);
    elevationCon.fillRect(230, 25, 50, 60);
}

function showPlan(){
    planCon.clearRect(0, 0, planObj.width, planObj.height);
    
    planCon.fillStyle = "#ffffff";  // White
    planCon.fillRect(0, 0, planObj.width, planObj.height);
    
    planCon.fillStyle = "#000000";  // Black
    // Black Top Bar
    planCon.fillRect(10, 15, 140, 5);
    planCon.fillRect(200, 15, 40, 5);
    planCon.fillRect(310, 15, 79, 5);
    planCon.fillRect(409, 15, 8, 5);
    
    // Black Sides
    planCon.fillRect(10, 15, 5, 80);
    planCon.fillRect(412, 15, 5, 80);

    // Black Bottom Bar
    planCon.fillRect(15, 90, 50, 5);
    planCon.fillRect(115, 90, 105, 5);
    planCon.fillRect(270, 90, 147, 5);

    planCon.fillStyle = "#97dbf3"   // Light Turquoise
    // Light Turquoise Top Bar
    planCon.fillRect(150, 15, 50, 6);
    planCon.fillRect(240, 15, 70, 6);
    planCon.fillRect(389, 15, 20, 6);

    // Light Turquoise Bottom Bar
    planCon.fillRect(65, 89, 50, 6);
    planCon.fillRect(220, 89, 50, 6);

    planCon.strokeStyle = "#000000";    // Black
    planCon.lineWidth = 2;

    // Draw a line on the left
    planCon.beginPath();
    planCon.moveTo(11, 95);
    planCon.lineTo(11, 140);
    planCon.stroke();

    // Draw a line on the right
    planCon.beginPath();
    planCon.moveTo(416, 95);
    planCon.lineTo(416, 140);
    planCon.stroke();

    // Draw a line on the bottom
    planCon.beginPath();
    planCon.moveTo(11, 140);
    planCon.lineTo(416, 140);
    planCon.stroke();
}