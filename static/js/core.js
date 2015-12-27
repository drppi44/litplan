$(document).ready(function(){
    var dialog, form;
    var  name = $( "#name" );

    dialog = $( "#dialog-form" ).dialog(
        {
            autoOpen: false,
            height: 300,
            width: 350,
            modal: true,
            buttons: {
                "Create an account": addLesson,
                "Cancel": function() {dialog.dialog( "close" )}
            },
            close: function() {
                form[ 0 ].reset();
            }
        }
    );

    $('tbody td').click(function(){
        name.val($(this).text());
        dialog.lesson = this;
        dialog.dialog( "open" );

    });

    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      addLesson();
    });

    function addLesson(){
        $(dialog.lesson).text(name.val());
        dialog.dialog( "close" );
    }
});
