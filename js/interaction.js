let draw = true;

console.log("hi");
// Select color input
console.log($("#colorPicker").val());
// Select size input
console.log($("#inputWidth").val());
console.log($("#inputHeight").val());

// When size is submitted by the user, call makeGrid()
//EVENT HANDLERS
$("input[type='submit']").on("click",function(event) {
    event.preventDefault();
    console.log("Your pressed me.");

    const height = $("#inputHeight").val();
    const width = $("#inputWidth").val();

    $("#pixelCanvas").empty();
    makeGrid(height, width);
});

function makeGrid(height, width) {

//for number up to height
for (let i = 0; i < height; i++) {

    //create a row
  	console.log("row" + i);
    // console.log("row"+ i);
    $("#pixelCanvas").append($("<tr></tr>"));

    //for number up to width
    for (let j = 0; j < width; j++) {

        //add a td to row
        console.log("td" + j);
        $("tr").last().append($("<td></td>"));
    }

}

//color square when clicked function
$("#pixelCanvas").on("mousedown mouseover", "td", function(e) {
    if (e.buttons===1){
    
        if (draw===true) { //global var check
            //change background color of event target's
            $(this).css("background-color",$("#colorPicker").val());
        } else {
            console.log("this is erasing!");
            $(this).css("background-color","");
        }
    }
});


//toggle between draw/eraser
$("input[name='tool']").on("change", function() {

    // console.log($(this).val());
    console.log("Before conditional draw value=",draw);

    //get value of "changed" input
  	console.log($(this).val());
    if ($(this).val() === "draw"){
        draw=true; //change global var
    }
    else if ($(this).val()==="erase"){
        draw=false; //change global var
    }

    console.log("After conditional draw value=",draw);
});
    

// Your code goes here!
console.log(width, height);
}
