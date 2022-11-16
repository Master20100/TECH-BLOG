const loginPageBtn = document.querySelector("#loginPageBtn");
const registerPageBtn = document.querySelector("#registerPageBtn");
const homeBtn = document.querySelector("#homeBtn");




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

homeBtn.addEventListener("click",async()=>{
await fetch("/");
console.log("hello");
document.location.replace('/');
  // document.location.replace("/");
});

