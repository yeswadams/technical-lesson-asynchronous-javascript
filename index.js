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
async function fetchAndDisplayUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        displayUsers(users);

    } catch (error) {
        const userList = document.getElementById("user-list");
        const errorMessage = document.createElement("li");
        errorMessage.textContent = "Failed to load user data. Please try again later.";
        userList.appendChild(errorMessage);
        console.error("Error fetching user data:", error);
    }
}


function displayUsers(users) {
  const userList = document.getElementById("user-list");
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${user.name} (${user.email})`;
    userList.appendChild(listItem);
  });
}


fetchAndDisplayUsers();
