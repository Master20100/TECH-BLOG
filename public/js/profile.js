const newPostBtn = document.querySelector("#newPostBtn");
newPostBtn.addEventListener("click",async()=>{
   await fetch('/createPost');
    });