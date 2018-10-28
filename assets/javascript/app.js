$(document).ready(function() {
  // Here we are provided an initial array of projects.
  // Use this array to dynamically create buttons on the screen.
  //dynamic array of contents in shopping Cart -- also on index.js, but sot sur eit is working to recreating here with sample
  var productList = [
    'one',
    'two'
  ];

  // DYNAMICALLY CREATE BUTTONS
  // =================================================================================

  const render = function() {

    // 1. Create a for-loop to iterate through the letters array.
    for( let i = 0; i < beerList.length; i++ ) {

      // 2. Create a variable named "projBtn" equal to $("<button>");
      const projBtn = $('<button>');

      // 3. Then give each "projBtn" the following classes: "proj-button" "proj" "proj-button-color".
      projBtn.addClass('proj-button proj proj-button-color');

      // 4. Then give each "projBtn" an attribute called "data-proj", with a value eqaual to "beerList[i]"
      projBtn.attr('data-proj', beerList[i].name);


      // 5. Then give each "projBtn" a text equal to "beertList[i]".
      projBtn.text(beerList[i].name);

      // 6. Finally, append each "projBtn" to the "#buttons" div (provided).
      $('#buttons').append(projBtn);
      //console.log(projBtn.'data-proj');
    }
  }
  
  render();


  // Be sure to test that your code works for this major task, before proceeding to the next one!

  //  ATTACH ON-CLICK EVENTS TO "PRODUCT" BUTTONS
  // =================================================================================
  const appendTask = function() {
    
    // Inside the on-click event...
    // 8. Create a variable called "task" and set the variable equal to a new div.
    // 9. Give each "task" the following classes: "proj task-color".
    const task = $('<div>').addClass('proj task-color');
    let beerName = '';
    //console.log(beerName);
    // 10. Then chain the following code onto the "task" variable: .text($(this).attr("data-proj"))
    task.text($(this).attr("data-proj"));
    beerName = $(this).attr("data-proj");
    cartContent.push(beerName);
    console.log(beerName);
    console.log(cartContent);
    // 11. Lastly append the task variable to the "#shoppingCart" div;
    
    $('#shoppingCart').append(task);

  }

  // 7. Create an "on-click" event attached to the ".proj-button" class.
  $('#buttons').on('click', '.proj-button', appendTask)
    
  // Be sure to test that your code works for this major task, before proceeding to the next one!

  // ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON to empty the shopping cart
  // =================================================================================
  const clear = function() {

    // Inside the on-click event...
    // 13. Use the jQuery "empty()" method to clear the contents of the "#shoppingCart" div.
    $('#shoppingCart').empty();
  }

  // 12. Create an "on-click" event attached to the "#clear" button id.
  $('#clear').on('click', clear);

  

  
});