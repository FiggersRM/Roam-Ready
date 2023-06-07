const loginHandler = async (event) => {
  event.preventDefault();

  let email = document
    .querySelector("#email-login")
    .value.trim();
  const password = document
    .querySelector("#password-login")
    .value.trim();
    console.log(email)
    console.log(password)

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json " },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const signupHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener('click', loginHandler);
signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener('click', signupHandler);
