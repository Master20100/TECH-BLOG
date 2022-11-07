const register = document.querySelector("#registerPageBtn");
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

<script src="/public/js/register.js"></script>