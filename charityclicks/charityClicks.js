$(document).ready(function() {

    var names = {
        1: "Empty Homes",
        2: "Real Lettings",
        3: "Shelter"
    };

    for (var id in names){
        $('a:contains('+ names[id] +')').each(function() {
            var element = $('<div/>').appendTo(this).attr("style", "display: inline-block; " +
                "cursor: pointer; " +
                "width: 16px; " +
                "height: 16px;" +
                "margin-left: 5px;" +
                "background: url('" + chrome.extension.getURL("skin/fusion/16_16/plain/r5.png") + "')");

            $(element).qtip({
                content: '<a class="donation" href="http://www.google.com/search?q='+ names[id] +'" target="_blank">Donate Now</a>' +
                    '&nbsp;|&nbsp;' +
                    '<a class="donation" href="http://www.google.com/search?q='+ names[id] +'" target="_blank">View Charity Information</a>' +
                    '<div style="font-weight: bold;">Text To Donate £5: 01234 567891</div>',
                position: 'right',
                hide: {fixed: true}
            });
        });
    }

});