/**
 * Created by owner on 11/3/15.
 */
var peopleInfo = {};


$(document).ready(function(){


    $("#employeeForm").submit(function(event) {
        event.preventDefault();


        $.each($(this).serializeArray(),function (i, field) {
            peopleInfo[field.name] = field.value;


        });
        console.log(peopleInfo);

    });

});


console.log("Scripts working");
