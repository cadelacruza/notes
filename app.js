const title = document.querySelector("#title");
const nota = document.querySelector("#note");
const colorBtn = document.querySelector("#color-m");
const addBtn = document.querySelector("#add");
const main = document.getElementById("main");

addBtn.addEventListener("click", addItem);
main.addEventListener("input", changeColor);
document.querySelector("body").addEventListener("click", removeItem);

function addItem(e) {
  let titulo = title.value;
  let text = nota.value;
  let color = colorBtn.value;

  let div = document.createElement("div");
  div.className = "nota";

  let h2 = document.createElement("h2");
  h2.textContent = titulo;

  div.appendChild(h2);

  let p = document.createElement("p");
  p.textContent = text;
  p.className = "nota-content";

  let divBtn = document.createElement("div");
  divBtn.className = "botones-nota";

  let colorB = document.createElement("input");
  colorB.setAttribute("type", "color");
  colorB.className = "color";
  colorB.setAttribute("title", "Set Color");

  let borrar = document.createElement("button");
  borrar.className = "delete";
  borrar.setAttribute("title", "Delete item");

  let icon = document.createElement("i");
  icon.className = "fas fa-trash icon";

  borrar.appendChild(icon);

  divBtn.appendChild(colorB);
  divBtn.appendChild(borrar);

  div.appendChild(p);
  div.style.backgroundColor = color;
  div.appendChild(divBtn);

  let parent = document.querySelector("main");
  parent.appendChild(div);
  e.preventDefault();
}

function changeColor(e) {
  let parent = e.target.parentElement.parentElement;
  parent.style.backgroundColor = e.target.value;
  e.preventDefault();
}

function removeItem(e) {
  if (e.target.classList.contains("icon")) {
    if (confirm("There is no going back")) {
      let item = e.target.parentElement.parentElement.parentElement;
      main.removeChild(item);
    }
  }
}
