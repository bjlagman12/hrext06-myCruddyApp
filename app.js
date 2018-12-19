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
  $('.btn-submit').one('click', function(e){

    localStorage.setItem('name', $('.entry-name').val());
    localStorage.setItem('age', $('.entry-age').val());
    localStorage.setItem('paycheck',$('.entry-paycheck').val());
    localStorage.setItem('saving',$('.entry-saving').val());
    localStorage.setItem('investing',$('.entry-invest').val());
    localStorage.setItem('rent',$('.entry-rent').val());
    localStorage.setItem('bills',$('.entry-bills').val());
    localStorage.setItem('food',$('.entry-food').val());

    $('.basic_info').append('<div>' + e.view.localStorage.name + '</div>')
    $('.basic_info').append('<div>' + e.view.localStorage.age + '</div>')

    $('.expense_list').append('<li>' + e.view.localStorage.paycheck + '</li>')
    $('.expense_list').append('<li>' + e.view.localStorage.saving + '</li>')
    $('.expense_list').append('<li>' + e.view.localStorage.investing + '</li>')
    $('.expense_list').append('<li>' + e.view.localStorage.rent + '</li>')
    $('.expense_list').append('<li>' + e.view.localStorage.bills + '</li>')  
    $('.expense_list').append('<li>' + e.view.localStorage.food + '</li>')
  
  });

  // add more inputs when button is pressed
  $('.btn-add').on('click',function(){

    var entryAddOns = 'entry-add-expenses' + counter
    var newExpenses = 'new-entry-expense' + counter;
    var btnSubmit = 'btn-submit' + counter;
    var btnDelete = 'btn-delete' + counter;

    counter++;
    
    $('.all_text_entry').append('<input class="'+ newExpenses +'" type="text" placeholder="Additional Expenses"><input class="' + entryAddOns + '" type="text" placeholder="Cost"><button class="' + btnSubmit + '" type="button">submit</button><button class="' + btnDelete +'" type="button">delete</button>')

      $('.' + btnSubmit).on('click',function(){
        localStorage.setItem($('.'+ newExpenses).val(),$('.'+ entryAddOns).val())
      })

      $('.'+ btnDelete).on('click',function(){
        localStorage.removeItem(newExpenses)
        $('.'+ newExpenses).remove()
        $('.'+ entryAddOns).remove()
        $('.'+ btnSubmit).remove()
        $('.'+ btnDelete).remove()
      })
  });

  // // delete from local storage when delete button clicked
  // $('.btn-delete').on('click', function(){
  //   counter--
  //   console.log(counter)
  // });

  // clear everything
  $('.btn-clear').on('click', function(){
    localStorage.clear()
  });

});