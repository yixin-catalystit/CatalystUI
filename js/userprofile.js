$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).show()
})

function editData(){
  $('.editbutton').html("<button type='button' style='float:right; margin-left:5px;' class='btn btn-primary btn-sm' onclick='cancelButton()' >Cancel</button>"+
    "<button type='button' style='float:right;' class='btn btn-primary btn-sm' onclick='' >Submit</button>");
  $('#alias').html("<input  type='text' class='form-control' name='alias' id='aliasinput' value='"+$('#alias').text()+"'/>");
  $('#email').html("<input  type='text' class='form-control' name='email' id='emailinput' value='"+$('#email').text()+"'/>");
  $('#office').html("<input  type='text' class='form-control' name='office' id='officeinput' value='"+$('#office').text()+"'/>");
  $('#phone').html("<input  type='text' class='form-control' name='phone' id='phoneinput' value='"+$('#phone').text()+"'/>");
}

function cancelButton(){
  $('.editbutton').html("<button type='button' style='float:right;' class='btn btn-primary btn-sm' onclick='editData()' >Edit</button>");
  $('#alias').html($('#aliasinput').val());
  $('#email').html($('#emailinput').val());
  $('#office').html($('#officeinput').val());
  $('#phone').html($('#phoneinput').val());
}

function filloutdata(){
  $('#aliaspopout').text($('#alias').text());
  $('#emailpopout').text($('#email').text());
  $('#officepopout').text($('#office').text());
  $('#phonepopout').text($('#phone').text());
  $('#firstnamepopout').text($('#firstname').text());
  $('#lastnamepopout').text($('#lastname').text());
  $('#jobtitlepopout').text($('#jobtitle').text());
  $('#departmentpopout').text($('#department').text());
  $('#companypopout').text($('#company').text());
  $('#managementpopout').text($('#management').text());
  $('#streetpopout').text($('#street').text());
  $('#citypopout').text($('#city').text());
  $('#statepopout').text($('#state').text());
  $('#postalcodepopout').text($('#postalcode').text());
  $('#countrypopout').text($('#country').text());
}