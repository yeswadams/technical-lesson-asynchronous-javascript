// This is without async/await 

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())

//   .then((users) => {
//     displayUsers(users);
//   })

//   .catch((error) => {
//     console.error("Error fetching user data:", error);
//   });

// This is with async/await
let users = [];
const searchInput = document.getElementById('search-bar');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    // Filter the stored data
    const filteredData = users.filter(item => 
        item.name.toLowerCase().includes(searchTerm)
    );
    
    displayUsers(filteredData);
});

async function fetchAndDisplayUsers() {
    const loader = document.querySelector("svg");
    loader.style.display = "block";
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        users = await response.json();
        displayUsers(users);

    } catch (error) {
        const userList = document.getElementById("user-list");
        const errorMessage = document.createElement("li");
        errorMessage.textContent = "Failed to load user data. Please try again later.";
        userList.appendChild(errorMessage);
        console.error("Error fetching user data:", error);
    } finally {
        loader.style.display = "none";
    }
}


function displayUsers(users) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${user.name} (${user.email})`;
    userList.appendChild(listItem);
  });
}


fetchAndDisplayUsers();
