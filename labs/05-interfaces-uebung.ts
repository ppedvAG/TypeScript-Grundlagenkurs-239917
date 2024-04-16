/* 
Übung 2.

Holen Sie von der Seite http://jsonplaceholder.typicode.com/
alle Todos mit dem Code

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))

Die geholten Daten müssen einem Array mit Elementen von einem vorgegebenen Interfacetyp entsprechen.

Geben Sie die Titel der Todos in einer Liste aus.
*/

interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  // .then(json => console.log(json))
  .then(json => giveTodoTitlesToList(json))

const ulTodosList = document.getElementById('todosList');

function giveTodoTitlesToList(todos: Todo[]): void {
    for (const todo of todos) {
        ulTodosList!.innerHTML += `<li>${todo.title}</li>`;
    }
}