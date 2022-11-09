const newPostBtn = document.querySelector("#newPostBtn");
document.querySelector("#loginPageBtn").style.display = "none";
document.querySelector("#registerPageBtn").style.display = "none";
document.querySelector("#logout").style.display = "inline";
newPostBtn.addEventListener("click", async () => {
  // dynamiccally generate
  document.getElementById("section").classList.remove("hidden");
});

document.querySelector("#saveBtn").addEventListener("click", async (e) => {
  e.preventDefault();
  const blogTitle = document.querySelector("#blogTitle").value.trim();
  const blogContent = document.querySelector("#blogContent").value.trim();

  if (blogTitle && blogContent) {
    const response = await fetch(`/projects`, {
      method: "POST",
      body: JSON.stringify({ title: blogTitle, content: blogContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
       document.location.replace('/profile');
} else {
      alert("Failed to create blog");
    }
  }
});
if(document.querySelector("#deleteBtn")){
document.querySelector("#deleteBtn").addEventListener("click",async(e)=>{
  if (e.target.hasAttribute('data-id')) {
    const id = e.target.getAttribute('data-id');

    const response = await fetch(`/profile/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }

})
}
document.querySelector("#logout").addEventListener("click",async()=>{
  console.log("aaaaa");
const response = await fetch("/logout");
alert("You have been logged out");
document.location.replace("/");

})
