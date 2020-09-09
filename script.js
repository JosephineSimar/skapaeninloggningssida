const correctName = "test"; //konstanter för korrekt namn och lösen
const correctPassword = "1234";
var content = document.getElementById("content");

//Kallar på startfunktionerna i rätt ordning
landingPage();
lsCheck();

function landingPage() { //funktion som skapar startsida med inloggningsformulär
    content.innerHTML=""; //innehållet i diven "content" töms för att sedan fyllas på på nytt
    var inpName = document.createElement("input"); //textfält och en knapp skapas
    var inpPassword = document.createElement("input");
    var btnLogin = document.createElement("button");
    inpName.setAttribute("type", "text"); //inputfälten och knappen tilldelas attribut
    inpName.setAttribute("id", "inpName");
    inpName.setAttribute("placeholder", "Namn");
    inpPassword.setAttribute("type", "password");
    //inpPassword.setAttribute("id", "inpPassword");
    inpPassword.setAttribute("placeholder", "Lösenord");
    btnLogin.setAttribute("id", "btnLogin");
    btnLogin.innerText = "Logga in";
    btnLogin.onclick = () => login(); //vid klick på knappen kallas funktionen "login"
    content.appendChild(inpName);
    content.appendChild(inpPassword);
    content.appendChild(btnLogin);
}

function lsCheck() { //funktion som körs när startsidan laddar som kollar inlogg i localStorage, om det sparade inlogget är rätt skickas användaren direkt till välkomstsidan
    console.log("check");
    if (localStorage.name===correctName && localStorage.password===correctPassword){
        welcomePage();
    }
}

function welcomePage() { //funktion som visar välkomstsidan
    console.log("välkommen");
    document.getElementById("content").innerHTML=""; //innehållet i diven "content" töms för att sedan fyllas på på nytt
    var rubrik=document.createElement("h2");
    var btnLogout=document.createElement("button"); //logga ut-knapp som leder tillbaka till startsidan
    rubrik.setAttribute("id", "rubrik");
    rubrik.innerText="Välkommen in!";
    document.getElementById("content").appendChild(rubrik);
    btnLogout.innerText="Logga ut";
    btnLogout.onclick = () => logout();
    content.appendChild(btnLogout);
}

function wrongPage() { //funktion som visar felinloggsidan
    console.log("felsida");
    document.getElementById("content").innerHTML=""; //innehållet i diven "content" töms för att sedan fyllas på på nytt
    var rubrik=document.createElement("h2");
    var btnTryAgain=document.createElement("button");
    rubrik.setAttribute("id", "rubrik");
    rubrik.innerText="Tyvärr skrev du in fel inloggningsuppgifter, försök gärna igen.";
    document.getElementById("content").appendChild(rubrik);
    btnTryAgain.innerHTML="Försök igen"; //knapp som leder tillbaka till startsidan så ett nytt inloggningsförsök kan göras
    btnTryAgain.onclick = () => landingPage();
    content.appendChild(btnTryAgain);
}

function login() { //funktion som testar namn+lösen
    var inpName = document.getElementById("inpName").value;
    var inpPassword = document.getElementById("inpPassword").value;
    if (inpName===correctName && inpPassword===correctPassword){ //användaren skickas till välkomstsidan
        console.log("rätt inlogg");
        localStorage.setItem("name", inpName); //inloggad användare sparas i localStorage (sparas bara om inlogget är rätt)
        localStorage.setItem("password", inpPassword);
        console.log(inpName, "och", inpPassword);
        console.log(localStorage.name, localStorage.password);
        welcomePage();
    }
    else { //användaren skickas till fel-inlogg-sidan
        console.log("fel inlogg");
        wrongPage();
    }
}

function logout(){ //funktion som skickar tillbaka användaren till startsidan och rensar localstorage
    console.log("loggar ut");
    localStorage.clear();
    landingPage();
}