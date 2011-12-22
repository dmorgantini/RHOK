/**
 * All code (c) 2011 CharityClick.net all rights reserved
 */
var charityClick = charityClick || {};

charityClick.charity = function (options) {
    this.id = options.id;
    this.name = options.name;
    this.information = options.donationInstructions;
};

charityClick.charity.prototype = {
    getDonateLink:function () {
        return "http://www.charityclick.net/charity/" + this.id + "/donate";
    },

    getInformationLink: function() {
        return "http://www.charityclick.net/charity/" + this.id + "/information";
    },

    hasInformation: function() {
        return (this.information !== null && this.information !== "");
    },

    getDonationInformation: function () {
        return this.information; // TODO: this needs to ensure we are not injecting malicious html here
    }
};