// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//we save whatever they input and the location they input it in aka the time block
function saveItem(taskAndkey) {
  console.log("This is blue devil! Do you copy HQ?! HQ?! We're in the saveItem() function and need orders!!!");

  console.log(taskAndkey);
  var savedTasks = JSON.parse(localStorage.getItem(taskAndkey.theTime));

  savedTasks = savedTasks || []; //this is so cool. We asign savedTasks to itself or if savedTasks is empty/null it will asign savedTasks to an empty array. Big fan of this. Quick and short 
  savedTasks.push(taskAndkey);

  localStorage.setItem(taskAndkey.theTime, JSON.stringify(savedTasks));

}

function validateData(isTaskempty) {

  console.log("inside validateData function");
  console.log(isTaskempty);

  if (isTaskempty.theTask === ' ') {
    let truthValue = false;
    console.log("Task input field empty");
    return truthValue;
  }

  else {
    let truthValue = true;
    console.log("Task input field filled");
    saveItem(isTaskempty);
    return truthValue;

  }

}

function whatTimeisIt() {

  let currentHour = dayjs().get('hour');
  //let currentHour = 10;
  let currentMinute = dayjs().get('minute');
  console.log(currentHour);
  console.log(currentMinute);


  $(".container-fluid").children().each(function () {

    let currentDiv = $(".container-fluid").children();

    let timeTocompare = $(this).data("time");
    console.log(timeTocompare);

    if (timeTocompare == currentHour) {

      console.log("red");
      console.log(this);
      $(this).addClass("present")

    }

    if (timeTocompare < currentHour) {

      console.log("white");
      console.log(this);
      $(this).addClass("past")

    }

    if (timeTocompare > currentHour) {

      console.log("green");
      console.log(this);
      $(this).addClass("future")
    }
  });

}


$(function () {

  whatTimeisIt();



  //we are pointing at the button using the 'this' keyword. Once we point at the button we specify further with the parent() method. This specifies that we are looking at the parent element  of the 'this' aka the button. We specify further with the attr() which, in this case, grabs the id of that parent element
  $(".saveBtn").on("click", function () {
    console.log($(this).parent().attr("id"));


    let taskInput = $(this).siblings("textarea").val();

    console.log(taskInput);
    let keyTotheCastle = $(this).parent().attr("id");

    //var taskAndtime = {theTask: task , theTime: key};
    var taskAndtime = {};
    taskAndtime.theTask = taskInput;
    taskAndtime.theTime = keyTotheCastle;
    console.log(taskAndtime.theTime);
    console.log(taskAndtime.theTask);
    console.log(taskAndtime);

    validateData(taskAndtime); //this validate that the taskInput is not empty. It still fills the array with a blank taskInput

  });

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
