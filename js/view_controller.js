
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: toDo
	Check Daten :: toDo
    Btn. Trigger :: toDo
    Business-Logic (Alter --> Getränk) :: check!
    Bild austauschen :: check!
*/

// Modul Ablaufsteuerung | Test:

function controller() {
    ausgabe(updateImg(checkage(getinput())));
}


// Trigger - Btn 
const btn = document.getElementById("trigBtn");
btn.addEventListener("click",actonclick)

// Trigger - Input
const field = document.getElementsByName("eingabe")[0];
field.addEventListener("input",isinputvalid);

// Event-Dispatcher
function actonclick() {
    if (isinputvalid()) {
        controller();
    }
    
    else {
        ausgabe("Input nicht Korrect!")
    }
}

// Modul: Check auf korrekte Eingaben ...
function isinputvalid() {
    let inputstr = field.value;
    let patt = /^[0-9]{1,3}$/g; //1-999
    let cond = patt.test(inputstr);

    if (!cond) {
    field.value = "";
    updateImg(data.default.bev);
    }
    return cond;
}

// Modul: Eingabe | Test:
// ausgabe(getInput());


//Modul: Business-Logic (Mapping) | Test:

function getinput() {
    
    return parseInt(field.value);
}

function checkage(age) {
    switch (true) 
{
    case (age >= data.milk.lower) && (age <= data.milk.upper):
        return data.milk.bev;
    case (age >= data.juice.lower) && (age <= data.juice.upper):
        return data.juice.bev;
    case (age >= data.cola.lower) && (age <= data.cola.upper):
        return data.cola.bev;
    case (age >= data.wine.lower) && (age <= data.wine.upper):
        return data.wine.bev;  
    default:
        return data.default.bev;   
    }
}


// Modul: Bild aktualisieren | Test:
function updateImg (imgname) {
    let img = document.getElementById("bevImg");
    img.src = gui.img.path + imgname + gui.img.ext;
return imgname; //monitoring
}

//Modul: Konsolenausgabe --> Test:
function ausgabe(outputStr) {
    console.log(outputStr);
}