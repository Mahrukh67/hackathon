document.addEventListener("DOMContentLoaded", () => {
    const getStartedBtn = document.getElementById("getStartedBtn");
    const logoutBtn = document.getElementById("logoutBtn");
  
    // Check if the user is logged in from localStorage
    if (localStorage.getItem("isLoggedIn") === "true") {
      // If logged in, change the Get Started button to Create Post
      getStartedBtn.textContent = "Create Post";
      // Display the Logout button
      logoutBtn.style.display = "inline-block";
    } else {
      // If not logged in, show Get Started button and hide Logout button
      getStartedBtn.textContent = "Get Started";
      logoutBtn.style.display = "none";
    }
  
    // Logout functionality
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");  // Remove login state
      window.location.href = "index.html";     // Redirect to index after logout
    });
  
    // Redirect to appropriate page if "Create Post" is clicked
    getStartedBtn.addEventListener("click", () => {
      if (localStorage.getItem("isLoggedIn") === "true") {
        window.location.href = "create-post.html"; // Redirect to create post page
      } else {
        window.location.href = "signup.html"; // Redirect to signup page
      }
    });
  });
  


//   posts js

// function loadPosts() {
//     const posts = JSON.parse(localStorage.getItem("posts")) || [];
//     const postsContainer = document.getElementById("postsContainer");

//     if (posts.length === 0) {
//       postsContainer.innerHTML = "<p>No posts available yet.</p>";
//       return;
//     }

//     posts.forEach(post => {
//       const postElement = document.createElement("div");
//       postElement.classList.add("post");

//       postElement.innerHTML = `
//         <div class="post-content">
//           <p class="date">${post.date}</p>
//           <h2>${post.title}</h2>
//           <p class="description">${post.content.substring(0, 100)}...</p>
//           <div class="meta">
//             <span>${post.author}</span> ● <span class="time">${post.time}</span>
//           </div>
//         </div>
//         <div class="post-image">
//           <img src="${post.image}" alt="Post Image">
//         </div>
//       `;

//       postsContainer.appendChild(postElement);
//     });
//   }

//   loadPosts();
document.addEventListener("DOMContentLoaded", function() {
    loadPosts(); // Ensure this runs after the DOM is ready
  });
  
  function loadPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const postsContainer = document.getElementById("postscontainer");
  
    if (!postsContainer) {
      console.error("Posts container not found!");
      return;
    }
  
    // Clear any previous content
    postsContainer.innerHTML = '';
  
    if (posts.length === 0) {
      postsContainer.innerHTML = "<p>No posts available yet.</p>";
      return;
    }
  
    posts.forEach((post, index) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
  
      postElement.innerHTML = `
        <div class="post-content">
          <p class="date">${post.date}</p>
          <h2>${post.title}</h2>
          <p class="description">${post.content.substring(0, 100)}...</p>
          <div class="meta">
            <span>${post.author}</span> ● <span class="time">${post.time}</span>
          </div>
        </div>
        <div class="post-image">
          <img src="${post.image}" alt="Post Image">
        </div>
        <div>
          <button class="edit-btn" onclick="editPost(${index})">Edit</button>
          <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
        </div>
      `;
  
      postsContainer.appendChild(postElement); // Append post to the container
    });
  }
  
  function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(index, 1); // Remove post at the given index
    localStorage.setItem("posts", JSON.stringify(posts));
    loadPosts(); // Reload the posts
  }
  
  function editPost(index) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const post = posts[index];
  
    // Redirect to the create post page and pass the post data via localStorage
    localStorage.setItem("editPost", JSON.stringify(post));
    window.location.href = "editpost.html"; // Redirect to create post page
  }
  