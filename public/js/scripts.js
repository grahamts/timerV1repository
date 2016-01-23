$(function(){
    $('#post-comment').hide();
    $('#btn-comment').on('click', function(event) {
        event.preventDefault();

        $('#post-comment').slideDown();
    });

    $('#btn-like').on('click', function(event) {
        event.preventDefault();

        var imgId = $(this).data('id');

        $.post('/images/' + imgId + '/like').done(function(data) {
            $('.likes-count').text(data.likes);
        });
    });
});

$(document).ready(function(){
    $("#login").click(function(){
	if($("#userPassword").val()!="test") {
	$("#passwordError").addClass('alert alert-danger');
        $("#passwordError").html("Incorrect Password");
	return false;
	}
    });
});

function validateUserName() {
	if($("#userName").val() != null) {
		$("#userNameError").hide();
	}	
	
}
