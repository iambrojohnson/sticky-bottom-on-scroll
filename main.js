
var PARENT_CONTAINER = document.querySelector(".parent")
var CHILD_BUTTON = PARENT_CONTAINER.querySelector("button")

window.addEventListener('scroll', function () {
   
    let windowHeight = this.innerHeight;

    let bottom = PARENT_CONTAINER.getBoundingClientRect().bottom


    if (bottom < windowHeight) {

        if ( CHILD_BUTTON.classList.contains("is_sticky")  ) {
            CHILD_BUTTON.classList.remove("is_sticky")
        }
    } else {
        CHILD_BUTTON.classList.add("is_sticky")
    }
    

})