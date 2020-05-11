

(function ($) {

    jQuery.fn.firstPlugin = function (options) {

        $(this).html(options.text);
        $(this).css('color', options.color);
    };
})(jQuery);

