const newPostBtn = document.querySelector("#newPostBtn");
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
      alert("Blog saved");
    } else {
      alert("Failed to create blog");
    }
  }
});


