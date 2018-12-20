$(document).ready(function(){
  console.log('jQuery loaded');
  // the counter is for special classes for each input
  var counter = 0
  
  // this is use to disable the submit button until something is typed in the input field
  $('.btn-submit').attr('disabled',true);
   $(this).keyup(function(){
      if($('.entry-name').val().length > 0 && $('.entry-gift').val().length > 0 )
        $('.btn-submit').attr('disabled', false);            
      else
        $('.btn-submit').attr('disabled',true);
    })
  
  // add key and value into the local storage
  $('.btn-submit').on('click',function(){
     $('.btn-submit').attr('disabled',true);

    var liMaker = function(name,gift){
      counter++
      
    var newPerson = 'new-person' + counter;
    var newGift = 'new-gift' + counter
    var btnDelete = 'btn-delete' + counter;
    
     // this is list maker for later usage;
      $('.list').append('<li class="'+newPerson+'">'+name +'</li><div class="'+newGift+'">' + gift + '</div><button class="'+btnDelete+'" type="button">delete</button>')

      // When you press delete it removes from the list and the local storage
      $('.'+btnDelete).on('click',function(){
        var key = $('.'+ newPerson).text()
        localStorage.removeItem(key)

        var elementNum = $(this).attr("class").slice(-1)

        $('.new-person'+ elementNum).remove()
        $('.new-gift'+ elementNum).remove()
        $('.btn-delete'+ elementNum).remove()

      })
    }

    var key = $('.entry-name').val().toLowerCase() 
    // add to the local storage
    localStorage.setItem(key,$('.entry-gift').val() )

    // makes a list the the input entries
    // console.log(key)
    // if(localStorage.hasOwnProperty(key)){
    // }
    liMaker($('.entry-name').val(),$('.entry-gift').val())
    // e.target.innerHTML
    

    // clears the input form
    $('div').children('input').val('')
   
  });

  // clear everything
  $('.btn-clear').on('click', function(){
    localStorage.clear()
    location.reload()
   
  });

});

  //  $('.btn-delete').on('click',function(){
  //   localStorage.removeItem($('.entry-name').val())

  //   var firstName = $('.entry-name').val();
  //   var firstGift = $('.entry-gift').val();

  //   $('.'+firstName).remove();
  //   $('.'+firstGift).remove();


   
  // });
  // add more inputs when button is pressed
  // $('.btn-add').on('click',function(){

  //   var newGift = 'new-gift' + counter
  //   var newPerson = 'new-person' + counter;
  //   var btnSubmit = 'btn-submit' + counter;
  //   var btnDelete = 'btn-delete' + counter;

  //   counter++;
    
  //   $('.new_xmas_entry_list').append('<input class="'+ newPerson +'" type="text" placeholder="Name"><input class="' + newGift + '" type="text" placeholder="Gift"><button class="' + btnSubmit + '" type="button">submit</button><button class="' + btnDelete +'" type="button">delete</button>')

  //     $('.' + btnSubmit).on('click',function(){
  //       localStorage.setItem($('.'+ newPerson).val(),$('.'+ newGift).val())

  //       liMaker($('.'+ newPerson).val(),$('.'+ newGift).val())

  //     })

      // $('ul').on('click',function(){
      //   localStorage.removeItem($('.'+ newPerson).val())
      //   $('.'+ newPerson).remove()
      //   $('.'+ newGift).remove()
      //   $('.'+ btnDelete).remove()

      //   var name = $('.'+ newPerson).val()
      //   var gift = $('.'+ newGift).val()

      //   $('.'+name).remove()
      //   $('.'+gift).remove()  

        
      // })
  // });

  // $('ul').on('click',function(){
  
  //   localStorage.removeItem($('.entry-name').val())

  //   var firstName = $('.entry-name').val();
  //   var firstGift = $('.entry-gift').val();

  //   $('.'+firstName).remove();
  //   $('.'+firstGift).remove();
  // })