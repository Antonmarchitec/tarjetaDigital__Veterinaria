let btnWatss = document.getElementById("btnWatss");

window.addEventListener("scroll", () =>{
    let positionScroll = document.documentElement.scrollTop;
    //console.log(positionScroll);
    let positionElement = btnWatss.offsetTop;
    //console.log(positionElement)
    if(positionScroll > positionElement){
        btnWatss.classList.add("iconTopJS")
    }else{
        btnWatss.classList.remove("iconTopJS");
    }
    
    
})