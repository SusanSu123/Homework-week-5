$(document).ready(function() {
    
    var currentDay = moment().format("dddd, MMMM Do [at] hh:mm:ss a");
    $('#currentDay').text(currentDay) 


    var saveBth = $('.save-btn')
    saveBth.on('click', function(){

        var task = $(this).siblings('.events').val()
        var time = $(this).siblings('.events').attr('id')
        localStorage.setItem(time, task)
    })


    function timeCheck() {
        var currentTime = moment().hour();
        $(".hour").each(function(){
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime == currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present"); 
            } else if (blockTime > currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }

        })
    }


    $('#9AM').val(localStorage.getItem('9AM'))
    $('#10AM').val(localStorage.getItem('10AM'))
    $('#11AM').val(localStorage.getItem('11AM'))
    $('#12PM').val(localStorage.getItem('12PM'))
    $('#13PM').val(localStorage.getItem('13PM'))
    $('#14PM').val(localStorage.getItem('14PM'))
    $('#15PM').val(localStorage.getItem('15PM'))
    $('#16PM').val(localStorage.getItem('16PM'))
    $('#17PM').val(localStorage.getItem('17PM'))

    timeCheck();

})




    