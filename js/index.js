const form = document.getElementById('formId');
const input = document.getElementById('inputId');
const todos = document.getElementById('todos');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const todo = input.value;
    if(todo){
        let todoLi = document.createElement('li');
        todoLi.innerText = todo;

        todoLi.addEventListener('click', (c) =>{
            todoLi.classList.toggle('completed');
    })

        todoLi.addEventListener('contextmenu', (r) => {
            r.preventDefault();
            todoLi.remove()
        })
        todos.appendChild(todoLi);
        input.value = "";

    }
    
    
})