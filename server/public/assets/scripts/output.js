/**
 * Created by Thomas on 11/3/15.
 */
var employeeArray = [];



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

})