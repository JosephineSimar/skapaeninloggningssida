//globala konstanter och variabler
const correctName = "test";
const correctPassword = "1234";
let content=document.getElementById("content");

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

function welcomePage() { //funktion som skapar välkomstsidan
    document.getElementById("content").innerHTML=""; //innehållet i diven "content" töms för att sedan fyllas på på nytt
    rubrik.innerText="Du är nu inloggad. Välkommen!";
    let btnLogout=document.createElement("button"); //logga ut-knapp som leder tillbaka till startsidan
    btnLogout.innerText="Logga ut";
    btnLogout.onclick= () => logout();
    content.appendChild(btnLogout);
}

function wrongPage() { //funktion som skapar felinloggsidan
    document.getElementById("content").innerHTML=""; //innehållet i diven "content" töms för att sedan fyllas på på nytt
    rubrik.innerText="Tyvärr skrev du in fel inloggningsuppgifter, försök gärna igen.";
    let btnTryAgain=document.createElement("button");
    btnTryAgain.innerText="Försök igen"; //knapp som leder tillbaka till startsidan så ett nytt inloggningsförsök kan göras
    btnTryAgain.onclick= () => landingPage();
    content.appendChild(btnTryAgain);
}

function login() { //funktion som testar om namn och lösenord är korrekt
    let inpName=document.getElementById("inpName").value;
    let inpPassword=document.getElementById("inpPassword").value;
    if (inpName===correctName && inpPassword===correctPassword){ // om namn och lösenord är korrekt skickas användaren till välkomstsidan genom funktionen welcomePage()
        localStorage.setItem("name", inpName); //om inlogget är rätt sparas uppgifterna i localStorage
        localStorage.setItem("password", inpPassword);
        welcomePage();
    }
    else { //användaren skickas till fel-inlogg-sidan genom funktionen wrongPage()
        wrongPage();
    }
}

function logout(){ //funktion som rensar localStorage och skickar tillbaka användaren till startsidan genom funktionen landingPage()
    localStorage.clear();
    landingPage();
}