

document.addEventListener("DOMContentLoaded", () => {
  const mode = process.env.ACME_PUBLIC_MODE;
  const small = document.querySelector("h1 small")
  if(small) small.textContent = mode;
});