function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displaypost(data));
}

function displaypost(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    // console.log(post);
    for (const post of posts) {
        const postDiv = document.createElement("div");
        postDiv.classList.add('post');
      postDiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p> Post Description: ${post.body}</p>
        `;
      postContainer.appendChild(postDiv);
    }
  }
}


loadPost();
