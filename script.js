let inputBox = document.getElementById("input-box");
let listTask = document.getElementById("list-task");

function addTask() {
  if (inputBox.value === "") {
    alert("write your Task please !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listTask.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u2297";
    li.appendChild(span);
  }
  inputBox.value = "";
  savaData();
}

listTask.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savaData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savaData();
    }
  },
  false
);

//sava the data even with refresh

function savaData() {
  localStorage.setItem("data", listTask.innerHTML);
}

function showTask() {
  listTask.innerHTML = localStorage.getItem("data");
}

showTask();
