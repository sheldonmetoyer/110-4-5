function getCatalog(){
    //creat an ajax req to getcatalog
    //print the 

    $.ajax({
        url: "/catalog/getCatalog",
        type: "GET",
        success : function(res){
            console.log("success", res);
            for(var i=0; i < res.length; i++){
                var item = res[i];
                displayCar(item);
            }

        },
        error: function(error){
            console.log("Error", error);
        }
    });

}

function displayCar(car){
    //get the root element (where you want to dissplay it?)
    var container = $('#catalogContainer');
    // creat the template for the car
    var template = 
    `<div class="col-4 item" >
        <div class="row">
            <div class="col-6">
                <img class="img" src="${car.imageUrl}">
            </div>

            <div class="col-6">
                <label class="info-title">Year:</label>
                <label class="info-value">${car.year}</label>
                <br>
            
                <label class="info-title">Make:</label>
                <label class="info-value">${car.make}</label>
                <br>

                <label class="info-title">Model:</label>
                <label class="info-value">${car.model}</label>
                <br>

                <label class="info-title">Daily Price:</label>
                <label class="info-value">${car.dailyPrice}</label>
                <br>

            </div>
            

        </div>    

        <div class="row">
            <div class="col-12">
                <label class="info-title">Description</label>
                <p>${car.description}</p>
            </div>
        </div>
     </div>`;

    //ad the template to the root element 
    container.append(template);
}

function init(){
    console.log("Catalog page");

    getCatalog();
}


window.onload = init;