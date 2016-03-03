var ajaxModule = (function() {
    function ajaxCall(url,func) {
        $.ajax({
            url: url,
            success: function (data) {
                var json = $(data);
                coords = $.parseJSON(json);
                func(data);
            }
        });
    }

    return ajaxCall;
})();