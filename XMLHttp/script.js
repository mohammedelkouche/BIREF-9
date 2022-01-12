
// XMLHttpRequest: Extracting information from databases : استخراج معلومات من قواعد بيانات 

var demo = document.getElementById("demo");
var Rex = new XMLHttpRequest() ;
var selesct = document.getElementById("selesct");

// open(method, url, async)	Specifies the type of request
// method: the type of request: GET or POST

// GET : get data   POST: send data

Rex.open("GET", "phone.json") ;

// onload : Loading data

Rex.onload = function(){

    // Rex.responseText  getting the answer from json file

    // document.write(Rex.responseText)
    var Data = JSON.parse(Rex.responseText) ;
    var Data = Data.phones ;

    for(i=0;i<Data.length; i++){
                //  methode 1
            var demo = document.createElement("h1");
            demo.innerHTML = Data[i].phone;
            document.body.appendChild(demo);

        
                //  methode 2
            // document.write(Data[i].phone);

        var description = Data[i].description;
        for(j=0;j<description.length; j++){
                //  methode 1

            var para = document.createElement("P");
            para.innerHTML = description[j];
            document.body.appendChild(para);

                
                //  methode 2
            // document.write(description[j])
        }
    }
}

// Sends the request to the server (used for GET)

Rex.send();