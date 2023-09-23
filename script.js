var date = $("#currentDay")
let classTime = $(".time-block")
var testTime = 9
let button = $('saveBtn')
$(document).ready(function(){
  date.text(dayjs().format('dddd, MMMM, DD'))
  var currentHour = parseInt(dayjs().format('H'))
  function checkTime(){
  classTime.each(function(){
    var id = parseInt($(this).attr('id'))
    if(id > testTime){
      $(this).removeClass('past present').addClass('future')  
    } else if (id === testTime){
      $(this).removeClass('past future').addClass('present')     
    } else if(id < testTime){
      $(this).removeClass('present future').addClass('past')
    }
  })
}
setInterval(checkTime, 1000)
  $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  });
  $('.saveBtn').click(function(){
    var id = $(this).parent().attr('id')
    var text = $(this).siblings('textarea')
    var textVal = text.val()
    localStorage.setItem(id, textVal)
  })
}

)

