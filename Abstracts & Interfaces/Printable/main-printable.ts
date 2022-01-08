import { Domino } from './domino';
import { Todo } from './todo';

let domino1 = new Domino(1, 5);
let domino2 = new Domino(2, 8);
let dominoes: Domino[] = [];
dominoes.push(domino1, domino2);

let todo1 = new Todo('Do all homework', 'high', false);
let todo2 = new Todo('Finish printable HW', 'high', true);
let todos: Todo[] = [];
todos.push(todo1, todo2);

for (let domino of dominoes) {
  console.log(domino.printAllFields());
}

for (let todo of todos) {
  console.log(todo.printAllFields());
}
