$(document).ready(function() {
    
    var currentDay = moment().format("dddd, MMMM Do [at] hh:mm:ss a");
    $('#currentDay').text(currentDay) 


    var saveBtn = $('.save-btn')
    saveBtn.on('click', function(){

        var task = $(this).siblings('.events').val()
        var time = $(this).siblings('.events').attr('id')
        localStorage.setItem(time, task)
    })


    $('#9AM').val(localStorage.getItem('9AM'))
    $('#10AM').val(localStorage.getItem('10AM'))
    $('#11AM').val(localStorage.getItem('11AM'))
    $('#12PM').val(localStorage.getItem('12PM'))
    $('#13PM').val(localStorage.getItem('13PM'))
    $('#14PM').val(localStorage.getItem('14PM'))
    $('#15PM').val(localStorage.getItem('15PM'))
    $('#16PM').val(localStorage.getItem('16PM'))
    $('#17PM').val(localStorage.getItem('17PM'))

    console.log($(this));


    function timeCheck() {
        var currentTime = moment().hour();
        $('.hour').each(function(){
            var blockTime = $(this).attr('id').split("hour")[1];
            console.log(currentTime);
            console.log(blockTime);
            console.log($(this));
    
 
            if (blockTime < currentTime) {
                $(this).siblings('.events').removeClass("future");
                $(this).siblings('.events').removeClass("present");
                $(this).siblings('.events').addClass("past");
            } else if (blockTime == currentTime) {
                $(this).siblings('.events').removeClass("future");
                $(this).siblings('.events').removeClass("past");
                $(this).siblings('.events').addClass("present"); 
            } else if (blockTime > currentTime) {
                $(this).siblings('.events').removeClass("present");
                $(this).siblings('.events').removeClass("past");
                $(this).siblings('.events').addClass("future");
            }

        })

    }

    timeCheck();
})