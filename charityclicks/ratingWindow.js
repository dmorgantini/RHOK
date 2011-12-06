$(document).ready(function() {
    var charity = {
        1: {
            name: "Empty Homes",
            donateLink: "https://secure.thebiggive.org.uk/donate/donate.php?charity_id=6651",
            infoLink: "http://www.emptyhomes.com/"
        },
        2: { name: "Real Lettings",
            donateLink: "http://www.broadwaylondon.org/HowYouCanHelp/Donate.html",
            infoLink: "http://www.reallettings.com/",
            phoneNumber: "text <b>BWAY11 £5</b> to <b>70070</b>"
        },
        3: { name: "Shelter",
            donateLink: "http://england.shelter.org.uk/donate",
            infoLink: "http://england.shelter.org.uk/",
            phoneNumber: "call us on <b>0300 330 1234</b>"

        },
        4: { name: "Prajwala",
            donateLink: "http://www.globalgiving.org/projects/a-new-shelter-for-sex-trafficking-victims-in-india",
            infoLink: "http://www.prajwalaindia.com/"
        }
    };

    $('<div style="font-size: 12px;"/>').appendTo(document.body).html('Charities on this page:');

    for (var id in charity) {
        var qtipContent = '<div><span style="display: block; margin-top: 10px; font-weight: bold;"> ' + charity[id].name + '</span>';
        qtipContent = qtipContent + '<a class="donation" href="' + charity[id].donateLink + '" target="_blank">Donate Now</a>' +
            '&nbsp;|&nbsp;' +
            '<a class="donation" href="' + charity[id].infoLink + '" target="_blank">View Charity Information</a>';

        if (charity[id].phoneNumber)
            qtipContent = qtipContent + '<div>By Phone: ' + charity[id].phoneNumber + '</div>';

        qtipContent = qtipContent + '</div>';
        $('<div />').appendTo(document.body).html(qtipContent);
    }


});
