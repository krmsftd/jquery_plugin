(function ($) {

    $.fn.firstPlugin = function(options) {

        const settings = $.extend({
            text: 'Hi, username',
            color: '#000'
        }, options);

        $(this).html(settings.text);
        $(this).css('color', settings.color);

    };
})(jQuery);