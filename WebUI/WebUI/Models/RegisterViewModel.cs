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

        [Display(Name = "Charity Name")]
        public string UserName { get; set; }

        [Display(Name = "RegisterationNumber")]
        public string RegisterationNumber { get; set; }

        [Display(Name = "Charity Website")]
        public string CharityProfile { get; set; }

        [Display(Name = "Twitter ID")]
        public string TwitterID { get; set; }

        [Display(Name = "Direct Donate Link")]
        public string DirectDonateLink { get; set; }

        [Display(Name = "CharityLogo")]
        public string CharityLogo { get; set; }


    }
}