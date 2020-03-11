function init(){
    console.log("Register Page");

    //hook events

    $("#btnSave").click(register);

    
}

function register(){
    console.log("registering car...");

    //get values from fields,

    var price = $("#txtPrice").val();
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var year = $("#txtYear").val();
    var cap = $("#txtCap").val();
    var miles = $("#txtMileage").val();
    var imageUrl = $("#txtImage").val();
    var hp = $("#txtHP").val();
    var cyls = $("#txtCyls").val();
    var desc = $("#txtDesc").val();


    var errorOccurred = false;
    //data validation

    if(!year || isNaN(year)){
        errorOccurred = true;
        $("#txtYear").addClass("error");
    }
    else{
        // parse year str into int
        //year = year * 1;
        year = parseInt(year);
        $("#txtYear").removeClass("error");
    }

    if(!price || isNaN(price)){
        errorOccurred = true;
        $("#txtPrice").addClass("error");
    }
    else {
        // parse price str into float
        price = parseFloat(price);
        $("#txtPrice").removeClass("error");
    }

    if(errorOccurred){

        $("#errorAlert").removeClass("hide");
        //show an alert to tell the user abou thte error
        return; //do not continure, we have errors

    }

    //hide the alert
    $("#errorAlert").addClass("hide");

    //creat an object 

    var car = {
        dailyPrice : price,
        make : make,
        model : model,
        year : year,
        passengerCapacity : cap,
        mileage : miles,
        imageUrl : imageUrl,
        hp : hp,
        cyls : cyls,
        description : desc
    };

    console.log(car);
    
    // send the object on an Ajax req to the backend


    $.ajax({
        url: "/catalog/saveCar",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(car),
        success : function(res){
            console.log("success", res);

            // alert the car has been saved
            $("#savedAlert").removeClass("hide");

            //set a timer to hide this alert for 3 seconds
            setTimeout(function (){
                $("#savedAlert").addClass("hide");
            }, 3000);
            

            //clear the form
        },
        error: function(error){
            console.log("Error", error);
        }
    });

    //clear form

    //success notification
}


window.onload = init;