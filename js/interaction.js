let draw = true;

console.log("Hi Anne, this is working");
// Select color input
console.log($("#colorPicker").val());
// Select size input
console.log($("#inputWidth").val());
console.log($("#inputHeight").val());

//When the size is submitted by the user, call makeGrid() function
//EVENT HANDLERS
$("input[type='submit']").on("click",function(event) {
    event.preventDefault();
    console.log("Your pressed me.");

    const height = $("#inputHeight").val();
    const width = $("#inputWidth").val();

    $("pixelCanvas").empty();
    makeGrid(height, width);
});

function makeGrid(height, width) {
	
	//y-axis, for number up to height
	for (let i = 0; i < height; i++) {
		
		//create a row
		//console.log("row" + i);
		$("#pixelCanvas").append($("<tr></tr>"));
		
		//x-axis, for number up to width
		for (let j = 0; j < width; j++) {
		
		//add a td to row
		//console.log("td" + j);
		$("tr").last().append($("<td></td>"));
    }
}

//color pixel square when clicked function
$("#pixelCanvas").on("mousedown mouseover", "td", function(e) {
    if (e.buttons===1){
		
		if (draw===true) { //global variable check
			//change background-color of event target's
			$(this).css("background-color",$("#colorPicker").val());
		} else {
			//console.log("erases!"); //test
			$(this).css("background-color","");
		}
	}
});


//Toggle between draw/eras
$("input[name='tool']").on("change", function() {
	
	//console.log($(this).val());
	console.log("Before conditional draw value = ", draw);
	
	//get value of the "changed" input
	if ($(this).val() === "draw"){
		draw = true; //change global variable
	}
	else if ($(this).val() === "erase"){
		draw = false; //change global variable
	}
	console.log("After conditional draw value = ", draw);
	
});

console.log(width, height);
}
