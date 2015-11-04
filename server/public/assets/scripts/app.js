$(document).ready(function(){



    $("#employeeForm").submit(function(event) {
        var peopleInfo = {};
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

    $.ajax({
        type: "POST",
        url: "/data",
        data: peopleInfo,
        beforeSend: function(){
            console.log("This is people ", peopleInfo);
        },
        success: function (data) {
            console.log(data);
        }
    });
}

