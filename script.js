function addTask() {
    let task = document.getElementById("task").value;
    if (task == "") {
        alert("Enter a task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = task +
        ' <button onclick="this.parentElement.remove()">Delete</button>';
        document.getElementById("list").appendChild(li);
        document.getElementById("task").value = "";
    }
}
