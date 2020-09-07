//variabler för namn och lösen
const correctname = "test";
const correctpassword = "1234";

//förstasidan med två inputfält och knapp som kallar på funktion

//funktion som testar namn+lösen
function login() {
    let inpName = document.getElementById("inpName").value;
    let inpPassword = document.getElementById("inpPassword").value;
    
    console.log(inpName, "och", inpPassword);
    //if-sats som testar om namn och lösen är korrekt, skapar välkommensida eller fel-lösen-sida
    if (inpName===correctname && inpPassword ===correctpassword){
        console.log("rätt inlogg");
    
    }
    else {
        console.log("fel inlogg");
    }

}

//inloggad användare sparas i localStorage

//på välkomstsidan: logga ut-knapp som leder tillbaka till startsidan

