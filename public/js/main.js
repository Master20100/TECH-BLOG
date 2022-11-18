

document.querySelectorAll(".addCommentBtn").forEach(button=>{
    button.addEventListener("click",(e)=>{
        e.currentTarget.parentNode.querySelector(".comment").style.display = "block";
        e.currentTarget.parentNode.querySelector(".commentSubmitBtn").style.display = "block";
    })

document.querySelectorAll(".commentSubmitBtn").forEach(button=>{
    button.addEventListener("click",(e)=>{
console.log(e.currentTarget.parentNode.querySelector(".comment").value);

    })
})
});



