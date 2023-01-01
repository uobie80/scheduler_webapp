// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // 
    var saveButtonEl1 = document.querySelectorAll(".saveBtn"); //This statement obtains all the save button elements

    var saveUserInput = function(event) {
      /*
       This function saves the user input- 
       -so that it persists when the page is refreshed.
      */

      event.stopPropagation(); //This statement was added to prevent other click handlers further up from receiving the click event

      var parentEl1 = this.parentNode.id; //This statement obtains the id of the DIV which contains the button that was clicked
      var textAreaEl1 = this.parentNode.children[1]; //This statement obtains the textarea element that corresponds to the button that was clicked

      console.log(parentEl1); //This statement outputs the id value of the DIV 
      console.log(textAreaEl1); //This statement outputs the textarea element associated with the button which was clicked
    
  
  }
  
  //This statement attaches the on-click handler to each of the save buttons
  for (var i = 0; i < saveButtonEl1.length; i++) {
    saveButtonEl1[i].addEventListener("click", saveUserInput);
}
  
  
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
