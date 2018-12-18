$(document).ready(function(){
  console.log('jQuery loaded');


   var myItemInStorage = localStorage.getItem('inputFieldValue');
    console.log('myItemInStorage', myItemInStorage);

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    localStorage.setItem('inputFieldValue', $('.text-entry').val());

   

    // display the value here
    $('.list-display-field').text(myItemInStorage); // ??

  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue');
  });

});