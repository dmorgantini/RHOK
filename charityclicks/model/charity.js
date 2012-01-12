/**
 * All code (c) 2011 CharityClick.net all rights reserved
 */
var charityClick = charityClick || {};

charityClick.charity = function (options) {
    $.extend(this, options);
};

charityClick.charity.prototype = {
    getDonateLink:function () {
        return "http://www.charityclick.net/charity/" + this.id + "/donate";
    },

    getInformationLink: function() {
        return "http://www.charityclick.net/charity/" + this.id + "/information";
    },

    hasInformation: function() {
        return (this.donationInstructions && this.donationInstructions !== "");
    },

    getDonationInformation: function () {
        return this.donationInstructions;
    }
};