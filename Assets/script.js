// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//we save whatever they input and the location they input it in aka the time block
function saveItem(task , key) {
  console.log("This is blue devil! Do you copy HQ?! HQ?! We're in the saveItem() function and need orders!!!");
 
  console.log("adding this task: " + task + " This task is associated with this time: " + key);
  
  
  //var taskAndtime = {theTask: task , theTime: key};
  var taskAndtime = {};
  taskAndtime.theTask = task;
  taskAndtime.theTime = key;
  console.log(taskAndtime.theTime);
  console.log(taskAndtime.theTask);
  console.log(taskAndtime);

  var savedTasks = JSON.parse(localStorage.getItem(key));

  savedTasks.push(taskAndtime);

  localStorage.setItem(key, JSON.stringify(savedTasks));
  

}

$(function () {

  var newTask = {};

  $(".saveBtn").on("click" , function (){
  console.log($(this).parent().attr("id"));

      let taskInput = $(this).siblings("textarea").val();
      console.log(taskInput);
      let keyTotheCastle = $(this).parent().attr("id");
      let savedTask = taskInput;
      console.log(savedTask);

    saveItem(taskInput , keyTotheCastle);
  });
 //we are pointing at the button using the 'this' keyword. Once we point at the button we specify further with the parent() method. This specifies that we are looking at the parent element  of the 'this' aka the button. We specify further with the attr() which, in this case, grabs the id of that parent element



  

  // TODO: Add a listener for click events on the save button.
  // This code should use the id in the containing time-block as a key to save the user input in local storage. 
  // HINT: What does `this` reference in the click listener function?
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  // HINT: How can the id attribute of each time-block be used to do this?
  // TODO: Add code to display the current date in the header of the page.
});
