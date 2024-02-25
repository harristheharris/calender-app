// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//we save whatever they input and the location they input it in aka the time block
function saveItem(x) {
  //console.log("This is blue devil! Do you copy HQ?! HQ?! We're in the saveItem() function and need orders!!!");

  console.log(x);
  var savedTasks = JSON.parse(localStorage.getItem(x.theTime));

  savedTasks = savedTasks || []; //this is so cool. We asign savedTasks to itself or if savedTasks is empty/null it will asign savedTasks to an empty array. Big fan of this. Quick and short 
  savedTasks.push(x);

  localStorage.setItem(x.theTime, JSON.stringify(savedTasks));
  console.log(savedTasks);
}

function validateData(isTaskempty) {

  console.log("inside validateData function");

  console.log(isTaskempty.theTask);

  if (isTaskempty.theTask === ' ') {
    let truthValue = false;
    //console.log("Task input field empty");
    return truthValue;
  }

  else {
    let truthValue = true;
    //console.log("Task input field filled");
    return truthValue;

  }
  
}

function whatTimeisIt() {

  //console.log(taskAndtime);
  let currentHour = dayjs().get('hour');
  //let currentHour = 10;
  //let currentMinute = dayjs().get('minute');
  console.log("This is the current hour: " + currentHour);
  //console.log(currentMinute);


  $(".container-fluid").children().each(function () {

  
    let timeTocompare = $(this).data("time");
    let oneKey = $(this).attr("id")
    console.log(oneKey);
    console.log("This is the time to compare: " + timeTocompare);

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

    renderData(oneKey);

  });

}

function renderData(key) {
  console.log(key);
  
  let savedTasks = JSON.parse(localStorage.getItem(key));
  console.log(savedTasks);
  console.log(key);
  let div = document.getElementById(key);
  console.log(div);

  let textarea = $(div).children('textarea');

  console.log(textarea);
  if (savedTasks === null || savedTasks.length === 0) {
    return
  }

  else {
    let draw = savedTasks.length -1;
    let task = savedTasks[draw].theTask;
    console.log(task);
    console.log(textarea);
    let txt = textarea.value = task;
    document.getElementById(key).querySelector('textarea').innerText = txt;
  }
//console.log(taskAndtime.theTask);
 //localStorage.clear();
}

function displayDate(){
 
  let aYear = dayjs().get('year');
  let aMonth = dayjs().get('month');
  let aDate = dayjs().get('date');
  console.log(aMonth);
  let proxyDate = aMonth + 1 + "-" + aDate + "-" + aYear; //why in the hell does month starts at 0 lol
  
  let currentDate = dayjs(proxyDate).format('MM/DD/YYYY');
  console.log(currentDate);
  $("#currentDay").text(currentDate);

}


//-------------------------------------------------------------------------------------------------------------------------------

$(function () {

  displayDate();
  whatTimeisIt();
  

  //we are pointing at the button using the 'this' keyword. Once we point at the button we specify further with the parent() method. This specifies that we are looking at the parent element  of the 'this' aka the button. We specify further with the attr() which, in this case, grabs the id of that parent element
  $(".saveBtn").on("click", function (taskAndtime) {

    var keyTotheCastle = $(this).parent().attr("id");
    var taskInput = $(this).siblings("textarea").val();
    var taskAndtime = {};
  
    taskAndtime.theTask = taskInput;
    taskAndtime.theTime = keyTotheCastle;
  
    console.log(taskAndtime);

    /* let keyTotheCastle = $(this).parent().attr("id");
    let taskInput = $(this).siblings("textarea").val();
    var taskAndtime = {};
  
    taskAndtime.theTask = taskInput;
    taskAndtime.theTime = keyTotheCastle;
    
    console.log(taskAndtime); */
    //console.log($(this).parent().attr("id"));
    //var taskAndtime = {theTask: task , theTime: key};
    //console.log(taskAndtime.theTime);
    //console.log(taskAndtime.theTask);
    //console.log(taskAndtime);

    let x = validateData(taskAndtime); //this validate that the taskInput is not empty. It still fills the array with a blank taskInput

    if (x == true){
      saveItem(taskAndtime)
    }




  });


});
