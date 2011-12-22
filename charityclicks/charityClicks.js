$(document).ready(function() {
    // TODO: deal with caching this request

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.charityclick.net/charities.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var resp = JSON.parse(xhr.responseText);
        injectCharities(resp);
      }
    };
    xhr.send();
});

// TODO: add tests & refactor into a more appropriate classes

// { name: '', id: '', donationInstructions: '' }
function injectCharities(charities){

    for (var id in charities) {
        var charity = new charityClick.charity(charities[id]);

        $('a:contains(' + charity.name + ')').each(function() {

            // this may be too restrictive
            if ($.trim($(this).html().toLowerCase()) != charity.name.toLowerCase())
                return;

            var element = $('<div/>').appendTo(this).attr("style", "display: inline-block; " +
                "width: 16px; " +
                "height: 16px;" +
                "margin-left: 5px;" +
                "background: url('" + chrome.extension.getURL("skin/flying-heart-icon_16.png") + "')");


            var qtipContent = '<a class="donation" href="' + charity.getDonateLink() + '" target="_blank">Donate Now</a>' +
                '&nbsp;|&nbsp;' +
                '<a class="donation" href="' + charity.getInformationLink() + '" target="_blank">View Charity Information</a>';

            if (charity.hasInformation())
                qtipContent = qtipContent +  '<div>By Phone: ' + charity.getDonationInformation() +'</div>';

            $(element).qtip({
                content: qtipContent,
                position: 'right',
                hide: {fixed: true}
            });
        });
    }

}
