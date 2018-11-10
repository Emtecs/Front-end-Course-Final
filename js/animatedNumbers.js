$(document).on('scroll.Page2ScrollEvent', function() {
    if($(this).scrollTop()>=$('#rolling-numbers').position().top){
        $(this).off('scroll.Page2ScrollEvent');


    //     $('#clients_number')
    //         .prop('number', 10)
    //         .animateNumber(
    //             {
    //                 number: 1500
    //             },
    //             2000
    //         );
     }
});
$('#clients_number').animateNumber({ number: 165 });