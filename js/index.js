const buttonToogle = document.querySelector(".btn-toggle");
const menu = document.querySelector("header nav");
const ul = menu.querySelector("ul");
const body = document.querySelector("body");

const brand = document.createElement("div");
brand.classList.add("brand");
brand.innerHTML = `
        <a href="./index.html">
          <img src="image/logo.svg" alt="brand rachi" />
        </a>
`;
brand.style.padding = "2rem";

buttonToogle.addEventListener("click", () => {
  if (menu.style.display == "block") {
    menu.style.display = "none";
    buttonToogle.innerHTML = `<i class="bi bi-list"></i>`;
    body.style.overflowY = "auto";
  } else {
    menu.classList.add("active");
    menu.style.display = "block";
    menu.insertBefore(brand, ul);
    buttonToogle.innerHTML = `<i class="bi bi-x-lg"></i>`;
    body.style.overflowY = "hidden";
  }
});
