/**
 * Created by Thomas on 11/3/15.
 */
var employeeArray = [];

var employeeNumberOfYears = [];
var totalEmployeeYears = 0;
var averageEmployeeYears = 0;

var totalEmployeeSalaries = [];
var totalSalaries = 0;
var averageSalary = 0;


$(document).ready(function(){

    $('#employeeList').on('click', '.delete', deletePerson);



    //$.ajax({
    //    type: "GET",
    //    url: "/output",
    //    success: function(output){
    //        //populate array with objects
    //        //calculate all totals and averages
    //        employeeArray = output;
    //
    //        appendToDOM();
    //        calcTotalYears();
    //        calcAverageYears();
    //        calcTotalSalaries();
    //        calcAverageSalaries();
    //
    //        //append to DOM list of employees
    //
    //        console.log(output);
    //    }
    //});
getData();
});


function getData(){
    $.ajax({
        type: "GET",
        url: "/output",
        success: function(output){
            //populate array with objects
            //calculate all totals and averages
            employeeArray = output;

            appendToDOM();


            //append to DOM list of employees

            console.log(output);
        }
    });
}


function calcTotalYears(){

    employeeNumberOfYears = [];
    totalEmployeeYears = 0;

    for(var i = 0; i < employeeArray.length; i++) {
        employeeNumberOfYears.push(parseInt(employeeArray[i].years));
    }
    for(var i = 0; i < employeeNumberOfYears.length; i++){
        totalEmployeeYears += employeeNumberOfYears[i];

    }
    console.log(employeeNumberOfYears);

    console.log(totalEmployeeYears);
    $("#totalYears").children('span').text(totalEmployeeYears);

    //pull the years an employee has worked and populate employeeNumberOfYears[]
    //iterate through  parseInt then array.length totaling
    //append to DOM

}

function calcAverageYears(){

    averageEmployeeYears = 0;

    averageEmployeeYears =  totalEmployeeYears / employeeArray.length;
    //take total years and divide by # of employees(array.length)
    $('#averageYears').children('span').text(averageEmployeeYears);
}

function calcTotalSalaries(){

    totalEmployeeSalaries = [];
    totalSalaries = 0;

    for(var i = 0; i < employeeArray.length; i++) {
        totalEmployeeSalaries.push(parseInt(employeeArray[i].salary));
    }
    for(var i = 0; i < totalEmployeeSalaries.length; i++){
        totalSalaries += totalEmployeeSalaries[i];
    }
    $('#totalSalary').children('span').text(totalSalaries);
    //pull the salary key and populate employeeSalary[]
    //iterate through array / parseInt / then total sum of all salaries
    //append to DOM
}

function calcAverageSalaries(){

    averageSalary = 0;

    averageSalary += totalSalaries / employeeArray.length;

    $('#averageSalary').children('span').text(averageSalary);
     //take total salaries and divide by # of employees(array.length)
}


function deletePerson(){
    var deletedId = {"id" : $(this).data("id")};

    console.log("Meaningful Log: ", deletedId);


    $.ajax({
        type: "DELETE",
        url: "/output",
        data: deletedId,
        success: function(data){
    console.log(totalSalaries);
            getData();
        }
    })
}



function appendToDOM(){
    $("#employeeList").empty();
    for(var i = 0; i < employeeArray.length; i++) {
        $("#employeeList").append("<div class='employeedata'>" +
            "<div class='well col-md-4'>" + employeeArray[i].name + "</div>" +
            //"<div class='well col-md-3'>" + employeeArray[i].lastName + "</div>" +
            "<div class='well col-md-4'>" + employeeArray[i].salary + "</div>" +
            "<div class='well col-md-4'>" + employeeArray[i].years + "</div>" +
            "<button class='delete btn btn-danger' data-id='" + employeeArray[i]._id + "'>Delete</button>" +
        "</div>")
    }
    calcTotalYears();
    calcAverageYears();
    calcTotalSalaries();
    calcAverageSalaries();
}