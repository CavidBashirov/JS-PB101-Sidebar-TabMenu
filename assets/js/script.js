"use strict";

// let input = document.querySelector(".username");

// let loginBtn = document.querySelector(".login");

// let alertMsj = document.querySelector(".alert-msj");

// input.addEventListener("keydown",function(){
//     document.querySelector("h1").innerText = this.value;
// })


// loginBtn.addEventListener("click",function(){
//     if(input.value == ""){
//         alertMsj.classList.remove("d-none");
//     }else{
//         alertMsj.classList.add("d-none");
//     }
// })

// input.addEventListener("keyup",function(){
//     if(this.value == ""){
//         alertMsj.classList.remove("d-none");
//     }else{
//         alertMsj.classList.add("d-none");
//     }
// })



//sidebar

let sidebar = document.querySelector(".sidebar");
let openIcon = document.querySelector(".sidebar .open-icon");
let closeIcon = document.querySelector(".sidebar .close-icon");


openIcon.addEventListener("click",function(){
    sidebar.classList.add("open-sidebar");
    this.classList.add("d-none");
    closeIcon.classList.remove("d-none");
})

closeIcon.addEventListener("click",function(){
    sidebar.classList.remove("open-sidebar");
    this.classList.add("d-none");
    openIcon.classList.remove("d-none");
})



//tab-menu


let tabHeaders = document.querySelectorAll(".tab-headers ul li");
let contents = document.querySelectorAll(".tab-body .content");

tabHeaders.forEach(header => {
    header.addEventListener("click",function(){
        document.querySelector(".active-tab").classList.remove("active-tab");
        this.classList.add("active-tab");
        for (const item of contents) {
            if(item.getAttribute("data-id") == this.getAttribute("data-id")){
                item.classList.remove("d-none")
            }else{
                item.classList.add("d-none")
            }
        }
    })
});



