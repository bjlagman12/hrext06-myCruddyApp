$(document).ready(function(){
  console.log('jQuery loaded');
  var counter = 0
  // set name
  var myNameInStorage = localStorage.getItem('name');
  // set age
  var myAgeInStorage = localStorage.getItem('age');
  // set paycheck
  var myPayCheckInStorage = localStorage.getItem('payCheck');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    localStorage.setItem('name', $('.entry-name').val());
    localStorage.setItem('age', $('.entry-age').val());
    localStorage.setItem('paycheck',$('.entry-paycheck').val())

    var newExpenses = 'addexpenses' + counter
    // console.log(counter)

    // console.log(newExpenses)
    localStorage.setItem(newExpenses,$('.add-expenses').val())

    // console.log($('.entry-name').val())

    // display the value here
    // for(var i = 0; i < localStorage.length; i++){



    // }
    $('.list-display-field').append('<div>' + myNameInStorage+ '</div>');
  


  });

  // add more inputs when button is pressed
  
  $('.btn-add').on('click',function(){
    // var counter = $('.')
    
    counter++;
    console.log(counter)
    $('.all_text_entry').append('<input class="addexpenses" type="text" placeholder="Additional Expenses"><button class="btn-delete" type="button">delete</button><br>')


  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    counter--
    console.log(counter)
    // localStorage.removeItem('');
  });

  // clear everything
  $('.btn-clear').on('click', function(){
    localStorage.clear()
  });

});