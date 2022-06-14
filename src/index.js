document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    createToDo(e.target.new_task_description.value)
    form.reset()
  })
  
});
 function createToDo(todo){
   let li = document.createElement('li');
   let deletebtn = document.createElement('button');
   deletebtn.addEventListener('click',deleteTodo)
   deletebtn.textContent = 'done'
   li.textContent = `${todo} `;
   li.appendChild(deletebtn);
   console.log(li)
  
   document.querySelector('#tasks').appendChild(li)
 }
  function deleteTodo(e){
    e.target.parentNode.remove()
  }