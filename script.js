const wrapper = document.getElementsByClassName(".wrapper");
const container = document.getElementsByClassName(".container");
const container111 = document.querySelector(".container111");
const peas = document.querySelector("#peas");
const peas1 = document.querySelector("#peas1");
const peas2 = document.querySelector("#peas2");
const input = document.querySelector(".container-input");
const save = document.querySelector(".save");
const refreshIcon = document.querySelector('#refreshIcon');
peas.addEventListener("click", () => {
  container111.style.display = "flex";
});

peas1.addEventListener("click", () => {
  container111.style.display = "flex";
});

peas2.addEventListener("click", () => {
  container111.style.display = "flex";
});

function showInput(element) {
  container111.style.display = "flex";
  currentElement = element;
  input.value = "";
  input.focus();
}

peas.addEventListener("click", () => showInput(peas));
peas1.addEventListener("click", () => showInput(peas1));
peas2.addEventListener("click", () => showInput(peas2));

save.addEventListener("click", () => {
  if (currentElement && input.value !== "") {
    currentElement.innerHTML = input.value;
    input.value = "";
    container111.style.display = "none";
  } else {
    alert("Iltimos, yangi qiymat kiriting!");
  }
});


refreshIcon.addEventListener('click', () => {
  peas.innerHTML = 'bar1';
  peas1.innerHTML = 'bar2';
  peas2.innerHTML = 'bar3';
  input.value = '';
  container111.style.display = 'none';
});