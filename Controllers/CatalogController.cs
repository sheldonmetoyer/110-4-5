using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Lab_2.Models;

namespace Lab_2.Controllers
{
    public class CatalogController : Controller {

        private DataContext dbContext;

        //class constructor
        public CatalogController(DataContext context) {
            this.dbContext = context;
        }


        //default page
        //to show catalog of Cars available to rent
        public IActionResult Index(){
            return View();
        }

        public IActionResult Register(){
            return View();
        }

        [HttpPost]
        public IActionResult SaveCar( [FromBody] Car theCar ){
            
            dbContext.Cars.Add(theCar); // add the care to the table
            dbContext.SaveChanges(); //save changes


            return Json(theCar); //return the car
        }


        // register form
        // ... MySqlServer
        // .. MS SQL Server

        // SQL Lite

        [HttpGet]
        public IActionResult GetCatalog(){
            var carList = dbContext.Cars.ToList(); //retrieve all records from the table
            return Json(carList);
        }
    }
}