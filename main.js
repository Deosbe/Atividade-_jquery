
$(document).ready(function() {    
    $('#task-form').on('submit',function(e) {
        e.preventDefault()
        
        const inputText = $('#inputText').val()
        
        if (inputText){
            var taskItem = $('<li></li>').text(inputText)
            $('#task-list').append(taskItem)
            $('#inputText').val('')
        }
    });
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completo'); 
    });

});

