setInterval(function(){
    var d = new Date();

    var sec = d.getSeconds();
    var secStr = sec.toString();
    console.log(secStr.length);

    if(secStr.length == 1){
        secStr = "0" + secStr;
    }   

    var min = d.getMinutes();
    var minStr = min.toString();
    if(minStr.length == 1){
        minStr = "0" + minStr;
    } 

    var hrs = d.getHours();
    var hrsStr = hrs.toString();

    for(i=0;i<10;i++){

        iStr = i.toString();

        //second
        if (secStr[0] == iStr){ 
            let img = document.getElementById("img4");
            let Value_statement = "img/" + iStr + ".png";
            img.src = Value_statement;
        }

        if (secStr[1] == iStr){ 
            let img = document.getElementById("img5");
            let Value_statement = "img/" + iStr + ".png";
            img.src = Value_statement;
        }

        //minutes
        if (minStr[0] == iStr){ 
            let img = document.getElementById("img2");
            let Value_statement = "img/" + iStr + ".png";
            img.src = Value_statement;
        }

        if (minStr[1] == iStr){ 
            let img = document.getElementById("img3");
            let Value_statement = "img/" + iStr + ".png";
            img.src = Value_statement;
        }

        //hours
        if (hrsStr[0] == iStr){ 
            let img = document.getElementById("img0");
            let Value_statement = "img/" + iStr + ".png";
            img.src = Value_statement;
        }

        if (hrsStr[1] == iStr){ 
            let img = document.getElementById("img1");
            let Value_statement = "img/" + iStr + ".png";
            img.src = Value_statement;
        }
    }
},1000);