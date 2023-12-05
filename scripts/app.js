document.addEventListener("DOMContentLoaded", () => {

    let loadButton = document.getElementById("loadButton");
    loadButton.addEventListener("click", loadUsers);

    let userSelect = document.getElementById("userSelect");
    userSelect.addEventListener("change", displayUserInfo);
})

function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/todos")
               .then(response => response.json())
               .then(todos => {
                    console.log(todos)

                    let userSelect = document.getElementById("userSelect")

                    todos.forEach(todo => {
                        let option = new Option(todo.title, todo.id, todo.completed)
                        userSelect.appendChild(option)
                    });
                })
}

function displayUserInfo() {
    let userSelect = document.getElementById("userSelect")
    let id = userSelect.value

    let url = `https://jsonplaceholder.typicode.com/todos/${id}`


    let details = document.getElementById("details")
    details.innerHTML = ""

    fetch(url).then(response => response.json())
              .then(todo => {
                // display the info

                let title = document.createElement("h1")
                title.innerText = todo.title + " " + todo.id + " " + todo.completed;
                details.appendChild(title)
              })

}