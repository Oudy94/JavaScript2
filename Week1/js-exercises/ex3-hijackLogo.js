"use strict";

function hijackGoogleLogo() {
    //store google logo in a variable
    const logoHYF = document.querySelector('#hplogo');

    //change the logo picture
    logoHYF.src = "https://www.hackyourfuture.dk/static/logo-dark.svg";
}
  
  hijackGoogleLogo();
