$(function() {
    $('.pointer').css({
        'transform': 'rotate(' + (360 / ($('.list li').length) * ($('.list li.active').index())) + 'deg)'
    });
    var angle = 0;
    $(document).on('mouseover', '.list > li', function() {
        var len = $('.list li').length;
        var ths = $(this);
        var active = $('.list li.active');
        if (ths.index() >= active.index()) {
            if (ths.index() - active.index() < len / 2) {
                angle = angle + (360 / (len) * (ths.index() - active.index()));
                console.log('case-1');
            } else {
                angle = angle - (360 / (len) * (len - ths.index() + active.index()));
                console.log('case-2');
            }
        } else if (ths.index() < active.index()) {
            if (active.index() - ths.index() < len / 2) {
                angle = angle - (360 / (len) * (active.index() - ths.index()));
                console.log('case-3');
            } else {
                angle = angle + (360 / (len) * (len + ths.index() - active.index()));
                console.log('case-4');
            }
        }
        ths.addClass('active').siblings().removeClass('active');
        $('.pointer').css({
            'transform': 'rotate(' + angle + 'deg)'
        });
    });
    $('.menu-trig').click(function() {
        $(this).closest('#rad').toggleClass('open');
    });
});