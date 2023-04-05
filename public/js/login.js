const loginHandler = async (event) => {
  event.preventDefault();

  // get user info
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // validate info
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // send to homepage if successful
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }
}