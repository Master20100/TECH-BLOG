const login = document.querySelector("#login");

login.addEventListener("click",async(e)=>{
await fetch('login');
document.location.replace('/login');
}
);


const register = document.querySelector("#register");

register.addEventListener("click",async(e)=>{
await fetch('register');
document.location.replace('/register');
}
);