using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Model
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string Deparment { get; set; }
        public string DateofJoining { get; set; }
        public string PhotoFileName { get; set; }
    }
}
