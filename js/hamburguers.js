
 //ESTE DOCUMENTO FUE CREADO EN EL VIDEO
  
  
  // Look for .hamburger
  let menu__nav = document.querySelector("#menu__nav")
  //var contEnlaces = document.getElementById("menuenlaces");
  let hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menu__nav.classList.toggle("menu__nav_JS")
    // Do something else, like open/close menu
  });