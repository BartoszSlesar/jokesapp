$('#id').on('shown.bs.modal', function () {
  $('#selectImage').trigger('focus')
})

//$('#uploadImage').on('show.bs.modal', function (event) {
//  var button = $(event.relatedTarget) // Button that triggered the modal
//  var recipient = button.data('whatever') // Extract info from data-* attributes
//  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//  var modal = $(this)
//  modal.find('.modal-title').text('New message to ' + recipient)
//  modal.find('.modal-body input').val(recipient)+
//})


var btnUpload = $("#upload_file"),
		btnOuter = $(".button_outer");
	btnUpload.on("change", function(e){

			btnOuter.addClass("file_uploading");
			setTimeout(function(){
				btnOuter.addClass("file_uploaded");
			},3000);
			var uploadedFile = URL.createObjectURL(e.target.files[0]);
			setTimeout(function(){
				$("#uploaded_view").append('<img src="'+uploadedFile+'" />').addClass("show my-2");
			},3500);

	});

	$(".file_remove").on("click", function(e){
		$("#uploaded_view").removeClass("show");
		$("#uploaded_view").find("img").remove();
		btnOuter.removeClass("file_uploading");
		btnOuter.removeClass("file_uploaded");
		$("#upload_file").replaceWith($("#upload_file").val('').clone(true));
	});


function clear_img() {
     var uploadedView = $("#uploaded_view");
        if(uploadedView.hasClass("show")){
            var uploadedView = $("#uploaded_view");
            uploadedView.removeClass("show");
            uploadedView.find("img").remove();
            btnOuter.removeClass("file_uploading");
            btnOuter.removeClass("file_uploaded");
            $("#upload_file").replaceWith($("#upload_file").val('').clone(true));
    }
};

$("#close-modal").on("click",function(e){
clear_img()
});

$("#modal-close").on("click",function(e){
clear_img()
});

