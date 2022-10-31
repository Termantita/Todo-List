export class Todo {

    static fromJson({title, id, createdAt, done}) {
        const tempTodo = new Todo(title);
        tempTodo.id = id;
        tempTodo.createdAt = createdAt;
        tempTodo.done = done;
        return tempTodo;
    }

    constructor(title) {
        this.title = title;
        this.id = new Date().getTime();
        this.createdAt = new Date();
        this.done = false;
    }
}