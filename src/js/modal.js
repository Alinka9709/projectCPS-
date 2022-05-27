let modalWindowCall = document.querySelector(".modal__call")
let modalWindowFeedback = document.querySelector(".modal__feedback")
let openCall = document.querySelector(".bnt__call")
let openFeedback = document.querySelector(".btn__chat")
let closeCall = document.querySelector(".modal__call__close-button")
let closeFeedback = document.querySelector(".modal__feedback__close-button")
let container = document.querySelector(".aside__items")
let wrapper = document.querySelector(".wraper")
let menuBurger = document.querySelector(".btn__close-menu")
let containerPage = document.querySelector(".container-page")
let menuBurgerOpen = document.querySelector(".menu__burger")
let menuBurgerClose = document.querySelector(".btn__close-menu")
open = () =>{
    container.style.display = "none"
    wrapper.style.display = "none"
    containerPage.style.visibility = "hidden"
}


close = () =>{
    containerPage.style.visibility = "visible"
    if (window.innerWidth >= 1120){ 
        wrapper.style.display = "block"
        container.style.display = "block"
    } else {
        wrapper.style.display = "none"
        container.style.display = "none"
    }
    
 

}

openCall.onclick =  () => {
  modalWindowCall.style.visibility = "visible"
  open()

}

closeCall.onclick = () =>{
    modalWindowCall.style.visibility = "hidden"
    close()
}

openFeedback.onclick = () =>{
    modalWindowFeedback.style.visibility = "visible"
    open()

}

closeFeedback.onclick = () =>{
    modalWindowFeedback.style.visibility = "hidden"
    close()
}

menuBurgerOpen.onclick = () =>{
    container.style.display = "block"
    wrapper.style.display = "block"
    // containerPage.style.display = "none"
    containerPage.style.visibility = "hidden"
   
  
 
  }



menuBurgerClose.onclick = () =>{
    wrapper.style.display = "none"
    // containerPage.style.display = "block"
    // containerPage.style.visibility = "hidden"
    containerPage.style.visibility = "visible"
    // if (window.innerWidth >= 1120){
    //     wrapper.style.display = "block"
    // }
    // else wrapper.style.display = "none"
  }


