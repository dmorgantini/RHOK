using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Web.Mvc;
using System.Web.Security;


namespace WebUI.Models
{
    public class RegisterViewModel
    {
        public Int32 iD { get; set; }

        [Display(Name = "Name")]
        public string CharityName { get; set; }

        [Display(Name = "Charity Registeration Number ")]
        public string CharityRegisterationNumber { get; set; }

        [Display(Name = "Charity Website")]
        public string CharityWebsite { get; set; }

        [Display(Name = "Direct Donate Link")]
        public string DirectDonateLink { get; set; }

        [Display(Name = "Enter short text which could include your text to donate code or your phone number.")]
        public string SearchText { get; set; }

        [Display(Name = "Your Logo")]
        public string CharityLogo { get; set; }


    }
}