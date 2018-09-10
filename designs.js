// Select color input
console.log($('#colorPicker').val()); //jquery
// const colorPicker = document.querySelector('#colorPicker').value;
// console.log(colorPicker);

// Select size input
console.log($('#inputHeight').val());  //jquery
// const inputHeight = document.querySelector('#inputHeight').value;
// console.log(inputHeight);
console.log($('#inputWidth').val());  //jquery
// const inputWidth = document.querySelector('#inputWidth').value;
// console.log(inputWidth);

//Submit button
$("input[type='submit']").on("click",function(event) {
    event.preventDefault();
    console.log("clicked!");

    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();

    $('#pixelCanvas').empty();
    makeGrid(height, width);
    
});

// // When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

    // for number to build height
    for (let i = 0; i < height; i++) {
        // console.log('tr' + i); // pseudo code for creating a row
        $('#pixelCanvas').append($('<tr></tr>'));

        // for number to build width
        for (let j = 0; j < width; j++) {
            // console.log('td' + j); // pseudo code for creating a column
            $('tr').last().append($('<td></td>'));  //last method only adds <td> to the last row
        }
    }

}

// color square when clicked function
// using event delegation
$('#pixelCanvas').on('click', 'td', function() {
   
    // change background color of event target's
    //console.log('pixel clicked!'); //test
    //$('td').css('background-color', 'green'); //test - need to use this
    //$(this).css('background-color', 'green');  //test
    $(this).css('background-color', $('#colorPicker').val());
});

