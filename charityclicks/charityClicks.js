$(document).ready(function() {
    $('a:contains("@ScottMuc")').each(function() {
        var element = createImageDiv(this);
        $(element).qtip({
            content: '<a class="donation" href="http://www.google.com" target="_blank">Donate</a>' +
                '&nbsp;|&nbsp;' +
                '<a class="donation" href="http://www.google.com" target="_blank">View Charity Information</a>',
            position: 'right',
            hide: {fixed: true}
        });
    });
});

function createImageDiv(link) {
    try {
        var elem = document.createElement("div");

        if (elem) {
            elem.setAttribute("style",
                "display: inline-block; " +
                    "cursor: pointer; " +
                    "width: 16px; " +
                    "height: 16px;" +
                    "background: url('" + chrome.extension.getURL("skin/fusion/16_16/plain/r5.png") + "')");

            elem.addEventListener("click", this.onclickdonateicon, false);

            if (link.nextSibling) {
                elem = link.parentNode.insertBefore(elem, link.nextSibling);
            } else {
                elem = link.parentNode.appendChild(elem);
            }

            elem.innerHTML = "&nbsp;";

        }
        return elem;
    } catch (e) {
        console.log("createImageDiv: failed with " + e + "\n");
        return null;
    }
}