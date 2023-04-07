const loginHandler = async (event) => {
  event.preventDefault();

  // get user info
  const name = document.querySelector("#login-username").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  // validate info
  if (name && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    // if response ok, redirect to homepage
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const signupHandler = async (event) => {
  event.preventDefault();

  // get user info
  const name = document.querySelector("#login-username").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  // validate info
  if (name && password) {
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    // if response ok, redirect to homepage
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

// signup button
document
  .querySelector("#signup-submit")
  .addEventListener("submit", signupHandler);

// login button
document
  .querySelector("#login-submit")
  .addEventListener("submit", loginHandler);

