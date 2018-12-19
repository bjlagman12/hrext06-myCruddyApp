$(document).ready(function(){
  console.log('jQuery loaded');
  var counter = 0

  // need to access additional expenses
 

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
    localStorage.setItem('paycheck',$('.entry-paycheck').val());
    localStorage.setItem('saving',$('.entry-saving').val());
    localStorage.setItem('investing',$('.entry-invest').val());
    localStorage.setItem('rent',$('.entry-rent').val());
    localStorage.setItem('bills',$('.entry-bills').val());
    localStorage.setItem('food',$('.entry-food').val());

    // console.log($('.entry-name').val())
    // $('.list-display-field').append('<div>' + myNameInStorage+ '</div>');
  
  });

  // add more inputs when button is pressed
  
  $('.btn-add').on('click',function(){
    // var counter = $('.')
    var entryAddOns = 'entry-add-expenses' + counter
    var newExpenses = 'addexpenses' + counter;
    var btnSubmit = 'btn-submit' + counter;
    var btnDelete = 'btn-delete' + counter;

    counter++;
    
    // console.log(entryAddOns)
    $('.all_text_entry').append('<input class="' + entryAddOns + '" type="text" placeholder="Additional Expenses"><button class="' + btnSubmit + '" type="button">submit</button><button class="' + btnDelete +'" type="button">delete</button>')

      $('.' + btnSubmit).on('click',function(){
        localStorage.setItem(newExpenses,$('.'+ entryAddOns).val())
        // console.log(entryAddOns)
      })

      $('.'+ btnDelete).on('click',function(){

        localStorage.removeItem(newExpenses)
        $('.'+ entryAddOns).remove()
        $('.'+ btnSubmit).remove()
        $('.'+ btnDelete).remove()
      
      })

    
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