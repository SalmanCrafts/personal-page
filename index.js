function copyEmail() {
  let inputElement = "salmandev.vlr@gmail.com";
  navigator.clipboard
    .writeText(inputElement)
    .then(() => {
      alert("Email address copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
document.getElementById("email").addEventListener("click", copyEmail);
document.getElementById("ftemail").addEventListener("click", copyEmail);
document.getElementById("ftnum").addEventListener("click", () => {
  let inputnum = 8220227639;
  navigator.clipboard
    .writeText(inputnum)
    .then(() => {
      alert("Phone Number Copied to Clipboard!");
    })
    .catch((err) => {
      console.error("Failed to Copy: ", err);
    });
});
