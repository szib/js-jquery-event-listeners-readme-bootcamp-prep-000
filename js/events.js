//define functions here
function getIt() {
  $('p').on('click', function() {
    window.alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(keyEvent) {
    if (keyEvent.which === 71) {
      window.alert('G was pressed.')
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    window.alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
});


