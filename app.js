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
    var chkBox = 'chk-box' +counter

    // <input class="'+chkBox+'" type="checkbox">
    
     // this is list maker for later usage;
      $('.list').append('<li class="'+newPerson+'">'+name +'<button class="'+btnDelete+'" type="button">completed</button></li><div class="'+newGift+'">' + gift + '</div>')

      // When you press delete it removes from the list and the local storage
      $('.'+btnDelete).on('click',function(){
        var key1 = $('.'+ newPerson).text()
        localStorage.removeItem(key)

        var elementNum = $(this).attr("class").slice(-1)

        $('.new-person'+ elementNum).remove()
        $('.new-gift'+ elementNum).remove()
        $('.btn-delete'+ elementNum).remove()
        $('.chk-box'+ elementNum).remove()

      })
    }

    var key = $('.entry-name').val().toLowerCase() 
    // add to the local storage
    localStorage.setItem(key,$('.entry-gift').val() )

    // makes a list the the input entries
    liMaker($('.entry-name').val(),$('.entry-gift').val())
    
    // e.target.innerHTML
    // clears the input form
    $('div').children('input').val('')
   
  });

  // clear everything
  $('.btn-clear').on('click', function(){
    localStorage.clear()
    location.reload()

  })

  $('body').mouseover(function(){
   

  })

   
   

  });



