const correctName = "test"; //konstanter för korrekt namn och lösen
const correctPassword = "1234";
let content=document.getElementById("content"); //variaber för 
let rubrik=document.createElement("h2");
rubrik.setAttribute("id", "rubrik");
document.getElementById("headline").appendChild(rubrik);

//Kallar på startfunktionerna i rätt ordning
landingPage();
lsCheck();

function landingPage() { //funktion som skapar startsida med inloggningsformulär
    content.innerHTML=""; //innehållet i diven "content" töms för att sedan fyllas på på nytt
    rubrik.innerText="Här kan du logga in:";
    let inpName=document.createElement("input"); //textfält och en knapp skapas
    let inpPassword=document.createElement("input");
    let btnLogin=document.createElement("button");
    inpName.setAttribute("type", "text"); //inputfälten och knappen tilldelas attribut
    inpName.setAttribute("id", "inpName");
    inpName.setAttribute("placeholder", "Namn");
    inpPassword.setAttribute("type", "password");
    inpPassword.setAttribute("id", "inpPassword");
    inpPassword.setAttribute("placeholder", "Lösenord");
    btnLogin.setAttribute("id", "btnLogin");
    btnLogin.innerText="Logga in";
    btnLogin.onclick= () => login(); //vid klick på knappen påkallas funktionen "login"
    content.appendChild(inpName);
    content.appendChild(inpPassword);
    content.appendChild(btnLogin);
}

function lsCheck() { //funktion som körs när startsidan laddar som kollar inlogg i localStorage, om det sparade inlogget är rätt skickas användaren direkt till välkomstsidan
    if (localStorage.name===correctName && localStorage.password===correctPassword){
        welcomePage();
    }
}

function welcomePage() { //funktion som visar välkomstsidan
    document.getElementById("content").innerHTML=""; //innehållet i diven "content" töms för att sedan fyllas på på nytt
    let btnLogout=document.createElement("button"); //logga ut-knapp som leder tillbaka till startsidan
    rubrik.innerText="Välkommen in!";
    btnLogout.innerText="Logga ut";
    btnLogout.onclick= () => logout();
    content.appendChild(btnLogout);
}

function wrongPage() { //funktion som visar felinloggsidan
    document.getElementById("content").innerHTML=""; //innehållet i diven "content" töms för att sedan fyllas på på nytt
    let btnTryAgain=document.createElement("button");
    rubrik.innerText="Tyvärr skrev du in fel inloggningsuppgifter, försök gärna igen.";
    btnTryAgain.innerText="Försök igen"; //knapp som leder tillbaka till startsidan så ett nytt inloggningsförsök kan göras
    btnTryAgain.onclick= () => landingPage();
    content.appendChild(btnTryAgain);
}

function login() { //funktion som testar namn+lösen
    let inpName=document.getElementById("inpName").value;
    let inpPassword=document.getElementById("inpPassword").value;
    if (inpName===correctName && inpPassword===correctPassword){ //användaren skickas till välkomstsidan
        localStorage.setItem("name", inpName); //inloggad användare sparas i localStorage (sparas bara om inlogget är rätt)
        localStorage.setItem("password", inpPassword);
        welcomePage();
    }
    else { //användaren skickas till fel-inlogg-sidan
        wrongPage();
    }
}

function logout(){ //funktion som skickar tillbaka användaren till startsidan och rensar localstorage
    localStorage.clear();
    landingPage();
}