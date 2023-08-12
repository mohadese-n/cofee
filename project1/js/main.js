
// button
window.onload=function(){
  var elevator=new Elevator({
    element : document.querySelector('.elevator-button'),
    duration:2000,
  });
}

// menu
document.getElementById('menu').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('menu-more').classList.toggle('show');
});
document.getElementById('close-menu').onclick = function () {
  document.getElementById('menu-more').classList.remove('show');
};

// form
// check empty
function checkEmpty(input_id, div_id){
  if(input_id === 'input-2' && document.getElementById('input-2').value === ''){
      document.getElementById(div_id).innerHTML = 'Please Enter Your First Name!';
      return false;
  } else {
      document.getElementById(div_id).innerHTML = '';
  }
  
  if(input_id === 'input-3' && document.getElementById('input-3').value === ''){
      document.getElementById(div_id).innerHTML = 'Please Enter Your Last Name!';
      return false;
  } else {
      document.getElementById(div_id).innerHTML = '';
  }
  if(input_id === 'input-4' && document.getElementById('input-4').value === ''){
    document.getElementById(div_id).innerHTML = 'Please Enter Your Email!';
    return false;
} else {
    document.getElementById(div_id).innerHTML = '';
}

return true;
  
  
  
}
// email Valiator

function emailValidator() {
  var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.form['form-2'].elements['input-4'].value;
  
  if(pattern.test(address) === false) {
    document.getElementById('email-error').innerHTML = 'Invalid Email!';
      return false;
  }
  else{
    document.getElementById('email-error').innerHTML = '';
  }
  return true;
}

// box

$(document).ready(function(){
  $('.btn1').click(function(){
    $('.hide1').show();
  })

});
$(document).ready(function(){
  $('.btn2').click(function(){
    $('.hide2').show().slideDown();
  })

});
$(document).ready(function(){
  $('.btn3').click(function(){
    $('.hide3').show().slideDown();
  })

});


