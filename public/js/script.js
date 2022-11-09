const loginPageBtn = document.querySelector("#loginPageBtn");
const registerPageBtn = document.querySelector("#registerPageBtn");
document.querySelector("#loginPageBtn").style.display = "inline";
document.querySelector("#registerPageBtn").style.display = "inline";
loginPageBtn.addEventListener("click",async(e)=>{
  await fetch('login');
  document.location.replace('/login');
}
);


registerPageBtn.addEventListener("click",async(e)=>{
  await fetch('register');
  document.location.replace('/register');
}
);
