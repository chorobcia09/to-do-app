function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Wpisz treść zadania!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Usuń";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
