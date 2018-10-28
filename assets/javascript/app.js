$(document).ready(function() {
  // Here we are provided an initial array of projects.
  // Use this array to dynamically create buttons on the screen.
  var projectList = [
    'MagnaLab Refactor',
    'MagnaLab Expansion',
    'GitGame Discovery Phase',
    'GitGame Project Meeting',
    'GitGame Prototype',
    'Delthon Security Check',
    'First Bank Security Check',
    'Thinternet Login',
    'Thinternet Database Migration'
  ];

  // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
  // =================================================================================
  const render = function() {

    // 1. Create a for-loop to iterate through the letters array.
    for( let i = 0; i < projectList.length; i++ ) {

      // 2. Create a variable named "projBtn" equal to $("<button>");
      const projBtn = $('<button>');

      // 3. Then give each "projBtn" the following classes: "proj-button" "proj" "proj-button-color".
      projBtn.addClass('proj-button proj proj-button-color');

      // 4. Then give each "projBtn" an attribute called "data-proj", with a value eqaual to "projectList[i]"
      projBtn.attr('data-proj', projectList[i]);

      // 5. Then give each "projBtn" a text equal to "projectList[i]".
      projBtn.text(projectList[i]);

      // 6. Finally, append each "projBtn" to the "#buttons" div (provided).
      $('#buttons').append(projBtn);
    }
  }
  
  render();
  // Be sure to test that your code works for this major task, before proceeding to the next one!

  // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "PROJECT" BUTTONS
  // =================================================================================
  const appendTask = function() {

    // Inside the on-click event...
    // 8. Create a variable called "task" and set the variable equal to a new div.
    // 9. Give each "task" the following classes: "proj task-color".
    const task = $('<div>').addClass('proj task-color');

    // 10. Then chain the following code onto the "task" variable: .text($(this).attr("data-proj"))
    task.text($(this).attr("data-proj"));

    // 11. Lastly append the task variable to the "#display" div (provided);
    $('#shoppingCart').append(task);
  }

  // 7. Create an "on-click" event attached to the ".proj-button" class.
  $('#buttons').on('click', '.proj-button', appendTask)
    
  // Be sure to test that your code works for this major task, before proceeding to the next one!

  // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
  // =================================================================================
  const clear = function() {

    // Inside the on-click event...
    // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
    $('#shoppingCart').empty();
  }

  // 12. Create an "on-click" event attached to the "#clear" button id.
  $('#clear').on('click', clear);

  

  
});