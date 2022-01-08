import { Printable } from './printable';

export class Todo implements Printable {
  task: string;
  priority: string;
  done: boolean;
  todos: Todo[];
  constructor(task: string, priority: string, done: boolean) {
    this.task = task;
    this.priority = priority;
    this.done = done;
    this.todos = [];
  }
  printAllFields(): string {
    return `Task: ${this.task} | Priority: ${this.priority} | Done: ${this.done}`;
  }

  addTodos(todo: Todo): void {
    this.todos.push(todo);
  }
}
