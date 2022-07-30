let submitBtn = document.querySelector("button");
let lists = document.querySelectorAll("ul li");

lists.forEach((e) => {
  e.addEventListener("click", (e) => {
    lists.forEach((e) => e.classList.remove("active"));
    e.currentTarget.classList.add("active");
  });
});

let mainCard = document.querySelector(".card");
let popUpBox = document.querySelector(".pop-up-box");
let generateMsg = document.querySelector(".generate-msg p span");

submitBtn.addEventListener("click", () => {
  lists.forEach((e) => {
    if (e.classList.contains("active")) {
      generateMsg.textContent = `${e.textContent} out of ${lists.length}`;
      mainCard.remove();
      popUpBox.classList.add("active");
    }
  });
});
