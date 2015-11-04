/**
 * Created by Thomas on 11/3/15.
 */
var employeeArray = [];
var employeeNumberOfYears = [];
var employeeSalaries = [];

console.log("javascript is working");
$(document).ready(function(){
console.log("jquery is working");
    $.ajax({
        type: "GET",
        url: "/output",
        success: function(output){
            //populate array with objects
            //calculate all totals and averages



            //append to DOM list of employees

            console.log(output);

            console.log("Gathering info for array");
        }
    })

});

function totalYears(){
    //pull the years an employee has worked and populate employeeNumberOfYears[]
    //iterate through  parseInt then array.length totaling
    //append to DOM

}

function averageYears(){
    //take total years and divide by # of employees(array.length)
}

function totalSalaries(){
    //pull the salary key and populate employeeSalary[]
    //iterate through array / parseInt / then total sum of all salaries
    //append to DOM
}

function averageSalaries(){
    //take total salaries and divide by # of employees(array.length)
}