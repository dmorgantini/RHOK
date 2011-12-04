using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebUI.Models;
namespace WebUI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ChartityClick";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Edit()
        {
            RegisterViewModel rv = new RegisterViewModel();
            return View(rv);
        }

        [HttpPost]
        public ActionResult Edit(RegisterViewModel  rv)
        {
            //Save it into database
            return View();
        }

    }
}
