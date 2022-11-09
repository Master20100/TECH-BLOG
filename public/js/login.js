const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener('click',async(e)=>{
  console.log("login button pressed");
  e.preventDefault();
  const logUsername = document.querySelector("#logUsername").value.trim();
  const logPassword = document.querySelector("#logPassword").value.trim();
  // e.preventDefault();
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
      document.location.replace('/profile');
    } else {
      alert('Failed to log in.');
    }

})
