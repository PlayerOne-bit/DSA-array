const sidebar = document.querySelector(".members");
const black=document.querySelector(".black");
const button=document.querySelector(".btn");

button.addEventListener('click',()=>{
    sidebar.classList.add("show");
    black.classList.add("show");
});

black.addEventListener("click",()=>{
    sidebar.classList.remove("show");
    black.classList.remove("show");
});
