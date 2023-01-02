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

      var divEl1Id = this.parentNode.id; //This statement obtains the id of the DIV which contains the button that was clicked
      var divTimeBlockEl1 = document.getElementById(divEl1Id)
      var textAreaEl1 = this.parentNode.children[1]; //This statement obtains the textarea element that corresponds to the button that was clicked
      var userInput = textAreaEl1.value;  //This statement gets the value of the user input

      console.log(divEl1Id); //This statement outputs the id value of the DIV 
      console.log(textAreaEl1); //This statement outputs the textarea element associated with the button which was clicked
      console.log(userInput); //This statement outputs the value of the user input
    
      localStorage.setItem(divEl1Id, userInput); //This statement saves the user input associated with the id of the div element that contains the input field into local storage
      changeElementAttribute(divTimeBlockEl1, divEl1Id);
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

  var modifyElementClass = function(element, className) {
    /*
     This function takes two parameters the timeblock div element 
     and the CSS class that needs to be added to the element.
     It removes the current css class associated with the element 
     and replaces it with the css class passed into this function.
    */

   var currentCSSClass = element.classList[2]; //This statement gets the CSS class that needs to be replaced
   element.classList.remove(currentCSSClass); // This statement removes the CSS class from the list of CSS class for the element
   element.classList.add(className);  //This statement replaces the removed CSS class with the CSS class passed into this function
 
  }



  var changeElementAttribute = function(divElement, key) {

    /*
     This function uses day.js library to get the current hour of the day in 24 hour format.
      Then it compares the current hour to the hour associated with the save button that was clicked.
      Then it calls a helper function to modify the CSS class of the element associated with the save button that was clicked.
    */

    var currentHour = dayjs().hour(); //This statement uses Day.js to obtain the current hour of the day in 24 hour time
    var hourFromLocalStorage = key.substring(5); //This statement obtains the hour associated with the save button that was clicked.
    var className = "";  //Initialize CSS classname variable

    if (currentHour < hourFromLocalStorage) {
       // Scheduled in future 
       className = 'future';
       modifyElementClass(divElement, className);

    } else if (currentHour > hourFromLocalStorage) {
       // Scheduled in past
       className = 'past';
       modifyElementClass(divElement, className);
    } else {
      // Scheduled in present
      className = 'present';
      modifyElementClass(divElement, className);
    }
   
    

  }


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


    const localStorageItems = { ...localStorage }; //This statement gets all the key value pair items in local storage and stores it into a new object
   // console.log(localStorageItems);
    
     //loop through all entries in local storage
    for (const [key, value] of Object.entries(localStorageItems)) { 
      var divElement = document.getElementById(`${key}`);  //This statement obtains the div time block associated with the unique id.
      var textAreaElement = divElement.children[1]; // This statement obtains the textarea element associated with the div time block element for the save button that was clicked.
      textAreaElement.value = `${value}`; // this statement sets the value of the text area to the corresponding value for the id pulled from local storage. 
      changeElementAttribute(divElement, `${key}`); //This statement calls a function to set the background color of the textarea input.
      
    }


});
