const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener('click',async(e)=>{
  e.preventDefault();
  const logUsername = document.querySelector("#logUsername").value.trim();
  const logPassword = document.querySelector("#logPassword").value.trim();
  // e.preventDefault();
  const response = await fetch('/login',{
    method: 'POST',
      body: JSON.stringify({ logUsername, logPassword }),

  headers: { 'Content-Type': 'application/json' },
     // body data type must match "Content-Type" header
  }
)
    if (response.ok) {
      document.querySelector("#loginPageBtn").style.display = "none";
      document.querySelector("#registerPageBtn").style.display = "none";
      // alert('logged in.');
      document.location.replace('/profile');
    } else {
      alert('Failed to log in.');
    }

})
