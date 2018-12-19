$(document).ready(function(){
  console.log('jQuery loaded');
  var counter = 0
  
  var liMaker = function(name,gift){
    $('.list').append('<li class="'+name+'">'+name +'</li><div class="'+gift+'">' + gift + '</div>')
  }



  // add key and value into the local storage
  $('.btn-submit').on('click',function(){
    localStorage.setItem($('.entry-name').val(),$('.entry-gift').val() )

    liMaker($('.entry-name').val(),$('.entry-gift').val())
   
  });

   $('.btn-delete').on('click',function(){
    localStorage.removeItem($('.entry-name').val())

    var firstName = $('.entry-name').val();
    var firstGift = $('.entry-gift').val();

    $('.'+firstName).remove();
    $('.'+firstGift).remove();


   
  });
  // add more inputs when button is pressed
  $('.btn-add').on('click',function(){

    var newGift = 'new-gift' + counter
    var newPerson = 'new-person' + counter;
    var btnSubmit = 'btn-submit' + counter;
    var btnDelete = 'btn-delete' + counter;

    counter++;
    
    $('.new_xmas_entry_list').append('<input class="'+ newPerson +'" type="text" placeholder="Name"><input class="' + newGift + '" type="text" placeholder="Gift"><button class="' + btnSubmit + '" type="button">submit</button><button class="' + btnDelete +'" type="button">delete</button>')

      $('.' + btnSubmit).on('click',function(){
        localStorage.setItem($('.'+ newPerson).val(),$('.'+ newGift).val())

        liMaker($('.'+ newPerson).val(),$('.'+ newGift).val())

      })

      $('.'+ btnDelete).on('click',function(){
        localStorage.removeItem($('.'+ newPerson).val())

        var name = $('.'+ newPerson).val()
        var gift = $('.'+ newGift).val()

        $('.'+name).remove()
        $('.'+gift).remove()  

        $('.'+ newPerson).remove()
        $('.'+ newGift).remove()
        $('.'+ btnSubmit).remove()
        $('.'+ btnDelete).remove()
      })
  });

  // clear everything
  $('.btn-clear').on('click', function(){
    localStorage.clear()
    location.reload()
    

  });


















 

  // // set name
  // var myNameInStorage = localStorage.getItem('name');
  // // set age
  // var myAgeInStorage = localStorage.getItem('age');
  // // set paycheck
  // var myPayCheckInStorage = localStorage.getItem('payCheck');

  // // write to local storage from input when button save clicked
  // $('.btn-submit').one('click', function(e){

  //   localStorage.setItem('name', $('.entry-name').val());
  //   localStorage.setItem('age', $('.entry-age').val());
  //   localStorage.setItem('paycheck',$('.entry-paycheck').val());
  //   localStorage.setItem('saving',$('.entry-saving').val());
  //   localStorage.setItem('investing',$('.entry-invest').val());
  //   localStorage.setItem('rent',$('.entry-rent').val());
  //   localStorage.setItem('bills',$('.entry-bills').val());
  //   localStorage.setItem('food',$('.entry-food').val());

  //   $('.basic_info').append('<div>' + e.view.localStorage.name + '</div>')
  //   $('.basic_info').append('<div>' + e.view.localStorage.age + '</div>')

  //   $('.expense_list').append('<li>' + e.view.localStorage.paycheck + '</li>')
  //   $('.expense_list').append('<li>' + e.view.localStorage.saving + '</li>')
  //   $('.expense_list').append('<li>' + e.view.localStorage.investing + '</li>')
  //   $('.expense_list').append('<li>' + e.view.localStorage.rent + '</li>')
  //   $('.expense_list').append('<li>' + e.view.localStorage.bills + '</li>')  
  //   $('.expense_list').append('<li>' + e.view.localStorage.food + '</li>')
  
  // });

 


  // // delete from local storage when delete button clicked
  // $('.btn-delete').on('click', function(){
  //   counter--
  //   console.log(counter)
  // });

  

});