import ToDo from "./ToDo.js";

export default class ToDoList {
  constructor(todos = []) {
    this.todos = todos.map((item) => new ToDo(item));
  }

  addToDo(title) {
    const toDo = new ToDo({
      title,
      completed: false,
    });
    this.todos.push(toDo);
  }

  removeToDo(id) {
    const index = this.todos.find((item) => item.id === id);
    if(index !== -1 ) {
        this.todos.splice(index, 1);
    }
  }
  updateToDo(id, newTitle) {
    const todo = this.todos.find((item) => item.id === id);
    todo.title = newTitle;
  }
  toggle(id) {
    const todo = this.todos.find((item) => item.id === id);
    todo.completed = !todo.completed;
  }
}
