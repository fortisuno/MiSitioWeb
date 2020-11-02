var page = $('html, body');
var header = $('header');
var btnHeader = $('#btn-scroll-down');
var btnScrollUp = $('#btn-scroll-up');
var contentOffset = header.innerHeight();
var flag = false;

(function(){
    console.log('Funcionando');
    if($(document).scrollTop() >= contentOffset) {
        btnScrollUp.css({opacity: 1});
        btnScrollUp.removeClass('d-none');
    } else {
        btnScrollUp.css({opacity: 0});
        btnScrollUp.addClass('d-none');
    }
})();

btnHeader.click(function() {
    scrollDown(contentOffset);
});
btnScrollUp.click(function() {
    scrollUp();
});

$(document).scroll(function() {
    if($(this).scrollTop() >= 100) {
        if (!flag) {
            btnScrollUp.removeClass('d-none');
            btnScrollUp.animate({opacity: 1}, 500)
        }
        flag = true;
    } else {
        if (flag) {
            btnScrollUp.animate({opacity: 0}, 500, function() {
                btnScrollUp.addClass('d-none');
            })
        }
        flag = false;
    }
});

function scrollDown(target) {
    page.animate({ scrollTop: target }, 1000);
}

function scrollUp() {
    page.animate({ scrollTop: 0 }, 1000);
}

function checkOffet() {
    if(page.scrollTop() >= contentOffset) {
        return true;
    } else {
        return false;
    }
}