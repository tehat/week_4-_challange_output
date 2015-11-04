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
        sendData(peopleInfo);
        console.log(peopleInfo);
    });
            //POSITIONING OF CALLS
});

function sendData (peopleInfo) {

    console.log("Here is sendData: " + peopleInfo);
    $.ajax({
        type: "POST",
        url: "/data",
        data: peopleInfo,
        success: function (data) {
            console.log(data);
        }
    });
}

