let btnTop = document.querySelector("#btnTop")

window.addEventListener("scroll",()=>{
    let positionScroll = document.documentElement.scrollTop;
    //console.log(positionScroll);
    let positionElement = btnTop.offsetTop;
    console.log(positionElement)

    if(positionScroll > positionElement + 300){
        btnTop.classList.add("btnTop_JS")
    }else{
        btnTop.classList.remove("btnTop_JS")
    }
})
