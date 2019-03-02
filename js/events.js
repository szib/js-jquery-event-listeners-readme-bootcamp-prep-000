//define functions here
function getIt() {
  $('p').on('click', {
    
  window.alert('Hey!')
  })
}

function frameIt() {
  $('img').addClass('tasty')
}

function pressIt() {
    window.alert('G was pressed.')
}

function submitIt() {
  window.alert('Your form is going to be submitted now.')
}

$(document).ready(function(){

// call functions here
  $('p').on('click', getIt)
  $('img').on('load', frameIt)
  $('#typing').on('keydown', function(keyEvent) {
    if (keyEvent.keyCode === 71) {
      pressIt()
    }
  })
  $('form').on('submit', submitIt)
});


