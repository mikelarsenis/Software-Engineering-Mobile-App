var ajaxModule = (function() {
    function ajaxCall(url,successFunc,failFunc) {
        $.ajax({
            url: url,
            success: function (data) {
                var json = $(data);
                coords = $.parseJSON(json);
                successFunc(data);
            },
            fail: function() {
                failFunc();
            }
        });
    }

    return ajaxCall;
})();