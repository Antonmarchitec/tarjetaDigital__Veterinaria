let btnTop = document.querySelector("#btnTop")

window.addEventListener("scroll",()=>{
    let positionScroll = document.documentElement.scrollTop;
    //console.log(positionScroll);
    let positionElement = btnTop.offsetTop;
    console.log(positionElement)

    if(positionScroll > positionElement){
        btnTop.classList.add("iconTopJS")
    }else{
        btnTop.classList.remove("iconTopJS");
    }
})