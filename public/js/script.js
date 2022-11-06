const loginPageBtn = document.querySelector("#loginPageBtn");
const registerPageBtn = document.querySelector("#registerPageBtn");

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

const register = document.querySelector("#regButton");
register.addEventListener("click",async(e)=>{
  e.preventDefault();
  const regUsername = document.querySelector("#regUsername").value.trim();
  const regPassword = document.querySelector("#regPassword").value.trim();
  if(regUsername && regPassword){
  console.log(regUsername + regPassword);
  const response = await fetch('/register',
  {
    method: 'POST',
    body: JSON.stringify({regUsername,regPassword}),
    headers: {'Content-Type': 'application/json'}
  });

if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }  
    
  }
}
);

const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener('click',async(e)=>{
  const logUsername = document.querySelector("#logUsername").value.trim();
  const logPassword = document.querySelector("#logPassword").value.trim();
  // e.preventDefault();
  console.log("logging");
  const response = await fetch('/login',{
    method: 'POST',
    // body: JSON.stringify({ logUsername.value, password }),
    //why JSON.stringify({logUsername.value}) is not working
      body: JSON.stringify({ logUsername, logPassword }),

  headers: { 'Content-Type': 'application/json' },
     // body data type must match "Content-Type" header
  }
)
    if (response.ok) {
      alert('logged in.');
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }

})



// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const username = document.querySelector('#username-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (username && email && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ username, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });
    
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to sign up.');
//     }
//   }
// };


















// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (email && password) {
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to log in.');
//     }
//   }
// };