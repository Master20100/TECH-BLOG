const loginPageBtn = document.querySelector("#loginPageBtn");
const registerPageBtn = document.querySelector("#registerPageBtn");

loginPageBtn.addEventListener("click",async(e)=>{
  console.log("login page");
  await fetch('login');
  document.location.replace('/login');
}
);


registerPageBtn.addEventListener("click",async(e)=>{
  await fetch('register');
  document.location.replace('/register');
}
);







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