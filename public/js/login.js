const loginHandler = async (event) => {
  event.preventDefault();

  const email = document
    .querySelector(/*add ID from handlebars document*/)
    .value.trim();
  const password = document
    .querySelector(/*add ID from handlebars document*/)
    .value.trim();

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

    const name = document.querySelector(/*add ID from handlebars document*/).value.trim();
    const email = document.querySelector(/*add ID from handlebars document*/).value.trim();
    const password = document.querySelector(/*add ID from handlebars document*/).value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector(/*add login form id here*/).addEventListener('submit', loginHandler);
document.querySelector(/*add signup form id here*/).addEventListener('submit', signupHandler);
