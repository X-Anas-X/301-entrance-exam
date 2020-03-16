'use strict';
var coursesArr = [];


function Course(name){
  this.name = name;
  coursesArr.push(this);
  setItem();

}
function setItem(){
  var pickedCourse = JSON.stringify(coursesArr);
  localStorage.setItem('course Name', pickedCourse);
}

function getItem(){
  var myCourse = localStorage.getItem('myCourse');
  coursesArr = JSON.parse(myCourse);

}
for(var j=0; j< coursesArr.length; j++){
  new Course(coursesArr[j]);
}


var form = document.getElementById('forms');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var firstLine = event.target.course.value;
  var dateLine = event.target.start.value;
});




function results(){
  var finalCourses = document.getElementById('shownCourses');
  for(var n=0; n<coursesArr.length; n++){
    var lists = document.createElement('li');
    finalCourses.appendChild(lists);
    lists.textContent = coursesArr[n].name;
  }
}
results();
getItem();


