function updateToDoList() {
    //Get all the <li> elements in the list
    let items = document.getElementById("todoList").getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        let checkbox = items[i].getElementsByTagName("input")[0];

        if (checkbox.checked) {
            items[i].classList.add("completed");
        }  else {
            items [i].classList.remove("completed");
        }
    }
}