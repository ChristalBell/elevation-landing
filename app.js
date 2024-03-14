const onSubmit = () => {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const info = [firstName, lastName, email];

  info.forEach((input) => {
    if (input.value === "") {
      document.getElementById("visibility").style.visibility = "visible";
      document.getElementById("visibility").classList.add("error-message");
      input.classList.add("error");
    }
  });
};
