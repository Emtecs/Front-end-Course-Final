function fill40() {
    let elem = document.getElementById("fill-40");
    let value = document.getElementById("value40");
    let width = 0;
    let id = setInterval(frame, 20);
    function frame() {
        if (width >= 40) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            value.innerHTML = width  + '%';
        }
    }
}
function fill100() {
    let elem = document.getElementById("fill-100");
    let value = document.getElementById("value100");
    let width = 0;
    let id = setInterval(frame, 20);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            value.innerHTML = width  + '%';
        }
    }
}
function fill70() {
    let elem = document.getElementById("fill-70");
    let value = document.getElementById("value70");
    let width = 0;
    let id = setInterval(frame, 20);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            value.innerHTML = width  + '%';
        }
    }
}
function fill60() {
    let elem = document.getElementById("fill-60");
    let value = document.getElementById("value60");
    let width = 0;
    let id = setInterval(frame, 20);
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            value.innerHTML = width  + '%';
        }
    }
}
function fill80() {
    let elem = document.getElementById("fill-80");
    let value = document.getElementById("value80");
    let width = 0;
    let id = setInterval(frame, 20);

    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            value.innerHTML = width  + '%';
        }
    }
}
$(document).on('scroll.Page2ScrollEvent', function() {
    if($(this).scrollTop()>=$('.content-after-banner').position().top){
        $(this).off('scroll.Page2ScrollEvent');
        $('div.container-filling').removeClass('display-none');
        fill100();
        fill80();
        fill70();
        fill60();
        fill40();
    }
});