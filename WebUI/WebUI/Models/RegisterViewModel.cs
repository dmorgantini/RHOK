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
        public string UserName { get; set; }

        [Display(Name = "Charity No")]
        public string RegisterationNumber { get; set; }

        [Display(Name = "Charity Website")]
        public string CharityProfile { get; set; }

        [Display(Name = "Direct Donate Link")]
        public string TwitterID { get; set; }

        [Display(Name = "Enter the direct donate link that allows the donor to give to your charity. This can be your donate page, your paypal link or any other secure payment page.")]
        public string DirectDonateLink { get; set; }

        [Display(Name = "CharityLogo")]
        public string CharityLogo { get; set; }


    }
}