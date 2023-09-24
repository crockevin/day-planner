var date = $("#currentDay")
let times = $(".time-block")
let appointment = $('#currentDay')
let saveButton = $('.saveBtn')

$(document).ready(function () { // Starts function when everyting loads in
  function startUpCheckTime() {// On start itll call the checkTime so it will chagne colors right away and not waita second
    checkTime()
  }
  startUpCheckTime()
  date.text(dayjs().format('dddd, MMMM, DD'))// show the current day of the week, month, day
  var currentHour = parseInt(dayjs().format('H'))// Gets current hour
  function checkTime() {// 
    times.each(function () { // Loops through each time-block class
      var id = parseInt($(this).attr('id')) // sets id to the div id as an  int
      if (id > currentHour) { 
        $(this).removeClass('past present future').addClass('future')// removes all time classes and adds appropiate class
      } else if (id === currentHour) {
        $(this).removeClass('past present future').addClass('present')
      } else if (id < currentHour) {
        $(this).removeClass('past present future').addClass('past')
      }
    })
  }
  times.each(function () { // Loops through each time-block class
    var id = $(this).attr('id') // sets id to the div id
    var textLocation = $(this).find('textarea')
    var hourText = localStorage.getItem(id)
    if (hourText) { // checks to see if hourText has something
      textLocation.text(hourText)
    }
  })
  setInterval(checkTime, 1000) // runs checkTime every second
  saveButton.click(function () { // event listener for every save button
    var id = $(this).parent().attr('id')
    var text = $(this).siblings('textarea')
    var textVal = text.val()
    localStorage.removeItem(id)// remove local storager based on id of save button parent id
    if (!(textVal.trim() === '')) { // checks to see if textVal is empty
      localStorage.setItem(id, textVal)
      appointment.children().remove('#appendedMessage')// removes last append
      let appendMessage = $('<p>').attr('id', 'appendedMessage').text('Appointment added to LocalStorage✅')
      appointment.append(appendMessage)
    }
  })
}
)

