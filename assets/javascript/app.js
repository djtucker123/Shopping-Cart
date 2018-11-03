$(document).ready(function() {
  
  //dynamic array of contents in shopping Cart -- also on index.js, but sot sur eit is working to recreating here with sample
  // DYNAMICALLY CREATE BUTTONS that match products for sale

  const render = function() {

    // 1. Create a for-loop to iterate through the letters array.
    for( let i = 0; i < beerList.length; i++ ) {

      // 2. Create a variable named "beerBtn" equal to $("<button>");
      const beerBtn = $('<button>');

      // 3. Then give each "beerBtn" the following classes: "beer-button" "beer" "beer-button-color".
      beerBtn.addClass('beer-button beer beer-button-color');

      // 4. Then give each "beerBtn" an attribute called "beer-name", and "beer-type" with a value eqaual to "beerList[i] array"
      beerBtn.attr('beer-name', beerList[i].name);
      beerBtn.attr('beer-type', beerList[i].type);

      // 5. Then give each "beerBtn" a text equal to "beertList[i]" - this is what is listed on the button face.
      beerBtn.text(beerList[i].name);

      // 6. Finally, append each "beerBtn" to the "#buttons" div (provided).
      $('#inventory').append(beerBtn);
     
    }
  }
  
  render();

  //  ATTACH ON-CLICK EVENTS TO "inventory" BUTTONS
  
  const appendTask = function() {
    
    // Inside the on-click event...  initially this was puttign placeholder into shopping cart -- when I made them active buttons, I retained the logic for duplicates and removed the append to shopping cart portion
    // 8. Create a variable called "task" and set the variable equal to a new div.--this should be cleaned up as it is sloppy with some leftovers to remove
    // 9. Give each "task" the following classes: "beer task-color".
    const task = $('<div>').addClass('beer task-color');
    let beerName = '';
    
    // 10. Then chain the following code onto the "task" variable: .text($(this).attr("data-beer"))
    task.text($(this).attr("beer-name"));
    beerName = $(this).attr("beer-name");

  if (cartContent.includes(beerName)) {
    alert(" Sorry, that is already in the shopping cart! ");

   } else {
    cartContent.push(beerName);
   // $('#shoppingCart').append(task);
    //console.log(beerName);
    //console.log(cartContent);
   renderCart();
   }

  }

  // 7. Create an "on-click" event attached to the ".beer-button" class to push inventory into shoping cart when pressed.
  $('#inventory').on('click', '.beer-button', appendTask);
  //crate onclick events for the .beer-button if the sorted inventory is in play
  $('#ale').on('click', '.beer-button', appendTask);
  $('#lager').on('click', '.beer-button', appendTask);
  $('#weiss').on('click', '.beer-button', appendTask);
  $('#other').on('click', '.beer-button', appendTask);




  // ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON to empty the shopping cart
    const clear = function() {
    // Inside the on-click event...
    // 13. Use the jQuery "empty()" method to clear the contents of the "#shoppingCart" div.
    $('#shoppingCart').empty();
   //clear cartContent array 
    cartContent = [];
  }
  // 12. Create an "on-click" event attached to the "#clear" button id.
  $('#clear').on('click', clear);



  // ATTACH ON-CLICK EVENTS TO "FILTER" BUTTON to re-order the product for sale list -- 
  const renderFilter = function() {
    // when filter button pressed, clear the "inventory section DIV to hide all original inventory buttons"  then insert new inventory sorted by beer type
    $('#inventory').empty();
    $('#ale').empty();
    $('#lager').empty();
    $('#weiss').empty();
    $('#other').empty();
    //add text tag to the 4 type sections to make them 'visible' this could shift to loop through "type array" in event of a true -large stor and inventory listing not 1 line per type
$('#ale').append('<h3>Ale</h3>');
$('#lager').append('<h3>Lager</h3>');
$('#weiss').append('<h3>Weiss</h3>');
$('#other').append('<h3>Other</h3>');




    // Inside the on-click event...
    // Need to clear the existign button list and replace with new button list that includes filter breaks and groupings
    // ++++++++++clear Left side of Page.********************
          // 1. Create a for-loop to iterate through the letters array.
      for( let i = 0; i < beerList.length; i++ ) {
      
        // 2. Create a variable named "beerBtn" equal to $("<button>");  this may be issue with rendering button functionality as will not be in DOM/JQuery options
        const beerBtn = $('<button>');
  
        // 3. Then give each "beerBtn" the following classes: "beer-button" "beer" "beer-button-color".
        beerBtn.addClass('beer-button beer beer-button-color');
  
        // 4. Then give each "beerBtn" an attribute called "data-beer", with a value eqaual to "beerList[i]"
        beerBtn.attr('beer-name', beerList[i].name);
        const beerType = beerList[i].type;
        console.log(beerType);
  
        // 5. Then give each "beerBtn" a text equal to "beertList[i]".
        beerBtn.text(beerList[i].name);
  
        // 6. Finally, append each "beerBtn" to the "#filteredButtons id -- target is section name held in "type" in index.js array --
        //  - how to target the section id for apending button??????? could shift to array type label and append if .type exists as "div""
        if (beerType === 'ale') {
            $('#ale').append(beerBtn);
        } else if (beerType ==='lager') {
            $('#lager').append(beerBtn);
        } else if (beerType ==='weiss') {
            $('#weiss').append(beerBtn);
        } else {
            $('#other').append(beerBtn);
        }
      }
  }
             


  // 12. Create an "on-click" event attached to the "#Filter" button id.
 $('#filter').on('click', renderFilter);






//new section -- onclick buttons that are going form inventory to shopping cart - push to carcontent array, and then render the shopping cart as a bunch of buttons -- so onclick of those buttons will delete them from cartContent Array, and shopping cart at same time - 
//each click has to re-render the shopping cart contents -- this is brutal and not efficient method -- has to be better option  maybe replace appendtask and initial render process as this may work for both?? 
const renderCart = function() {
  $('#shoppingCart').empty();
  
    // 1. Create a for-loop to iterate through the letters array.
    for( let i = 0; i < cartContent.length; i++ ) {
  
      // 2. Create a variable named "cartBtn" equal to $("<button>");
      const cartBtn = $('<button>');
  
      // 3. Then give each "cartBtn" the following classes: "cart-button" "cart" "cart-button-color".
      cartBtn.addClass('cart-name');
  
      // 4. Then give each "cartBtn" an attribute called "cart-name", and "cart-type" with a value eqaual to "cartContent[i] array"
      cartBtn.attr('cart-name', cartContent[i]);
      cartBtn.attr('value', cartContent[i]);
  
      // 5. Then give each "cartBtn" a text equal to "cartContent[i]" - this is what is listed on the button face.
      cartBtn.text(cartContent[i]);
  
      // 6. Finally, append each "cartBtn" to the "#shoppingCart" div.
      $('#shoppingCart').append(cartBtn);
  
      
     
    }
  }
  
  renderCart();
  


// // add onclick events to shopping cart buttons and remove them from cart if pressed -- retreive name of button pressed in cart, find its INDEX # from cartContent, then delete it, and re-render the cart which removes the button and 
// it is no longer in cartContent Array, it can be re-added to the cart after
const removeFromCart = function() {
//  console.log('greetings beer lover');
  tester = $(this).attr("cart-name");
//  console.log(tester);
const index = cartContent.indexOf(tester);
//console.log(index);
//console.log(cartContent);
// delete the identified beer from shopping cart
cartContent.splice(index, 1);
//console.log(cartContent);
renderCart();

  }
  
    
  $('#shoppingCart').on('click', '.cart-name', removeFromCart);
  
  

});









