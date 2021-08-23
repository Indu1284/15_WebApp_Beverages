
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: toDo
	Check Daten :: toDo
    Btn. Trigger :: toDo
    Business-Logic (Alter --> Getränk) :: toDo
    Bild austauschen :: check!
*/

// Modul Ablaufsteuerung | Test:
// controller()
function controller() {
    ausgabe(updateImg(checkAge()));
}



// Trigger - Btn 


// Trigger - Input


// Event-Dispatcher


// Modul: Check auf korrekte Eingaben ...


// Modul: Eingabe | Test:


//Modul: Business-Logic (Mapping) | Test:
// ausgabe(checkAge(2));
// ausgabe(checkAge(7));
// ausgabe(checkAge(13));
// ausgabe(checkAge(18));
// ausgabe(checkAge(99));
// ausgabe(checkAge(135));
function checkAge(age) {
    switch (true) 
    {
        case (age >= 0) && (age <= 5):
            return "milch";
        case (age >= 6) && (age <= 12):
            return "saft";
        case (age >= 13) && (age <= 17):
            return "cola";
        case (age >= 18) && (age <= 130):
            return "wein";
        default:
            return "tee";
    }
}

// Modul: Bild aktualisieren | Test:
//ausgabe(updateImg("cola"));
//ausgabe(updateImg("milch"));
function updateImg(imgName) {
    let img = document.getElementById("bevImg");
    img.src = "./bilder/" + imgName + ".jpg";
    return imgName; // monitoring
}

//Modul: Konsolenausgabe --> Test:
function ausgabe(outputStr) {
    console.log(outputStr);
}